// This file was automatically generated from get-started.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace TcvSI.
 * @public
 */

goog.module('TcvSI.incrementaldom');

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
  var param3808 = function() {
    ie_open('h4');
      itext('Get Started');
    ie_close('h4');
    ie_open('p');
      itext('Sending emails with WeDeploy is super easy. This tutorial will walk you through how to send an email in your app using the API Client and how to deploy your project with one terminal command.');
    ie_close('p');
    ie_open('h6');
      itext('What you\'ll need');
    ie_close('h6');
    ie_open('ul', null, null,
        'class', 'checklist');
      ie_open('li');
        ie_open('a', null, null,
            'href', 'https://console.wedeploy.com/signup',
            'target', '_blank');
          itext('A WeDeploy account');
        ie_close('a');
      ie_close('li');
      ie_open('li');
        itext('A code editor');
      ie_close('li');
    ie_close('ul');
    ie_open('h6');
      itext('What you\'ll do');
    ie_close('h6');
    ie_open('ul', null, null,
        'class', 'checklist');
      ie_open('li');
        itext('Clone a sample Git repository');
      ie_close('li');
      ie_open('li');
        itext('Add a configuration file');
      ie_close('li');
      ie_open('li');
        itext('Link the API client');
      ie_close('li');
      ie_open('li');
        itext('Add the API method');
      ie_close('li');
      ie_open('li');
        itext('Deploy the project');
      ie_close('li');
      ie_open('li');
        itext('Start sending emails');
      ie_close('li');
    ie_close('ul');
    ie_open('input', null, null,
        'type', 'hidden',
        'value', opt_data.page.title);
    ie_close('input');
    ie_open('input', null, null,
        'type', 'hidden',
        'value', opt_data.site.title);
    ie_close('input');
  };
  $templateAlias1(soy.$$assignDefaults({content: param3808}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'TcvSI.render';
}
