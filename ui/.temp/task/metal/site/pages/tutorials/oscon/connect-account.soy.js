/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from connect-account.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace ntygu.
 * @public
 */

goog.module('ntygu.incrementaldom');

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
  var param3670 = function() {
    ie_open('h4');
      itext('Create an account on WeDeploy');
    ie_close('h4');
    ie_open('p');
      itext('Now go and ');
      ie_open('a', null, null,
          'href', '#');
        itext('create a WeDeploy account');
      ie_close('a');
      itext(', if you don\'t have one already.');
    ie_close('p');
    ie_open('h4');
      itext('Create a new project');
    ie_close('h4');
    ie_open('p');
      itext('On the ');
      ie_open('a', null, null,
          'href', 'https://console.wedeploy.com/projects');
        itext('WeDeploy Console');
      ie_close('a');
      itext(', create a new project (name it whatever you want \uD83D\uDC4D).');
    ie_close('p');
    ie_open('h4');
      itext('Link your GitHub account');
    ie_close('h4');
    ie_open('p');
      itext('Inside of your new project on the Console:');
    ie_close('p');
    ie_open('ol');
      ie_open('li');
        itext('Go to ');
        ie_open('em');
          itext('Deployment');
        ie_close('em');
      ie_close('li');
      ie_open('li');
        itext('Select ');
        ie_open('em');
          itext('GitHub');
        ie_close('em');
      ie_close('li');
      ie_open('li');
        itext('Go to ');
        ie_open('em');
          itext('Connect to GitHub');
        ie_close('em');
      ie_close('li');
      ie_open('li');
        itext('Select ');
        ie_open('em');
          itext('Authorize application');
        ie_close('em');
      ie_close('li');
    ie_close('ol');
    ie_open('figure');
      ie_open('img', null, null,
          'src', '/images/tutorials/oscon/3-link-github.gif',
          'alt', 'Link GitHub Account');
      ie_close('img');
    ie_close('figure');
    ie_open('input', null, null,
        'type', 'hidden',
        'value', opt_data.page.title);
    ie_close('input');
    ie_open('input', null, null,
        'type', 'hidden',
        'value', opt_data.site.title);
    ie_close('input');
  };
  $templateAlias1(soy.$$assignDefaults({content: param3670}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'ntygu.render';
}

exports.render.params = ["page","site"];
exports.render.types = {"page":"any","site":"any"};
templates = exports;
return exports;

});

class ntygu extends Component {}
Soy.register(ntygu, templates);
export { ntygu, templates };
export default templates;
/* jshint ignore:end */
