/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from it-works.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace EImks.
 * @public
 */

goog.module('EImks.incrementaldom');

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

var $templateAlias1 = Soy.getTemplate('tutorial.incrementaldom', 'render');


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ignored, opt_ijData) {
  var param3854 = function() {
    ie_open('h4');
      itext('Send an Email');
    ie_close('h4');
    ie_open('p');
      itext('Great work, your app is now live! Now let\'s send an email.');
    ie_close('p');
    ie_open('ol');
      ie_open('li');
        itext('Go to ');
        ie_open('code');
          itext('hosting-<projectID>.wedeploy.sh');
        ie_close('code');
        itext(' in your browser.');
      ie_close('li');
      ie_open('li');
        itext('Fill in the form (make sure you put your email in the "to" field).');
      ie_close('li');
      ie_open('li');
        itext('Click submit and check your email inbox because you\'ve got mail!');
      ie_close('li');
    ie_close('ol');
    ie_open('p');
      itext('Awesome! You just deployed an app and sent an email within a few minutes! We can\'t wait to see what else you create with WeDeploy!');
    ie_close('p');
    ie_open('aside');
      ie_open('h6');
        ie_void('span', null, null,
            'class', 'icon-16-star');
        itext(' Pro Tip');
      ie_close('h6');
      ie_open('p');
        itext('Wanting to make a pretty url for your primary UI service without purchasing a custom domain? Perfect, you can go to the ');
        ie_open('em');
          itext('Custom Domain');
        ie_close('em');
        itext(' section of your service on the Dashboard and add a custom domain that ends with ');
        ie_open('code');
          itext('wedeploy.io');
        ie_close('code');
        itext(' (e.g. ');
        ie_open('code');
          itext('yourapp.wedeploy.io');
        ie_close('code');
        itext(').');
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
  $templateAlias1(soy.$$assignDefaults({content: param3854}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'EImks.render';
}

exports.render.params = ["page","site"];
exports.render.types = {"page":"any","site":"any"};
templates = exports;
return exports;

});

class EImks extends Component {}
Soy.register(EImks, templates);
export { EImks, templates };
export default templates;
/* jshint ignore:end */
