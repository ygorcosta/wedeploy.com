/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from Newsletter.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Newsletter.
 * @public
 */

goog.module('Newsletter.incrementaldom');

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
  ie_open('div', null, null,
      'class', 'newsletter');
    ie_open('div', null, null,
        'class', 'container-hybrid');
      ie_open('div', null, null,
          'class', 'col-xs-14 col-xs-offset-1');
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
        ie_close('div');
      ie_close('div');
      ie_open('div', null, null,
          'class', 'row');
        ie_open('form', null, null,
            'autocomplete', 'off',
            'class', 'row newsletter-form',
            'data-onsubmit', 'subscribeToNewsletter');
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
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'Newsletter.render';
}

exports.render.params = [];
exports.render.types = {};
templates = exports;
return exports;

});

class Newsletter extends Component {}
Soy.register(Newsletter, templates);
export { Newsletter, templates };
export default templates;
/* jshint ignore:end */
