/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from add-api-methods.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace RaDLb.
 * @public
 */

goog.module('RaDLb.incrementaldom');

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

var $templateAlias1 = Soy.getTemplate('tutorial.incrementaldom', 'render');


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ignored, opt_ijData) {
  var param2142 = function() {
    ie_open('h4');
      itext('Add API Methods');
    ie_close('h4');
    ie_open('h6');
      itext('Create User');
    ie_close('h6');
    ie_open('p');
      itext('First, let\'s add the code that will allow users to create an account.');
    ie_close('p');
    ie_open('p');
      itext('To do this, go to ');
      ie_open('code');
        itext('tutorial-auth-ios/app/tutorial-auth-ios/SignUpViewController.swift');
      ie_close('code');
      itext(' and paste this code in the "signUpButtonClick" function:');
    ie_close('p');
    $templateAlias2({code: 'WeDeploy.auth("auth-<projectID>.wedeploy.sh")\n    .createUser(email: emailText, password: passwordText, name: nameText)\n    .toCallback { auth, error in\n        if let _ = auth {\n            self.showAlert(with: "Success", message: "Sign-up successfully")\n        }\n        else {\n            self.showAlert(with: "Error", message: "Sign-up failed.")\n        }\n    }', mode: 'swift'}, null, opt_ijData);
    ie_open('p');
      ie_open('strong');
        itext('Note:');
      ie_close('strong');
      itext(' make sure to replace ');
      ie_open('code');
        itext('<projectID>');
      ie_close('code');
      itext(' with the id of your project.');
    ie_close('p');
    ie_open('h6');
      itext('Sign-in');
    ie_close('h6');
    ie_open('p');
      itext('Next, let\'s add the code that will allow users to sign-in.');
    ie_close('p');
    ie_open('p');
      itext('First of all, go to ');
      ie_open('code');
        itext('tutorial-auth-ios/app/tutorial-auth-ios/LoginViewController.swift');
      ie_close('code');
      itext(', and paste this code in the "loginButtonClick" function:');
    ie_close('p');
    $templateAlias2({code: 'WeDeploy.auth("auth-<projectID>.wedeploy.sh")\n    .signInWith(username: usernameText, password: passwordText)\n    .toCallback { auth, error in\n        self.handleLoginResult(auth: auth, error: error)\n    }', mode: 'swift'}, null, opt_ijData);
    ie_open('p');
      ie_open('strong');
        itext('Note:');
      ie_close('strong');
      itext(' make sure to replace ');
      ie_open('code');
        itext('<projectID>');
      ie_close('code');
      itext(' with the id of your project.');
    ie_close('p');
    ie_open('aside');
      ie_open('h6');
        ie_void('span', null, null,
            'class', 'icon-16-star');
        itext(' Pro Tip');
      ie_close('h6');
      ie_open('p');
        itext('In the examples above we use the toCallback method to handle the response with a callback, which is the most typical way of doing it in the iOS ecosystem, but we can also handle the result using a promise:');
      ie_close('p');
      $templateAlias2({code: 'WeDeploy.auth("auth-<projectID>.wedeploy.sh")\n    .signInWith(username: usernameText, password: passwordText)\n    .then { auth in\n        self.handleLoginResult(auth: auth, error: nil)\n    }\n    .catch { error in\n        self.handleLoginResult(auth: nil, error: error)\n    }', mode: 'swift'}, null, opt_ijData);
      ie_open('p');
        itext('or even a observable!');
      ie_close('p');
      $templateAlias2({code: 'WeDeploy.auth("auth-<projectID>.wedeploy.sh")\n    .signInWith(username: usernameText, password: passwordText)\n    .toObservable()\n    .subscribe(onNext: { auth in\n        self.handleLoginResult(auth: auth, error: nil)\n    }, onError: { error in\n        self.handleLoginResult(auth: nil, error: error)\n    })', mode: 'swift'}, null, opt_ijData);
    ie_close('aside');
    ie_open('input', null, null,
        'type', 'hidden',
        'value', opt_data.page.title);
    ie_close('input');
    ie_open('input', null, null,
        'type', 'hidden',
        'value', opt_data.site.title);
    ie_close('input');
  };
  $templateAlias1(soy.$$assignDefaults({content: param2142}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'RaDLb.render';
}

exports.render.params = ["page","site"];
exports.render.types = {"page":"any","site":"any"};
templates = exports;
return exports;

});

class RaDLb extends Component {}
Soy.register(RaDLb, templates);
export { RaDLb, templates };
export default templates;
/* jshint ignore:end */
