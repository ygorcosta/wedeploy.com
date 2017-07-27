// This file was automatically generated from environment-variables.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace izdoU.
 */

if (typeof izdoU == 'undefined') { var izdoU = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
izdoU.render = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(guide.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<h3>' + soy.$$escapeHtml(opt_data.page.title) + '</h3><h6>' + soy.$$escapeHtml(opt_data.page.description) + '</h6><aside><p>If you are unfamiliar with how you can apply this concept, please visit our main <a href="/docs/intro/environment-variables.html">Environment Variables</a> page.</p></aside><article id="1"><h2>Reference</h2><p>Here\'s a list of all the environment variables you can use with this service.</p><div class="table-container"><table><thead><tr><th>Key</th><th>Description</th></tr></thead><tbody><tr><td>WEDEPLOY_AUTH_EMAIL_CONTENT</td><td>HTML code for password reset email</td></tr><tr><td>WEDEPLOY_AUTH_EMAIL_SENDER</td><td>Set password reset email sender</td></tr><tr><td>WEDEPLOY_AUTH_EMAIL_SUBJECT</td><td>Set password reset email subject</td></tr><tr><td>WEDEPLOY_AUTH_FACEBOOK</td><td>Enable Facebook Auth integration</td></tr><tr><td>WEDEPLOY_AUTH_FACEBOOK_CLIENT_ID</td><td>Facebook OAuth ID</td></tr><tr><td>WEDEPLOY_AUTH_FACEBOOK_CLIENT_SECRET</td><td>Facebook OAuth password</td></tr><tr><td>WEDEPLOY_AUTH_GITHUB</td><td>Enable GitHub Auth integration</td></tr><tr><td>WEDEPLOY_AUTH_GITHUB_CLIENT_ID</td><td>GitHub OAuth ID</td></tr><tr><td>WEDEPLOY_AUTH_GITHUB_CLIENT_SECRET</td><td>GitHub OAuth password</td></tr><tr><td>WEDEPLOY_AUTH_GOOGLE</td><td>Enable Google Auth integration</td></tr><tr><td>WEDEPLOY_AUTH_GOOGLE_CLIENT_ID</td><td>Google OAuth ID</td></tr><tr><td>WEDEPLOY_AUTH_GOOGLE_CLIENT_SECRET</td><td>Google OAuth password</td></tr><tr><td>WEDEPLOY_AUTH_PASSWORD</td><td>Enable email and password Auth</td></tr><tr><td>WEDEPLOY_AUTH_SECURE_FIELDS</td><td>Select which Auth fields are secured</td></tr></tbody></table></div></article><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.page.title) + '"><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.site.title) + '">')}), null, opt_ijData));
};
if (goog.DEBUG) {
  izdoU.render.soyTemplateName = 'izdoU.render';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
izdoU.soyweb = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(base.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + izdoU.render(opt_data, null, opt_ijData))}), null, opt_ijData));
};
if (goog.DEBUG) {
  izdoU.soyweb.soyTemplateName = 'izdoU.soyweb';
}
