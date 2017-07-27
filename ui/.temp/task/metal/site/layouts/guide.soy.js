/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from guide.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace guide.
 * @public
 */

goog.module('guide.incrementaldom');

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

var $templateAlias3 = Soy.getTemplate('AffixedReadingProgress.incrementaldom', 'render');

var $templateAlias2 = Soy.getTemplate('Feedback.incrementaldom', 'render');

var $templateAlias4 = Soy.getTemplate('Newsletter.incrementaldom', 'render');

var $templateAlias1 = Soy.getTemplate('Sidebar.incrementaldom', 'render');

var $templateAlias5 = Soy.getTemplate('Topbar.incrementaldom', 'render');


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ignored, opt_ijData) {
  ie_open('div', null, null,
      'class', 'main guide');
    ie_open('main', null, null,
        'class', 'content');
      ie_open('div', null, null,
          'class', 'docs');
        $topbar(opt_data, null, opt_ijData);
        $templateAlias1({page: opt_data.site.index.children['docs']}, null, opt_ijData);
        ie_open('div', null, null,
            'class', 'sidebar-offset');
          $guide(opt_data, null, opt_ijData);
        ie_close('div');
      ie_close('div');
    ie_close('main');
  ie_close('div');
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'guide.render';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $guide(opt_data, opt_ignored, opt_ijData) {
  ie_open('header');
    ie_open('div', null, null,
        'class', 'container-hybrid');
      ie_open('h1', null, null,
          'class', 'title');
        var dyn15 = opt_data.page.headerTitle;
        if (typeof dyn15 == 'function') dyn15(); else if (dyn15 != null) itext(dyn15);
        itext(' Guide');
      ie_close('h1');
    ie_close('div');
  ie_close('header');
  ie_open('div', null, null,
      'class', 'container-hybrid');
    ie_open('div', null, null,
        'class', 'docs-guide row');
      ie_open('div', null, null,
          'class', 'docs-content col-xs-16 col-md-10 col-lg-offset-1 col-lg-9');
        ie_open('div', null, null,
            'class', 'guide-content');
          var dyn16 = opt_data.content;
          if (typeof dyn16 == 'function') dyn16(); else if (dyn16 != null) itext(dyn16);
        ie_close('div');
        $templateAlias2(opt_data, null, opt_ijData);
      ie_close('div');
      ie_open('nav', null, null,
          'class', 'col-xs-16 col-md-offset-1 col-md-5 col-lg-4');
        ie_open('div', null, null,
            'class', 'docs-nav-container');
          $templateAlias3({elementClasses: 'docs-nav topbar-is-fixed', offsetTop: 300, offsetBottom: 200}, null, opt_ijData);
        ie_close('div');
      ie_close('nav');
    ie_close('div');
  ie_close('div');
  $templateAlias4(null, null, opt_ijData);
}
exports.guide = $guide;
if (goog.DEBUG) {
  $guide.soyTemplateName = 'guide.guide';
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
  $topbar.soyTemplateName = 'guide.topbar';
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
  $logo.soyTemplateName = 'guide.logo';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $menu(opt_data, opt_ignored, opt_ijData) {
  $templateAlias5({section: opt_data.site.index}, null, opt_ijData);
}
exports.menu = $menu;
if (goog.DEBUG) {
  $menu.soyTemplateName = 'guide.menu';
}

exports.render.params = ["site"];
exports.render.types = {"site":"any"};
exports.guide.params = ["page","content"];
exports.guide.types = {"page":"any","content":"any"};
exports.topbar.params = [];
exports.topbar.types = {};
exports.logo.params = [];
exports.logo.types = {};
exports.menu.params = ["site"];
exports.menu.types = {"site":"any"};
templates = exports;
return exports;

});

class guide extends Component {}
Soy.register(guide, templates);
export { guide, templates };
export default templates;
/* jshint ignore:end */
