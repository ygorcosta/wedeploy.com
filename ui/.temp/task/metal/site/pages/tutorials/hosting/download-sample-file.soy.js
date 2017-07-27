/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from download-sample-file.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace IqbBO.
 * @public
 */

goog.module('IqbBO.incrementaldom');

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
  var param3344 = function() {
    ie_open('h4');
      itext('Download Sample File');
    ie_close('h4');
    ie_open('p');
      itext('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia incidunt tenetur cumque ducimus earum aliquid voluptate. Molestias tempora suscipit atque quidem excepturi, enim ducimus nobis dicta. Labore et maxime aspernatur.');
    ie_close('p');
    ie_open('h6');
      itext('Download a ZIP');
    ie_close('h6');
    ie_open('p');
      itext('You can ');
      ie_open('a', null, null,
          'href', 'https://github.com/wedeploy/tutorial-nodejs/archive/master.zip');
        itext('download a ZIP file');
      ie_close('a');
      itext('.');
    ie_close('p');
    ie_open('h6');
      itext('Or Download using Git');
    ie_close('h6');
    $templateAlias2({code: 'git clone https://github.com/wedeploy/tutorial-hosting.git', mode: 'xml'}, null, opt_ijData);
    ie_open('input', null, null,
        'type', 'hidden',
        'value', opt_data.page.title);
    ie_close('input');
    ie_open('input', null, null,
        'type', 'hidden',
        'value', opt_data.site.title);
    ie_close('input');
  };
  $templateAlias1(soy.$$assignDefaults({content: param3344}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'IqbBO.render';
}

exports.render.params = ["page","site"];
exports.render.types = {"page":"any","site":"any"};
templates = exports;
return exports;

});

class IqbBO extends Component {}
Soy.register(IqbBO, templates);
export { IqbBO, templates };
export default templates;
/* jshint ignore:end */
