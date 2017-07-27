/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from docs.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace docs.
 * @public
 */

goog.module('docs.incrementaldom');

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

var $templateAlias2 = Soy.getTemplate('Newsletter.incrementaldom', 'render');

var $templateAlias1 = Soy.getTemplate('Sidebar.incrementaldom', 'render');

var $templateAlias3 = Soy.getTemplate('Topbar.incrementaldom', 'render');


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ignored, opt_ijData) {
  ie_open('div', null, null,
      'class', 'main');
    ie_open('main', null, null,
        'class', 'content guide');
      ie_open('div', null, null,
          'class', 'docs');
        $topbar(opt_data, null, opt_ijData);
        $templateAlias1(opt_data, null, opt_ijData);
        ie_open('div', null, null,
            'class', 'sidebar-offset');
          var dyn14 = opt_data.content;
          if (typeof dyn14 == 'function') dyn14(); else if (dyn14 != null) itext(dyn14);
          $templateAlias2(null, null, opt_ijData);
        ie_close('div');
      ie_close('div');
    ie_close('main');
  ie_close('div');
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'docs.render';
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
  ie_open('nav', null, null,
      'class', 'topbar topbar-docs topbar-light topbar-large');
    $logo(opt_data, null, opt_ijData);
    $menu(opt_data, null, opt_ijData);
  ie_close('nav');
}
exports.topbar = $topbar;
if (goog.DEBUG) {
  $topbar.soyTemplateName = 'docs.topbar';
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
  $logo.soyTemplateName = 'docs.logo';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $menu(opt_data, opt_ignored, opt_ijData) {
  $templateAlias3({section: opt_data.site.index}, null, opt_ijData);
}
exports.menu = $menu;
if (goog.DEBUG) {
  $menu.soyTemplateName = 'docs.menu';
}

exports.render.params = ["content","page"];
exports.render.types = {"content":"any","page":"any"};
exports.topbar.params = [];
exports.topbar.types = {};
exports.logo.params = [];
exports.logo.types = {};
exports.menu.params = ["site"];
exports.menu.types = {"site":"any"};
templates = exports;
return exports;

});

class docs extends Component {}
Soy.register(docs, templates);
export { docs, templates };
export default templates;
/* jshint ignore:end */
