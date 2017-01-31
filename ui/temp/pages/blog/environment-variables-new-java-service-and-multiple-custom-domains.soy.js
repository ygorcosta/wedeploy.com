/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from environment-variables-new-java-service-and-multiple-custom-domains.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace blogEnvironmentVariablesNewJavaServiceAndMultipleCustomDomainsHtml.
 * @public
 */

goog.module('blogEnvironmentVariablesNewJavaServiceAndMultipleCustomDomainsHtml.incrementaldom');

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
  var param297 = function() {
    ie_open('article');
      ie_open('p');
        itext('We shipped some really interesting features recently and we would love to share them with you!');
      ie_close('p');
      ie_open('h4');
        itext('Environment Variables');
      ie_close('h4');
      ie_open('p');
        itext('An important piece of any kind of deployment is setting up environment variables. This can be used to protect credentials for an external database or a secret key that only a production environment should use. Now you can do this by going to the "');
        ie_open('em');
          itext('Environment');
        ie_close('em');
        itext('" tab on any WeDeploy service.');
      ie_close('p');
      ie_open('figure');
        ie_open('img', null, null,
            'src', '../images/blog/post-2--0.png',
            'srcset', '../images/blog/post-2--0.png 1x, ../images/blog/post-2--0-2x.png 2x',
            'alt', 'Environnment Variables');
        ie_close('img');
      ie_close('figure');
      ie_open('h4');
        itext('New Java Service');
      ie_close('h4');
      ie_open('p');
        itext('As part of our mission to create a very broad platform for all developers, we\'re introducing a new Java service. If you\'re interested, check the boilerplate examples we created using ');
        ie_open('a', null, null,
            'href', 'https://github.com/wedeploy/boilerplate-java');
          itext('Gradle');
        ie_close('a');
        itext(', ');
        ie_open('a', null, null,
            'href', 'https://github.com/wedeploy/boilerplate-java/tree/maven');
          itext('Maven');
        ie_close('a');
        itext(', and ');
        ie_open('a', null, null,
            'href', 'https://github.com/wedeploy/boilerplate-java/tree/ant');
          itext('Ant');
        ie_close('a');
        itext('.');
      ie_close('p');
      ie_open('figure');
        ie_open('img', null, null,
            'class', 'original-size',
            'src', '../images/blog/post-2--1.png',
            'srcset', '../images/blog/post-2--1.png 1x, ../images/blog/post-2--1-2x.png 2x',
            'alt', 'New Java Service');
        ie_close('img');
      ie_close('figure');
      ie_open('blockquote');
        ie_open('p');
          itext('As part of our mission to create a very broad platform for all developers, we\'re introducing a new Java service.');
        ie_close('p');
      ie_close('blockquote');
      ie_open('h4');
        itext('Multiple Custom Domains');
      ie_close('h4');
      ie_open('p');
        itext('In the past, you could only set one custom domain per project. Although that was useful for many people, there are many cases where you need to configure more than one domain. Now you have the ability to do that by going to the "');
        ie_open('em');
          itext('Settings');
        ie_close('em');
        itext('" menu on your project.');
      ie_close('p');
      ie_open('figure');
        ie_open('img', null, null,
            'src', '../images/blog/post-2--2.png',
            'srcset', '../images/blog/post-2--2.png 1x, ../images/blog/post-2--2-2x.png 2x',
            'alt', 'New Java Service');
        ie_close('img');
      ie_close('figure');
      ie_open('p');
        itext('If you have any questions, feel free to ');
        ie_open('a', null, null,
            'href', 'http://chat.wedeploy.com/');
          itext('contact us.');
        ie_close('a');
      ie_close('p');
      ie_open('p');
        itext('Happy coding!');
      ie_close('p');
    ie_close('article');
  };
  $templateAlias1(soy.$$assignDefaults({content: param297}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'blogEnvironmentVariablesNewJavaServiceAndMultipleCustomDomainsHtml.render';
}

exports.render.params = [];
exports.render.types = {};
templates = exports;
return exports;

});

class blogEnvironmentVariablesNewJavaServiceAndMultipleCustomDomainsHtml extends Component {}
Soy.register(blogEnvironmentVariablesNewJavaServiceAndMultipleCustomDomainsHtml, templates);
export { blogEnvironmentVariablesNewJavaServiceAndMultipleCustomDomainsHtml, templates };
export default templates;
/* jshint ignore:end */
