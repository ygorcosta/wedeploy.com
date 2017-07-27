/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from fork-repo.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace tZqRk.
 * @public
 */

goog.module('tZqRk.incrementaldom');

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
  var param3697 = function() {
    ie_open('h4');
      itext('Fork the Repo');
    ie_close('h4');
    ie_open('p');
      itext('Go to ');
      ie_open('a', null, null,
          'href', 'https://github.com/wedeploy/oscon-game#fork-destination-box');
        itext('github.com/wedeploy/oscon-game');
      ie_close('a');
      itext(' and fork the repo.');
    ie_close('p');
    ie_open('figure');
      ie_open('img', null, null,
          'src', '/images/tutorials/oscon/1-fork-repo.gif',
          'alt', 'Fork Repo');
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
  $templateAlias1(soy.$$assignDefaults({content: param3697}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'tZqRk.render';
}

exports.render.params = ["page","site"];
exports.render.types = {"page":"any","site":"any"};
templates = exports;
return exports;

});

class tZqRk extends Component {}
Soy.register(tZqRk, templates);
export { tZqRk, templates };
export default templates;
/* jshint ignore:end */
