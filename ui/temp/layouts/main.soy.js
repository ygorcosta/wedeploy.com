/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from main.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace main.
 * @public
 */

goog.module('main.incrementaldom');

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
      $topbar(opt_data, null, opt_ijData);
      var dyn12 = opt_data.content;
      if (typeof dyn12 == 'function') dyn12(); else if (dyn12 != null) itext(dyn12);
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
  ie_open('nav', null, null,
      'class', 'topbar topbar-large topbar-light');
    $logo(opt_data, null, opt_ijData);
    $menu(opt_data, null, opt_ijData);
  ie_close('nav');
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
  opt_data = opt_data || {};
  ie_open('ul', null, null,
      'class', 'topbar-list');
    ie_open('li', null, null,
        'class', 'topbar-item');
      ie_open('a', null, null,
          'href', '/blog',
          'class', 'topbar-link' + (opt_data.currentPage == 'blog' ? ' topbar-link-selected' : ''));
        itext('Blog');
      ie_close('a');
    ie_close('li');
    ie_open('li', null, null,
        'class', 'topbar-item');
      ie_open('a', null, null,
          'href', '/docs',
          'class', 'topbar-link');
        itext('Documentation');
      ie_close('a');
    ie_close('li');
    ie_open('li', null, null,
        'class', 'topbar-item');
      ie_open('a', null, null,
          'href', '//chat.wedeploy.com/',
          'class', 'topbar-link');
        itext('Chat');
      ie_close('a');
    ie_close('li');
    ie_open('li', null, null,
        'class', 'topbar-item login');
      ie_open('a', null, null,
          'href', '//dashboard.wedeploy.com/login',
          'class', 'topbar-link');
        itext('Log in');
      ie_close('a');
    ie_close('li');
    ie_open('li', null, null,
        'class', 'topbar-item get-started');
      ie_open('a', null, null,
          'href', '//dashboard.wedeploy.com/signup',
          'class', 'btn btn-accent btn-sm');
        itext('Get Started');
      ie_close('a');
    ie_close('li');
  ie_close('ul');
}
exports.menu = $menu;
if (goog.DEBUG) {
  $menu.soyTemplateName = 'main.menu';
}

exports.render.params = ["content","currentPage","elementClasses"];
exports.render.types = {"content":"any","currentPage":"any","elementClasses":"any"};
exports.topbar.params = [];
exports.topbar.types = {};
exports.logo.params = [];
exports.logo.types = {};
exports.menu.params = ["currentPage"];
exports.menu.types = {"currentPage":"any"};
templates = exports;
return exports;

});

class main extends Component {}
Soy.register(main, templates);
export { main, templates };
export default templates;
/* jshint ignore:end */
