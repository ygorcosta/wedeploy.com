// tooling
const path = require('path');
const sass = require('node-sass');

// postcss configuration
module.exports = (ctx) => ({
  map: ctx.options.map,
  plugins: [
    // sass compatibility
    postcssSass(),

    // future compatibility
    require('postcss-selector-matches')(),
    require('postcss-selector-not')(),
    require('postcss-replace-overflow-wrap')(),

    // backward compatibility
    require('postcss-svg')({
      dirs: [ path.join(process.cwd(), 'static/images')  ],
      svgo: true
    }),

    // backward compatibility
    require('autoprefixer')(),

    // compression
    require('postcss-discard-comments')(),
    require('cssnano')({
      preset: ['default', {
        discardComments: true,
        normalizeUrl: false,
        svgo: false
      }]
    }),
    compress()
  ]
});

// tooling
const postcss = require('postcss');

// plugin
const compress = postcss.plugin('postcss-discard-tested-duplicate-declarations', (opts) => (root) => {
  const testProp  = opts && 'testProp' in opts ? opts.testProp : (prop) => !/^:*-/.test(prop);
  const testValue = opts && 'testValue' in opts ? opts.testValue : (value) => !/(^var|^\s*-|\s+-\w+-)/.test(value);

  root.walkRules((rule) => {
    var propsMap = {};

    rule.nodes.slice(0).forEach((decl) => {
      if (testProp(decl.prop) && testValue(decl.value)) {
        const prevDecl = propsMap[decl.prop];

        if (prevDecl) {
          if (testValue(prevDecl.value)) {
            if (decl.import || !prevDecl.import) {
              prevDecl.remove();

              propsMap[decl.prop] = decl;
            } else {
              decl.remove();
            }
          }
        } else {
          propsMap[decl.prop] = decl;
        }
      }
    })
  });
});

// sass
const postcssSass = postcss.plugin(
  'postcss-sass',
  () => (css) => {
    const cssSourceInputFile = css.source && css.source.input && css.source.input.file ? css.source.input.file : 'index.css';

    return new Promise(
      // promise any sass error or result from the stringified css ast
      (resolve, reject) => sass.render(
        {
          file: cssSourceInputFile,
          indentType: 'tab',
          outFile: cssSourceInputFile,
          outputStyle: 'expanded',
          data: css.toString(),
          sourceMapContents: true,
          sourceMap: true
        },
        (error, result) => error ? reject(error) : resolve(result)
      )
    ).then(
      // promise the sass-transpiled css as a new ast
      result => postcss.parse(
        result.css.toString()
      )
    ).then(
      // replace the old ast with the new ast
      newcss => css.removeAll().append(...newcss.nodes)
    );
  }
);
