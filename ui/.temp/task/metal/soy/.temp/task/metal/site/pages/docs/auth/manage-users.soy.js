// This file was automatically generated from manage-users.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace AbgUq.
 * @public
 */

goog.module('AbgUq.incrementaldom');

/** @suppress {extraRequire} */
goog.require('soy');
/** @suppress {extraRequire} */
goog.require('soydata');
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
var $import1 = goog.require('ElectricCode.incrementaldom');
var $templateAlias2 = $import1.render;
var $import2 = goog.require('guide.incrementaldom');
var $templateAlias1 = $import2.render;


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ignored, opt_ijData) {
  var param712 = function() {
    ie_open('h3');
      var dyn47 = opt_data.page.title;
      if (typeof dyn47 == 'function') dyn47(); else if (dyn47 != null) itext(dyn47);
    ie_close('h3');
    ie_open('h6');
      var dyn48 = opt_data.page.description;
      if (typeof dyn48 == 'function') dyn48(); else if (dyn48 != null) itext(dyn48);
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
        itext('Create user');
      ie_close('h2');
      ie_open('p');
        itext('You create a new user in your WeDeploy project by calling the ');
        ie_open('code');
          itext('createUser');
        ie_close('code');
        itext(' method or by signing in an user for the first time using an identity provider such as Google or Facebook.');
      ie_close('p');
      $templateAlias2({code: 'WeDeploy\n    .auth(\'https://<serviceID>-<projectID>.wedeploy.io\')\n    .createUser({\n        email: \'user@domain.com\',\n        password: \'abc\'\n    })\n    .then(function(user) {\n        // Successfully created.\n    })\n    .catch(function(err) {\n        // Not created.\n    });', mode: 'javascript'}, null, opt_ijData);
      $templateAlias2({code: 'WeDeploy\n    .auth(\'https://<serviceID>-<projectID>.wedeploy.io\')\n    .createUser(email: "user@domain.com", password: "abc", name: "somename")\n    .then { user -> Void in\n        // Successfully created.\n    }\n    .catch { err in\n        // Not created.\n    }', mode: 'swift'}, null, opt_ijData);
      $templateAlias2({code: 'WeDeploy\n    .auth("<auth-url>")\n    .createUser("user@domain.com", "password", "somename")\n    .execute();', mode: 'text/x-java'}, null, opt_ijData);
    ie_close('article');
    ie_open('article', null, null,
        'id', '2');
      ie_open('h2');
        itext('Get current user');
      ie_close('h2');
      $templateAlias2({code: 'var currentUser = WeDeploy.auth(\'https://<serviceID>-<projectID>.wedeploy.io\').currentUser;\n\nif (currentUser) {\n    // User is signed in.\n} else {\n    // No user is signed in.\n}', mode: 'javascript'}, null, opt_ijData);
      $templateAlias2({code: 'WeDeploy\n    .auth(\'https://<serviceID>-<projectID>.wedeploy.io\')\n    .getCurrentUser()\n    .then { user -> Void in\n        // User found.\n    }\n    .catch { error in\n        // User does not exist.\n    }', mode: 'swift'}, null, opt_ijData);
      $templateAlias2({code: 'WeDeploy\n    .auth("<auth-url>")\n    .getCurrentUser()\n    .execute();', mode: 'text/x-java'}, null, opt_ijData);
    ie_close('article');
    ie_open('article', null, null,
        'id', '3');
      ie_open('h2');
        itext('Get user');
      ie_close('h2');
      $templateAlias2({code: 'WeDeploy\n    .auth(\'https://<serviceID>-<projectID>.wedeploy.io\')\n    .getUser(userId)\n    .then(function(user) {\n        // User found.\n    })\n    .catch(function(err) {\n        // User does not exist.\n    });', mode: 'javascript'}, null, opt_ijData);
      $templateAlias2({code: 'WeDeploy\n    .auth(\'https://<serviceID>-<projectID>.wedeploy.io\')\n    .getUser(id: "userId")\n    .then { user -> Void in\n        // User found.\n    }\n    .catch { error in\n        // User does not exist.\n    }', mode: 'swift'}, null, opt_ijData);
      $templateAlias2({code: 'WeDeploy\n    .auth("<auth-url>")\n    .getUser("userId")\n    .execute();', mode: 'text/x-java'}, null, opt_ijData);
    ie_close('article');
    ie_open('article', null, null,
        'id', '4');
      ie_open('h2');
        itext('Delete user');
      ie_close('h2');
      $templateAlias2({code: 'var currentUser = WeDeploy.auth(\'https://<serviceID>-<projectID>.wedeploy.io\').currentUser;\n\ncurrentUser\n    .deleteUser()\n    .then(function() {\n        // Successfully deleted.\n    })\n    .catch(function(err) {\n        // Not deleted.\n    });', mode: 'javascript'}, null, opt_ijData);
      $templateAlias2({code: 'WeDeploy\n    .auth(\'https://<serviceID>-<projectID>.wedeploy.io\')\n    .deleteUser(id: "userId")\n    .then { _ -> Void in\n        // Successfully deleted\n    }\n    .catch { err in\n        // Not deleted.\n    }', mode: 'swift'}, null, opt_ijData);
      $templateAlias2({code: 'WeDeploy\n    .auth("<auth-url>")\n    .deleteUser("userId")\n    .execute();', mode: 'text/x-java'}, null, opt_ijData);
    ie_close('article');
    ie_open('article', null, null,
        'id', '5');
      ie_open('h2');
        itext('Update user');
      ie_close('h2');
      $templateAlias2({code: 'var currentUser = WeDeploy.auth(\'https://<serviceID>-<projectID>.wedeploy.io\').currentUser;\n\ncurrentUser\n    .updateUser({\n        password: "password",\n        email: "eleven@hawkinslabs.com",\n        name: "Eleven",\n        photoUrl: "https://hawkinslabs.com/011/profile.jpg"\n    })\n    .then(function() {\n        // Successfully updated.\n    })\n    .catch(function(err) {\n        // Not updated.\n    });', mode: 'javascript'}, null, opt_ijData);
      $templateAlias2({code: 'WeDeploy\n    .auth(\'https://<serviceID>-<projectID>.wedeploy.io\')\n    .updateUser(id: "userId" , email: "eleven@hawkinslabs.com", password: "password", name: "Eleven")\n    .then { _ -> Void in\n        // Successfully updated\n    }\n    .catch { err in\n        // Not updated.\n    }', mode: 'swift'}, null, opt_ijData);
      $templateAlias2({code: 'JSONObject fields = new JSONObject()\n    .put("email", "eleven@hawkinslabs.com")\n    .put("password", "newPassword")\n    .put("name", "Eleven");\n\nWeDeploy\n    .auth("<auth-url>")\n    .updateUser("userId", fields)\n    .execute();', mode: 'text/x-java'}, null, opt_ijData);
    ie_close('article');
    ie_open('article', null, null,
        'id', '6');
      ie_open('h2');
        itext('Send a password reset email');
      ie_close('h2');
      $templateAlias2({code: 'WeDeploy\n    .auth(\'https://<serviceID>-<projectID>.wedeploy.io\')\n    .sendPasswordResetEmail("user@domain.com")\n    .then(function() {\n        // Email sent.\n    })\n    .catch(function(err) {\n        // An error happened.\n    });', mode: 'javascript'}, null, opt_ijData);
      $templateAlias2({code: 'WeDeploy\n    .auth(\'https://<serviceID>-<projectID>.wedeploy.io\')\n    .sendPasswordReset(email: "user@domain.com")\n    .then { _ -> Void in\n        // Successfully signed out.\n    }\n    .catch { err in\n        // Not signed out.\n    }', mode: 'swift'}, null, opt_ijData);
      $templateAlias2({code: 'WeDeploy\n    .auth("<auth-url>")\n    .sendPasswordResetEmail("user@domain.com")\n    .execute();', mode: 'text/x-java'}, null, opt_ijData);
    ie_close('article');
    ie_open('article', null, null,
        'id', '7');
      ie_open('h2');
        itext('Sign-out');
      ie_close('h2');
      $templateAlias2({code: 'WeDeploy\n    .auth(\'https://<serviceID>-<projectID>.wedeploy.io\')\n    .signOut()\n    .then(function() {\n        // User is signed out.\n    })\n    .catch(function(err) {\n        // User was signed out.\n    });', mode: 'javascript'}, null, opt_ijData);
      $templateAlias2({code: 'WeDeploy\n    .auth(\'https://<serviceID>-<projectID>.wedeploy.io\')\n    .signOut()\n    .then { _ -> Void in\n        // Successfully signed out.\n    }\n    .catch { err in\n        // Not signed out.\n    }', mode: 'swift'}, null, opt_ijData);
      $templateAlias2({code: 'WeDeploy\n    .auth("<auth-url>")\n    .signOut()\n    .execute();', mode: 'text/x-java'}, null, opt_ijData);
    ie_close('article');
    ie_open('h2');
      itext('What\'s next?');
    ie_close('h2');
    ie_open('p');
      itext('Learn how to sign-in users using their ');
      ie_open('a', null, null,
          'href', '/docs/auth/sign-in-with-password.html');
        itext('email and password');
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
  $templateAlias1(soy.$$assignDefaults({content: param712}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'AbgUq.render';
}
