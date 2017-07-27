// This file was automatically generated from terms.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace termsPage.
 * @public
 */

goog.module('termsPage.incrementaldom');

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
var $import1 = goog.require('main.incrementaldom');
var $templateAlias1 = $import1.render;


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ignored, opt_ijData) {
  var param249 = function() {
    ie_open('div', null, null,
        'class', 'blog terms');
      ie_open('div', null, null,
          'class', 'container');
        ie_open('div', null, null,
            'class', 'content');
          var dyn19 = opt_data.content;
          if (typeof dyn19 == 'function') dyn19(); else if (dyn19 != null) itext(dyn19);
          ie_open('article');
            ie_open('div', null, null,
                'class', 'we-container');
              ie_open('span', null, null,
                  'class', 'we-circle');
                ie_open('span', null, null,
                    'class', 'we');
                  itext('We');
                ie_close('span');
              ie_close('span');
            ie_close('div');
          ie_close('article');
        ie_close('div');
      ie_close('div');
    ie_close('div');
  };
  $templateAlias1(soy.$$assignDefaults({elementClasses: 'blog', content: param249}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'termsPage.render';
}
