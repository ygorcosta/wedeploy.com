/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from add-api-method.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Hqkvo.
 * @public
 */

goog.module('Hqkvo.incrementaldom');

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
  var param3134 = function() {
    ie_open('h4');
      itext('Add API Method');
    ie_close('h4');
    ie_open('p');
      itext('Now we want to add a script that will send an email. To do this, go to ');
      ie_open('code');
        itext('tutorial-email-ios/app/tutorial-email-ios/EmailViewController.swift');
      ie_close('code');
      itext(' and paste this code into the "submitButtonClick" function:');
    ie_close('p');
    $templateAlias2({code: 'let auth = TokenAuth(token: "000-000-000")\nWeDeploy.email("email-<projectID>.wedeploy.sh", authorization: auth)\n    .to(to)\n    .from(from)\n    .subject(subject)\n    .message(subject)\n    .send()\n    .toCallback { emailId, error in\n        if let emailId = emailId {\n            self.showAlert(with: "Success", message: "Email sent! Wait a little bit until it arrives :)")\n            print("Email id: \\(emailId)")\n        }\n        else {\n            self.showAlert(with: "Error", message: "Error sending the email")\n            print(String(describing: error))\n        }\n    }', mode: 'swift'}, null, opt_ijData);
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
    ie_open('h4');
      itext('Add master token');
    ie_close('h4');
    ie_open('p');
      itext('In order for your email request to be authorized, you must add your project\'s unique Master Token.');
    ie_close('p');
    ie_open('ol');
      ie_open('li');
        itext('Go to the ');
        ie_open('a', null, null,
            'href', 'https://console.wedeploy.com',
            'target', '_blank');
          itext('WeDeploy Console');
        ie_close('a');
      ie_close('li');
      ie_open('li');
        itext('Click on your project');
      ie_close('li');
      ie_open('li');
        itext('Go to the ');
        ie_open('em');
          itext('Settings');
        ie_close('em');
        itext(' section');
      ie_close('li');
      ie_open('li');
        itext('Copy your Master Token');
      ie_close('li');
      ie_open('li');
        itext('Change the ');
        ie_open('code');
          itext('TokenAuth(token: "000-000-000")');
        ie_close('code');
        itext(' initialization to ');
        ie_open('code');
          itext('TokenAuth(token: "yourMasterToken")');
        ie_close('code');
        itext(' in the swift code');
      ie_close('li');
    ie_close('ol');
    ie_open('aside');
      ie_open('h6');
        ie_void('span', null, null,
            'class', 'icon-16-star');
        itext(' Pro Tip');
      ie_close('h6');
      ie_open('p');
        itext('As you can see, the input values from the form are being used as email parameters (from, to, subject, etc). We have a bunch of parameters so you can fully configure your email posts.');
      ie_close('p');
      ie_open('p');
        itext('Want to see the full list of ');
        ie_open('a', null, null,
            'href', '/docs/email/sending-email.html',
            'target', '_blank');
          itext('Email Parameters');
        ie_close('a');
        itext('?');
      ie_close('p');
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
  $templateAlias1(soy.$$assignDefaults({content: param3134}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'Hqkvo.render';
}

exports.render.params = ["page","site"];
exports.render.types = {"page":"any","site":"any"};
templates = exports;
return exports;

});

class Hqkvo extends Component {}
Soy.register(Hqkvo, templates);
export { Hqkvo, templates };
export default templates;
/* jshint ignore:end */
