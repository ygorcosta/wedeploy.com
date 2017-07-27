/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from Topbar.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Topbar.
 * @hassoydeltemplate {ElectricNavigation.anchor.idom}
 * @public
 */

goog.module('Topbar.incrementaldom');

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

var $templateAlias1 = Soy.getTemplate('ElectricNavigation.incrementaldom', 'render');


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ignored, opt_ijData) {
  $templateAlias1({depth: 1, elementClasses: 'topbar-list', linkClasses: 'topbar-link', listItemClasses: 'topbar-item', anchorVariant: 'topbar', section: opt_data.section}, null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'Topbar.render';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function __deltemplate_s52_99ee0d1f(opt_data, opt_ignored, opt_ijData) {
  var $$temp;
  if (opt_data.page.url == '//console.wedeploy.com/signup') {
    ie_open('a', null, null,
        'class', 'btn btn-accent btn-sm get-started',
        'href', opt_data.page.url);
    } else if (opt_data.page.url == '//console.wedeploy.com/login') {
      ie_open('a', null, null,
          'class', 'topbar-link login',
          'href', opt_data.page.url);
      } else if (opt_data.page.url == '//chat.wedeploy.com/') {
        ie_open('a', null, null,
            'class', 'topbar-link',
            'target', '_blank',
            'href', opt_data.page.url);
        } else {
          ie_open('a', null, null,
              'class', 'topbar-link' + (opt_data.page.active ? ' active' : ''),
              'href', ($$temp = opt_data.page.redirect) == null ? opt_data.page.url : $$temp);
          }
          var dyn1 = opt_data.page.title;
          if (typeof dyn1 == 'function') dyn1(); else if (dyn1 != null) itext(dyn1);
        ie_close('a');
      }
      exports.__deltemplate_s52_99ee0d1f = __deltemplate_s52_99ee0d1f;
      if (goog.DEBUG) {
        __deltemplate_s52_99ee0d1f.soyTemplateName = 'Topbar.__deltemplate_s52_99ee0d1f';
      }
      soy.$$registerDelegateFn(soy.$$getDelTemplateId('ElectricNavigation.anchor.idom'), 'topbar', 0, __deltemplate_s52_99ee0d1f);

exports.render.params = ["section"];
exports.render.types = {"section":"any"};
templates = exports;
return exports;

});

class Topbar extends Component {}
Soy.register(Topbar, templates);
export { Topbar, templates };
export default templates;
/* jshint ignore:end */
