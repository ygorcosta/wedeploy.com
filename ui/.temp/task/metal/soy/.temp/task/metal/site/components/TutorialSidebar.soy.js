// This file was automatically generated from TutorialSidebar.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace TutorialSidebar.
 * @hassoydeltemplate {ElectricNavigation.anchor.idom}
 * @public
 */

goog.module('TutorialSidebar.incrementaldom');

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
var $import1 = goog.require('ElectricNavigation.incrementaldom');
var $templateAlias1 = $import1.render;


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ignored, opt_ijData) {
  ie_open('div', null, null,
      'class', 'sidebar-navigation' + (opt_data.navigationToggler ? ' open' : ''));
    ie_void('div', null, null,
        'class', 'sidebar-navigation-fade',
        'data-onclick', 'closeNavigationMenu');
    ie_open('nav', null, null,
        'class', 'sidebar');
      $templateAlias1({elementClasses: 'sidebar-list', listItemClasses: 'sidebar-item', anchorVariant: 'tutorial', section: opt_data.page}, null, opt_ijData);
    ie_close('nav');
  ie_close('div');
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'TutorialSidebar.render';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function __deltemplate_s85_88c0813b(opt_data, opt_ignored, opt_ijData) {
  ie_open('a', null, null,
      'class', 'sidebar-link' + (opt_data.page.active ? ' sidebar-link-selected' : ''),
      'href', opt_data.page.url,
      'data-time', opt_data.page.time);
    ie_void('span', null, null,
        'class', 'before');
    ie_open('span', null, null,
        'class', 'tutorial-step');
      var dyn2 = opt_data.page.weight;
      if (typeof dyn2 == 'function') dyn2(); else if (dyn2 != null) itext(dyn2);
    ie_close('span');
    ie_open('span', null, null,
        'class', 'section-title');
      var dyn3 = opt_data.page.title;
      if (typeof dyn3 == 'function') dyn3(); else if (dyn3 != null) itext(dyn3);
    ie_close('span');
    ie_void('span', null, null,
        'class', 'after');
  ie_close('a');
}
exports.__deltemplate_s85_88c0813b = __deltemplate_s85_88c0813b;
if (goog.DEBUG) {
  __deltemplate_s85_88c0813b.soyTemplateName = 'TutorialSidebar.__deltemplate_s85_88c0813b';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('ElectricNavigation.anchor.idom'), 'tutorial', 0, __deltemplate_s85_88c0813b);
