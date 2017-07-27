/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from add-api-methods.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace nRFbm.
 * @public
 */

goog.module('nRFbm.incrementaldom');

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
  var param1993 = function() {
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
        itext('SignUpActivity.java');
      ie_close('code');
      itext(' and paste this code in the "doSignUp" method:');
    ie_close('p');
    $templateAlias2({code: 'weDeploy.auth("auth-<projectID>.wedeploy.sh")\n    .createUser(email, password, name)\n    .execute(new Callback() {\n        @Override\n        public void onSuccess(Response response) {\n            showAlert("Success", "Signed up successfully");\n        }\n\n        @Override\n        public void onFailure(Exception e) {\n            Log.e("Error", "Sign up error", e);\n            showAlert("Error", "Sign up error");\n        }\n    });', mode: 'text/x-java'}, null, opt_ijData);
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
        itext('LoginActivity.java');
      ie_close('code');
      itext(', and paste this code in the "doLogin" method:');
    ie_close('p');
    $templateAlias2({code: 'weDeploy.auth("auth-<projectID>.wedeploy.sh")\n    .signIn(email, password).execute(new Callback() {\n        @Override\n        public void onSuccess(Response response) {\n            showAlert("Success", "Signed in");\n        }\n\n        @Override\n        public void onFailure(Exception e) {\n            showAlert("Error", "Login error");\n        }\n    });', mode: 'text/x-java'}, null, opt_ijData);
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
        itext('In the examples above we use the execute(callback) method to handle the response with a callback, which is the most typical way of doing it in the Android ecosystem, but we can also handle the result using a RxJava Single, which is similar to an Observable, but it either emits one value or an error notification:');
      ie_close('p');
      $templateAlias2({code: 'weDeploy.auth("auth-<projectID>.wedeploy.sh")\n    .signIn(email, password)\n    .asSingle()\n    .subscribe(new DisposableSingleObserver<Response>() {\n        @Override\n        public void onSuccess(Response response) {\n            showAlert("Success", "Signed in");\n        }\n\n        @Override\n        public void onError(Throwable e) {\n            showAlert("Error", "Login error");\n        }\n    });', mode: 'text/x-java'}, null, opt_ijData);
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
  $templateAlias1(soy.$$assignDefaults({content: param1993}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'nRFbm.render';
}

exports.render.params = ["page","site"];
exports.render.types = {"page":"any","site":"any"};
templates = exports;
return exports;

});

class nRFbm extends Component {}
Soy.register(nRFbm, templates);
export { nRFbm, templates };
export default templates;
/* jshint ignore:end */
