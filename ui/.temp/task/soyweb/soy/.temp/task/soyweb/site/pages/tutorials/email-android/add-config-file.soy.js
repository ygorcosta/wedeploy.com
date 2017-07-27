// This file was automatically generated from add-config-file.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace lyJwG.
 */

if (typeof lyJwG == 'undefined') { var lyJwG = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
lyJwG.render = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(tutorial.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<h4>Add Config File</h4><p>Since every service folder must have a <code>wedeploy.json</code> file that configures the service, let\'s add one to our Email Service in the repo we just cloned.</p><ol><li>Open the <code>tutorial-email-android</code> folder in a code editor.</li><li>Create a new file inside of the <code>email</code> folder and name it <code>wedeploy.json</code>.</li><li>Inside of that file, paste this code.</li></ol>' + ElectricCode.render({code: soydata.$$markUnsanitizedTextForInternalBlocks('{\n    "id": "email",\n    "image": "wedeploy/email:beta"\n}'), mode: 'application/json'}, null, opt_ijData) + '<aside><h6><span class="icon-16-star"></span> Pro Tip</h6><p>Another thing you can do in your <code>wedeploy.json</code> file is add environment variables. There are many ways to use these, one example is to change to a unique email provider.</p>' + ElectricCode.render({code: soydata.$$markUnsanitizedTextForInternalBlocks('{\n    "id": "email",\n    "image": "wedeploy/email:beta",\n    "env" {\n        "EMAIL_HOST": "host294.mailrave.com"\n    }\n}'), mode: 'application/json'}, null, opt_ijData) + '<p>See the full list of <a href="/docs/email/environment-variables.html" target="_blank">Environment Variables for Email</a>.</p></aside><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.page.title) + '"><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.site.title) + '">')}), null, opt_ijData));
};
if (goog.DEBUG) {
  lyJwG.render.soyTemplateName = 'lyJwG.render';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
lyJwG.soyweb = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(base.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + lyJwG.render(opt_data, null, opt_ijData))}), null, opt_ijData));
};
if (goog.DEBUG) {
  lyJwG.soyweb.soyTemplateName = 'lyJwG.soyweb';
}
