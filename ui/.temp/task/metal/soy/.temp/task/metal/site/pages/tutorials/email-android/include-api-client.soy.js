// This file was automatically generated from include-api-client.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace VqaKa.
 * @public
 */

goog.module('VqaKa.incrementaldom');

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
  var param3079 = function() {
    ie_open('h4');
      itext('Include API Client');
    ie_close('h4');
    ie_open('p');
      itext('Before we can make any requests to create or sign-in any users, we must connect the WeDeploy Android API Client.');
    ie_close('p');
    ie_open('p');
      itext('To do this, go to ');
      ie_open('code');
        itext('tutorial-email-android/app/tutorial-email-android/app/build.gradle');
      ie_close('code');
      itext(' and include this line inside the dependencies function of this file:');
    ie_close('p');
    $templateAlias2({code: 'compile \'com.wedeploy:com.wedeploy.android:beta-20170505\'', mode: 'text/x-groovy'}, null, opt_ijData);
    ie_open('p');
      itext('After doing this, you have to sync the project, after a few seconds you will see that the project is built correctly.');
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
  $templateAlias1(soy.$$assignDefaults({content: param3079}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'VqaKa.render';
}
