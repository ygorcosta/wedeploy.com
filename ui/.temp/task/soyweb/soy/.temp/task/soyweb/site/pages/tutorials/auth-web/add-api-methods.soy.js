// This file was automatically generated from add-api-methods.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace VCzfz.
 */

if (typeof VCzfz == 'undefined') { var VCzfz = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
VCzfz.render = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(tutorial.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<h4>Add API Methods</h4><h6>Create User</h6><p>First, let\'s add a script that will allow users to create an account.</p><p>To do this, go to <code>tutorial-auth-web/hosting/main.js</code> and paste this code between the &quot;create user method&quot; comments:</p>' + ElectricCode.render({code: soydata.$$markUnsanitizedTextForInternalBlocks('var auth = WeDeploy.auth(\'auth-<projectID>.wedeploy.sh\');\n\nfunction submitForm() {\n    auth.createUser({\n        email: user.email.value,\n        name: user.name.value,\n        password: user.password.value\n    })\n    .then(function() {\n        alert(\'Account successfully created!\');\n        signIn();\n        user.reset();\n    })\n    .catch(function() {\n        alert(\'Sign-up failed. Try another email.\');\n        user.reset();\n    });\n}'), mode: 'javascript'}, null, opt_ijData) + '<p><strong>Note:</strong> make sure to replace <code>&lt;projectID&gt;</code> with the id of your project.</p><h6>Sign-in</h6><p>Next, let\'s add a script that will allow users to sign-in.</p><p>In the same file as above, paste this code between the &quot;sign-in method&quot; comments:</p>' + ElectricCode.render({code: soydata.$$markUnsanitizedTextForInternalBlocks('function signIn() {\n    auth.signInWithEmailAndPassword(user.email.value, user.password.value)\n    .then(function() {\n        document.location.href = \'/welcome.html\';\n    })\n    .catch(function() {\n        alert(\'Sign-in failed. Try another email/password.\');\n    });\n}'), mode: 'javascript'}, null, opt_ijData) + '<h6>Select current user</h6><p>Now, let\'s add a script that will show the current user\'s name.</p><p>In the same file as above, paste this code between the &quot;current user&quot; comments:</p>' + ElectricCode.render({code: soydata.$$markUnsanitizedTextForInternalBlocks('document.querySelector(\'.username\').innerHTML = auth.currentUser.name;'), mode: 'javascript'}, null, opt_ijData) + '<input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.page.title) + '"><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.site.title) + '">')}), null, opt_ijData));
};
if (goog.DEBUG) {
  VCzfz.render.soyTemplateName = 'VCzfz.render';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
VCzfz.soyweb = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(base.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + VCzfz.render(opt_data, null, opt_ijData))}), null, opt_ijData));
};
if (goog.DEBUG) {
  VCzfz.soyweb.soyTemplateName = 'VCzfz.soyweb';
}
