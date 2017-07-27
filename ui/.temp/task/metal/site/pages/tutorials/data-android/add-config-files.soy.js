/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from add-config-files.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace dCnZI.
 * @public
 */

goog.module('dCnZI.incrementaldom');

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
  var param2628 = function() {
    ie_open('h4');
      itext('Add Config Files');
    ie_close('h4');
    ie_open('h6');
      itext('wedeploy.json');
    ie_close('h6');
    ie_open('p');
      itext('Since every service folder must have a ');
      ie_open('code');
        itext('wedeploy.json');
      ie_close('code');
      itext(' file that configures the service, let\'s add one to our Data Service in the repo we just cloned.');
    ie_close('p');
    ie_open('ol');
      ie_open('li');
        itext('Open the ');
        ie_open('code');
          itext('tutorial-data-android');
        ie_close('code');
        itext(' folder in a code editor.');
      ie_close('li');
      ie_open('li');
        itext('Create a new file inside of the ');
        ie_open('code');
          itext('data');
        ie_close('code');
        itext(' folder and name it ');
        ie_open('code');
          itext('wedeploy.json');
        ie_close('code');
        itext('.');
      ie_close('li');
      ie_open('li');
        itext('Inside of that file, paste this code.');
      ie_close('li');
    ie_close('ol');
    $templateAlias2({code: '{\n    "id": "data",\n    "image": "wedeploy/data:beta"\n}', mode: 'application/json'}, null, opt_ijData);
    ie_open('h6');
      itext('api.json');
    ie_close('h6');
    ie_open('p');
      itext('Along with the wedeploy.json, each Data service must have an ');
      ie_open('code');
        itext('api.json');
      ie_close('code');
      itext(' file to configure your database (eg. set path, allow certain methods, and require authentication).');
    ie_close('p');
    ie_open('ol');
      ie_open('li');
        itext('Go back to ');
        ie_open('code');
          itext('tutorial-data-android');
        ie_close('code');
        itext(' in your code editor.');
      ie_close('li');
      ie_open('li');
        itext('Create another file inside of the ');
        ie_open('code');
          itext('data');
        ie_close('code');
        itext(' folder and name it ');
        ie_open('code');
          itext('api.json');
        ie_close('code');
        itext('.');
      ie_close('li');
      ie_open('li');
        itext('Inside of that file, paste this code.');
      ie_close('li');
    ie_close('ol');
    $templateAlias2({code: '[\n    {\n        "path": "/tasks/*",\n        "data": true\n    }\n]', mode: 'application/json'}, null, opt_ijData);
    ie_open('aside');
      ie_open('h6');
        ie_void('span', null, null,
            'class', 'icon-16-star');
        itext(' Pro Tip');
      ie_close('h6');
      ie_open('p');
        itext('Another thing you can do with your ');
        ie_open('code');
          itext('api.json');
        ie_close('code');
        itext(' file is add other parameters for the collections in your database. One example is to set certain REST methods for each category like this:');
      ie_close('p');
      $templateAlias2({code: '[\n    {\n        "path": "/movies/*",\n        "data": true,\n        "method": ["GET", "PATCH", "PUT", "DELETE"]\n    },\n    {\n        "path": "/shows/*",\n        "data": true,\n        "method": "POST"\n    }\n]', mode: 'application/json'}, null, opt_ijData);
      ie_open('p');
        itext('See the full list of possible ');
        ie_open('a', null, null,
            'href', '/docs/data/configuring-data.html',
            'target', '_blank');
          itext('data configurations');
        ie_close('a');
        itext('.');
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
  $templateAlias1(soy.$$assignDefaults({content: param2628}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'dCnZI.render';
}

exports.render.params = ["page","site"];
exports.render.types = {"page":"any","site":"any"};
templates = exports;
return exports;

});

class dCnZI extends Component {}
Soy.register(dCnZI, templates);
export { dCnZI, templates };
export default templates;
/* jshint ignore:end */
