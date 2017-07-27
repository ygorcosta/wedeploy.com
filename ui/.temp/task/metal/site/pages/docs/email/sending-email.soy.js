/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from sending-email.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace tlyrr.
 * @public
 */

goog.module('tlyrr.incrementaldom');

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
  var param1672 = function() {
    ie_open('h3');
      var dyn88 = opt_data.page.title;
      if (typeof dyn88 == 'function') dyn88(); else if (dyn88 != null) itext(dyn88);
    ie_close('h3');
    ie_open('h6');
      var dyn89 = opt_data.page.description;
      if (typeof dyn89 == 'function') dyn89(); else if (dyn89 != null) itext(dyn89);
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
        itext('Sending email');
      ie_close('h2');
      ie_open('p');
        itext('In order to send emails, we can simply make a request to the url of our service and include some required parameters like ');
        ie_open('code');
          itext('from');
        ie_close('code');
        itext(', ');
        ie_open('code');
          itext('to');
        ie_close('code');
        itext(', and ');
        ie_open('code');
          itext('subject');
        ie_close('code');
        itext('.');
      ie_close('p');
      $templateAlias2({code: 'WeDeploy\n    .email(\'<serviceID>-<projectID>.wedeploy.io\')\n    .auth(\'<your-project-master-token>\')\n    .from(\'from@domain.com\')\n    .to(\'to@domain.com\')\n    .subject(\'Hi there!\')\n    .send()\n    .then(function(response) {\n        console.log(\'Email ID:\', response);\n    })\n    .catch(function(error) {\n        // Some error has happened\n    });', mode: 'javascript'}, null, opt_ijData);
      $templateAlias2({code: 'WeDeploy\n    .email(\'<serviceID>-<projectID>.wedeploy.io\')\n    .from(self.username)\n    .to(self.username)\n    .subject("subject")\n    .message("body")\n    .send()\n    .then { id in\n        print("Email ID: \\(id)")\n    }\n    .catch { error in\n        // Some error has happened\n    }', mode: 'swift'}, null, opt_ijData);
      $templateAlias2({code: 'WeDeploy\n    .email("<serviceID>-<projectID>.wedeploy.io/emails")\n    .from("from@domain.com")\n    .to("to@domain.com")\n    .subject("Hi there!")\n    .send()\n    .execute();', mode: 'text/x-java'}, null, opt_ijData);
      ie_open('p');
        itext('As a result, we\'ll receive an email ID. This doesn\'t indicate that the email has already sent, it actually just means that it was added to the email queue. See ');
        ie_open('a', null, null,
            'href', '/docs/email/checking-status.html');
          itext('"checking the email status"');
        ie_close('a');
        itext(' to learn more about email status.');
      ie_close('p');
    ie_close('article');
    ie_open('article', null, null,
        'id', '2');
      ie_open('h2');
        itext('Reference');
      ie_close('h2');
      ie_open('p');
        itext('Here is a list of all the email parameters you can pass.');
      ie_close('p');
      ie_open('div', null, null,
          'class', 'table-container');
        ie_open('table');
          ie_open('thead');
            ie_open('tr');
              ie_open('th');
                itext('Parameter');
              ie_close('th');
              ie_open('th');
                itext('Type');
              ie_close('th');
              ie_open('th');
                itext('Description');
              ie_close('th');
            ie_close('tr');
          ie_close('thead');
          ie_open('tbody');
            ie_open('tr');
              ie_open('td');
                itext('bcc');
              ie_close('td');
              ie_open('td');
                itext('string');
              ie_close('td');
              ie_open('td');
                itext('Bcc recipient email address. Multiple addresses should be defined in multiple parameters.');
              ie_close('td');
            ie_close('tr');
            ie_open('tr');
              ie_open('td');
                itext('cc');
              ie_close('td');
              ie_open('td');
                itext('string');
              ie_close('td');
              ie_open('td');
                itext('Cc recipient email address. Multiple addresses should be defined in multiple parameters.');
              ie_close('td');
            ie_close('tr');
            ie_open('tr');
              ie_open('td');
                itext('from');
              ie_close('td');
              ie_open('td');
                itext('string');
              ie_close('td');
              ie_open('td');
                itext('Sender email address.');
              ie_close('td');
            ie_close('tr');
            ie_open('tr');
              ie_open('td');
                itext('message');
              ie_close('td');
              ie_open('td');
                itext('string');
              ie_close('td');
              ie_open('td');
                itext('HTML content of your email message. Up to 5MB.');
              ie_close('td');
            ie_close('tr');
            ie_open('tr');
              ie_open('td');
                itext('priority');
              ie_close('td');
              ie_open('td');
                itext('number');
              ie_close('td');
              ie_open('td');
                itext('Used by email clients to define a message\'s importance. From 1 to 5 where \'1\' is highest and \'5\' is the lowest priority.');
              ie_close('td');
            ie_close('tr');
            ie_open('tr');
              ie_open('td');
                itext('replyTo');
              ie_close('td');
              ie_open('td');
                itext('string');
              ie_close('td');
              ie_open('td');
                itext('Append a reply-to address to your email message.');
              ie_close('td');
            ie_close('tr');
            ie_open('tr');
              ie_open('td');
                itext('subject');
              ie_close('td');
              ie_open('td');
                itext('string');
              ie_close('td');
              ie_open('td');
                itext('Subject of your email. Up to 1MB.');
              ie_close('td');
            ie_close('tr');
            ie_open('tr');
              ie_open('td');
                itext('to');
              ie_close('td');
              ie_open('td');
                itext('string');
              ie_close('td');
              ie_open('td');
                itext('Recipient email address. Multiple addresses should be defined in multiple parameters.');
              ie_close('td');
            ie_close('tr');
          ie_close('tbody');
        ie_close('table');
      ie_close('div');
    ie_close('article');
    ie_open('h2');
      itext('What\'s next?');
    ie_close('h2');
    ie_open('p');
      itext('Now that you sent an email, you can learn ');
      ie_open('a', null, null,
          'href', '/docs/email/checking-status.html');
        itext('how to check on its status');
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
  $templateAlias1(soy.$$assignDefaults({content: param1672}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'tlyrr.render';
}

exports.render.params = ["page","site"];
exports.render.types = {"page":"any","site":"any"};
templates = exports;
return exports;

});

class tlyrr extends Component {}
Soy.register(tlyrr, templates);
export { tlyrr, templates };
export default templates;
/* jshint ignore:end */
