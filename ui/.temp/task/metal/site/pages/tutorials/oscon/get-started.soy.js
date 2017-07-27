/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from get-started.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace LRIsy.
 * @public
 */

goog.module('LRIsy.incrementaldom');

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
  var param3706 = function() {
    ie_open('h4');
      itext('Are you ready for this?');
    ie_close('h4');
    ie_open('p');
      itext('Glad you\'re here! This tutorial will take you through the experience of deploying an app with WeDeploy.');
    ie_close('p');
    ie_open('p');
      itext('By the end, you will deploy a highly addictive game from scratch and get an awesome hoodie from us!');
    ie_close('p');
    ie_open('figure');
      ie_open('img', null, null,
          'src', 'https://vangogh.teespring.com/og_pic/13841816/10337509/front.jpg?v=2017-03-22-03-41&background-image=wood&effects=inner-glow');
      ie_close('img');
    ie_close('figure');
    ie_open('h4');
      itext('What do you need?');
    ie_close('h4');
    ie_open('ul', null, null,
        'class', 'checklist');
      ie_open('li');
        itext('A GitHub account');
      ie_close('li');
    ie_close('ul');
    ie_open('p');
      itext('Thats it. You won\'t even need to install anything or download any source code.');
    ie_close('p');
    ie_open('p');
      itext('You might be curious now how it could be ');
      ie_open('strong');
        itext('that');
      ie_close('strong');
      itext(' easy... perfect, lets get you started! \uD83D\uDC47');
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
  $templateAlias1(soy.$$assignDefaults({content: param3706}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'LRIsy.render';
}

exports.render.params = ["page","site"];
exports.render.types = {"page":"any","site":"any"};
templates = exports;
return exports;

});

class LRIsy extends Component {}
Soy.register(LRIsy, templates);
export { LRIsy, templates };
export default templates;
/* jshint ignore:end */
