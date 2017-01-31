/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from sign-in-with-password.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace docsAuthSignInWithPasswordHtml.
 * @public
 */

goog.module('docsAuthSignInWithPasswordHtml.incrementaldom');

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
  var param504 = function() {
    ie_open('h1');
      itext('Sign-in With Password');
    ie_close('h1');
    ie_open('h6');
      itext('You can let your users authenticate with WeDeploy using their email addresses and passwords. ');
      ie_open('em');
        itext('WeDeploy\u2122 Authentication');
      ie_close('em');
      itext('.');
    ie_close('h6');
    ie_open('article', null, null,
        'id', 'article_1');
      ie_open('h2');
        itext('Sign-in with password');
      ie_close('h2');
      ie_open('p');
        itext('To sign in by email and password, call ');
        ie_open('code');
          itext('signInWithEmailAndPassword');
        ie_close('code');
        itext(':');
      ie_close('p');
      $templateAlias2({code: 'var auth = WeDeploy.auth();\n\nauth.signInWithEmailAndPassword("user@domain.com", "password")\n.then(function(user) {\n    // User is signed in.\n})\n.catch(function(err) {\n  // User is not signed in.\n});', mode: 'js'}, null, opt_ijData);
    ie_close('article');
    ie_open('h2');
      itext('What\'s next?');
    ie_close('h2');
    ie_open('ul');
      ie_open('li');
        itext('Now you can start building your apps with authentication.');
      ie_close('li');
    ie_close('ul');
  };
  $templateAlias1(soy.$$assignDefaults({content: param504}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'docsAuthSignInWithPasswordHtml.render';
}

exports.render.params = [];
exports.render.types = {};
templates = exports;
return exports;

});

class docsAuthSignInWithPasswordHtml extends Component {}
Soy.register(docsAuthSignInWithPasswordHtml, templates);
export { docsAuthSignInWithPasswordHtml, templates };
export default templates;
/* jshint ignore:end */
