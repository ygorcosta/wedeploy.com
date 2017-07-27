/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from index.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace dockerTutorials.
 * @public
 */

goog.module('dockerTutorials.incrementaldom');

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


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ignored, opt_ijData) {
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'dockerTutorials.render';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $soyweb(opt_data, opt_ignored, opt_ijData) {
  ie_open('!DOCTYPE', null, null,
      'html', '');
    ie_open('html', null, null,
        'lang', 'en');
      ie_open('head');
        ie_open('meta', null, null,
            'charset', 'UTF-8');
        ie_close('meta');
        ie_open('meta', null, null,
            'http-equiv', 'refresh',
            'content', '0; URL=\'/tutorials/docker/get-started.html\'');
        ie_close('meta');
      ie_close('head');
    ie_close('html');
  }
  exports.soyweb = $soyweb;
  if (goog.DEBUG) {
    $soyweb.soyTemplateName = 'dockerTutorials.soyweb';
  }

exports.render.params = [];
exports.render.types = {};
exports.soyweb.params = [];
exports.soyweb.types = {};
templates = exports;
return exports;

});

class dockerTutorials extends Component {}
Soy.register(dockerTutorials, templates);
export { dockerTutorials, templates };
export default templates;
/* jshint ignore:end */
