/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from tutorial.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace tutorial.
 * @public
 */

goog.module('tutorial.incrementaldom');

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
  var $$temp;
  ie_open('div', null, null,
      'class', ($$temp = opt_data.elementClasses) == null ? 'main' : $$temp);
    ie_open('main', null, null,
        'class', 'content');
      var dyn14 = opt_data.content;
      if (typeof dyn14 == 'function') dyn14(); else if (dyn14 != null) itext(dyn14);
    ie_close('main');
  ie_close('div');
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'tutorial.render';
}

exports.render.params = ["content","elementClasses"];
exports.render.types = {"content":"any","elementClasses":"any"};
templates = exports;
return exports;

});

class tutorial extends Component {}
Soy.register(tutorial, templates);
export { tutorial, templates };
export default templates;
/* jshint ignore:end */
