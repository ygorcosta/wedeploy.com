// This file was automatically generated from add-api-method.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Hqkvo.
 */

if (typeof Hqkvo == 'undefined') { var Hqkvo = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Hqkvo.render = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(tutorial.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<h4>Add API Method</h4><p>Now we want to add a script that will send an email. To do this, go to <code>tutorial-email-ios/app/tutorial-email-ios/EmailViewController.swift</code> and paste this code into the &quot;submitButtonClick&quot; function:</p>' + ElectricCode.render({code: soydata.$$markUnsanitizedTextForInternalBlocks('let auth = TokenAuth(token: "000-000-000")\nWeDeploy.email("email-<projectID>.wedeploy.sh", authorization: auth)\n    .to(to)\n    .from(from)\n    .subject(subject)\n    .message(subject)\n    .send()\n    .toCallback { emailId, error in\n        if let emailId = emailId {\n            self.showAlert(with: "Success", message: "Email sent! Wait a little bit until it arrives :)")\n            print("Email id: \\(emailId)")\n        }\n        else {\n            self.showAlert(with: "Error", message: "Error sending the email")\n            print(String(describing: error))\n        }\n    }'), mode: 'swift'}, null, opt_ijData) + '<p><strong>Note:</strong> make sure to replace <code>&lt;projectID&gt;</code> with the id of your project.</p><h4>Add master token</h4><p>In order for your email request to be authorized, you must add your project\'s unique Master Token.</p><ol><li>Go to the <a href="https://console.wedeploy.com" target="_blank">WeDeploy Console</a></li><li>Click on your project</li><li>Go to the <em>Settings</em> section</li><li>Copy your Master Token</li><li>Change the <code>TokenAuth(token: &quot;000-000-000&quot;)</code> initialization to <code>TokenAuth(token: &quot;yourMasterToken&quot;)</code> in the swift code</li></ol><aside><h6><span class="icon-16-star"></span> Pro Tip</h6><p>As you can see, the input values from the form are being used as email parameters (from, to, subject, etc). We have a bunch of parameters so you can fully configure your email posts.</p><p>Want to see the full list of <a href="/docs/email/sending-email.html" target="_blank">Email Parameters</a>?</p></aside><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.page.title) + '"><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.site.title) + '">')}), null, opt_ijData));
};
if (goog.DEBUG) {
  Hqkvo.render.soyTemplateName = 'Hqkvo.render';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Hqkvo.soyweb = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(base.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + Hqkvo.render(opt_data, null, opt_ijData))}), null, opt_ijData));
};
if (goog.DEBUG) {
  Hqkvo.soyweb.soyTemplateName = 'Hqkvo.soyweb';
}
