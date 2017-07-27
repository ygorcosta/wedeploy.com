/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from checking-status.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace bimIc.
 * @public
 */

goog.module('bimIc.incrementaldom');

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
  var param1611 = function() {
    ie_open('h3');
      var dyn83 = opt_data.page.title;
      if (typeof dyn83 == 'function') dyn83(); else if (dyn83 != null) itext(dyn83);
    ie_close('h3');
    ie_open('h6');
      var dyn84 = opt_data.page.description;
      if (typeof dyn84 == 'function') dyn84(); else if (dyn84 != null) itext(dyn84);
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
        itext('Checking Status');
      ie_close('h2');
      ie_open('p');
        itext('In order to check if an email was sent or not, we can use the email ID, e.g. ');
        ie_open('code');
          itext('123');
        ie_close('code');
        itext(', and request the status in the same way we sent the email.');
      ie_close('p');
      $templateAlias2({code: 'WeDeploy\n    .email(\'<serviceID>-<projectID>.wedeploy.io\')\n    .auth(\'<your-project-master-token>\')\n    .status(\'<email-id>\')\n    .then(function(response) {\n        console.log(\'Email status:\', response);\n    })\n    .catch(function(error) {\n        // Some error has happened\n    });', mode: 'javascript'}, null, opt_ijData);
      $templateAlias2({code: 'WeDeploy.email(\'<serviceID>-<projectID>.wedeploy.io\')\n    .checkEmailStatus(id: "202605176596079530")\n    .then { status in\n        print("Email status: \\(status)")\n    }\n    .catch { error in\n        // Some error has happened\n    }', mode: 'swift'}, null, opt_ijData);
      $templateAlias2({code: 'WeDeploy\n    .email(\'<serviceID>-<projectID>.wedeploy.io\')\n    .checkEmailStatus("<emailID>")\n    .execute();', mode: 'text/x-java'}, null, opt_ijData);
    ie_close('article');
    ie_open('h2');
      itext('What\'s next?');
    ie_close('h2');
    ie_open('p');
      itext('Learn more about using ');
      ie_open('a', null, null,
          'href', '/docs/email/environment-variables.html');
        itext('environment variables on Email');
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
  $templateAlias1(soy.$$assignDefaults({content: param1611}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'bimIc.render';
}

exports.render.params = ["page","site"];
exports.render.types = {"page":"any","site":"any"};
templates = exports;
return exports;

});

class bimIc extends Component {}
Soy.register(bimIc, templates);
export { bimIc, templates };
export default templates;
/* jshint ignore:end */
