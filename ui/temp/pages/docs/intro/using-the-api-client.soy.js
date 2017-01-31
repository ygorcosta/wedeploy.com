/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from using-the-api-client.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace docsIntroUsingTheApiClientHtml.
 * @public
 */

goog.module('docsIntroUsingTheApiClientHtml.incrementaldom');

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
  opt_data = opt_data || {};
  var param971 = function() {
    ie_open('h1');
      itext('Using the API Client');
    ie_close('h1');
    ie_open('h6');
      itext('Make requests to WeDeploy using a standardize interface.');
    ie_close('h6');
    ie_open('article', null, null,
        'id', 'article_1');
      ie_open('h2');
        itext('Installation');
      ie_close('h2');
      ie_open('p');
        itext('In order to send/receive requests to/from WeDeploy, we need to include the JavaScript API Client. This library provides a secure and reliable communication channel with WeDeploy. We can do that by simply adding a script tag in a HTML file:');
      ie_close('p');
      $templateAlias2({code: '<script src="http://cdn.wedeploy.com/api/latest/wedeploy.js"><\/script>', mode: 'xml'}, null, opt_ijData);
    ie_close('article');
  };
  $templateAlias1(soy.$$assignDefaults({content: param971}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'docsIntroUsingTheApiClientHtml.render';
}

exports.render.params = [];
exports.render.types = {};
templates = exports;
return exports;

});

class docsIntroUsingTheApiClientHtml extends Component {}
Soy.register(docsIntroUsingTheApiClientHtml, templates);
export { docsIntroUsingTheApiClientHtml, templates };
export default templates;
/* jshint ignore:end */
