/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from uptime-status-new-ruby-service-and-more.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace blogUptimeStatusNewRubyServiceAndMoreHtml.
 * @public
 */

goog.module('blogUptimeStatusNewRubyServiceAndMoreHtml.incrementaldom');

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
  var param318 = function() {
    ie_open('article');
      ie_open('p');
        itext('First of all, we would like to say thanks for trying WeDeploy! You\'re shaping the future of this product, so we appreciate you taking the time to provide some feedback.');
      ie_close('p');
      ie_open('blockquote');
        ie_open('p');
          itext('You\'re shaping the future of this product.');
        ie_close('p');
      ie_close('blockquote');
      ie_open('p');
        itext('In the last few weeks we\'ve been working day and night to make WeDeploy more stable. Almost two hundred projects have been created since we first launched and dozens of bugs have been fixed.');
      ie_close('p');
      ie_open('p');
        itext('Today, we would like to show you some of the things we\'re working on.');
      ie_close('p');
      ie_open('h4');
        itext('Uptime Status');
      ie_close('h4');
      ie_open('p');
        itext('Even though this is an alpha version and problems are somewhat expected, we recognize the importance of being transparent about outages. That\'s why we would like to share with you a new page where you can check ');
        ie_open('a', null, null,
            'href', 'http://status.wedeploy.com/');
          itext('WeDeploy\'s uptime status');
        ie_close('a');
        itext('.');
      ie_close('p');
      ie_open('figure');
        ie_open('img', null, null,
            'src', '../images/blog/post-1--0.png',
            'alt', 'Uptime Status');
        ie_close('img');
      ie_close('figure');
      ie_open('h4');
        itext('Ruby Service');
      ie_close('h4');
      ie_open('p');
        itext('Our mission is to create a platform for all kinds of developers. With that in mind, we\'re introducing a new Ruby service. You can get more information by ');
        ie_open('a', null, null,
            'href', 'http://wedeploy.com/docs/other/ruby.html');
          itext('reading the docs');
        ie_close('a');
        itext(' or checking this ');
        ie_open('a', null, null,
            'href', 'https://github.com/wedeploy/boilerplate-ruby');
          itext('boilerplate');
        ie_close('a');
        itext('. Go to ');
        ie_open('a', null, null,
            'href', 'http://dashboard.wedeploy.com');
          itext('Dashboard');
        ie_close('a');
        itext(' to start using Ruby Service.');
      ie_close('p');
      ie_open('figure');
        ie_open('img', null, null,
            'class', 'original-size',
            'src', '../images/blog/post-1--1.png',
            'srcset', '../images/blog/post-1--1.png 1x, ../images/blog/post-1--1-2x.png 2x',
            'alt', 'Ruby Service');
        ie_close('img');
      ie_close('figure');
      ie_open('blockquote');
        ie_open('p');
          itext('Our mission is to create a platform for all kinds of developers.');
        ie_close('p');
      ie_close('blockquote');
      ie_open('p');
        itext('If you have any questions, feel free to ');
        ie_open('a', null, null,
            'href', 'http://chat.wedeploy.com/');
          itext('contact us');
        ie_close('a');
        itext('.');
      ie_close('p');
    ie_close('article');
  };
  $templateAlias1(soy.$$assignDefaults({content: param318}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'blogUptimeStatusNewRubyServiceAndMoreHtml.render';
}

exports.render.params = [];
exports.render.types = {};
templates = exports;
return exports;

});

class blogUptimeStatusNewRubyServiceAndMoreHtml extends Component {}
Soy.register(blogUptimeStatusNewRubyServiceAndMoreHtml, templates);
export { blogUptimeStatusNewRubyServiceAndMoreHtml, templates };
export default templates;
/* jshint ignore:end */
