/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from a-new-way-to-learn-wedeploy.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace QWodp.
 * @public
 */

goog.module('QWodp.incrementaldom');

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
  var param452 = function() {
    ie_open('article');
      ie_open('p');
        var dyn32 = opt_data.page.description;
        if (typeof dyn32 == 'function') dyn32(); else if (dyn32 != null) itext(dyn32);
      ie_close('p');
      ie_open('p');
        itext('Since then, we have been exploring new ways to take the WeDeploy learning experience to the next level, which is why we are excited to announce a brand new sibling in the documentation family: ');
        ie_open('strong');
          itext('Tutorials');
        ie_close('strong');
        itext('.');
      ie_close('p');
      ie_open('figure');
        ie_open('img', null, null,
            'src', '../images/blog/post-8--0.png',
            'alt', 'Tutorial preview');
        ie_close('img');
      ie_close('figure');
      ie_open('h4');
        itext('Which topics are covered?');
      ie_close('h4');
      ie_open('ul');
        ie_open('li');
          ie_open('strong');
            ie_open('a', null, null,
                'target', '_blank',
                'href', '/tutorials/hosting/get-started.html');
              itext('Hosting');
            ie_close('a');
          ie_close('strong');
          itext(': Deploy static files like HTML, CSS, and JS.');
        ie_close('li');
        ie_open('li');
          ie_open('strong');
            ie_open('a', null, null,
                'target', '_blank',
                'href', '/tutorials/data-web/get-started.html');
              itext('Data');
            ie_close('a');
          ie_close('strong');
          itext(': Deploy a to-do list app using our Data Service and JS.');
        ie_close('li');
        ie_open('li');
          ie_open('strong');
            ie_open('a', null, null,
                'target', '_blank',
                'href', '/tutorials/auth-web/get-started.html');
              itext('Auth');
            ie_close('a');
          ie_close('strong');
          itext(': Deploy an authentication app using our Auth Service and JS.');
        ie_close('li');
        ie_open('li');
          ie_open('strong');
            ie_open('a', null, null,
                'target', '_blank',
                'href', '/tutorials/email-web/get-started.html');
              itext('Email');
            ie_close('a');
          ie_close('strong');
          itext(': Deploy an email-sending app using our Email Service and JS.');
        ie_close('li');
        ie_open('li');
          ie_open('strong');
            ie_open('a', null, null,
                'target', '_blank',
                'href', '/tutorials/java/get-started.html');
              itext('Java');
            ie_close('a');
          ie_close('strong');
          itext(': Deploy an app using Java and Spring Boot.');
        ie_close('li');
        ie_open('li');
          ie_open('strong');
            ie_open('a', null, null,
                'target', '_blank',
                'href', '/tutorials/ruby/get-started.html');
              itext('Ruby');
            ie_close('a');
          ie_close('strong');
          itext(': Deploy an app using Ruby and Sinatra.');
        ie_close('li');
        ie_open('li');
          ie_open('strong');
            ie_open('a', null, null,
                'target', '_blank',
                'href', '/tutorials/nodejs/get-started.html');
              itext('Node.js');
            ie_close('a');
          ie_close('strong');
          itext(': Deploy an app using Node.js and Express.');
        ie_close('li');
        ie_open('li');
          ie_open('strong');
            ie_open('a', null, null,
                'target', '_blank',
                'href', '/tutorials/liferay/get-started.html');
              itext('Liferay');
            ie_close('a');
          ie_close('strong');
          itext(': Deploy a Liferay Portal instance.');
        ie_close('li');
      ie_close('ul');
      ie_open('h4');
        itext('Why tutorials?');
      ie_close('h4');
      ie_open('p');
        itext('Everyone learns differently. Some simply want to grab snippets of code and implement them in their projects. Others want to see a walkthrough of how to use the code in a real-life situation.');
      ie_close('p');
      ie_open('blockquote');
        ie_open('p');
          itext('There is nothing like seeing the code in action, and that is exactly what tutorials provide!');
        ie_close('p');
      ie_close('blockquote');
      ie_open('p');
        itext('We felt like the first group was being well taken care of by our ');
        ie_open('a', null, null,
            'href', '/docs/');
          itext('extensive documentation');
        ie_close('a');
        itext(', but there was nothing for the second group. After brainstorming different ways to provide this kind of step-by-step flow for those users, we landed on the concept of a tutorial.');
      ie_close('p');
      ie_open('figure');
        ie_open('img', null, null,
            'src', '../images/blog/post-8--1.png',
            'alt', 'See the code');
        ie_close('img');
      ie_close('figure');
      ie_open('h4');
        itext('What were our goals?');
      ie_close('h4');
      ie_open('p');
        itext('We had three goals for our tutorials:');
      ie_close('p');
      ie_open('ol');
        ie_open('li');
          ie_open('strong');
            itext('Simple UX');
          ie_close('strong');
          itext(': This started with the design and bled all the way through to the words and phrasings we used. It had to be something that reflected one of the most important parts of the WeDeploy product itself: ease of use.');
        ie_close('li');
        ie_open('li');
          ie_open('strong');
            itext('Consistent Flow');
          ie_close('strong');
          itext(': Most users come with a goal in mind of what they want to implement and what stack they want to implement it with. But what about after they build that first app? We wanted to create a consistent experience and content flow across all the tutorials so that users could easily learn about other services that were not already familiar to them.');
        ie_close('li');
        ie_open('li');
          ie_open('strong');
            itext('Educational Content');
          ie_close('strong');
          itext(': The end goal of each tutorial is deploying and interacting with a fully functional app, but we didn\'t want users to just get to the end, we wanted them to learn something. We spent hours, even days, coming up with the balance between the difficulty and educational takeaway of the tutorial, and we are very excited with the results.');
        ie_close('li');
      ie_close('ol');
      ie_open('h4');
        itext('What\'s in it for you?');
      ie_close('h4');
      ie_open('p');
        itext('Like we said above, each tutorial takes you all the way from clone to deploy in a matter of minutes. This not only gives you a inside look into specific details of the service you are interested in, but it also teaches you about other things like source code file structure, API methods, configuration files, deployment flow using git, and so much more.');
      ie_close('p');
      ie_open('hr');
      ie_close('hr');
      ie_open('p');
        itext('So what are you waiting for? Unlock the power of WeDeploy by starting one of these tutorials today!');
      ie_close('p');
      ie_open('p');
        itext('Don\'t forget to let us know how it goes! You can connect with us on ');
        ie_open('a', null, null,
            'href', 'https://twitter.com/wedeploy');
          itext('Twitter');
        ie_close('a');
        itext(' or join our community on ');
        ie_open('a', null, null,
            'href', 'https://chat.wedeploy.com');
          itext('Slack');
        ie_close('a');
        itext('.');
      ie_close('p');
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
  $templateAlias1(soy.$$assignDefaults({content: param452}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'QWodp.render';
}

exports.render.params = ["page","site"];
exports.render.types = {"page":"any","site":"any"};
templates = exports;
return exports;

});

class QWodp extends Component {}
Soy.register(QWodp, templates);
export { QWodp, templates };
export default templates;
/* jshint ignore:end */
