/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from add-container-json.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace wzDNJ.
 * @public
 */

goog.module('wzDNJ.incrementaldom');

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
  var param3583 = function() {
    ie_open('h4');
      itext('Add wedeploy.json');
    ie_close('h4');
    ie_open('p');
      itext('Since every service folder must have a ');
      ie_open('code');
        itext('wedeploy.json');
      ie_close('code');
      itext(' file that configures the service, let\'s add one to the repo we just cloned.');
    ie_close('p');
    ie_open('ol');
      ie_open('li');
        itext('Open the ');
        ie_open('code');
          itext('tutorial-nodejs');
        ie_close('code');
        itext(' folder in a code editor');
      ie_close('li');
      ie_open('li');
        itext('Create a new file named ');
        ie_open('code');
          itext('wedeploy.json');
        ie_close('code');
        itext(' inside the ');
        ie_open('code');
          itext('nodejs');
        ie_close('code');
        itext(' folder.');
      ie_close('li');
      ie_open('li');
        itext('In that file, paste this code:');
      ie_close('li');
    ie_close('ol');
    $templateAlias2({code: '{\n    "id": "nodejs",\n    "image": "wedeploy/nodejs",\n    "hooks": {\n        "build": "npm install"\n    }\n}', mode: 'application/json'}, null, opt_ijData);
    ie_open('aside');
      ie_open('h6');
        ie_void('span', null, null,
            'class', 'icon-16-star');
        itext(' Pro Tip');
      ie_close('h6');
      ie_open('p');
        itext('As you can see above, we added a ');
        ie_open('code');
          itext('hook');
        ie_close('code');
        itext(' in our ');
        ie_open('code');
          itext('wedeploy.json');
        ie_close('code');
        itext(' file. Whatever task you put as a ');
        ie_open('code');
          itext('hook');
        ie_close('code');
        itext(' will be completed during the build cycle prior to each deployment.');
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
  $templateAlias1(soy.$$assignDefaults({content: param3583}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'wzDNJ.render';
}

exports.render.params = ["page","site"];
exports.render.types = {"page":"any","site":"any"};
templates = exports;
return exports;

});

class wzDNJ extends Component {}
Soy.register(wzDNJ, templates);
export { wzDNJ, templates };
export default templates;
/* jshint ignore:end */
