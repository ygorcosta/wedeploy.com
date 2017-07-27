// This file was automatically generated from clone-sample-repo.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace KTEFj.
 * @public
 */

goog.module('KTEFj.incrementaldom');

/** @suppress {extraRequire} */
goog.require('soy');
/** @suppress {extraRequire} */
goog.require('soydata');
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
var $import1 = goog.require('ElectricCode.incrementaldom');
var $templateAlias2 = $import1.render;
var $import2 = goog.require('tutorial.incrementaldom');
var $templateAlias1 = $import2.render;


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ignored, opt_ijData) {
  var param3886 = function() {
    ie_open('h4');
      itext('Clone Sample Repo');
    ie_close('h4');
    ie_open('p');
      itext('First, you\'ll clone a sample repo that contains the necessary files and directories for deploying a site.');
    ie_close('p');
    ie_open('p');
      itext('To do this, run the command below in your terminal:');
    ie_close('p');
    $templateAlias2({code: 'git clone https://github.com/wedeploy/tutorial-ruby.git', mode: 'xml'}, null, opt_ijData);
    ie_open('p');
      itext('In this example, we\'ll use ');
      ie_open('a', null, null,
          'href', 'http://www.sinatrarb.com/');
        itext('Sinatra');
      ie_close('a');
      itext(' as our web framework. Don\'t worry if you\'ve never used this before, there\'s no need to learn or download anything.');
    ie_close('p');
    ie_open('aside');
      ie_open('h6');
        ie_void('span', null, null,
            'class', 'icon-16-star');
        itext(' Pro Tip');
      ie_close('h6');
      ie_open('p');
        itext('Every WeDeploy project follows a similar file structure by using JSON files to manage your project and service-level configurations.');
      ie_close('p');
      $templateAlias2({code: 'your-project\n\u251C\u2500\u2500 email\n\u2502   \u2514\u2500\u2500 wedeploy.json\n\u251C\u2500\u2500 ruby\n\u2502   \u251C\u2500\u2500 wedeploy.json\n\u2502   \u2514\u2500\u2500 app.rb\n\u2514\u2500\u2500 project.json', mode: 'xml'}, null, opt_ijData);
      ie_open('p');
        itext('Want to know more about ');
        ie_open('a', null, null,
            'href', '/docs/intro/configuration-files.html',
            'target', '_blank');
          itext('configuration files');
        ie_close('a');
        itext('?');
      ie_close('p');
    ie_close('aside');
    ie_open('input', null, null,
        'type', 'hidden',
        'value', opt_data.page.title);
    ie_close('input');
    ie_open('input', null, null,
        'type', 'hidden',
        'value', opt_data.site.title);
    ie_close('input');
  };
  $templateAlias1(soy.$$assignDefaults({content: param3886}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'KTEFj.render';
}
