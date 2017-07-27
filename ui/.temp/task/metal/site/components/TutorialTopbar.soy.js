/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from TutorialTopbar.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace TutorialTopbar.
 * @public
 */

goog.module('TutorialTopbar.incrementaldom');

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
  ie_open('nav', null, null,
      'class', 'topbar' + (opt_data.elementClasses ? ' ' + opt_data.elementClasses : ''));
    ie_open('button', null, null,
        'class', 'btn btn-transparent btn-icon',
        'type', 'button',
        'data-onclick', 'openNavigationMenu');
      ie_void('span', null, null,
          'class', 'icon-16-menu');
    ie_close('button');
    if (opt_data.logo) {
      var dyn4 = opt_data.logo;
      if (typeof dyn4 == 'function') dyn4(); else if (dyn4 != null) itext(dyn4);
    }
    ie_open('h3', null, null,
        'class', 'topbar-logo-text');
      var dyn5 = ($$temp = opt_data.page.tutorialTitle) == null ? '' : $$temp;
      if (typeof dyn5 == 'function') dyn5(); else if (dyn5 != null) itext(dyn5);
    ie_close('h3');
    ie_open('div', null, null,
        'class', 'time-remaining');
      if (opt_data.page.timeRemaining) {
        ie_void('span', null, null,
            'class', 'icon icon-16-clock');
        ie_open('span', null, null,
            'class', 'name');
          var dyn6 = ($$temp = opt_data.page.timeRemaining) == null ? '' : $$temp;
          if (typeof dyn6 == 'function') dyn6(); else if (dyn6 != null) itext(dyn6);
        ie_close('span');
      }
    ie_close('div');
  ie_close('nav');
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'TutorialTopbar.render';
}

exports.render.params = ["elementClasses","logo","page"];
exports.render.types = {"elementClasses":"any","logo":"any","page":"any"};
templates = exports;
return exports;

});

class TutorialTopbar extends Component {}
Soy.register(TutorialTopbar, templates);
export { TutorialTopbar, templates };
export default templates;
/* jshint ignore:end */
