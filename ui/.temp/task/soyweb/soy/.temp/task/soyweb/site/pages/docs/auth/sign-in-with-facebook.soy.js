// This file was automatically generated from sign-in-with-facebook.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace zXOcv.
 */

if (typeof zXOcv == 'undefined') { var zXOcv = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
zXOcv.render = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(guide.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<h3>' + soy.$$escapeHtml(opt_data.page.title) + '</h3><h6>' + soy.$$escapeHtml(opt_data.page.description) + '</h6><aside><p>If you are unfamiliar with our API, please visit the <a href="/docs/intro/api-clients.html">API Clients</a> page first to learn how to install and configure it.</p></aside><article id="1"><h2>Authenticate</h2><p>Your users can authenticate in a way that redirects them to Facebook\'s sign-in page, where they\'re going to type their credentials, and then redirect back to your application.</p>' + ElectricCode.render({code: soydata.$$markUnsanitizedTextForInternalBlocks('var auth = WeDeploy.auth(\'https://<serviceID>-<projectID>.wedeploy.io\');\n\nvar provider = new auth.provider.Facebook();\nprovider.setProviderScope("email");\n\nauth.signInWithRedirect(provider);\n\nauth.onSignIn(function(user) {\n    // Fires when user is signed in after redirect.\n});'), mode: 'javascript'}, null, opt_ijData) + ElectricCode.render({code: soydata.$$markUnsanitizedTextForInternalBlocks('let auth = WeDeploy.auth(\'https://<serviceID>-<projectID>.wedeploy.io\');\nlet provider = AuthProvider(provider: .facebook, redirectUri: "my-app://")\nprovider.providerScope = "email"\n\nauth.signInWithRedirect(provider: provider) { (user, error) in\n    // Fires when user is signed in after redirect.\n}\n\n//Add WeDeploy.auth(\'https://<serviceID>-<projectID>.wedeploy.io\').handle(url: url) in AppDelegate\'s open url method'), mode: 'swift'}, null, opt_ijData) + ElectricCode.render({code: soydata.$$markUnsanitizedTextForInternalBlocks('// In AndroidManifest.xml, declare an intent filter for the Activity you want to receive the token.\n// Don\'t forget to replace [mypackagename] with you application package name.\n<intent-filter>\n    <action android:name="android.intent.action.VIEW" />\n    <category android:name="android.intent.category.DEFAULT" />\n    <category android:name="android.intent.category.BROWSABLE" />\n    <data android:scheme="oauth-wedeploy" android:host="[mypackagename]" />\n</intent-filter>\n\n// On your Activity:\nAuthProvider provider = new AuthProvider.Builder()\n    .redirectUri("oauth-wedeploy://[mypackagename]")\n    .provider(Provider.FACEBOOK)\n    .providerScope("email")\n    .build();\n\nWeDeploy.auth(authUrl)\n    .signIn(this, provider);\n\n// Use Auth auth = TokenAuth.getAuthFromIntent(intent); to get the token from the Intent'), mode: 'text/x-java'}, null, opt_ijData) + '<aside><h6><span class="icon-16-alert"></span> Attention</h6><p>Sign-in with Facebook provider is currently not available in Node.js and React Native environments.</p></aside></article><article id="2"><h2>Setup app client id and secret</h2><p>Create a client id and client secret by <a href="https://developers.facebook.com/docs/apps/register">registering your application</a> on Facebook.</p><aside><p>Please be sure to add the callback url <code>https://&lt;authID&gt;-&lt;projectID&gt;.wedeploy.io/oauth/token</code> in your application. For local development, use <code>wedeploy.me</code> instead. To use with custom domains you can change the sufix <code>&lt;projectID&gt;.wedeploy.io</code> for your domain.</p></aside><p>After retrieving the client id and client secret you can configure them as environment variables on <code>wedeploy.json</code>.</p>' + ElectricCode.render({code: soydata.$$markUnsanitizedTextForInternalBlocks('{\n    "id": "auth",\n    "image": "wedeploy/auth",\n    "env": {\n        "WEDEPLOY_AUTH_FACEBOOK": "true",\n        "WEDEPLOY_AUTH_FACEBOOK_CLIENT_ID": "<your-facebook-app-id>",\n        "WEDEPLOY_AUTH_FACEBOOK_CLIENT_SECRET": "<your-facebook-app-secret>"\n    }\n}'), mode: 'application/json'}, null, opt_ijData) + '<p>Or you can add those environment variables <a href="/docs/intro/environment-variables.html#2">using the Console</a>.</p><p><img src="/images/docs/auth/sign-in-with-facebook--project-container-environment.png" alt="Service Environment"></p></article><h2>What\'s next?</h2><p>Now we\'re ready to start enabling other <a href="/docs/auth/sign-in-with-google.html">login providers with Google</a>.</p><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.page.title) + '"><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.site.title) + '">')}), null, opt_ijData));
};
if (goog.DEBUG) {
  zXOcv.render.soyTemplateName = 'zXOcv.render';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
zXOcv.soyweb = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(base.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + zXOcv.render(opt_data, null, opt_ijData))}), null, opt_ijData));
};
if (goog.DEBUG) {
  zXOcv.soyweb.soyTemplateName = 'zXOcv.soyweb';
}
