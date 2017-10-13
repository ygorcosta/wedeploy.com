module.exports = (ctx) => ({
  map: ctx.options.map,
  plugins: [
    // css imports
    require('postcss-import')(),

    // future compatibility
    require('postcss-custom-properties')(),
    require('postcss-selector-matches')(),
    require('postcss-logical')(),
    require('postcss-nesting')(),
    require('postcss-extend-rule')(),
    require('postcss-media-fn')(),
    require('postcss-custom-media')(),
    require('postcss-media-minmax')(),
    require('postcss-custom-selectors')(),
    require('postcss-color-hex-alpha')(),
    require('postcss-color-function')(),
    require('postcss-selector-matches')(),
    require('postcss-selector-not')(),
    require('postcss-pseudo-class-any-link')(),
    require('postcss-dir-pseudo-class')(),
    require('postcss-replace-overflow-wrap')(),
    require('postcss-size')(),

    // backward compatibility
    require('postcss-svg')({
      dirs: [ '../static/styles', '../../static/styles' ],
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
