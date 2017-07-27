// This file was automatically generated from you-made-it.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace augVN.
 */

if (typeof augVN == 'undefined') { var augVN = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
augVN.render = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(tutorial.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<div class="notfound"><div class="notfound-icon"><span class="icon-16-thumb-up"></span></div><p class="notfound-text">You made it!</p><p>Now discover what else you can do with WeDeploy.</p><ul class="checklist"><li><a href="/tutorials/hosting/get-started.html">Hosting Tutorial</a></li><li><a href="/tutorials/email-web/get-started.html">Email Tutorial</a></li><li><a href="/tutorials/data-web/get-started.html">Data Tutorial</a></li><li><a href="/tutorials/auth-web/get-started.html">Auth Tutorial</a></li><li><a href="/tutorials/nodejs/get-started.html">Node.js Tutorial</a></li><li><a href="/tutorials/liferay/get-started.html">Liferay Tutorial</a></li><li><a href="/tutorials/java/get-started.html">Java Tutorial</a></li></ul></div><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.page.title) + '"><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.site.title) + '">')}), null, opt_ijData));
};
if (goog.DEBUG) {
  augVN.render.soyTemplateName = 'augVN.render';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
augVN.soyweb = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(base.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + augVN.render(opt_data, null, opt_ijData))}), null, opt_ijData));
};
if (goog.DEBUG) {
  augVN.soyweb.soyTemplateName = 'augVN.soyweb';
}
