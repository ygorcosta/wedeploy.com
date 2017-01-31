/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from sign-in-with-github.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace docsAuthSignInWithGithubHtml.
 * @public
 */

goog.module('docsAuthSignInWithGithubHtml.incrementaldom');

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
  opt_data = opt_data || {};
  var param474 = function() {
    ie_open('h1');
      itext('Sign-in With GitHub');
    ie_close('h1');
    ie_open('h6');
      itext('You can let your users authenticate using their GitHub Accounts by integrating GitHub Sign-In into your app. ');
      ie_open('em');
        itext('WeDeploy\u2122 Authentication');
      ie_close('em');
      itext('.');
    ie_close('h6');
    ie_open('article', null, null,
        'id', 'article_1');
      ie_open('h2');
        itext('Sign-in with gitHub');
      ie_close('h2');
      ie_open('p');
        itext('To sign in by redirecting to the sign-in page, call ');
        ie_open('code');
          itext('signInWithRedirect');
        ie_close('code');
        itext(':');
      ie_close('p');
      $templateAlias2({code: 'var auth = WeDeploy.auth();\n\nvar provider = new auth.provider.Github();\nprovider.setProviderScope("user:email");\n\nauth.signInWithRedirect(provider);\n\nauth.onSignIn(function(user) {\n    // Fires when user is signed in after redirect.\n});', mode: 'js'}, null, opt_ijData);
    ie_close('article');
    ie_open('article', null, null,
        'id', 'article_2');
      ie_open('h2');
        itext('Setup app client id and secret');
      ie_close('h2');
      ie_open('p');
        itext('Create a client id and client secret by ');
        ie_open('a', null, null,
            'href', 'https://github.com/settings/applications/new');
          itext('registering your application');
        ie_close('a');
        itext(' on GitHub.');
      ie_close('p');
      ie_open('blockquote');
        ie_open('p');
          itext('Please be sure to add the callback url ');
          ie_open('code');
            itext('http://<auth-container-id>.<project-id>.wedeploy.io/oauth/token');
          ie_close('code');
          itext(' in your application. For local development, use ');
          ie_open('code');
            itext('wedeploy.me');
          ie_close('code');
          itext(' instead. To use with custom domains you can change the sufix ');
          ie_open('code');
            itext('<project-id>.wedeploy.io');
          ie_close('code');
          itext(' for your domain.');
        ie_close('p');
      ie_close('blockquote');
      ie_open('p');
        itext('After retrieving the client id and client secret you can configure them as environment variables of the authentication ');
        ie_open('code');
          itext('container.json');
        ie_close('code');
        itext('.');
      ie_close('p');
      $templateAlias2({code: '{\n    "id": "auth",\n    "name": "Auth",\n    "type": "wedeploy/auth",\n    "env": {\n        "WEDEPLOY_AUTH_GITHUB": "true",\n        "WEDEPLOY_AUTH_GITHUB_CLIENT_ID": "<your-github-client-id>",\n        "WEDEPLOY_AUTH_GITHUB_CLIENT_SECRET": "<your-github-client-secret>"\n    }\n}', mode: 'json'}, null, opt_ijData);
      ie_open('p');
        itext('Or you can add those environment variables using the dashboard.');
      ie_close('p');
      ie_open('p');
        ie_open('img', null, null,
            'src', 'https://cloud.githubusercontent.com/assets/1435318/20008146/296d8a62-a27e-11e6-9e5a-f54bac5a5a85.png',
            'alt', 'Project Container Environment');
        ie_close('img');
      ie_close('p');
    ie_close('article');
    ie_open('h2');
      itext('What\'s next?');
    ie_close('h2');
    ie_open('ul');
      ie_open('li');
        itext('Now we\'re ready to start ');
        ie_open('a', null, null,
            'href', '/docs/auth/js/sign-in-with-google.html');
          itext('enabling other login providers into your app');
        ie_close('a');
        itext('.');
      ie_close('li');
    ie_close('ul');
  };
  $templateAlias1(soy.$$assignDefaults({content: param474}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'docsAuthSignInWithGithubHtml.render';
}

exports.render.params = [];
exports.render.types = {};
templates = exports;
return exports;

});

class docsAuthSignInWithGithubHtml extends Component {}
Soy.register(docsAuthSignInWithGithubHtml, templates);
export { docsAuthSignInWithGithubHtml, templates };
export default templates;
/* jshint ignore:end */
