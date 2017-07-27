// This file was automatically generated from add-config-files.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Abclw.
 */

if (typeof Abclw == 'undefined') { var Abclw = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Abclw.render = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(tutorial.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<h4>Add Config Files</h4><p>Since every service folder must have a <code>wedeploy.json</code> file that configures the service, let\'s add one to our Auth Service in the repo we just cloned.</p><h5>Auth</h5><ol><li>Open the <code>tutorial-auth-ios</code> folder in a code editor.</li><li>Create a new file named <code>wedeploy.json</code> inside the <code>auth</code> folder.</li><li>In that file, paste this code:</li></ol>' + ElectricCode.render({code: soydata.$$markUnsanitizedTextForInternalBlocks('{\n    "id": "auth",\n    "image": "wedeploy/auth:beta",\n    "env": {\n        "WEDEPLOY_AUTH_SECURE_FIELDS": "password",\n        "WEDEPLOY_AUTH_PASSWORD": "true"\n    }\n}'), mode: 'application/json'}, null, opt_ijData) + '<aside><h6><span class="icon-16-star"></span> Pro Tip</h6><p>One of the awesome things you can do in your <code>wedeploy.json</code> file is add environment variables. There are many ways to use these; one example is to provide Google sign-in for your users.</p>' + ElectricCode.render({code: soydata.$$markUnsanitizedTextForInternalBlocks('{\n    "id": "auth",\n    "image": "wedeploy/auth:beta",\n    "env": {\n        "WEDEPLOY_AUTH_SECURE_FIELDS": "password",\n        "WEDEPLOY_AUTH_PASSWORD": "true",\n        "WEDEPLOY_AUTH_GOOGLE": "true",\n        "WEDEPLOY_AUTH_GOOGLE_CLIENT_ID": "<your-google-app-id>",\n        "WEDEPLOY_AUTH_GOOGLE_CLIENT_SECRET": "<your-google-app-secret>"\n    }\n}'), mode: 'application/json'}, null, opt_ijData) + '<p>See the full list of <a href="/docs/auth/environment-variables.html" target="_blank">Environment Variables for Auth</a>.</p></aside><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.page.title) + '"><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.site.title) + '">')}), null, opt_ijData));
};
if (goog.DEBUG) {
  Abclw.render.soyTemplateName = 'Abclw.render';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Abclw.soyweb = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(base.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + Abclw.render(opt_data, null, opt_ijData))}), null, opt_ijData));
};
if (goog.DEBUG) {
  Abclw.soyweb.soyTemplateName = 'Abclw.soyweb';
}
