// This file was automatically generated from environment-variables.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace vOQWx.
 */

if (typeof vOQWx == 'undefined') { var vOQWx = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
vOQWx.render = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(guide.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<h3>' + soy.$$escapeHtml(opt_data.page.title) + '</h3><h6>' + soy.$$escapeHtml(opt_data.page.description) + '</h6><aside><p>If you are unfamiliar with how you can apply this concept, please visit our main <a href="/docs/intro/environment-variables.html">Environment Variables</a> page.</p></aside><article id="1"><h2>Reference</h2><p>Here\'s a list of all the environment variables you can use with this service.</p><div class="table-container"><table><thead><tr><th>Key</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td>WEDEPLOY_WEB_PATH</td><td><code>/</code></td><td>Path to serve static files</td></tr><tr><td>WEDEPLOY_WEB_ERROR_PATH</td><td><code>/_error</code></td><td>Path to serve <a href="/docs/hosting/custom-error-pages.html">error pages</a></td></tr></tbody></table></div></article><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.page.title) + '"><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.site.title) + '">')}), null, opt_ijData));
};
if (goog.DEBUG) {
  vOQWx.render.soyTemplateName = 'vOQWx.render';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
vOQWx.soyweb = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(base.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + vOQWx.render(opt_data, null, opt_ijData))}), null, opt_ijData));
};
if (goog.DEBUG) {
  vOQWx.soyweb.soyTemplateName = 'vOQWx.soyweb';
}
