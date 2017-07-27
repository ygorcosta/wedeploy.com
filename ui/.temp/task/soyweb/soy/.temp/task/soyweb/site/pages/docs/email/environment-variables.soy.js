// This file was automatically generated from environment-variables.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace scZyq.
 */

if (typeof scZyq == 'undefined') { var scZyq = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
scZyq.render = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(guide.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<h3>' + soy.$$escapeHtml(opt_data.page.title) + '</h3><h6>' + soy.$$escapeHtml(opt_data.page.description) + '</h6><aside><p>If you are unfamiliar with how you can apply this concept, please visit our main <a href="/docs/intro/environment-variables.html">Environment Variables</a> page.</p></aside><article id="1"><h2>Reference</h2><p>Here\'s a list of all the environment variables you can use with this service.</p><div class="table-container"><table><thead><tr><th>Key</th><th>Description</th></tr></thead><tbody><tr><td>EMAIL_HOST</td><td>Custom SMTP server host</td></tr><tr><td>EMAIL_PORT</td><td>Custom SMTP server port</td></tr><tr><td>EMAIL_USERNAME</td><td>Custom SMTP server user</td></tr><tr><td>EMAIL_PASSWORD</td><td>Custom SMTP server password</td></tr><tr><td>EMAIL_PAUSE</td><td>Interval in milliseconds between each email sending</td></tr><tr><td>EMAIL_SSL</td><td>Enables SSL/TLS</td></tr></tbody></table></div></article><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.page.title) + '"><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.site.title) + '">')}), null, opt_ijData));
};
if (goog.DEBUG) {
  scZyq.render.soyTemplateName = 'scZyq.render';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
scZyq.soyweb = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(base.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + scZyq.render(opt_data, null, opt_ijData))}), null, opt_ijData));
};
if (goog.DEBUG) {
  scZyq.soyweb.soyTemplateName = 'scZyq.soyweb';
}
