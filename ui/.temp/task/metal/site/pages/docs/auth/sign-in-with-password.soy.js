/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from sign-in-with-password.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace hDbAt.
 * @public
 */

goog.module('hDbAt.incrementaldom');

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
  var param909 = function() {
    ie_open('h3');
      var dyn55 = opt_data.page.title;
      if (typeof dyn55 == 'function') dyn55(); else if (dyn55 != null) itext(dyn55);
    ie_close('h3');
    ie_open('h6');
      var dyn56 = opt_data.page.description;
      if (typeof dyn56 == 'function') dyn56(); else if (dyn56 != null) itext(dyn56);
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
        itext('To sign in using email and password, call this method:');
      ie_close('p');
      $templateAlias2({code: 'WeDeploy\n    .auth(\'https://<serviceID>-<projectID>.wedeploy.io\')\n    .signInWithEmailAndPassword("user@domain.com", "password")\n    .then(function(user) {\n        // User is signed in.\n    })\n    .catch(function(err) {\n        // User is not signed in.\n    });', mode: 'javascript'}, null, opt_ijData);
      $templateAlias2({code: 'WeDeploy\n    .auth(\'https://<serviceID>-<projectID>.wedeploy.io\')\n    .signInWith(username: "user@domain.com", password: "password")\n    .then { auth -> Void in\n        // User is signed in.\n    }\n    .catch { err in\n        // User is not signed in.\n    }', mode: 'swift'}, null, opt_ijData);
      $templateAlias2({code: 'WeDeploy\n    .auth("<auth-url>")\n    .signIn("user@domain.com", "password")\n    .execute();', mode: 'text/x-java'}, null, opt_ijData);
    ie_close('article');
    ie_open('h2');
      itext('What\'s next?');
    ie_close('h2');
    ie_open('p');
      itext('Now we\'re ready to start enabling other ');
      ie_open('a', null, null,
          'href', '/docs/auth/sign-in-with-facebook.html');
        itext('login providers like Facebook');
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
  $templateAlias1(soy.$$assignDefaults({content: param909}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'hDbAt.render';
}

exports.render.params = ["page","site"];
exports.render.types = {"page":"any","site":"any"};
templates = exports;
return exports;

});

class hDbAt extends Component {}
Soy.register(hDbAt, templates);
export { hDbAt, templates };
export default templates;
/* jshint ignore:end */
