// This file was automatically generated from environment-variables.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace hKsxY.
 */

if (typeof hKsxY == 'undefined') { var hKsxY = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
hKsxY.render = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(guide.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<h3>' + soy.$$escapeHtml(opt_data.page.title) + '</h3><h6>' + soy.$$escapeHtml(opt_data.page.description) + '</h6><article id="1"><h2>Introduction</h2><p>Environment variables are a set of dynamic placeholders that can affect the way a certain service will behave. They are dynamic because they can change according to your needs.</p><p>A good example would be credentials for a database, where each environment has its own values. The ideal solution for handling this scenario, would be using environment variables, in order to set up different configurations for different environments using the same code.</p><p>WeDeploy can help you configure environment variables in two ways, you can either <a href="#2">use the Console</a> or <a href="#3">use the wedeploy.json</a> file.</p></article><article id="2"><h2>Using the Console</h2><ol><li>Go to the specific service page.</li><li>Click on <em>&quot;Environment&quot;</em>.</li><li>Add your keys and values.</li><li>Click on <em>&quot;Update Environment&quot;</em>.</li></ol><p><img src="/images/docs/intro/environment-variables.png" alt="Using the Console"></p><p>This will restart your service with the new environment variables.</p><aside><h6><span class="icon-16-alert"></span> Attention</h6><p>If you create or update a variable on the Console, this will not automatically reflect on <code>wedeploy.json</code>. So make sure you also update your local file if you need both environments in sync.</p></aside></article><article id="3"><h2>Using wedeploy.json</h2><p>You can also define environment variables directly on your code repository by using the <code>wedeploy.json</code> files like this:</p>' + ElectricCode.render({code: soydata.$$markUnsanitizedTextForInternalBlocks('{\n    "id": "myservice",\n    "env": {\n        "DATABASE_USER": "root",\n        "DATABASE_PASSWORD": "test"\n    }\n}'), mode: 'application/json'}, null, opt_ijData) + '<aside><h6><span class="icon-16-alert"></span> Attention</h6><p>All environment variables specified on <code>wedeploy.json</code> will be created or updated on the Console. If there are variables specified only on Console, they will remain the same.</p></aside></article><h2>What\'s next?</h2><p>Some WeDeploy services have pre-defined environment variables, you can learn more about it by visiting them individually:</p><ul><li><a href="/docs/auth/environment-variables.html"><strong>Auth Environment Variables</strong></a></li><li><a href="/docs/email/environment-variables.html"><strong>Email Environment Variables</strong></a></li><li><a href="/docs/hosting/environment-variables.html"><strong>Hosting Environment Variables</strong></a></li></ul><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.page.title) + '"><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.site.title) + '">')}), null, opt_ijData));
};
if (goog.DEBUG) {
  hKsxY.render.soyTemplateName = 'hKsxY.render';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
hKsxY.soyweb = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(base.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + hKsxY.render(opt_data, null, opt_ijData))}), null, opt_ijData));
};
if (goog.DEBUG) {
  hKsxY.soyweb.soyTemplateName = 'hKsxY.soyweb';
}
