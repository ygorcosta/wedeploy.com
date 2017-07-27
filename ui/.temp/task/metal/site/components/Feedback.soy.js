/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from Feedback.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Feedback.
 * @public
 */

goog.module('Feedback.incrementaldom');

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
  ie_open('div');
    ie_open('div', null, null,
        'class', 'feedback');
      ie_open('p');
        itext('Was this section helpful?');
      ie_close('p');
      ie_open('button', null, null,
          'class', 'btn btn-accent feedback-btn feedback-btn-yes',
          'data-onclick', 'sendFeedback',
          'data-feedback', 'true');
        itext('Yes');
      ie_close('button');
      ie_open('button', null, null,
          'class', 'btn btn-accent feedback-btn feedback-btn-no',
          'data-onclick', 'sendFeedback',
          'data-feedback', 'false');
        itext('No');
      ie_close('button');
    ie_close('div');
    if (opt_data.site.githubRepo) {
      ie_open('div', null, null,
          'class', 'contribute');
        ie_open('div', null, null,
            'class', 'contribute-img');
          ie_void('span', null, null,
              'class', 'icon-16-github');
        ie_close('div');
        ie_open('div', null, null,
            'class', 'contribute-text');
          ie_open('p');
            itext('Contribute on Github! ');
            ie_open('a', null, null,
                'href', 'https://github.com/' + opt_data.site.githubRepo + '/tree/master/ui/' + opt_data.page.srcFilePath,
                'class', 'contribute-link ',
                'target', '_blank');
              itext('Edit this section');
            ie_close('a');
            itext('.');
          ie_close('p');
        ie_close('div');
      ie_close('div');
    }
  ie_close('div');
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'Feedback.render';
}

exports.render.params = ["page","site"];
exports.render.types = {"page":"any","site":"any"};
templates = exports;
return exports;

});

class Feedback extends Component {}
Soy.register(Feedback, templates);
export { Feedback, templates };
export default templates;
/* jshint ignore:end */
