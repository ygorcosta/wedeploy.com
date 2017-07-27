/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from include-api-client.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace eGhbD.
 * @public
 */

goog.module('eGhbD.incrementaldom');

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

var $templateAlias1 = Soy.getTemplate('tutorial.incrementaldom', 'render');


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ignored, opt_ijData) {
  var param3817 = function() {
    ie_open('h4');
      itext('Include API Client');
    ie_close('h4');
    ie_open('p');
      itext('Before we can make any requests to send an email, we must connect the WeDeploy API Client.');
    ie_close('p');
    ie_open('p');
      itext('To do this, go to ');
      ie_open('code');
        itext('index.html');
      ie_close('code');
      itext(' in that ');
      ie_open('code');
        itext('hosting');
      ie_close('code');
      itext(' directory and include this script link at the bottom of the ');
      ie_open('code');
        itext('<body>');
      ie_close('code');
      itext(' element:');
    ie_close('p');
    $templateAlias2({code: '<script src="https://cdn.wedeploy.com/api/beta/wedeploy.js"><\/script>', mode: 'xml'}, null, opt_ijData);
    ie_open('input', null, null,
        'type', 'hidden',
        'value', opt_data.page.title);
    ie_close('input');
    ie_open('input', null, null,
        'type', 'hidden',
        'value', opt_data.site.title);
    ie_close('input');
  };
  $templateAlias1(soy.$$assignDefaults({content: param3817}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'eGhbD.render';
}

exports.render.params = ["page","site"];
exports.render.types = {"page":"any","site":"any"};
templates = exports;
return exports;

});

class eGhbD extends Component {}
Soy.register(eGhbD, templates);
export { eGhbD, templates };
export default templates;
/* jshint ignore:end */
