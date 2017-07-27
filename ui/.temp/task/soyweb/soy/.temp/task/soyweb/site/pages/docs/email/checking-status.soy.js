// This file was automatically generated from checking-status.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace bimIc.
 */

if (typeof bimIc == 'undefined') { var bimIc = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
bimIc.render = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(guide.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<h3>' + soy.$$escapeHtml(opt_data.page.title) + '</h3><h6>' + soy.$$escapeHtml(opt_data.page.description) + '</h6><aside><p>If you are unfamiliar with our API, please visit the <a href="/docs/intro/api-clients.html">API Clients</a> page first to learn how to install and configure it.</p></aside><article id="1"><h2>Checking Status</h2><p>In order to check if an email was sent or not, we can use the email ID, e.g. <code>123</code>, and request the status in the same way we sent the email.</p>' + ElectricCode.render({code: soydata.$$markUnsanitizedTextForInternalBlocks('WeDeploy\n    .email(\'<serviceID>-<projectID>.wedeploy.io\')\n    .auth(\'<your-project-master-token>\')\n    .status(\'<email-id>\')\n    .then(function(response) {\n        console.log(\'Email status:\', response);\n    })\n    .catch(function(error) {\n        // Some error has happened\n    });'), mode: 'javascript'}, null, opt_ijData) + ElectricCode.render({code: soydata.$$markUnsanitizedTextForInternalBlocks('WeDeploy.email(\'<serviceID>-<projectID>.wedeploy.io\')\n    .checkEmailStatus(id: "202605176596079530")\n    .then { status in\n        print("Email status: \\(status)")\n    }\n    .catch { error in\n        // Some error has happened\n    }'), mode: 'swift'}, null, opt_ijData) + ElectricCode.render({code: soydata.$$markUnsanitizedTextForInternalBlocks('WeDeploy\n    .email(\'<serviceID>-<projectID>.wedeploy.io\')\n    .checkEmailStatus("<emailID>")\n    .execute();'), mode: 'text/x-java'}, null, opt_ijData) + '</article><h2>What\'s next?</h2><p>Learn more about using <a href="/docs/email/environment-variables.html">environment variables on Email</a>.</p><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.page.title) + '"><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.site.title) + '">')}), null, opt_ijData));
};
if (goog.DEBUG) {
  bimIc.render.soyTemplateName = 'bimIc.render';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
bimIc.soyweb = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(base.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + bimIc.render(opt_data, null, opt_ijData))}), null, opt_ijData));
};
if (goog.DEBUG) {
  bimIc.soyweb.soyTemplateName = 'bimIc.soyweb';
}
