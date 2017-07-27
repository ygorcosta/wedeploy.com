// This file was automatically generated from sending-email.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace tlyrr.
 */

if (typeof tlyrr == 'undefined') { var tlyrr = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
tlyrr.render = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(guide.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<h3>' + soy.$$escapeHtml(opt_data.page.title) + '</h3><h6>' + soy.$$escapeHtml(opt_data.page.description) + '</h6><aside><p>If you are unfamiliar with our API, please visit the <a href="/docs/intro/api-clients.html">API Clients</a> page first to learn how to install and configure it.</p></aside><article id="1"><h2>Sending email</h2><p>In order to send emails, we can simply make a request to the url of our service and include some required parameters like <code>from</code>, <code>to</code>, and <code>subject</code>.</p>' + ElectricCode.render({code: soydata.$$markUnsanitizedTextForInternalBlocks('WeDeploy\n    .email(\'<serviceID>-<projectID>.wedeploy.io\')\n    .auth(\'<your-project-master-token>\')\n    .from(\'from@domain.com\')\n    .to(\'to@domain.com\')\n    .subject(\'Hi there!\')\n    .send()\n    .then(function(response) {\n        console.log(\'Email ID:\', response);\n    })\n    .catch(function(error) {\n        // Some error has happened\n    });'), mode: 'javascript'}, null, opt_ijData) + ElectricCode.render({code: soydata.$$markUnsanitizedTextForInternalBlocks('WeDeploy\n    .email(\'<serviceID>-<projectID>.wedeploy.io\')\n    .from(self.username)\n    .to(self.username)\n    .subject("subject")\n    .message("body")\n    .send()\n    .then { id in\n        print("Email ID: \\(id)")\n    }\n    .catch { error in\n        // Some error has happened\n    }'), mode: 'swift'}, null, opt_ijData) + ElectricCode.render({code: soydata.$$markUnsanitizedTextForInternalBlocks('WeDeploy\n    .email("<serviceID>-<projectID>.wedeploy.io/emails")\n    .from("from@domain.com")\n    .to("to@domain.com")\n    .subject("Hi there!")\n    .send()\n    .execute();'), mode: 'text/x-java'}, null, opt_ijData) + '<p>As a result, we\'ll receive an email ID. This doesn\'t indicate that the email has already sent, it actually just means that it was added to the email queue. See <a href="/docs/email/checking-status.html">&quot;checking the email status&quot;</a> to learn more about email status.</p></article><article id="2"><h2>Reference</h2><p>Here is a list of all the email parameters you can pass.</p><div class="table-container"><table><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>bcc</td><td>string</td><td>Bcc recipient email address. Multiple addresses should be defined in multiple parameters.</td></tr><tr><td>cc</td><td>string</td><td>Cc recipient email address. Multiple addresses should be defined in multiple parameters.</td></tr><tr><td>from</td><td>string</td><td>Sender email address.</td></tr><tr><td>message</td><td>string</td><td>HTML content of your email message. Up to 5MB.</td></tr><tr><td>priority</td><td>number</td><td>Used by email clients to define a message\'s importance. From 1 to 5 where \'1\' is highest and \'5\' is the lowest priority.</td></tr><tr><td>replyTo</td><td>string</td><td>Append a reply-to address to your email message.</td></tr><tr><td>subject</td><td>string</td><td>Subject of your email. Up to 1MB.</td></tr><tr><td>to</td><td>string</td><td>Recipient email address. Multiple addresses should be defined in multiple parameters.</td></tr></tbody></table></div></article><h2>What\'s next?</h2><p>Now that you sent an email, you can learn <a href="/docs/email/checking-status.html">how to check on its status</a>.</p><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.page.title) + '"><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.site.title) + '">')}), null, opt_ijData));
};
if (goog.DEBUG) {
  tlyrr.render.soyTemplateName = 'tlyrr.render';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
tlyrr.soyweb = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(base.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + tlyrr.render(opt_data, null, opt_ijData))}), null, opt_ijData));
};
if (goog.DEBUG) {
  tlyrr.soyweb.soyTemplateName = 'tlyrr.soyweb';
}
