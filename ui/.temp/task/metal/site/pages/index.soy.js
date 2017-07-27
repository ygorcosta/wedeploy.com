/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from index.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace pageIndex.
 * @public
 */

goog.module('pageIndex.incrementaldom');

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

var $templateAlias1 = Soy.getTemplate('landing.incrementaldom', 'render');


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ignored, opt_ijData) {
  opt_data = opt_data || {};
  var param304 = function() {
    $view_1(opt_data, null, opt_ijData);
    $view_3_1(opt_data, null, opt_ijData);
    $view_3_2(opt_data, null, opt_ijData);
    $view_4(opt_data, null, opt_ijData);
    $view_6(opt_data, null, opt_ijData);
  };
  $templateAlias1(soy.$$assignDefaults({content: param304}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'pageIndex.render';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $view_1(opt_data, opt_ignored, opt_ijData) {
  opt_data = opt_data || {};
  ie_open('div', null, null,
      'id', 'view-1');
    ie_open('div', null, null,
        'class', 'container-wedeploy');
      ie_open('div', null, null,
          'id', 'view-1__container');
        $subscribe(opt_data, null, opt_ijData);
        $terminal(opt_data, null, opt_ijData);
      ie_close('div');
    ie_close('div');
  ie_close('div');
}
exports.view_1 = $view_1;
if (goog.DEBUG) {
  $view_1.soyTemplateName = 'pageIndex.view_1';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $view_3_1(opt_data, opt_ignored, opt_ijData) {
  ie_open('div', null, null,
      'id', 'view-3__1');
    ie_open('div', null, null,
        'class', 'container-wedeploy');
      ie_open('div', null, null,
          'class', 'info-box');
        ie_open('div', null, null,
            'class', 'info-box__container');
          ie_open('p', null, null,
              'class', 'top-title');
            itext('Microservices');
          ie_close('p');
          ie_open('h3');
            itext('Built-in APIs that can help you create modern apps faster.');
          ie_close('h3');
          ie_open('p');
            itext('We provide a set of ready-to-use services that enables you to store data in the cloud, search and stream content in realtime, authenticate users, send emails to your users, and so much more.');
          ie_close('p');
        ie_close('div');
      ie_close('div');
      ie_open('div', null, null,
          'class', 'bg-text');
        ie_void('div', null, null,
            'class', 'bg-text__solid');
        ie_void('div', null, null,
            'class', 'bg-text__gradient');
      ie_close('div');
      ie_void('div', null, null,
          'class', 'info-img');
    ie_close('div');
  ie_close('div');
}
exports.view_3_1 = $view_3_1;
if (goog.DEBUG) {
  $view_3_1.soyTemplateName = 'pageIndex.view_3_1';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $view_3_2(opt_data, opt_ignored, opt_ijData) {
  ie_open('div', null, null,
      'id', 'view-3__2');
    ie_open('div', null, null,
        'class', 'container-wedeploy');
      ie_open('div', null, null,
          'class', 'info-box');
        ie_open('div', null, null,
            'class', 'info-box__container flex-center-top');
          ie_open('p', null, null,
              'class', 'top-title');
            itext('Containers');
          ie_close('p');
          ie_open('h3');
            itext('Your favorite stack in the cloud in just a few clicks.');
          ie_close('h3');
          ie_open('p');
            itext('Choose between dozens of languages, frameworks, or entire application stacks. Launch production-ready environments in a matter of minutes.');
          ie_close('p');
        ie_close('div');
      ie_close('div');
      ie_open('div', null, null,
          'class', 'bg-text');
        ie_void('div', null, null,
            'class', 'bg-text__solid');
        ie_void('div', null, null,
            'class', 'bg-text__gradient');
      ie_close('div');
      ie_void('div', null, null,
          'class', 'info-img');
    ie_close('div');
  ie_close('div');
}
exports.view_3_2 = $view_3_2;
if (goog.DEBUG) {
  $view_3_2.soyTemplateName = 'pageIndex.view_3_2';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $view_4(opt_data, opt_ignored, opt_ijData) {
  ie_open('div', null, null,
      'id', 'view-4');
    ie_open('div', null, null,
        'class', 'container-wedeploy');
      ie_open('div', null, null,
          'id', 'view-4__giant',
          'class', 'giant');
        ie_open('span');
          itext('We');
        ie_close('span');
      ie_close('div');
      ie_open('div', null, null,
          'class', 'text-center');
        ie_open('h2');
          itext('Carefully designed features');
        ie_close('h2');
      ie_close('div');
      ie_open('div', null, null,
          'class', 'text-center');
        ie_open('h4');
          itext('Empowering you to build amazing apps.');
        ie_close('h4');
      ie_close('div');
      ie_open('ul', null, null,
          'id', 'features-container',
          'class', 'flex-center-top');
        var features__soy322 = [{icon: 'icon_data.svg', hasWeIcon: true, title: 'WeDeploy Data', description: 'Store data securely with a NoSQL cloud database. Make complex queries instantly and consume information in real-time.'}, {icon: 'icon_users.svg', hasWeIcon: true, title: 'WeDeploy Auth', description: 'Avoid the headache of operating your own user management system. Authenticate users in few lines of code using our SDKs.'}, {icon: 'icon_cloud.svg', hasWeIcon: true, title: 'WeDeploy Hosting', description: 'Deliver HTML, CSS, JS, or any other kind of static files using powerful static hosting. It\'s super fast and will save you a lot of time.'}, {icon: 'icon_terminal.svg', hasWeIcon: false, title: 'Command Line Tool', description: 'We designed a CLI that seamlessly integrates into your workflow. Almost everything you can do from the dashboard, can also be done from your terminal.'}, {icon: 'icon_servers.svg', hasWeIcon: false, title: 'Load Balancer', description: 'Automagically distribute incoming traffic across multiple instances without the client ever knowing about the internal separation of containers.'}, {icon: 'icon_velocimeter.svg', hasWeIcon: false, title: 'High Availability', description: 'Don\'t worry about your app being taken offline during deployment of the new code. Push updates or restart your containers with zero downtime.'}, {icon: 'icon_file.svg', hasWeIcon: false, title: 'Log Management', description: 'Detect and diagnose an error from your terminal or from the dashboard. Watch logs in realtime and find the specific cause, fast.'}, {icon: 'icon_globe.svg', hasWeIcon: false, title: 'Custom Domains', description: 'Every project is accessible via a wedeploy.io subdomain, but we know that\'s not enough for apps in production. That\'s why you can set up your own custom domains.'}, {icon: 'icon_heart.svg', hasWeIcon: false, title: 'Health Checks', description: 'Be the first one to know when something happens. Monitor the status and control the lifecycle of your containers very easily.'}];
        var featureList328 = features__soy322;
        var featureListLen328 = featureList328.length;
        for (var featureIndex328 = 0; featureIndex328 < featureListLen328; featureIndex328++) {
          var featureData328 = featureList328[featureIndex328];
          $feature({icon: featureData328.icon, hasWeIcon: featureData328.hasWeIcon, title: featureData328.title, description: featureData328.description}, null, opt_ijData);
        }
      ie_close('ul');
    ie_close('div');
  ie_close('div');
}
exports.view_4 = $view_4;
if (goog.DEBUG) {
  $view_4.soyTemplateName = 'pageIndex.view_4';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $view_6(opt_data, opt_ignored, opt_ijData) {
  ie_open('div', null, null,
      'id', 'view-6',
      'class', 'text-center');
    ie_open('div', null, null,
        'id', 'view-6__giant',
        'class', 'giant');
      ie_open('span', null, null,
          'id', 'giant__deploy');
        itext('Deploy');
      ie_close('span');
    ie_close('div');
    ie_open('div', null, null,
        'class', 'info');
      ie_open('div', null, null,
          'class', 'info__title');
        ie_open('h2');
          itext('We can\'t wait to see what you\'re going to build.');
        ie_close('h2');
      ie_close('div');
      ie_open('div', null, null,
          'class', 'info__button');
        ie_open('a', null, null,
            'href', '//console.wedeploy.com/signup',
            'class', 'btn btn-accent btn-block');
          itext('Get Started \u2013 It\u2019s FREE');
        ie_close('a');
      ie_close('div');
      ie_open('div', null, null,
          'class', 'info__question');
        ie_open('h5');
          itext('Have a question? Give our team a call: ');
          ie_open('a', null, null,
              'href', 'tel:+1 (909) 378-5432',
              'class', 'phone');
            itext('+1 (909) 378-5432.');
          ie_close('a');
        ie_close('h5');
      ie_close('div');
    ie_close('div');
  ie_close('div');
}
exports.view_6 = $view_6;
if (goog.DEBUG) {
  $view_6.soyTemplateName = 'pageIndex.view_6';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $feature(opt_data, opt_ignored, opt_ijData) {
  ie_open('li', null, null,
      'class', 'feature');
    ie_open('div', null, null,
        'class', 'feature__box text-center');
      ie_open('div', null, null,
          'class', 'box__badge-container');
        ie_open('div', null, null,
            'id', 'badge-data',
            'class', 'badge flex-center-center');
          ie_open('img', null, null,
              'src', '/images/home/icons_view_2/' + opt_data.icon);
          ie_close('img');
        ie_close('div');
        if (opt_data.hasWeIcon) {
          ie_open('div', null, null,
              'class', 'we-container');
            ie_open('div', null, null,
                'class', 'we flex-center-center');
              ie_open('span');
                itext('We');
              ie_close('span');
            ie_close('div');
          ie_close('div');
        }
      ie_close('div');
      ie_open('div', null, null,
          'class', 'feature__title');
        ie_open('h3');
          var dyn22 = opt_data.title;
          if (typeof dyn22 == 'function') dyn22(); else if (dyn22 != null) itext(dyn22);
        ie_close('h3');
      ie_close('div');
      ie_open('div', null, null,
          'class', 'feature__description');
        ie_open('p');
          var dyn23 = opt_data.description;
          if (typeof dyn23 == 'function') dyn23(); else if (dyn23 != null) itext(dyn23);
        ie_close('p');
      ie_close('div');
    ie_close('div');
  ie_close('li');
}
exports.feature = $feature;
if (goog.DEBUG) {
  $feature.soyTemplateName = 'pageIndex.feature';
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
      'id', 'subscribe',
      'class', 'col-xs-16 col-sm-16 col-md-16 col-lg-4 col-lg-offset-1');
    ie_open('div', null, null,
        'id', 'subscribe__container');
      ie_open('h1');
        itext('You Build.');
      ie_close('h1');
      ie_open('h1');
        itext('We Deploy.');
      ie_close('h1');
      ie_open('p');
        var dyn24 = opt_data.page.description;
        if (typeof dyn24 == 'function') dyn24(); else if (dyn24 != null) itext(dyn24);
      ie_close('p');
      ie_open('a', null, null,
          'href', '//console.wedeploy.com/signup',
          'id', 'subscribe__submit-small',
          'class', 'open-modal btn btn-accent btn-block');
        ie_open('span');
          itext('Get Started \u2013 It\u2019s FREE');
        ie_close('span');
      ie_close('a');
      ie_void('div', null, null,
          'id', 'terminal-img');
      ie_open('form', null, null,
          'id', 'view-1__form',
          'class', 'form-signup');
        ie_open('a', null, null,
            'href', '//console.wedeploy.com/signup',
            'type', 'submit',
            'class', 'btn btn-accent btn-block');
          ie_open('span');
            itext('Get Started \u2013 It\u2019s FREE');
          ie_close('span');
        ie_close('a');
      ie_close('form');
    ie_close('div');
  ie_close('div');
}
exports.subscribe = $subscribe;
if (goog.DEBUG) {
  $subscribe.soyTemplateName = 'pageIndex.subscribe';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $terminal(opt_data, opt_ignored, opt_ijData) {
  ie_open('div', null, null,
      'id', 'terminal',
      'class', 'col-xs-16 col-sm-16 col-md-9 col-lg-9 col-lg-offset-1');
    ie_open('div', null, null,
        'class', 'terminal__content');
      ie_open('div', null, null,
          'class', 'content__wrapper');
        $browser(null, null, opt_ijData);
        $cli(null, null, opt_ijData);
      ie_close('div');
    ie_close('div');
  ie_close('div');
}
exports.terminal = $terminal;
if (goog.DEBUG) {
  $terminal.soyTemplateName = 'pageIndex.terminal';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $browser(opt_data, opt_ignored, opt_ijData) {
  ie_open('div', null, null,
      'id', 'browser');
    ie_open('div', null, null,
        'class', 'browser__top flex-center-center');
      ie_open('div', null, null,
          'class', 'top__bullets flex-left-center');
        ie_void('span', null, null,
            'class', 'bullet');
        ie_void('span', null, null,
            'class', 'bullet');
        ie_void('span', null, null,
            'class', 'bullet');
      ie_close('div');
      ie_open('h3');
        itext('WeDeploy\u2122 Console');
      ie_close('h3');
    ie_close('div');
    ie_open('div', null, null,
        'class', 'browser__topbar flex-left-center');
      ie_open('a', null, null,
          'href', 'javascript:void(0);',
          'class', 'topbar__logo');
        itext('WeDeploy\u2122');
      ie_close('a');
      ie_open('a', null, null,
          'href', 'javascript:void(0);',
          'class', 'topbar__projects btn btn-inverse btn-sm');
        itext('Projects ');
        ie_void('span', null, null,
            'class', 'icon-12-arrow-down-short');
      ie_close('a');
      ie_open('div', null, null,
          'class', 'topbar-link btn-transparent flex-left-spacebetween');
        ie_open('a', null, null,
            'class', 'avatar-round avatar-icon-12',
            'href', '#');
          ie_void('span', null, null,
              'class', 'icon-12-person');
        ie_close('a');
      ie_close('div');
    ie_close('div');
    ie_open('div', null, null,
        'id', 'browser__content');
      ie_open('div', null, null,
          'id', 'content__scroll');
        ie_open('div', null, null,
            'class', 'flex-left-spacebetween');
          ie_open('div', null, null,
              'id', 'browser__recent',
              'class', 'input-inner-addon input-inner-addon-right');
            ie_open('div', null, null,
                'class', 'btn btn-default btn-sm flex-center-center');
              itext('Recent ');
              ie_void('span', null, null,
                  'class', 'icon-12-arrow-down-short');
            ie_close('div');
          ie_close('div');
          ie_open('div', null, null,
              'id', 'browser__title');
            itext('Projects');
          ie_close('div');
          ie_open('div', null, null,
              'id', 'browser__new-project');
            ie_open('div', null, null,
                'class', 'btn btn-accent btn-sm flex-center-center');
              ie_void('span', null, null,
                  'class', 'icon-12-plus');
              itext(' New Project');
            ie_close('div');
          ie_close('div');
        ie_close('div');
        ie_open('div', null, null,
            'class', 'content-header-menu');
          ie_open('span', null, null,
              'class', 'header__info');
            itext('Project');
          ie_close('span');
          ie_open('span', null, null,
              'class', 'header__status');
            itext('Status');
          ie_close('span');
          ie_open('span', null, null,
              'class', 'header__services');
            itext('Service');
          ie_close('span');
          ie_open('span', null, null,
              'class', 'header__activity');
            itext('Last Activity');
          ie_close('span');
        ie_close('div');
        var param360 = function() {
          ie_open('span', null, null,
              'class', 'box box-icon flex-center-center');
            ie_void('span', null, null,
                'class', 'icon-12-database');
          ie_close('span');
          ie_open('span', null, null,
              'class', 'box box-icon flex-center-center');
            ie_void('span', null, null,
                'class', 'icon-12-mail');
          ie_close('span');
          ie_open('span', null, null,
              'class', 'box box-icon flex-center-center');
            ie_void('span', null, null,
                'class', 'icon-12-cloud');
          ie_close('span');
        };
        var param362 = function() {
          ie_void('span', null, null,
              'class', 'icon-12-module');
        };
        $browser_project({first: true, projectName: 'mycompany.com', status: 'up', statusLabel: 'online', services: param360, activityIcon: param362, activityTimeElapsed: '7m'}, null, opt_ijData);
        var param370 = function() {
          ie_open('span', null, null,
              'class', 'box box-icon flex-center-center');
            ie_void('span', null, null,
                'class', 'icon-12-folder');
          ie_close('span');
          ie_open('span', null, null,
              'class', 'box box-icon flex-center-center');
            ie_void('span', null, null,
                'class', 'icon-12-mail');
          ie_close('span');
        };
        var param372 = function() {
          ie_void('span', null, null,
              'class', 'icon-12-arrow-up-rod');
        };
        $browser_project({first: false, projectName: 'intranet.wedeploy.io', status: 'up', statusLabel: 'online', services: param370, activityIcon: param372, activityTimeElapsed: '1d'}, null, opt_ijData);
        var param380 = function() {
          ie_open('span', null, null,
              'class', 'box box-icon flex-center-center');
            ie_void('span', null, null,
                'class', 'icon-12-database');
          ie_close('span');
        };
        var param382 = function() {
          ie_void('span', null, null,
              'class', 'icon-12-spinner-double-arrow');
        };
        $browser_project({first: false, projectName: 'newproject.com', status: 'up', statusLabel: 'online', services: param380, activityIcon: param382, activityTimeElapsed: '30s'}, null, opt_ijData);
        var param390 = function() {
          ie_open('span', null, null,
              'class', 'box box-icon flex-center-center');
            ie_void('span', null, null,
                'class', 'icon-12-cloud');
          ie_close('span');
          ie_open('span', null, null,
              'class', 'box box-icon flex-center-center');
            ie_void('span', null, null,
                'class', 'icon-12-folder');
          ie_close('span');
        };
        var param392 = function() {
          ie_void('span', null, null,
              'class', 'icon-12-house');
        };
        $browser_project({first: false, projectName: 'mobileapp.wedeploy.io', status: 'up', statusLabel: 'online', services: param390, activityIcon: param392, activityTimeElapsed: '2h'}, null, opt_ijData);
      ie_close('div');
    ie_close('div');
  ie_close('div');
}
exports.browser = $browser;
if (goog.DEBUG) {
  $browser.soyTemplateName = 'pageIndex.browser';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $browser_project(opt_data, opt_ignored, opt_ijData) {
  ie_open('div', null, null,
      'class', 'no-padding col--browser span_6 browser__project-item' + (opt_data.first ? ' first' : ''));
    ie_open('div', null, null,
        'class', 'project-item__content flex-left-center');
      ie_open('div', null, null,
          'class', 'project-item__info');
        ie_open('p', null, null,
            'class', 'large');
          var dyn25 = opt_data.projectName;
          if (typeof dyn25 == 'function') dyn25(); else if (dyn25 != null) itext(dyn25);
        ie_close('p');
      ie_close('div');
      ie_open('div', null, null,
          'class', 'project-item__status flex-column-left-center');
        ie_open('span', null, null,
            'class', 'box box-project flex-left-center');
          ie_void('span', null, null,
              'class', 'bullet ' + opt_data.status);
          ie_open('span', null, null,
              'class', 'label-status');
            var dyn26 = opt_data.statusLabel;
            if (typeof dyn26 == 'function') dyn26(); else if (dyn26 != null) itext(dyn26);
          ie_close('span');
        ie_close('span');
      ie_close('div');
      ie_open('div', null, null,
          'class', 'project-item__services flex-column-left-center');
        var dyn27 = opt_data.services;
        if (typeof dyn27 == 'function') dyn27(); else if (dyn27 != null) itext(dyn27);
      ie_close('div');
      ie_open('div', null, null,
          'class', 'project-item__activity flex-column-left-center');
        ie_open('span', null, null,
            'class', 'box box-icon flex-center-center');
          var dyn28 = opt_data.activityIcon;
          if (typeof dyn28 == 'function') dyn28(); else if (dyn28 != null) itext(dyn28);
        ie_close('span');
        ie_open('span', null, null,
            'class', 'time-small');
          var dyn29 = opt_data.activityTimeElapsed;
          if (typeof dyn29 == 'function') dyn29(); else if (dyn29 != null) itext(dyn29);
        ie_close('span');
      ie_close('div');
      ie_open('div', null, null,
          'class', 'project-item__settings flex-column-left-center');
        ie_open('span', null, null,
            'class', 'flex-right-center');
          ie_void('span', null, null,
              'class', 'icon-12-ellipsis');
        ie_close('span');
      ie_close('div');
    ie_close('div');
  ie_close('div');
}
exports.browser_project = $browser_project;
if (goog.DEBUG) {
  $browser_project.soyTemplateName = 'pageIndex.browser_project';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $cli(opt_data, opt_ignored, opt_ijData) {
  ie_open('div', null, null,
      'id', 'cli',
      'class', 'no-padding col--terminal span_3');
    ie_open('div', null, null,
        'class', 'cli__top flex-center-center');
      ie_open('div', null, null,
          'class', 'top__bullets flex-left-center');
        ie_void('span', null, null,
            'class', 'bullet');
        ie_void('span', null, null,
            'class', 'bullet');
        ie_void('span', null, null,
            'class', 'bullet');
      ie_close('div');
      ie_open('h3');
        itext('WeDeploy\u2122 CLI');
      ie_close('h3');
    ie_close('div');
    ie_open('div', null, null,
        'class', 'cli__terminal flex-column-left-top');
      ie_open('div', null, null,
          'class', 'terminal-content');
        ie_open('p');
          itext('Available Commands:');
        ie_close('p');
        ie_open('p', null, null,
            'class', 'no-margin');
          ie_open('span', null, null,
              'class', 'one');
            itext('log');
          ie_close('span');
          ie_open('span', null, null,
              'class', 'two');
            itext('Display logs of the services');
          ie_close('span');
        ie_close('p');
        ie_open('p', null, null,
            'class', 'no-margin');
          ie_open('span', null, null,
              'class', 'one');
            itext('list');
          ie_close('span');
          ie_open('span', null, null,
              'class', 'two');
            itext('Show list of projects and services');
          ie_close('span');
        ie_close('p');
        ie_open('p', null, null,
            'class', 'no-margin');
          ie_open('span', null, null,
              'class', 'one');
            itext('restart');
          ie_close('span');
          ie_open('span', null, null,
              'class', 'two');
            itext('Restart project or services');
          ie_close('span');
        ie_close('p');
        ie_open('p');
          itext('$ ');
          ie_open('strong');
            itext('we');
          ie_close('strong');
          itext(' deploy |');
        ie_close('p');
      ie_close('div');
    ie_close('div');
  ie_close('div');
}
exports.cli = $cli;
if (goog.DEBUG) {
  $cli.soyTemplateName = 'pageIndex.cli';
}

exports.render.params = [];
exports.render.types = {};
exports.view_1.params = [];
exports.view_1.types = {};
exports.view_3_1.params = [];
exports.view_3_1.types = {};
exports.view_3_2.params = [];
exports.view_3_2.types = {};
exports.view_4.params = [];
exports.view_4.types = {};
exports.view_6.params = [];
exports.view_6.types = {};
exports.feature.params = ["icon","hasWeIcon","title","description"];
exports.feature.types = {"icon":"any","hasWeIcon":"any","title":"any","description":"any"};
exports.subscribe.params = ["page"];
exports.subscribe.types = {"page":"any"};
exports.terminal.params = [];
exports.terminal.types = {};
exports.browser.params = [];
exports.browser.types = {};
exports.browser_project.params = ["first","projectName","status","statusLabel","services","activityIcon","activityTimeElapsed"];
exports.browser_project.types = {"first":"any","projectName":"any","status":"any","statusLabel":"any","services":"any","activityIcon":"any","activityTimeElapsed":"any"};
exports.cli.params = [];
exports.cli.types = {};
templates = exports;
return exports;

});

class pageIndex extends Component {}
Soy.register(pageIndex, templates);
export { pageIndex, templates };
export default templates;
/* jshint ignore:end */
