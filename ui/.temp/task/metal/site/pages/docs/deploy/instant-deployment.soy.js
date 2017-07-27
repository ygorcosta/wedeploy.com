/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from instant-deployment.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace USZvY.
 * @public
 */

goog.module('USZvY.incrementaldom');

/** @suppress {extraRequire} */
var soy = goog.require('soy');
/** @suppress {extraRequire} */
var soydata = goog.require('soydata');
/** @suppress {extraRequire} */
goog.require('goog.i18n.bidi');
/** @suppress {extraRequire} */
goog.require('goog.asserts');
/** @suppress {extraRequire} */
goog.require('goog.string');
var IncrementalDom = goog.require('incrementaldom');
var ie_open = IncrementalDom.elementOpen;
var ie_close = IncrementalDom.elementClose;
var ie_void = IncrementalDom.elementVoid;
var ie_open_start = IncrementalDom.elementOpenStart;
var ie_open_end = IncrementalDom.elementOpenEnd;
var itext = IncrementalDom.text;
var iattr = IncrementalDom.attr;

var $templateAlias2 = Soy.getTemplate('ElectricCode.incrementaldom', 'render');

var $templateAlias1 = Soy.getTemplate('guide.incrementaldom', 'render');


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ignored, opt_ijData) {
  var param1588 = function() {
    ie_open('h3');
      var dyn81 = opt_data.page.title;
      if (typeof dyn81 == 'function') dyn81(); else if (dyn81 != null) itext(dyn81);
    ie_close('h3');
    ie_open('h6');
      var dyn82 = opt_data.page.description;
      if (typeof dyn82 == 'function') dyn82(); else if (dyn82 != null) itext(dyn82);
    ie_close('h6');
    ie_open('article', null, null,
        'id', '1');
      ie_open('h2');
        itext('Download the CLI');
      ie_close('h2');
      ie_open('p');
        itext('In your terminal, run this command:');
      ie_close('p');
      $templateAlias2({code: 'curl https://cdn.wedeploy.com/cli/latest/wedeploy.sh -sL | bash', mode: 'text'}, null, opt_ijData);
      ie_open('p');
        itext('This will install our command-line interface which is a tool that will help you use the WeDeploy platform.');
      ie_close('p');
      ie_open('aside');
        ie_open('p');
          itext('The command above will only work for Unix-like systems such as macOS or Linux. If you use Windows, you should download the ');
          ie_open('a', null, null,
              'href', 'https://bin.equinox.io/c/8WGbGy94JXa/cli-stable-windows-amd64.msi');
            itext('Windows amd64 installer');
          ie_close('a');
          itext('.');
        ie_close('p');
      ie_close('aside');
    ie_close('article');
    ie_open('article', null, null,
        'id', '2');
      ie_open('h2');
        itext('Deploy instantly');
      ie_close('h2');
      ie_open('p');
        itext('Assuming you already have a project locally, now you just need to run:');
      ie_close('p');
      $templateAlias2({code: 'we deploy', mode: 'text'}, null, opt_ijData);
      ie_open('p');
        itext('This will immediately start uploading your files. Once that\'s finished, WeDeploy will start building and deploying your application. In the end, you\'ll be able to see it online in any browser.');
      ie_close('p');
      ie_open('aside');
        ie_open('p');
          itext('If you don\'t have a project ready to deploy, you can download this ');
          ie_open('a', null, null,
              'href', 'https://github.com/wedeploy/boilerplate-hosting/archive/master.zip');
            itext('simple project');
          ie_close('a');
          itext(' and run the ');
          ie_open('code');
            itext('we deploy');
          ie_close('code');
          itext(' command inside that folder.');
        ie_close('p');
      ie_close('aside');
    ie_close('article');
    ie_open('h2');
      itext('What\'s next?');
    ie_close('h2');
    ie_open('p');
      itext('Being able to deploy instantaneously is great, but sometimes you want to trigger a deploy every time a push is made to GitHub. If that\'s your case, check the ');
      ie_open('a', null, null,
          'href', '/docs/deploy/continuous-deployment.html');
        itext('Continuous Deployment');
      ie_close('a');
      itext(' section.');
    ie_close('p');
    ie_open('input', null, null,
        'type', 'hidden',
        'value', opt_data.page.title);
    ie_close('input');
    ie_open('input', null, null,
        'type', 'hidden',
        'value', opt_data.site.title);
    ie_close('input');
  };
  $templateAlias1(soy.$$assignDefaults({content: param1588}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'USZvY.render';
}

exports.render.params = ["page","site"];
exports.render.types = {"page":"any","site":"any"};
templates = exports;
return exports;

});

class USZvY extends Component {}
Soy.register(USZvY, templates);
export { USZvY, templates };
export default templates;
/* jshint ignore:end */
