// This file was automatically generated from add-api-methods.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace RaDLb.
 */

if (typeof RaDLb == 'undefined') { var RaDLb = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
RaDLb.render = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(tutorial.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<h4>Add API Methods</h4><h6>Create User</h6><p>First, let\'s add the code that will allow users to create an account.</p><p>To do this, go to <code>tutorial-auth-ios/app/tutorial-auth-ios/SignUpViewController.swift</code> and paste this code in the &quot;signUpButtonClick&quot; function:</p>' + ElectricCode.render({code: soydata.$$markUnsanitizedTextForInternalBlocks('WeDeploy.auth("auth-<projectID>.wedeploy.sh")\n    .createUser(email: emailText, password: passwordText, name: nameText)\n    .toCallback { auth, error in\n        if let _ = auth {\n            self.showAlert(with: "Success", message: "Sign-up successfully")\n        }\n        else {\n            self.showAlert(with: "Error", message: "Sign-up failed.")\n        }\n    }'), mode: 'swift'}, null, opt_ijData) + '<p><strong>Note:</strong> make sure to replace <code>&lt;projectID&gt;</code> with the id of your project.</p><h6>Sign-in</h6><p>Next, let\'s add the code that will allow users to sign-in.</p><p>First of all, go to <code>tutorial-auth-ios/app/tutorial-auth-ios/LoginViewController.swift</code>, and paste this code in the &quot;loginButtonClick&quot; function:</p>' + ElectricCode.render({code: soydata.$$markUnsanitizedTextForInternalBlocks('WeDeploy.auth("auth-<projectID>.wedeploy.sh")\n    .signInWith(username: usernameText, password: passwordText)\n    .toCallback { auth, error in\n        self.handleLoginResult(auth: auth, error: error)\n    }'), mode: 'swift'}, null, opt_ijData) + '<p><strong>Note:</strong> make sure to replace <code>&lt;projectID&gt;</code> with the id of your project.</p><aside><h6><span class="icon-16-star"></span> Pro Tip</h6><p>In the examples above we use the toCallback method to handle the response with a callback, which is the most typical way of doing it in the iOS ecosystem, but we can also handle the result using a promise:</p>' + ElectricCode.render({code: soydata.$$markUnsanitizedTextForInternalBlocks('WeDeploy.auth("auth-<projectID>.wedeploy.sh")\n    .signInWith(username: usernameText, password: passwordText)\n    .then { auth in\n        self.handleLoginResult(auth: auth, error: nil)\n    }\n    .catch { error in\n        self.handleLoginResult(auth: nil, error: error)\n    }'), mode: 'swift'}, null, opt_ijData) + '<p>or even a observable!</p>' + ElectricCode.render({code: soydata.$$markUnsanitizedTextForInternalBlocks('WeDeploy.auth("auth-<projectID>.wedeploy.sh")\n    .signInWith(username: usernameText, password: passwordText)\n    .toObservable()\n    .subscribe(onNext: { auth in\n        self.handleLoginResult(auth: auth, error: nil)\n    }, onError: { error in\n        self.handleLoginResult(auth: nil, error: error)\n    })'), mode: 'swift'}, null, opt_ijData) + '</aside><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.page.title) + '"><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.site.title) + '">')}), null, opt_ijData));
};
if (goog.DEBUG) {
  RaDLb.render.soyTemplateName = 'RaDLb.render';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
RaDLb.soyweb = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(base.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + RaDLb.render(opt_data, null, opt_ijData))}), null, opt_ijData));
};
if (goog.DEBUG) {
  RaDLb.soyweb.soyTemplateName = 'RaDLb.soyweb';
}
