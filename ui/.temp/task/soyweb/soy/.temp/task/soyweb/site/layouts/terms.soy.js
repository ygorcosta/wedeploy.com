// This file was automatically generated from terms.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace termsPage.
 */

if (typeof termsPage == 'undefined') { var termsPage = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
termsPage.render = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(main.render(soy.$$augmentMap(opt_data, {elementClasses: 'blog', content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<div class="blog terms"><div class="container"><div class="content">' + soy.$$escapeHtml(opt_data.content) + '<article><div class="we-container"><span class="we-circle"><span class="we">We</span></span></div></article></div></div></div>')}), null, opt_ijData));
};
if (goog.DEBUG) {
  termsPage.render.soyTemplateName = 'termsPage.render';
}
