// This file was automatically generated from deploy-the-project.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Lvvio.
 * @public
 */

goog.module('Lvvio.incrementaldom');

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
  var param2377 = function() {
    ie_open('h4');
      itext('Deploy the Project');
    ie_close('h4');
    ie_open('p');
      itext('Now the moment you have been waiting for - deployment!');
    ie_close('p');
    ie_open('p');
      itext('Go to ');
      ie_open('code');
        itext('tutorial-auth-web');
      ie_close('code');
      itext(' in your terminal and deploy your project:');
    ie_close('p');
    $templateAlias2({code: 'we deploy --project projectID', mode: 'xml'}, null, opt_ijData);
    ie_open('p');
      ie_open('strong');
        itext('Note:');
      ie_close('strong');
      itext(' make sure to replace ');
      ie_open('code');
        itext('projectID');
      ie_close('code');
      itext(' with the id of your project.');
    ie_close('p');
    ie_open('aside');
      ie_open('h6');
        ie_void('span', null, null,
            'class', 'icon-16-star');
        itext(' Pro Tip');
      ie_close('h6');
      ie_open('p');
        itext('You can always check the status of your builds/deploys by going to the ');
        ie_open('em');
          itext('overview');
        ie_close('em');
        itext(' section of your project\'s ');
        ie_open('a', null, null,
            'href', 'https://console.wedeploy.com',
            'target', '_blank');
          itext('Console');
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
  $templateAlias1(soy.$$assignDefaults({content: param2377}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'Lvvio.render';
}
