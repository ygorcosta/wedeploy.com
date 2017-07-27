// This file was automatically generated from main.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace main.
 * @public
 */

goog.module('main.incrementaldom');

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
var $import1 = goog.require('Topbar.incrementaldom');
var $templateAlias1 = $import1.render;


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
      $topbar(opt_data, null, opt_ijData);
      var dyn18 = opt_data.content;
      if (typeof dyn18 == 'function') dyn18(); else if (dyn18 != null) itext(dyn18);
    ie_close('main');
  ie_close('div');
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'main.render';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $topbar(opt_data, opt_ignored, opt_ijData) {
  opt_data = opt_data || {};
  ie_open('div', null, null,
      'id', 'topbar');
    ie_open('div', null, null,
        'class', 'col-xs-16 col-lg-14 col-lg-offset-1');
      ie_open('div', null, null,
          'class', 'row');
        ie_open('nav', null, null,
            'class', 'topbar topbar-large topbar-light');
          $logo(opt_data, null, opt_ijData);
          $menu(opt_data, null, opt_ijData);
        ie_close('nav');
      ie_close('div');
    ie_close('div');
  ie_close('div');
}
exports.topbar = $topbar;
if (goog.DEBUG) {
  $topbar.soyTemplateName = 'main.topbar';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $logo(opt_data, opt_ignored, opt_ijData) {
  ie_open('div', null, null,
      'class', 'topbar-logo');
    ie_open('a', null, null,
        'class', 'topbar-logo-link',
        'href', '/');
      ie_open('span', null, null,
          'class', 'wedeploy-logo');
        ie_open('span', null, null,
            'class', 'we-circle');
          ie_open('span', null, null,
              'class', 'we');
            itext('We');
          ie_close('span');
        ie_close('span');
        ie_open('span', null, null,
            'class', 'deploy');
          itext('Deploy\u2122');
        ie_close('span');
        ie_open('span', null, null,
            'class', 'liferay');
          itext('by Liferay');
        ie_close('span');
        ie_open('span', null, null,
            'class', 'alpha-container');
          ie_void('span', null, null,
              'class', 'arrow-up');
          ie_open('span', null, null,
              'class', 'alpha');
            itext('alpha');
          ie_close('span');
        ie_close('span');
      ie_close('span');
    ie_close('a');
  ie_close('div');
}
exports.logo = $logo;
if (goog.DEBUG) {
  $logo.soyTemplateName = 'main.logo';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $menu(opt_data, opt_ignored, opt_ijData) {
  $templateAlias1({section: opt_data.site.index}, null, opt_ijData);
}
exports.menu = $menu;
if (goog.DEBUG) {
  $menu.soyTemplateName = 'main.menu';
}
