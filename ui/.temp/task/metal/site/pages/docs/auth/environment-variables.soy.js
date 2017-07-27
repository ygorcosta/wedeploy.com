/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from environment-variables.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace izdoU.
 * @public
 */

goog.module('izdoU.incrementaldom');

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

var $templateAlias1 = Soy.getTemplate('guide.incrementaldom', 'render');


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ignored, opt_ijData) {
  var param677 = function() {
    ie_open('h3');
      var dyn44 = opt_data.page.title;
      if (typeof dyn44 == 'function') dyn44(); else if (dyn44 != null) itext(dyn44);
    ie_close('h3');
    ie_open('h6');
      var dyn45 = opt_data.page.description;
      if (typeof dyn45 == 'function') dyn45(); else if (dyn45 != null) itext(dyn45);
    ie_close('h6');
    ie_open('aside');
      ie_open('p');
        itext('If you are unfamiliar with how you can apply this concept, please visit our main ');
        ie_open('a', null, null,
            'href', '/docs/intro/environment-variables.html');
          itext('Environment Variables');
        ie_close('a');
        itext(' page.');
      ie_close('p');
    ie_close('aside');
    ie_open('article', null, null,
        'id', '1');
      ie_open('h2');
        itext('Reference');
      ie_close('h2');
      ie_open('p');
        itext('Here\'s a list of all the environment variables you can use with this service.');
      ie_close('p');
      ie_open('div', null, null,
          'class', 'table-container');
        ie_open('table');
          ie_open('thead');
            ie_open('tr');
              ie_open('th');
                itext('Key');
              ie_close('th');
              ie_open('th');
                itext('Description');
              ie_close('th');
            ie_close('tr');
          ie_close('thead');
          ie_open('tbody');
            ie_open('tr');
              ie_open('td');
                itext('WEDEPLOY_AUTH_EMAIL_CONTENT');
              ie_close('td');
              ie_open('td');
                itext('HTML code for password reset email');
              ie_close('td');
            ie_close('tr');
            ie_open('tr');
              ie_open('td');
                itext('WEDEPLOY_AUTH_EMAIL_SENDER');
              ie_close('td');
              ie_open('td');
                itext('Set password reset email sender');
              ie_close('td');
            ie_close('tr');
            ie_open('tr');
              ie_open('td');
                itext('WEDEPLOY_AUTH_EMAIL_SUBJECT');
              ie_close('td');
              ie_open('td');
                itext('Set password reset email subject');
              ie_close('td');
            ie_close('tr');
            ie_open('tr');
              ie_open('td');
                itext('WEDEPLOY_AUTH_FACEBOOK');
              ie_close('td');
              ie_open('td');
                itext('Enable Facebook Auth integration');
              ie_close('td');
            ie_close('tr');
            ie_open('tr');
              ie_open('td');
                itext('WEDEPLOY_AUTH_FACEBOOK_CLIENT_ID');
              ie_close('td');
              ie_open('td');
                itext('Facebook OAuth ID');
              ie_close('td');
            ie_close('tr');
            ie_open('tr');
              ie_open('td');
                itext('WEDEPLOY_AUTH_FACEBOOK_CLIENT_SECRET');
              ie_close('td');
              ie_open('td');
                itext('Facebook OAuth password');
              ie_close('td');
            ie_close('tr');
            ie_open('tr');
              ie_open('td');
                itext('WEDEPLOY_AUTH_GITHUB');
              ie_close('td');
              ie_open('td');
                itext('Enable GitHub Auth integration');
              ie_close('td');
            ie_close('tr');
            ie_open('tr');
              ie_open('td');
                itext('WEDEPLOY_AUTH_GITHUB_CLIENT_ID');
              ie_close('td');
              ie_open('td');
                itext('GitHub OAuth ID');
              ie_close('td');
            ie_close('tr');
            ie_open('tr');
              ie_open('td');
                itext('WEDEPLOY_AUTH_GITHUB_CLIENT_SECRET');
              ie_close('td');
              ie_open('td');
                itext('GitHub OAuth password');
              ie_close('td');
            ie_close('tr');
            ie_open('tr');
              ie_open('td');
                itext('WEDEPLOY_AUTH_GOOGLE');
              ie_close('td');
              ie_open('td');
                itext('Enable Google Auth integration');
              ie_close('td');
            ie_close('tr');
            ie_open('tr');
              ie_open('td');
                itext('WEDEPLOY_AUTH_GOOGLE_CLIENT_ID');
              ie_close('td');
              ie_open('td');
                itext('Google OAuth ID');
              ie_close('td');
            ie_close('tr');
            ie_open('tr');
              ie_open('td');
                itext('WEDEPLOY_AUTH_GOOGLE_CLIENT_SECRET');
              ie_close('td');
              ie_open('td');
                itext('Google OAuth password');
              ie_close('td');
            ie_close('tr');
            ie_open('tr');
              ie_open('td');
                itext('WEDEPLOY_AUTH_PASSWORD');
              ie_close('td');
              ie_open('td');
                itext('Enable email and password Auth');
              ie_close('td');
            ie_close('tr');
            ie_open('tr');
              ie_open('td');
                itext('WEDEPLOY_AUTH_SECURE_FIELDS');
              ie_close('td');
              ie_open('td');
                itext('Select which Auth fields are secured');
              ie_close('td');
            ie_close('tr');
          ie_close('tbody');
        ie_close('table');
      ie_close('div');
    ie_close('article');
    ie_open('input', null, null,
        'type', 'hidden',
        'value', opt_data.page.title);
    ie_close('input');
    ie_open('input', null, null,
        'type', 'hidden',
        'value', opt_data.site.title);
    ie_close('input');
  };
  $templateAlias1(soy.$$assignDefaults({content: param677}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'izdoU.render';
}

exports.render.params = ["page","site"];
exports.render.types = {"page":"any","site":"any"};
templates = exports;
return exports;

});

class izdoU extends Component {}
Soy.register(izdoU, templates);
export { izdoU, templates };
export default templates;
/* jshint ignore:end */
