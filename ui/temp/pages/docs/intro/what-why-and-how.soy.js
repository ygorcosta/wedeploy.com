/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from what-why-and-how.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace docsIntroWhatWhyAndHowHtml.
 * @public
 */

goog.module('docsIntroWhatWhyAndHowHtml.incrementaldom');

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

var $templateAlias1 = Soy.getTemplate('guide.incrementaldom', 'render');


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ignored, opt_ijData) {
  opt_data = opt_data || {};
  var param1081 = function() {
    ie_open('h1');
      itext('What, Why and How');
    ie_close('h1');
    ie_open('h6');
      itext('Forget about infrastructure. WeDeploy helps you to dedicate your time to what really matters: building and scaling great apps. Before exploring WeDeploy further, make sure you understand its purpose and philosophy.');
    ie_close('h6');
    ie_open('article', null, null,
        'id', 'article_1');
      ie_open('h2');
        itext('1. What\'s WeDeploy?');
      ie_close('h2');
      ie_open('p');
        ie_open('em');
          itext('WeDeploy');
        ie_close('em');
        itext(' gives you access to intuitive APIs that can help you create modern apps faster.');
      ie_close('p');
      ie_open('p');
        itext('From simple applications to a full micro service architecture, choose between dozens of languages, frameworks, or entire application stacks and launch production-ready environments in a matter of minutes.');
      ie_close('p');
      ie_open('p');
        itext('With WeDeploy, you are able to quickly and efficiently respond to user demands:');
      ie_close('p');
      ie_open('ul');
        ie_open('li');
          itext('Deploy your applications quickly.');
        ie_close('li');
        ie_open('li');
          itext('Automatically distribute incoming traffic across multiple instances.');
        ie_close('li');
        ie_open('li');
          itext('Authenticate users with only a few lines of code.');
        ie_close('li');
        ie_open('li');
          itext('Store data securely and consume information in real-time.');
        ie_close('li');
        ie_open('li');
          itext('Release applications with zero downtime.');
        ie_close('li');
        ie_open('li');
          itext('Build and deploy micro services.');
        ie_close('li');
      ie_close('ul');
    ie_close('article');
    ie_open('article', null, null,
        'id', 'article_2');
      ie_open('h2');
        itext('2. Why should I use WeDeploy?');
      ie_close('h2');
      ie_open('p');
        itext('When building highly scalable applications there are many things you need to consider: performance bottlenecks, database resiliency and scalability, authentication, authorization, and static hosting to name a few. WeDeploy is a new dynamic Liferay initiative, allowing you to handle all of your back-end challenges in one place. Focus on creating amazing user experiences and WeDeploy will take care of the rest.');
      ie_close('p');
      ie_open('p');
        itext('This is why WeDeploy was also designed to serve as a platform for building a manageable ecosystem of components and tools to make it easier to deploy and scale any application.');
      ie_close('p');
    ie_close('article');
    ie_open('article', null, null,
        'id', 'article_3');
      ie_open('h2');
        itext('3. How will WeDeploy help me to deploy from simple to advanced applications?');
      ie_close('h2');
      ie_open('p');
        itext('From a simple application to an advanced group of microservices, WeDeploy will provide the tools to manage the visibility, scale, and DNS for your application. WeDeploy provides an infrastructure to deploy micro-services in a managed cloud infrastructure.');
      ie_close('p');
    ie_close('article');
  };
  $templateAlias1(soy.$$assignDefaults({content: param1081}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'docsIntroWhatWhyAndHowHtml.render';
}

exports.render.params = [];
exports.render.types = {};
templates = exports;
return exports;

});

class docsIntroWhatWhyAndHowHtml extends Component {}
Soy.register(docsIntroWhatWhyAndHowHtml, templates);
export { docsIntroWhatWhyAndHowHtml, templates };
export default templates;
/* jshint ignore:end */
