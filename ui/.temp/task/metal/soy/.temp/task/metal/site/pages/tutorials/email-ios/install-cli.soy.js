// This file was automatically generated from install-cli.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace ceZzZ.
 * @public
 */

goog.module('ceZzZ.incrementaldom');

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
  var param3241 = function() {
    ie_open('h4');
      itext('Install CLI');
    ie_close('h4');
    ie_open('h5');
      itext('Download');
    ie_close('h5');
    ie_open('p');
      itext('The WeDeploy CLI allows you to do many things with your projects like show logs, analyze metrics, manage domains, and most importantly, deploy.');
    ie_close('p');
    $templateAlias2({code: 'curl http://cdn.wedeploy.com/cli/beta/wedeploy.sh -sL | bash', mode: 'xml'}, null, opt_ijData);
    ie_open('h5');
      itext('Login');
    ie_close('h5');
    ie_open('p');
      itext('Now open your terminal and login to your WeDeploy account:');
    ie_close('p');
    $templateAlias2({code: 'we login', mode: 'xml'}, null, opt_ijData);
    ie_open('input', null, null,
        'type', 'hidden',
        'value', opt_data.page.title);
    ie_close('input');
    ie_open('input', null, null,
        'type', 'hidden',
        'value', opt_data.site.title);
    ie_close('input');
  };
  $templateAlias1(soy.$$assignDefaults({content: param3241}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'ceZzZ.render';
}
