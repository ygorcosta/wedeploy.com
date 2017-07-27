// This file was automatically generated from add-config-file.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace ZuWar.
 * @public
 */

goog.module('ZuWar.incrementaldom');

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
  var param3278 = function() {
    ie_open('h4');
      itext('Add wedeploy.json');
    ie_close('h4');
    ie_open('p');
      itext('It is not mandatory to include a ');
      ie_open('code');
        itext('wedeploy.json');
      ie_close('code');
      itext(' in this project because we will automatically detect that you are trying to deploy static files, but just so you can see what the inside of a ');
      ie_open('code');
        itext('wedeploy.json');
      ie_close('code');
      itext(' is, let\'s add one.');
    ie_close('p');
    ie_open('ol');
      ie_open('li');
        itext('Open the ');
        ie_open('code');
          itext('tutorial-hosting');
        ie_close('code');
        itext(' folder in a code editor');
      ie_close('li');
      ie_open('li');
        itext('Create a new file named ');
        ie_open('code');
          itext('wedeploy.json');
        ie_close('code');
      ie_close('li');
      ie_open('li');
        itext('In that file, paste this code:');
      ie_close('li');
    ie_close('ol');
    $templateAlias2({code: '{\n    "id": "hosting",\n    "image": "wedeploy/hosting:beta"\n}', mode: 'application/json'}, null, opt_ijData);
    ie_open('p');
      itext('The ');
      ie_open('code');
        itext('id');
      ie_close('code');
      itext(' is completely customizable by you.');
    ie_close('p');
    ie_open('aside');
      ie_open('h6');
        ie_void('span', null, null,
            'class', 'icon-16-star');
        itext(' Pro Tip');
      ie_close('h6');
      ie_open('p');
        itext('Another thing you can do in your ');
        ie_open('code');
          itext('wedeploy.json');
        ie_close('code');
        itext(' file is add environment variables. There are many ways to use these; one example is to serve files in a different folder.');
      ie_close('p');
      $templateAlias2({code: '{\n    "id": "hosting",\n    "image": "wedeploy/hosting:beta",\n    "env": {\n        "WEDEPLOY_WEB_PATH": "/dist/"\n    }\n}', mode: 'application/json'}, null, opt_ijData);
      ie_open('p');
        itext('See the full list of ');
        ie_open('a', null, null,
            'href', 'http://wedeploy.com/docs/hosting/environment-variables.html',
            'target', '_blank');
          itext('Environment Variables for Hosting');
        ie_close('a');
        itext('.');
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
  $templateAlias1(soy.$$assignDefaults({content: param3278}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'ZuWar.render';
}
