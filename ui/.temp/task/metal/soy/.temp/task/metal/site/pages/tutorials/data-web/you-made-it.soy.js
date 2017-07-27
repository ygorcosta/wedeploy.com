// This file was automatically generated from you-made-it.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace SAJNr.
 * @public
 */

goog.module('SAJNr.incrementaldom');

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
var $import1 = goog.require('tutorial.incrementaldom');
var $templateAlias1 = $import1.render;


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ignored, opt_ijData) {
  var param2898 = function() {
    ie_open('div', null, null,
        'class', 'notfound');
      ie_open('div', null, null,
          'class', 'notfound-icon');
        ie_void('span', null, null,
            'class', 'icon-16-thumb-up');
      ie_close('div');
      ie_open('p', null, null,
          'class', 'notfound-text');
        itext('You made it!');
      ie_close('p');
      ie_open('p');
        itext('Now discover what else you can do with WeDeploy.');
      ie_close('p');
      ie_open('ul', null, null,
          'class', 'checklist');
        ie_open('li');
          ie_open('a', null, null,
              'href', '/tutorials/hosting/get-started.html');
            itext('Hosting Tutorial');
          ie_close('a');
        ie_close('li');
        ie_open('li');
          ie_open('a', null, null,
              'href', '/tutorials/email-web/get-started.html');
            itext('Email Tutorial');
          ie_close('a');
        ie_close('li');
        ie_open('li');
          ie_open('a', null, null,
              'href', '/tutorials/auth-web/get-started.html');
            itext('Auth Tutorial');
          ie_close('a');
        ie_close('li');
        ie_open('li');
          ie_open('a', null, null,
              'href', '/tutorials/ruby/get-started.html');
            itext('Ruby Tutorial');
          ie_close('a');
        ie_close('li');
        ie_open('li');
          ie_open('a', null, null,
              'href', '/tutorials/nodejs/get-started.html');
            itext('Node.js Tutorial');
          ie_close('a');
        ie_close('li');
        ie_open('li');
          ie_open('a', null, null,
              'href', '/tutorials/liferay/get-started.html');
            itext('Liferay Tutorial');
          ie_close('a');
        ie_close('li');
        ie_open('li');
          ie_open('a', null, null,
              'href', '/tutorials/java/get-started.html');
            itext('Java Tutorial');
          ie_close('a');
        ie_close('li');
      ie_close('ul');
    ie_close('div');
    ie_open('input', null, null,
        'type', 'hidden',
        'value', opt_data.page.title);
    ie_close('input');
    ie_open('input', null, null,
        'type', 'hidden',
        'value', opt_data.site.title);
    ie_close('input');
  };
  $templateAlias1(soy.$$assignDefaults({content: param2898}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'SAJNr.render';
}
