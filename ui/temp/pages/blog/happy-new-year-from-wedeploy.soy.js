/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from happy-new-year-from-wedeploy.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace blogHappyNewYearFromWedeployHtml.
 * @public
 */

goog.module('blogHappyNewYearFromWedeployHtml.incrementaldom');

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

var $templateAlias1 = Soy.getTemplate('blog.incrementaldom', 'render');


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ignored, opt_ijData) {
  opt_data = opt_data || {};
  var param302 = function() {
    ie_open('article');
      ie_open('p');
        itext('It\u2019s officially 2017! Are you as excited as we are?');
      ie_close('p');
      ie_open('p');
        itext('Last year, on September 20th, the very first app was created on WeDeploy. After that, we went to Chicago, Milan, London, Darmstad, and S\u00E3o Paulo to spread the word about this new product.');
      ie_close('p');
      ie_open('figure');
        ie_open('img', null, null,
            'src', '../images/blog/post-3--0.png',
            'alt', 'WeDeploy Presentation');
        ie_close('img');
      ie_close('figure');
      ie_open('p');
        itext('Today, we\'re serving hundreds of projects from awesome developers like you. We\'re proud. We\'re thankful. We\'re motivated! So, thank you all for being on this journey with us.');
      ie_close('p');
      ie_open('blockquote');
        ie_open('p');
          itext('We\'re serving hundreds of projects from awesome developers like you.');
        ie_close('p');
      ie_close('blockquote');
      ie_open('p');
        itext('And you know what, this is just the beginning. We have new and amazing stuff coming soon, including brand new services and tons of scalability improvements for you.');
      ie_close('p');
      ie_open('p');
        itext('Happy New Year!');
      ie_close('p');
      ie_open('figure');
        ie_open('img', null, null,
            'src', '../images/blog/post-3--1.png',
            'alt', 'WeDeploy Team');
        ie_close('img');
      ie_close('figure');
    ie_close('article');
  };
  $templateAlias1(soy.$$assignDefaults({content: param302}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'blogHappyNewYearFromWedeployHtml.render';
}

exports.render.params = [];
exports.render.types = {};
templates = exports;
return exports;

});

class blogHappyNewYearFromWedeployHtml extends Component {}
Soy.register(blogHappyNewYearFromWedeployHtml, templates);
export { blogHappyNewYearFromWedeployHtml, templates };
export default templates;
/* jshint ignore:end */
