// This file was automatically generated from you-made-it.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace OqnHo.
 */

if (typeof OqnHo == 'undefined') { var OqnHo = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
OqnHo.render = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(tutorial.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<div class="notfound"><div class="notfound-icon"><span class="icon-16-thumb-up"></span></div><p class="notfound-text">You made it!</p><p>Now discover what else you can do with WeDeploy.</p><ul class="checklist"><li><a href="/tutorials/auth-ios/get-started.html">Auth on iOS Tutorial</a></li><li><a href="/tutorials/email-ios/get-started.html">Email on iOS Tutorial</a></li></ul></div><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.page.title) + '"><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.site.title) + '">')}), null, opt_ijData));
};
if (goog.DEBUG) {
  OqnHo.render.soyTemplateName = 'OqnHo.render';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
OqnHo.soyweb = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(base.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + OqnHo.render(opt_data, null, opt_ijData))}), null, opt_ijData));
};
if (goog.DEBUG) {
  OqnHo.soyweb.soyTemplateName = 'OqnHo.soyweb';
}
