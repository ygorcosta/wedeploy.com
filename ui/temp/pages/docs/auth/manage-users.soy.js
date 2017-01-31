/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from manage-users.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace docsAuthManageUsersHtml.
 * @public
 */

goog.module('docsAuthManageUsersHtml.incrementaldom');

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
  var param419 = function() {
    ie_open('h1');
      itext('Manage Users');
    ie_close('h1');
    ie_open('h6');
      itext('Create, delete or update users by using ');
      ie_open('em');
        itext('WeDeploy\u2122 Auth');
      ie_close('em');
      itext('.');
    ie_close('h6');
    ie_open('article', null, null,
        'id', 'article_1');
      ie_open('h2');
        itext('Create user');
      ie_close('h2');
      ie_open('p');
        itext('You create a new user in your WeDeploy project by calling the ');
        ie_open('code');
          itext('createUser');
        ie_close('code');
        itext(' method or by signing in a user for the first time using a federated identity provider, such as Google Sign-In or Facebook Login.');
      ie_close('p');
      $templateAlias2({code: 'var auth = WeDeploy.auth();\n\nauth.createUser({\n    email: \'user@domain.com\',\n    password: \'abc\'\n})\n.then(function(user) {\n    // Successfully created.\n})\n.catch(function(err) {\n  // Not created.\n});', mode: 'js'}, null, opt_ijData);
    ie_close('article');
    ie_open('article', null, null,
        'id', 'article_2');
      ie_open('h2');
        itext('Get current user');
      ie_close('h2');
      $templateAlias2({code: 'var currentUser = WeDeploy.auth().currentUser;\n\nif (currentUser) {\n    // User is signed in.\n} else {\n    // No user is signed in.\n}', mode: 'js'}, null, opt_ijData);
    ie_close('article');
    ie_open('article', null, null,
        'id', 'article_3');
      ie_open('h2');
        itext('Get user');
      ie_close('h2');
      $templateAlias2({code: 'WeDeploy\n.auth()\n.getUser(userId)\n.then(function(user) {\n    // User found.\n})\n.catch(function(err) {\n    // User does not exist.\n});', mode: 'js'}, null, opt_ijData);
    ie_close('article');
    ie_open('article', null, null,
        'id', 'article_4');
      ie_open('h2');
        itext('Delete user');
      ie_close('h2');
      ie_open('p');
        itext('You can delete a user account with the delete method. For example:');
      ie_close('p');
      $templateAlias2({code: 'var currentUser = WeDeploy.auth().currentUser;\n\ncurrentUser.deleteUser()\n.then(function() {\n    // Successfully deleted.\n})\n.catch(function(err) {\n  // Not deleted.\n});', mode: 'js'}, null, opt_ijData);
    ie_close('article');
    ie_open('article', null, null,
        'id', 'article_5');
      ie_open('h2');
        itext('Update user');
      ie_close('h2');
      ie_open('p');
        itext('You can update a user\'s basic information. For example:');
      ie_close('p');
      $templateAlias2({code: 'var currentUser = WeDeploy.auth().currentUser;\n\ncurrentUser.updateUser({\n    password: "password",\n    email: "eleven@hawkinslabs.com",\n    name: "Eleven",\n    photoUrl: "https://hawkinslabs.com/011/profile.jpg"\n})\n.then(function() {\n    // Successfully updated.\n})\n.catch(function(err) {\n  // Not updated.\n});', mode: 'js'}, null, opt_ijData);
    ie_close('article');
    ie_open('article', null, null,
        'id', 'article_6');
      ie_open('h2');
        itext('Send a password reset email');
      ie_close('h2');
      ie_open('p');
        itext('You can send a password reset email to a user with the sendPasswordResetEmail method. For example:');
      ie_close('p');
      $templateAlias2({code: 'WeDeploy\n.auth()\n.sendPasswordResetEmail("user@domain.com")\n.then(function() {\n    // Email sent.\n})\n.catch(function(err) {\n  // An error happened.\n});', mode: 'js'}, null, opt_ijData);
    ie_close('article');
    ie_open('article', null, null,
        'id', 'article_7');
      ie_open('h2');
        itext('Sign-out');
      ie_close('h2');
      $templateAlias2({code: 'WeDeploy\n.auth()\n.signOut()\n.then(function() {\n    // User is signed out.\n})\n.catch(function(err) {\n  // User was signed out.\n});', mode: 'js'}, null, opt_ijData);
    ie_close('article');
    ie_open('h2');
      itext('What\'s next?');
    ie_close('h2');
    ie_open('ul');
      ie_open('li');
        itext('Now we\'re ready to start ');
        ie_open('a', null, null,
            'href', '/docs/auth/js/sign-in-with-facebook.html');
          itext('authenticating accounts and growing our user base');
        ie_close('a');
        itext('.');
      ie_close('li');
    ie_close('ul');
  };
  $templateAlias1(soy.$$assignDefaults({content: param419}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'docsAuthManageUsersHtml.render';
}

exports.render.params = [];
exports.render.types = {};
templates = exports;
return exports;

});

class docsAuthManageUsersHtml extends Component {}
Soy.register(docsAuthManageUsersHtml, templates);
export { docsAuthManageUsersHtml, templates };
export default templates;
/* jshint ignore:end */
