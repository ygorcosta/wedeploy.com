/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from sign-in-with-facebook.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace zXOcv.
 * @public
 */

goog.module('zXOcv.incrementaldom');

/** @suppress {extraRequire} */
var soy = goog.require('soy');
/** @suppress {extraRequire} */
var soydata = goog.require('soydata');
/** @suppress {extraRequire} */
goog.require('goog.i18n.bidi');
/** @suppress {extraRequire} */
goog.require('goog.asserts');
/** @suppress {extraRequire} */
goog.require('goog.string');
var IncrementalDom = goog.require('incrementaldom');
var ie_open = IncrementalDom.elementOpen;
var ie_close = IncrementalDom.elementClose;
var ie_void = IncrementalDom.elementVoid;
var ie_open_start = IncrementalDom.elementOpenStart;
var ie_open_end = IncrementalDom.elementOpenEnd;
var itext = IncrementalDom.text;
var iattr = IncrementalDom.attr;

var $templateAlias2 = Soy.getTemplate('ElectricCode.incrementaldom', 'render');

var $templateAlias1 = Soy.getTemplate('guide.incrementaldom', 'render');


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ignored, opt_ijData) {
  var param816 = function() {
    ie_open('h3');
      var dyn49 = opt_data.page.title;
      if (typeof dyn49 == 'function') dyn49(); else if (dyn49 != null) itext(dyn49);
    ie_close('h3');
    ie_open('h6');
      var dyn50 = opt_data.page.description;
      if (typeof dyn50 == 'function') dyn50(); else if (dyn50 != null) itext(dyn50);
    ie_close('h6');
    ie_open('aside');
      ie_open('p');
        itext('If you are unfamiliar with our API, please visit the ');
        ie_open('a', null, null,
            'href', '/docs/intro/api-clients.html');
          itext('API Clients');
        ie_close('a');
        itext(' page first to learn how to install and configure it.');
      ie_close('p');
    ie_close('aside');
    ie_open('article', null, null,
        'id', '1');
      ie_open('h2');
        itext('Authenticate');
      ie_close('h2');
      ie_open('p');
        itext('Your users can authenticate in a way that redirects them to Facebook\'s sign-in page, where they\'re going to type their credentials, and then redirect back to your application.');
      ie_close('p');
      $templateAlias2({code: 'var auth = WeDeploy.auth(\'https://<serviceID>-<projectID>.wedeploy.io\');\n\nvar provider = new auth.provider.Facebook();\nprovider.setProviderScope("email");\n\nauth.signInWithRedirect(provider);\n\nauth.onSignIn(function(user) {\n    // Fires when user is signed in after redirect.\n});', mode: 'javascript'}, null, opt_ijData);
      $templateAlias2({code: 'let auth = WeDeploy.auth(\'https://<serviceID>-<projectID>.wedeploy.io\');\nlet provider = AuthProvider(provider: .facebook, redirectUri: "my-app://")\nprovider.providerScope = "email"\n\nauth.signInWithRedirect(provider: provider) { (user, error) in\n    // Fires when user is signed in after redirect.\n}\n\n//Add WeDeploy.auth(\'https://<serviceID>-<projectID>.wedeploy.io\').handle(url: url) in AppDelegate\'s open url method', mode: 'swift'}, null, opt_ijData);
      $templateAlias2({code: '// In AndroidManifest.xml, declare an intent filter for the Activity you want to receive the token.\n// Don\'t forget to replace [mypackagename] with you application package name.\n<intent-filter>\n    <action android:name="android.intent.action.VIEW" />\n    <category android:name="android.intent.category.DEFAULT" />\n    <category android:name="android.intent.category.BROWSABLE" />\n    <data android:scheme="oauth-wedeploy" android:host="[mypackagename]" />\n</intent-filter>\n\n// On your Activity:\nAuthProvider provider = new AuthProvider.Builder()\n    .redirectUri("oauth-wedeploy://[mypackagename]")\n    .provider(Provider.FACEBOOK)\n    .providerScope("email")\n    .build();\n\nWeDeploy.auth(authUrl)\n    .signIn(this, provider);\n\n// Use Auth auth = TokenAuth.getAuthFromIntent(intent); to get the token from the Intent', mode: 'text/x-java'}, null, opt_ijData);
      ie_open('aside');
        ie_open('h6');
          ie_void('span', null, null,
              'class', 'icon-16-alert');
          itext(' Attention');
        ie_close('h6');
        ie_open('p');
          itext('Sign-in with Facebook provider is currently not available in Node.js and React Native environments.');
        ie_close('p');
      ie_close('aside');
    ie_close('article');
    ie_open('article', null, null,
        'id', '2');
      ie_open('h2');
        itext('Setup app client id and secret');
      ie_close('h2');
      ie_open('p');
        itext('Create a client id and client secret by ');
        ie_open('a', null, null,
            'href', 'https://developers.facebook.com/docs/apps/register');
          itext('registering your application');
        ie_close('a');
        itext(' on Facebook.');
      ie_close('p');
      ie_open('aside');
        ie_open('p');
          itext('Please be sure to add the callback url ');
          ie_open('code');
            itext('https://<authID>-<projectID>.wedeploy.io/oauth/token');
          ie_close('code');
          itext(' in your application. For local development, use ');
          ie_open('code');
            itext('wedeploy.me');
          ie_close('code');
          itext(' instead. To use with custom domains you can change the sufix ');
          ie_open('code');
            itext('<projectID>.wedeploy.io');
          ie_close('code');
          itext(' for your domain.');
        ie_close('p');
      ie_close('aside');
      ie_open('p');
        itext('After retrieving the client id and client secret you can configure them as environment variables on ');
        ie_open('code');
          itext('wedeploy.json');
        ie_close('code');
        itext('.');
      ie_close('p');
      $templateAlias2({code: '{\n    "id": "auth",\n    "image": "wedeploy/auth",\n    "env": {\n        "WEDEPLOY_AUTH_FACEBOOK": "true",\n        "WEDEPLOY_AUTH_FACEBOOK_CLIENT_ID": "<your-facebook-app-id>",\n        "WEDEPLOY_AUTH_FACEBOOK_CLIENT_SECRET": "<your-facebook-app-secret>"\n    }\n}', mode: 'application/json'}, null, opt_ijData);
      ie_open('p');
        itext('Or you can add those environment variables ');
        ie_open('a', null, null,
            'href', '/docs/intro/environment-variables.html#2');
          itext('using the Console');
        ie_close('a');
        itext('.');
      ie_close('p');
      ie_open('p');
        ie_open('img', null, null,
            'src', '/images/docs/auth/sign-in-with-facebook--project-container-environment.png',
            'alt', 'Service Environment');
        ie_close('img');
      ie_close('p');
    ie_close('article');
    ie_open('h2');
      itext('What\'s next?');
    ie_close('h2');
    ie_open('p');
      itext('Now we\'re ready to start enabling other ');
      ie_open('a', null, null,
          'href', '/docs/auth/sign-in-with-google.html');
        itext('login providers with Google');
      ie_close('a');
      itext('.');
    ie_close('p');
    ie_open('input', null, null,
        'type', 'hidden',
        'value', opt_data.page.title);
    ie_close('input');
    ie_open('input', null, null,
        'type', 'hidden',
        'value', opt_data.site.title);
    ie_close('input');
  };
  $templateAlias1(soy.$$assignDefaults({content: param816}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'zXOcv.render';
}

exports.render.params = ["page","site"];
exports.render.types = {"page":"any","site":"any"};
templates = exports;
return exports;

});

class zXOcv extends Component {}
Soy.register(zXOcv, templates);
export { zXOcv, templates };
export default templates;
/* jshint ignore:end */
