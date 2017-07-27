// This file was automatically generated from custom-error-pages.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace SGSnP.
 */

if (typeof SGSnP == 'undefined') { var SGSnP = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
SGSnP.render = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(guide.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<h3>' + soy.$$escapeHtml(opt_data.page.title) + '</h3><h6>' + soy.$$escapeHtml(opt_data.page.description) + '</h6><article id="1"><h2>Custom Error Pages</h2><p>When people try to access nonexistent pages on your site, WeDeploy will display a 404 error page. This page follows a template that might not fit to your visual needs. The good news is that you can create custom error pages that are consistent with your site\'s style.</p><p>Files put into the special directory <code>/_error</code> are mapped as the error files to be served in case of an error. They must take the form of <code>&lt;error code&gt;.html</code>.</p><aside><p><strong>Check the <a href="https://github.com/wedeploy/boilerplate-hosting/tree/master/_error">boilerplate-hosting</a> for a practical example.</strong></p></aside></article><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.page.title) + '"><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.site.title) + '">')}), null, opt_ijData));
};
if (goog.DEBUG) {
  SGSnP.render.soyTemplateName = 'SGSnP.render';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
SGSnP.soyweb = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(base.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + SGSnP.render(opt_data, null, opt_ijData))}), null, opt_ijData));
};
if (goog.DEBUG) {
  SGSnP.soyweb.soyTemplateName = 'SGSnP.soyweb';
}
