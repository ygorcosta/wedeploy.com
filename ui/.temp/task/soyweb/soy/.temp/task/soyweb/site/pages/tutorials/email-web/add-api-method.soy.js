// This file was automatically generated from add-api-method.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace fnXOW.
 */

if (typeof fnXOW == 'undefined') { var fnXOW = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
fnXOW.render = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(tutorial.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<h4>Add API Method</h4><p>Now we want to add a script that will send an email. To do this, go to <code>tutorial-email-web/hosting/main.js</code> and paste this code:</p>' + ElectricCode.render({code: soydata.$$markUnsanitizedTextForInternalBlocks('WeDeploy\n    .email(\'email-<projectID>.wedeploy.sh\')\n    .auth(\'yourMasterToken\')\n    .from(form.from.value)\n    .to(form.to.value)\n    .subject(form.subject.value)\n    .message(form.message.value)\n    .send()\n    .then(function(response) {\n        if (response.succeeded()) {\n            form.reset();\n            alert(\'Email sent! Wait a little bit until it arrives :)\');\n            console.info(\'Email ID:\', response);\n        }\n        else {\n            alert(\'Email was not sent\');\n        }\n    })\n    .catch(function(error) {\n        alert(\'Email error:\' error);\n    });'), mode: 'javascript'}, null, opt_ijData) + '<p><strong>Note:</strong> make sure to replace <code>&lt;projectID&gt;</code> with the id of your project.</p><h4>Add master token</h4><p>In order for your email request to be authorized, you must add your project\'s unique Master Token.</p><ol><li>Go to the <a href="https://console.wedeploy.com" target="_blank">WeDeploy Console</a></li><li>Click on your project</li><li>Go to the <em>Settings</em> section</li><li>Copy your Master Token</li><li>Paste it into the <code>.auth(\'yourMasterToken\')</code> element in the code above on <code>main.js</code></li></ol><aside><h6><span class="icon-16-star"></span> Pro Tip</h6><p>As you can see, the input values from the form are being used as email parameters (from, to, subject, etc). We have a bunch of parameters so you can fully configure your email posts.</p><p>Want to see the full list of <a href="/docs/email/sending-email.html" target="_blank">Email Parameters</a>?</p></aside><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.page.title) + '"><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.site.title) + '">')}), null, opt_ijData));
};
if (goog.DEBUG) {
  fnXOW.render.soyTemplateName = 'fnXOW.render';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
fnXOW.soyweb = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(base.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + fnXOW.render(opt_data, null, opt_ijData))}), null, opt_ijData));
};
if (goog.DEBUG) {
  fnXOW.soyweb.soyTemplateName = 'fnXOW.soyweb';
}
