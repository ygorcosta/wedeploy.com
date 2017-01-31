/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from getting-started.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace docsAuthGettingStartedHtml.
 * @public
 */

goog.module('docsAuthGettingStartedHtml.incrementaldom');

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
  var param366 = function() {
    ie_open('h1');
      itext('Auth');
    ie_close('h1');
    ie_open('h6');
      itext('Allow users to authenticate using passwords, popular federated identity providers like Google, Facebook, GitHub, and more using ');
      ie_open('em');
        itext('WeDeploy\u2122 Auth');
      ie_close('em');
      itext('.');
    ie_close('h6');
    ie_open('div', null, null,
        'class', 'guide-btn-cta');
      ie_open('a', null, null,
          'class', 'btn btn-accent btn-sm',
          'href', 'http://boilerplate-auth.wedeploy.io',
          'target', '_blank');
        ie_void('span', null, null,
            'class', 'icon-16-external');
        itext('See Live Demo');
      ie_close('a');
    ie_close('div');
    ie_open('div', null, null,
        'class', 'guide-aux-cta');
      itext('or read the ');
      ie_open('a', null, null,
          'href', 'https://github.com/wedeploy/boilerplate-auth/tree/js',
          'target', '_blank');
        itext('source code');
      ie_close('a');
      itext('.');
    ie_close('div');
    ie_open('article', null, null,
        'id', 'article_1');
      ie_open('h2');
        itext('Install dependencies');
      ie_close('h2');
      ie_open('p');
        itext('This section assumes that you already have the ');
        ie_open('strong');
          itext('WeDeploy CLI');
        ie_close('strong');
        itext(' installed and ');
        ie_open('strong');
          itext('Docker');
        ie_close('strong');
        itext(' running. Make sure to ');
        ie_open('a', null, null,
            'href', '/docs/intro/using-the-command-line.html');
          itext('visit the installation guide');
        ie_close('a');
        itext(' if you need help setting that up.');
      ie_close('p');
      ie_open('p');
        itext('We also feature code snippets using the API Client, ');
        ie_open('a', null, null,
            'href', '/docs/intro/using-the-api-client.html');
          itext('visit this guide');
        ie_close('a');
        itext(' in order to start using it.');
      ie_close('p');
    ie_close('article');
    ie_open('article', null, null,
        'id', 'article_2');
      ie_open('h2');
        itext('Running locally');
      ie_close('h2');
      ie_open('ol');
        ie_open('li');
          itext('Start local infrastructure:');
        ie_close('li');
      ie_close('ol');
      $templateAlias2({code: 'we run', mode: 'xml'}, null, opt_ijData);
      ie_open('ol', null, null,
          'start', '2');
        ie_open('li');
          itext('Clone this repository:');
        ie_close('li');
      ie_close('ol');
      $templateAlias2({code: 'git clone -b js https://github.com/wedeploy/boilerplate-auth.git boilerplate-auth-js\ncd boilerplate-auth-js', mode: 'xml'}, null, opt_ijData);
      ie_open('ol', null, null,
          'start', '3');
        ie_open('li');
          itext('Link this container with the local infrastructure:');
        ie_close('li');
      ie_close('ol');
      $templateAlias2({code: 'we link', mode: 'xml'}, null, opt_ijData);
      ie_open('ol', null, null,
          'start', '4');
        ie_open('li');
          itext('Now your container is ready to be used:');
        ie_close('li');
      ie_close('ol');
      $templateAlias2({code: 'http://authdemo.wedeploy.me', mode: 'xml'}, null, opt_ijData);
    ie_close('article');
    ie_open('article', null, null,
        'id', 'article_3');
      ie_open('h2');
        itext('Deploying to the cloud');
      ie_close('h2');
      ie_open('ol');
        ie_open('li');
          ie_open('a', null, null,
              'href', 'https://github.com/wedeploy/boilerplate-auth/fork');
            itext('Fork this repository');
          ie_close('a');
          itext('.');
        ie_close('li');
        ie_open('li');
          itext('Go to the ');
          ie_open('a', null, null,
              'href', 'http://dashboard.wedeploy.com');
            itext('Dashboard');
          ie_close('a');
          itext(' and create a project.');
        ie_close('li');
        ie_open('li');
          itext('In the sidebar, click on ');
          ie_open('em');
            itext('Deployment');
          ie_close('em');
          itext('.');
        ie_close('li');
        ie_open('li');
          itext('Using your local machine, clone your Github fork:');
        ie_close('li');
      ie_close('ol');
      $templateAlias2({code: 'git clone -b js https://github.com/<username>/boilerplate-auth', mode: 'xml'}, null, opt_ijData);
      ie_open('ol', null, null,
          'start', '5');
        ie_open('li');
          itext('Get into the folder: ');
          ie_open('code');
            itext('cd boilerplate-auth');
          ie_close('code');
          itext('.');
        ie_close('li');
        ie_open('li');
          itext('Using the content on ');
          ie_open('em');
            itext('Deployment');
          ie_close('em');
          itext(' page. Add the WeDeploy remote url:');
        ie_close('li');
      ie_close('ol');
      $templateAlias2({code: 'git remote add wedeploy http://git.wedeploy.com/<projectID>.git', mode: 'xml'}, null, opt_ijData);
      ie_open('ol', null, null,
          'start', '7');
        ie_open('li');
          itext('Push your data to wedeploy git server: ');
          ie_open('code');
            itext('git push wedeploy js:master');
          ie_close('code');
          itext('.');
        ie_close('li');
        ie_open('li');
          itext('Once you see it in the Dashboard, your container will be ready to be used.');
        ie_close('li');
      ie_close('ol');
      $templateAlias2({code: 'http://boilerplate-auth.wedeploy.io', mode: 'xml'}, null, opt_ijData);
    ie_close('article');
    ie_open('article', null, null,
        'id', 'article_4');
      ie_open('h2');
        itext('Key capabilities');
      ie_close('h2');
      ie_open('p');
        itext('Easily add a complete sign-in system to your application. WeDeploy provides a ready-to-use auth solution that handles the UI flows for signing in users with email addresses and passwords, Google Sign-In, GitHub and Facebook Login.');
      ie_close('p');
      ie_open('p');
        ie_open('strong');
          itext('Email and password');
        ie_close('strong');
      ie_close('p');
      ie_open('p');
        itext('Authenticate users with their email addresses and passwords. Provides methods to create and manage users that use their email addresses and passwords to sign in, and sending password reset emails.');
      ie_close('p');
      ie_open('p');
        ie_open('strong');
          itext('Google');
        ie_close('strong');
      ie_close('p');
      ie_open('p');
        itext('Create a client id and client secret by ');
        ie_open('a', null, null,
            'href', 'https://developers.google.com/identity/protocols/OAuth2');
          itext('registering your application');
        ie_close('a');
        itext(' on Google.');
      ie_close('p');
      ie_open('p');
        ie_open('strong');
          itext('GitHub');
        ie_close('strong');
      ie_close('p');
      ie_open('p');
        itext('Create a client id and client secret by ');
        ie_open('a', null, null,
            'href', 'https://github.com/settings/applications/new');
          itext('registering your application');
        ie_close('a');
        itext(' on GitHub.');
      ie_close('p');
      ie_open('p');
        ie_open('strong');
          itext('Facebook');
        ie_close('strong');
      ie_close('p');
      ie_open('p');
        itext('Create an app ID by ');
        ie_open('a', null, null,
            'href', 'https://developers.facebook.com/docs/apps/register');
          itext('registering your application');
        ie_close('a');
        itext(' on Facebook.');
      ie_close('p');
      ie_open('p');
        ie_open('strong');
          itext('Manage Users');
        ie_close('strong');
      ie_close('p');
      ie_open('p');
        itext('Create, delete or update users with a simple API.');
      ie_close('p');
    ie_close('article');
    ie_open('article', null, null,
        'id', 'article_5');
      ie_open('h2');
        itext('Initializing auth service');
      ie_close('h2');
      ie_open('p');
        itext('By using WeDeploy API client you can initialize the authentication service by referencing its URL, like in the example below.');
      ie_close('p');
      $templateAlias2({code: 'WeDeploy.auth(\'http://<containerID>.<projectID>.wedeploy.me\');', mode: 'js'}, null, opt_ijData);
      ie_open('p');
        itext('After initializing the authentication service URL, WeDeploy client stores its information for future calls.');
      ie_close('p');
      ie_open('p');
        itext('Note that if you are initializing an auth service pointing to the Cloud you should use the proper domain:');
      ie_close('p');
      $templateAlias2({code: 'WeDeploy.auth(\'http://<containerID>.<projectID>.wedeploy.io\');', mode: 'js'}, null, opt_ijData);
    ie_close('article');
    ie_open('h2');
      itext('What\'s next?');
    ie_close('h2');
    ie_open('ul');
      ie_open('li');
        itext('Now we\'re ready to ');
        ie_open('a', null, null,
            'href', '/docs/auth/js/manage-users.html');
          itext('start managing your users');
        ie_close('a');
        itext('.');
      ie_close('li');
    ie_close('ul');
  };
  $templateAlias1(soy.$$assignDefaults({content: param366}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'docsAuthGettingStartedHtml.render';
}

exports.render.params = [];
exports.render.types = {};
templates = exports;
return exports;

});

class docsAuthGettingStartedHtml extends Component {}
Soy.register(docsAuthGettingStartedHtml, templates);
export { docsAuthGettingStartedHtml, templates };
export default templates;
/* jshint ignore:end */
