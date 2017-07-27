// This file was automatically generated from add-api-methods.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace nRFbm.
 */

if (typeof nRFbm == 'undefined') { var nRFbm = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
nRFbm.render = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(tutorial.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<h4>Add API Methods</h4><h6>Create User</h6><p>First, let\'s add the code that will allow users to create an account.</p><p>To do this, go to <code>SignUpActivity.java</code> and paste this code in the &quot;doSignUp&quot; method:</p>' + ElectricCode.render({code: soydata.$$markUnsanitizedTextForInternalBlocks('weDeploy.auth("auth-<projectID>.wedeploy.sh")\n    .createUser(email, password, name)\n    .execute(new Callback() {\n        @Override\n        public void onSuccess(Response response) {\n            showAlert("Success", "Signed up successfully");\n        }\n\n        @Override\n        public void onFailure(Exception e) {\n            Log.e("Error", "Sign up error", e);\n            showAlert("Error", "Sign up error");\n        }\n    });'), mode: 'text/x-java'}, null, opt_ijData) + '<p><strong>Note:</strong> make sure to replace <code>&lt;projectID&gt;</code> with the id of your project.</p><h6>Sign-in</h6><p>Next, let\'s add the code that will allow users to sign-in.</p><p>First of all, go to <code>LoginActivity.java</code>, and paste this code in the &quot;doLogin&quot; method:</p>' + ElectricCode.render({code: soydata.$$markUnsanitizedTextForInternalBlocks('weDeploy.auth("auth-<projectID>.wedeploy.sh")\n    .signIn(email, password).execute(new Callback() {\n        @Override\n        public void onSuccess(Response response) {\n            showAlert("Success", "Signed in");\n        }\n\n        @Override\n        public void onFailure(Exception e) {\n            showAlert("Error", "Login error");\n        }\n    });'), mode: 'text/x-java'}, null, opt_ijData) + '<p><strong>Note:</strong> make sure to replace <code>&lt;projectID&gt;</code> with the id of your project.</p><aside><h6><span class="icon-16-star"></span> Pro Tip</h6><p>In the examples above we use the execute(callback) method to handle the response with a callback, which is the most typical way of doing it in the Android ecosystem, but we can also handle the result using a RxJava Single, which is similar to an Observable, but it either emits one value or an error notification:</p>' + ElectricCode.render({code: soydata.$$markUnsanitizedTextForInternalBlocks('weDeploy.auth("auth-<projectID>.wedeploy.sh")\n    .signIn(email, password)\n    .asSingle()\n    .subscribe(new DisposableSingleObserver<Response>() {\n        @Override\n        public void onSuccess(Response response) {\n            showAlert("Success", "Signed in");\n        }\n\n        @Override\n        public void onError(Throwable e) {\n            showAlert("Error", "Login error");\n        }\n    });'), mode: 'text/x-java'}, null, opt_ijData) + '</aside><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.page.title) + '"><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.site.title) + '">')}), null, opt_ijData));
};
if (goog.DEBUG) {
  nRFbm.render.soyTemplateName = 'nRFbm.render';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
nRFbm.soyweb = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(base.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + nRFbm.render(opt_data, null, opt_ijData))}), null, opt_ijData));
};
if (goog.DEBUG) {
  nRFbm.soyweb.soyTemplateName = 'nRFbm.soyweb';
}
