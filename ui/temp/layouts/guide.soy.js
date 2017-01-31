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

var $templateAlias2 = Soy.getTemplate('ElectricReadingProgress.incrementaldom', 'render');

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
  ie_open('header', null, null,
      'class', 'guide-header');
    ie_open('div', null, null,
        'class', 'container-hybrid');
      ie_open('h1', null, null,
          'class', 'guide-header-title');
        var dyn9 = opt_data.page.headerTitle;
        if (typeof dyn9 == 'function') dyn9(); else if (dyn9 != null) itext(dyn9);
        itext(' Guide');
      ie_close('h1');
    ie_close('div');
  ie_close('header');
  ie_open('div', null, null,
      'class', 'container-hybrid');
    ie_open('div', null, null,
        'class', 'docs-guide row');
      ie_open('div', null, null,
          'class', 'docs-content col-xs-16 col-md-9');
        var dyn10 = opt_data.content;
        if (typeof dyn10 == 'function') dyn10(); else if (dyn10 != null) itext(dyn10);
        $feedback(opt_data, null, opt_ijData);
      ie_close('div');
      ie_open('nav', null, null,
          'class', 'col-xs-16 col-md-offset-2 col-md-5');
        ie_open('div', null, null,
            'class', 'docs-nav-container');
          $templateAlias2({elementClasses: 'docs-nav'}, null, opt_ijData);
        ie_close('div');
      ie_close('nav');
    ie_close('div');
  ie_close('div');
  $newsletter(null, null, opt_ijData);
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
function $feedback(opt_data, opt_ignored, opt_ijData) {
  var $$temp;
  ie_open('div');
    ie_open('div', null, null,
        'class', 'guide-feedback');
      ie_open('p');
        itext('Was this section helpful?');
      ie_close('p');
      ie_open('button', null, null,
          'class', 'btn btn-accent guide-feedback-btn guide-feedback-btn-yes');
        itext('Yes');
      ie_close('button');
      ie_open('button', null, null,
          'class', 'btn btn-accent guide-feedback-btn guide-feedback-btn-no');
        itext('No');
      ie_close('button');
    ie_close('div');
    ie_open('div', null, null,
        'class', 'guide-github');
      ie_open('div', null, null,
          'class', 'guide-github-img');
        ie_void('span', null, null,
            'class', 'icon-16-github');
      ie_close('div');
      ie_open('div', null, null,
          'class', 'guide-github-text');
        ie_open('p');
          itext('Contribute on Github! ');
          ie_open('a', null, null,
              'href', (($$temp = opt_data.site.repo) == null ? '' : $$temp) + '/tree/master/' + opt_data.page.srcFilePath,
              'class', 'docs-github-link',
              'target', '_blank');
            itext('Edit this section');
          ie_close('a');
          itext('.');
        ie_close('p');
      ie_close('div');
    ie_close('div');
  ie_close('div');
}
exports.feedback = $feedback;
if (goog.DEBUG) {
  $feedback.soyTemplateName = 'guide.feedback';
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
  $menu.soyTemplateName = 'guide.menu';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $newsletter(opt_data, opt_ignored, opt_ijData) {
  ie_open('div', null, null,
      'class', 'newsletter');
    ie_open('div', null, null,
        'class', 'container-hybrid');
      ie_open('div', null, null,
          'class', 'row');
        ie_open('h2', null, null,
            'class', 'newsletter-subtitle');
          itext('Couldn\'t find what you want?');
        ie_close('h2');
        ie_open('p', null, null,
            'class', 'newsletter-description');
          itext('Don\'t worry, we\'re constantly working on improvements. Stay tuned!');
        ie_close('p');
        ie_open('form', null, null,
            'autocomplete', 'off',
            'class', 'row newsletter-form');
          ie_open('div', null, null,
              'class', 'col-md-7 col-md-offset-3 col-xs-16');
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
              'class', 'col-md-3 col-xs-16');
            ie_open('input', null, null,
                'class', 'btn btn-accent btn-block',
                'type', 'submit',
                'value', 'Submit');
            ie_close('input');
          ie_close('div');
        ie_close('form');
      ie_close('div');
    ie_close('div');
  ie_close('div');
}
exports.newsletter = $newsletter;
if (goog.DEBUG) {
  $newsletter.soyTemplateName = 'guide.newsletter';
}

exports.render.params = ["page","site"];
exports.render.types = {"page":"any","site":"any"};
exports.guide.params = ["page","content"];
exports.guide.types = {"page":"any","content":"any"};
exports.feedback.params = ["page","site"];
exports.feedback.types = {"page":"any","site":"any"};
exports.topbar.params = ["elementClasses"];
exports.topbar.types = {"elementClasses":"any"};
exports.logo.params = [];
exports.logo.types = {};
exports.menu.params = [];
exports.menu.types = {};
exports.newsletter.params = [];
exports.newsletter.types = {};
templates = exports;
return exports;

});

class guide extends Component {}
Soy.register(guide, templates);
export { guide, templates };
export default templates;
/* jshint ignore:end */
