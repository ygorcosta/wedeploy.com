/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from happy-new-year-from-wedeploy.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace ecqYh.
 * @public
 */

goog.module('ecqYh.incrementaldom');

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
  var param494 = function() {
    ie_open('article');
      ie_open('p');
        var dyn35 = opt_data.page.description;
        if (typeof dyn35 == 'function') dyn35(); else if (dyn35 != null) itext(dyn35);
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
    ie_open('input', null, null,
        'type', 'hidden',
        'value', opt_data.page.title);
    ie_close('input');
    ie_open('input', null, null,
        'type', 'hidden',
        'value', opt_data.site.title);
    ie_close('input');
  };
  $templateAlias1(soy.$$assignDefaults({content: param494}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'ecqYh.render';
}

exports.render.params = ["page","site"];
exports.render.types = {"page":"any","site":"any"};
templates = exports;
return exports;

});

class ecqYh extends Component {}
Soy.register(ecqYh, templates);
export { ecqYh, templates };
export default templates;
/* jshint ignore:end */
