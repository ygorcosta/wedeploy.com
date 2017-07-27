// This file was automatically generated from what-why-and-how.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace JWNlQ.
 * @public
 */

goog.module('JWNlQ.incrementaldom');

/** @suppress {extraRequire} */
goog.require('soy');
/** @suppress {extraRequire} */
goog.require('soydata');
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
var $import1 = goog.require('guide.incrementaldom');
var $templateAlias1 = $import1.render;


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ignored, opt_ijData) {
  var param1980 = function() {
    ie_open('h3');
      var dyn107 = opt_data.page.title;
      if (typeof dyn107 == 'function') dyn107(); else if (dyn107 != null) itext(dyn107);
    ie_close('h3');
    ie_open('h6');
      var dyn108 = opt_data.page.description;
      if (typeof dyn108 == 'function') dyn108(); else if (dyn108 != null) itext(dyn108);
    ie_close('h6');
    ie_open('article', null, null,
        'id', '1');
      ie_open('h2');
        itext('What is WeDeploy?');
      ie_close('h2');
      ie_open('p');
        itext('WeDeploy is ');
        ie_open('em');
          itext('deployment platform');
        ie_close('em');
        itext(' that gives you access to intuitive APIs that can help you create modern apps faster.');
      ie_close('p');
      ie_open('p');
        itext('From simple applications to full microservice architectures, launch your production-ready environments in a matter of minutes without having to change your stack.');
      ie_close('p');
      ie_open('p');
        itext('We also know it\'s not just about getting your app live quickly, but also about effectively meeting user demands with minimal development overhead. This is why we provide many features that allow you to quickly and efficiently respond to the needs of your users.');
      ie_close('p');
      ie_open('ul');
        ie_open('li');
          itext('Deploy and configure your cloud app from your command line');
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
          itext('Build and deploy custom microservices.');
        ie_close('li');
      ie_close('ul');
    ie_close('article');
    ie_open('article', null, null,
        'id', '2');
      ie_open('h2');
        itext('Why should I use it?');
      ie_close('h2');
      ie_open('p');
        itext('When building highly scalable applications there are many things you need to consider like performance bottlenecks, database resilience and scalability, authorization, and user authentication. Because of this, WeDeploy was built to become a deployment platform that handles all of your back-end challenges in one place.');
      ie_close('p');
      ie_open('p');
        itext('Focus on creating amazing user experiences and WeDeploy will take care of the rest.');
      ie_close('p');
    ie_close('article');
    ie_open('article', null, null,
        'id', '3');
      ie_open('h2');
        itext('How will it help me?');
      ie_close('h2');
      ie_open('p');
        itext('From a solo project to a full project team application, WeDeploy will provide the tools to manage the visibility, scale, and DNS for your application. WeDeploy provides an infrastructure to deploy microservices in a managed cloud infrastructure.');
      ie_close('p');
      ie_open('p');
        itext('Whether you use Node.js, PHP, Java, Wordpress, or even just HTML, CSS, and JavaScript, we provide an unopinionated deployment flow so you can use the stack you are already comfortable with. To do this, we utlilize the diversity of Docker');
      ie_close('p');
    ie_close('article');
    ie_open('h2');
      itext('What\'s next?');
    ie_close('h2');
    ie_open('ul');
      ie_open('li');
        itext('Learn more about ');
        ie_open('a', null, null,
            'href', '/docs/intro/feature-overview.html');
          itext('all we offer');
        ie_close('a');
        itext('.');
      ie_close('li');
    ie_close('ul');
    ie_open('input', null, null,
        'type', 'hidden',
        'value', opt_data.page.title);
    ie_close('input');
    ie_open('input', null, null,
        'type', 'hidden',
        'value', opt_data.site.title);
    ie_close('input');
  };
  $templateAlias1(soy.$$assignDefaults({content: param1980}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'JWNlQ.render';
}
