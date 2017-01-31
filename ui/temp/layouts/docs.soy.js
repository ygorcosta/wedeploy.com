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

var $templateAlias1 = Soy.getTemplate('SideBar.incrementaldom', 'render');


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
        $topbar(soy.$$assignDefaults({elementClasses: 'topbar-docs-main'}, opt_data), null, opt_ijData);
        $templateAlias1({section: opt_data.site.index.children[1]}, null, opt_ijData);
        ie_open('div', null, null,
            'class', 'sidebar-offset');
          $topbar(opt_data, null, opt_ijData);
          var dyn8 = opt_data.content;
          if (typeof dyn8 == 'function') dyn8(); else if (dyn8 != null) itext(dyn8);
          $subscribe(null, null, opt_ijData);
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
function $subscribe(opt_data, opt_ignored, opt_ijData) {
  ie_open('div', null, null,
      'class', 'newsletter');
    ie_open('div', null, null,
        'class', 'container-hybrid');
      ie_open('div', null, null,
          'class', 'row');
        ie_open('div', null, null,
            'class', 'col-xs-14 col-xs-offset-1');
          ie_open('span', null, null,
              'class', 'newsletter-avatar');
            ie_void('span', null, null,
                'class', 'icon-16-mail');
          ie_close('span');
          ie_open('h2', null, null,
              'class', 'newsletter-subtitle');
            itext('Subscribe to WeDeploy News');
          ie_close('h1');
          ie_open('p', null, null,
              'class', 'newsletter-description');
            itext('Stay up to date with new features that will help you develop better apps.');
          ie_close('p');
        ie_close('div');
        ie_open('form', null, null,
            'autocomplete', 'off',
            'class', 'row newsletter-form');
          ie_open('div', null, null,
              'class', 'col-md-7 col-md-offset-3 col-xs-14 col-xs-offset-1');
            ie_open('div', null, null,
                'class', 'form-group');
              ie_open('input', null, null,
                  'class', 'form-control',
                  'name', 'email',
                  'type', 'email',
                  'placeholder', 'Your email address',
                  'required', '');
              ie_close('input');
            ie_close('div');
          ie_close('div');
          ie_open('div', null, null,
              'class', 'col-md-3 col-md-offset-0 col-xs-14 col-xs-offset-1');
            ie_open('input', null, null,
                'class', 'btn btn-accent btn-block',
                'type', 'submit',
                'value', 'Subscribe');
            ie_close('input');
          ie_close('div');
        ie_close('form');
      ie_close('div');
    ie_close('div');
  ie_close('div');
}
exports.subscribe = $subscribe;
if (goog.DEBUG) {
  $subscribe.soyTemplateName = 'docs.subscribe';
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
      'class', 'topbar topbar-light topbar-large' + (opt_data.elementClasses ? ' ' + opt_data.elementClasses : ''));
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
  ie_open('ul', null, null,
      'class', 'topbar-list');
    ie_open('li', null, null,
        'class', 'topbar-item');
      ie_open('a', null, null,
          'href', '/blog',
          'class', 'topbar-link');
        itext('Blog');
      ie_close('a');
    ie_close('li');
    ie_open('li', null, null,
        'class', 'topbar-item');
      ie_open('a', null, null,
          'href', '/docs',
          'class', 'topbar-link topbar-link-selected');
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
  $menu.soyTemplateName = 'docs.menu';
}

exports.render.params = ["content","site"];
exports.render.types = {"content":"any","site":"any"};
exports.subscribe.params = [];
exports.subscribe.types = {};
exports.topbar.params = ["elementClasses"];
exports.topbar.types = {"elementClasses":"any"};
exports.logo.params = [];
exports.logo.types = {};
exports.menu.params = [];
exports.menu.types = {};
templates = exports;
return exports;

});

class docs extends Component {}
Soy.register(docs, templates);
export { docs, templates };
export default templates;
/* jshint ignore:end */
