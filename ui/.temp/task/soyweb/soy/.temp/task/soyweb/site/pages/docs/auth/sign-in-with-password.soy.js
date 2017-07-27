// This file was automatically generated from sign-in-with-password.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace hDbAt.
 */

if (typeof hDbAt == 'undefined') { var hDbAt = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
hDbAt.render = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(guide.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<h3>' + soy.$$escapeHtml(opt_data.page.title) + '</h3><h6>' + soy.$$escapeHtml(opt_data.page.description) + '</h6><aside><p>If you are unfamiliar with our API, please visit the <a href="/docs/intro/api-clients.html">API Clients</a> page first to learn how to install and configure it.</p></aside><article id="1"><h2>Authenticate</h2><p>To sign in using email and password, call this method:</p>' + ElectricCode.render({code: soydata.$$markUnsanitizedTextForInternalBlocks('WeDeploy\n    .auth(\'https://<serviceID>-<projectID>.wedeploy.io\')\n    .signInWithEmailAndPassword("user@domain.com", "password")\n    .then(function(user) {\n        // User is signed in.\n    })\n    .catch(function(err) {\n        // User is not signed in.\n    });'), mode: 'javascript'}, null, opt_ijData) + ElectricCode.render({code: soydata.$$markUnsanitizedTextForInternalBlocks('WeDeploy\n    .auth(\'https://<serviceID>-<projectID>.wedeploy.io\')\n    .signInWith(username: "user@domain.com", password: "password")\n    .then { auth -> Void in\n        // User is signed in.\n    }\n    .catch { err in\n        // User is not signed in.\n    }'), mode: 'swift'}, null, opt_ijData) + ElectricCode.render({code: soydata.$$markUnsanitizedTextForInternalBlocks('WeDeploy\n    .auth("<auth-url>")\n    .signIn("user@domain.com", "password")\n    .execute();'), mode: 'text/x-java'}, null, opt_ijData) + '</article><h2>What\'s next?</h2><p>Now we\'re ready to start enabling other <a href="/docs/auth/sign-in-with-facebook.html">login providers like Facebook</a>.</p><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.page.title) + '"><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.site.title) + '">')}), null, opt_ijData));
};
if (goog.DEBUG) {
  hDbAt.render.soyTemplateName = 'hDbAt.render';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
hDbAt.soyweb = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(base.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + hDbAt.render(opt_data, null, opt_ijData))}), null, opt_ijData));
};
if (goog.DEBUG) {
  hDbAt.soyweb.soyTemplateName = 'hDbAt.soyweb';
}
