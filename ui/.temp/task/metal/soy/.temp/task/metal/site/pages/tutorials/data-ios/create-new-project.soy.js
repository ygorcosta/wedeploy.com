// This file was automatically generated from create-new-project.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace pCBLs.
 * @public
 */

goog.module('pCBLs.incrementaldom');

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
var $import1 = goog.require('tutorial.incrementaldom');
var $templateAlias1 = $import1.render;


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ignored, opt_ijData) {
  var param2517 = function() {
    ie_open('h4');
      itext('Create New Project');
    ie_close('h4');
    ie_open('p');
      itext('To begin, we will create a new WeDeploy project.');
    ie_close('p');
    ie_open('ol');
      ie_open('li');
        itext('Go to the ');
        ie_open('a', null, null,
            'href', 'https://console.wedeploy.com',
            'target', '_blank');
          itext('WeDeploy Console');
        ie_close('a');
      ie_close('li');
      ie_open('li');
        itext('Click on the ');
        ie_open('em');
          itext('New Project');
        ie_close('em');
        itext(' button');
      ie_close('li');
      ie_open('li');
        itext('Enter a ');
        ie_open('em');
          itext('Project ID');
        ie_close('em');
      ie_close('li');
      ie_open('li');
        itext('Click on the ');
        ie_open('em');
          itext('Create Project');
        ie_close('em');
        itext(' button');
      ie_close('li');
    ie_close('ol');
    ie_open('p');
      itext('The Project ID you entered is the ID you will use in place of all future ');
      ie_open('code');
        itext('<projectID>');
      ie_close('code');
      itext(' elements in this tutorial.');
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
  $templateAlias1(soy.$$assignDefaults({content: param2517}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'pCBLs.render';
}
