// This file was automatically generated from getting-started.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace vbXCS.
 */

if (typeof vbXCS == 'undefined') { var vbXCS = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
vbXCS.render = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(guide.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<h3>Auth</h3><h6>' + soy.$$escapeHtml(opt_data.page.description) + '</h6><p>Our Auth service allows you to avoid the headache of operating your own user management system. Features like creating accounts, resetting passwords, and updating profiles are easily accomplished with a few lines of code using our SDKs.</p><article id="1"><h2>Try it yourself</h2><p>Want to see the process of deploying WeDeploy Auth step by step?</p><div class="guide-btn-cta"><a class="btn btn-accent btn-sm" href="/tutorials/auth-web" target="_blank" data-senna-off><span class="icon-16-external"></span>Try the tutorial</a></div><div class="guide-aux-cta">or see a <a href="http://boilerplate-auth.wedeploy.io" target="_blank" data-senna-off>live demo</a>.</div></article><article id="2"><h2>Configuring</h2><aside><p>All WeDeploy projects use a consistant file structure and configuration files to deploy apps with the CLI or GitHub. Learn more on our <strong><a href="/docs/intro/how-it-works.html">How It Works Page</a></strong>.</p></aside><p>Below is an example of a <code>wedeploy.json</code> for an Auth container.</p>' + ElectricCode.render({code: soydata.$$markUnsanitizedTextForInternalBlocks('{\n    "id": "users",\n    "image": "wedeploy/auth:beta"\n}'), mode: 'application/json'}, null, opt_ijData) + '<p>The <code>id</code> for your services are uniquely determined by you.</p></article><h2>What\'s next?</h2><p>Now we\'re ready to <a href="/docs/auth/manage-users.html">start managing users</a>.</p><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.page.title) + '"><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.site.title) + '">')}), null, opt_ijData));
};
if (goog.DEBUG) {
  vbXCS.render.soyTemplateName = 'vbXCS.render';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
vbXCS.soyweb = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(base.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + vbXCS.render(opt_data, null, opt_ijData))}), null, opt_ijData));
};
if (goog.DEBUG) {
  vbXCS.soyweb.soyTemplateName = 'vbXCS.soyweb';
}
