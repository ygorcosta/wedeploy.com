/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from setup-container.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace wZRSj.
 * @public
 */

goog.module('wZRSj.incrementaldom');

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
  var param3719 = function() {
    ie_open('h4');
      itext('Create a wedeploy.json file');
    ie_close('h4');
    ie_open('p');
      itext('On the github interface of your new fork:');
    ie_close('p');
    ie_open('ol');
      ie_open('li');
        itext('Go to the ');
        ie_open('code');
          itext('hosting');
        ie_close('code');
        itext(' folder and select ');
        ie_open('em');
          itext('create new file');
        ie_close('em');
        itext('.');
      ie_close('li');
      ie_open('li');
        itext('Name the file ');
        ie_open('code');
          itext('wedeploy.json');
        ie_close('code');
      ie_close('li');
      ie_open('li');
        itext('Paste the bellow code');
      ie_close('li');
      ie_open('li');
        itext('Click ');
        ie_open('em');
          itext('Commit new file');
        ie_close('em');
      ie_close('li');
    ie_close('ol');
    $templateAlias2({code: '{\n    "id": "hosting",\n    "image": "wedeploy/hosting:beta"\n}', mode: 'application/json'}, null, opt_ijData);
    ie_open('figure');
      ie_open('img', null, null,
          'src', '/images/tutorials/oscon/2-create-wedeploy.json.gif',
          'alt', 'Create wedeploy.json');
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
  $templateAlias1(soy.$$assignDefaults({content: param3719}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'wZRSj.render';
}

exports.render.params = ["page","site"];
exports.render.types = {"page":"any","site":"any"};
templates = exports;
return exports;

});

class wZRSj extends Component {}
Soy.register(wZRSj, templates);
export { wZRSj, templates };
export default templates;
/* jshint ignore:end */
