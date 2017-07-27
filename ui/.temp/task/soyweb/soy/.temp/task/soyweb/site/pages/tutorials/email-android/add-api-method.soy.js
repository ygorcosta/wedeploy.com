// This file was automatically generated from add-api-method.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace inHWT.
 */

if (typeof inHWT == 'undefined') { var inHWT = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
inHWT.render = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(tutorial.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<h4>Add API Method</h4><p>Now we want to add a script that will send an email. To do this, go to <code>MainActivity.java</code> and paste this code into the &quot;sendEmail&quot; method:</p>' + ElectricCode.render({code: soydata.$$markUnsanitizedTextForInternalBlocks('weDeploy = new WeDeploy.Builder()\n    .authorization(new TokenAuthorization("000-000-000"))\n    .build();\n\nweDeploy.email("email-<projectID>.wedeploy.sh")\n    .from(from)\n    .to(to)\n    .subject(subject)\n    .message(subject)\n    .send()\n    .execute(new Callback() {\n        @Override\n        public void onSuccess(Response response) {\n            showAlert("Success", "Email sent! Wait a little bit until it arrives :)");\n        }\n\n        @Override\n        public void onFailure(Exception e) {\n            showAlert("Error", "Email sending the email");\n        }\n    });'), mode: 'text/x-java'}, null, opt_ijData) + '<p><strong>Note:</strong> make sure to replace <code>&lt;projectID&gt;</code> with the id of your project.</p><h4>Add master token</h4><p>In order for your email request to be authorized, you must add your project\'s unique Master Token.</p><ol><li>Go to the <a href="https://console.wedeploy.com" target="_blank">WeDeploy Console</a></li><li>Click on your project</li><li>Go to the <em>Settings</em> section</li><li>Copy your Master Token</li><li>Change the new <code>TokenAuthorization(\'000-000-000\')</code> initialization to new <code>TokenAuthorization(\'yourMasterToken\')</code> in the Java code</li></ol><aside><h6><span class="icon-16-star"></span> Pro Tip</h6><p>As you can see, the input values from the form are being used as email parameters (from, to, subject, etc). We have a bunch of parameters so you can fully configure your email posts.</p><p>Want to see the full list of <a href="/docs/email/sending-email.html" target="_blank">Email Parameters</a>?</p></aside><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.page.title) + '"><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.site.title) + '">')}), null, opt_ijData));
};
if (goog.DEBUG) {
  inHWT.render.soyTemplateName = 'inHWT.render';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
inHWT.soyweb = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(base.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + inHWT.render(opt_data, null, opt_ijData))}), null, opt_ijData));
};
if (goog.DEBUG) {
  inHWT.soyweb.soyTemplateName = 'inHWT.soyweb';
}
