/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from add-api-methods.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace VCzfz.
 * @public
 */

goog.module('VCzfz.incrementaldom');

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
  var param2301 = function() {
    ie_open('h4');
      itext('Add API Methods');
    ie_close('h4');
    ie_open('h6');
      itext('Create User');
    ie_close('h6');
    ie_open('p');
      itext('First, let\'s add a script that will allow users to create an account.');
    ie_close('p');
    ie_open('p');
      itext('To do this, go to ');
      ie_open('code');
        itext('tutorial-auth-web/hosting/main.js');
      ie_close('code');
      itext(' and paste this code between the "create user method" comments:');
    ie_close('p');
    $templateAlias2({code: 'var auth = WeDeploy.auth(\'auth-<projectID>.wedeploy.sh\');\n\nfunction submitForm() {\n    auth.createUser({\n        email: user.email.value,\n        name: user.name.value,\n        password: user.password.value\n    })\n    .then(function() {\n        alert(\'Account successfully created!\');\n        signIn();\n        user.reset();\n    })\n    .catch(function() {\n        alert(\'Sign-up failed. Try another email.\');\n        user.reset();\n    });\n}', mode: 'javascript'}, null, opt_ijData);
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
      itext('Next, let\'s add a script that will allow users to sign-in.');
    ie_close('p');
    ie_open('p');
      itext('In the same file as above, paste this code between the "sign-in method" comments:');
    ie_close('p');
    $templateAlias2({code: 'function signIn() {\n    auth.signInWithEmailAndPassword(user.email.value, user.password.value)\n    .then(function() {\n        document.location.href = \'/welcome.html\';\n    })\n    .catch(function() {\n        alert(\'Sign-in failed. Try another email/password.\');\n    });\n}', mode: 'javascript'}, null, opt_ijData);
    ie_open('h6');
      itext('Select current user');
    ie_close('h6');
    ie_open('p');
      itext('Now, let\'s add a script that will show the current user\'s name.');
    ie_close('p');
    ie_open('p');
      itext('In the same file as above, paste this code between the "current user" comments:');
    ie_close('p');
    $templateAlias2({code: 'document.querySelector(\'.username\').innerHTML = auth.currentUser.name;', mode: 'javascript'}, null, opt_ijData);
    ie_open('input', null, null,
        'type', 'hidden',
        'value', opt_data.page.title);
    ie_close('input');
    ie_open('input', null, null,
        'type', 'hidden',
        'value', opt_data.site.title);
    ie_close('input');
  };
  $templateAlias1(soy.$$assignDefaults({content: param2301}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'VCzfz.render';
}

exports.render.params = ["page","site"];
exports.render.types = {"page":"any","site":"any"};
templates = exports;
return exports;

});

class VCzfz extends Component {}
Soy.register(VCzfz, templates);
export { VCzfz, templates };
export default templates;
/* jshint ignore:end */
