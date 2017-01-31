/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from using-the-dashboard.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace docsIntroUsingTheDashboardHtml.
 * @public
 */

goog.module('docsIntroUsingTheDashboardHtml.incrementaldom');

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
  var param1076 = function() {
    ie_open('h1');
      itext('Using the Dashboard');
    ie_close('h1');
    ie_open('h6');
      itext('In this section, you\'ll learn how to deploy an application using WeDeploy Dashboard.');
    ie_close('h6');
    ie_open('article', null, null,
        'id', 'article_1');
      ie_open('h2');
        itext('1. Create an account');
      ie_close('h2');
      ie_open('p');
        itext('First you need to create a WeDeploy account by signing up through the dashboard ');
        ie_open('a', null, null,
            'href', 'http://dashboard.wedeploy.com/signup');
          itext('signup page');
        ie_close('a');
        itext('.');
      ie_close('p');
      ie_open('p');
        ie_open('img', null, null,
            'src', 'https://cloud.githubusercontent.com/assets/301291/18884345/e5bd302e-849b-11e6-9be7-552acda97a31.png',
            'alt', 'SignUp');
        ie_close('img');
      ie_close('p');
    ie_close('article');
    ie_open('article', null, null,
        'id', 'article_2');
      ie_open('h2');
        itext('2. Access your dashboard');
      ie_close('h2');
      ie_open('p');
        itext('As the main page, the dashboard will list all your projects and status of availability in the server. In the Dashboard, click in New Project .');
      ie_close('p');
      ie_open('p');
        ie_open('img', null, null,
            'src', 'https://cloud.githubusercontent.com/assets/301291/18655293/798013ae-7e9c-11e6-8f7f-4d029d73d2bb.png',
            'alt', 'Dashboard');
        ie_close('img');
      ie_close('p');
    ie_close('article');
    ie_open('article', null, null,
        'id', 'article_3');
      ie_open('h2');
        itext('3. Create a new project');
      ie_close('h2');
      ie_open('p');
        itext('You are able to organize your services by project. Select a project ID and click in Create Project.');
      ie_close('p');
      ie_open('p');
        ie_open('img', null, null,
            'src', 'https://cloud.githubusercontent.com/assets/301291/18656444/0409e49c-7ea6-11e6-8961-eeccd4deab43.png',
            'alt', 'New Project');
        ie_close('img');
      ie_close('p');
    ie_close('article');
    ie_open('article', null, null,
        'id', 'article_4');
      ie_open('h2');
        itext('4. Open your project');
      ie_close('h2');
      ie_open('p');
        itext('Open your project by clicking on your project domain.');
      ie_close('p');
      ie_open('p');
        ie_open('img', null, null,
            'src', 'https://cloud.githubusercontent.com/assets/301291/18656506/7e3d873c-7ea6-11e6-945b-2da9ba801c3e.png',
            'alt', 'Project Container List');
        ie_close('img');
      ie_close('p');
    ie_close('article');
    ie_open('article', null, null,
        'id', 'article_5');
      ie_open('h2');
        itext('5. Click on install service');
      ie_close('h2');
      ie_open('p');
        itext('Projects can have more than one service. In this example we\'re going to deploy a static website.');
      ie_close('p');
      ie_open('p');
        ie_open('img', null, null,
            'src', 'https://cloud.githubusercontent.com/assets/301291/18655453/c83e2a66-7e9d-11e6-8440-673e3781335b.png',
            'alt', 'Install Container');
        ie_close('img');
      ie_close('p');
    ie_close('article');
    ie_open('article', null, null,
        'id', 'article_6');
      ie_open('h2');
        itext('6. Select a service type');
      ie_close('h2');
      ie_open('p');
        itext('In this tutorial we\'re going to use the WeDeploy Hosting in order to host a static project.');
      ie_close('p');
      ie_open('p');
        ie_open('img', null, null,
            'src', 'https://cloud.githubusercontent.com/assets/301291/18656521/9f3392b0-7ea6-11e6-9d05-29c68a657f6d.png',
            'alt', 'Select a Container Type');
        ie_close('img');
      ie_close('p');
    ie_close('article');
    ie_open('article', null, null,
        'id', 'article_7');
      ie_open('h2');
        itext('7. Fill in the ID click on install service');
      ie_close('h2');
      ie_open('p');
        ie_open('img', null, null,
            'src', 'https://cloud.githubusercontent.com/assets/301291/18656546/cac3682e-7ea6-11e6-8e24-354a1df99ea0.png',
            'alt', 'Install Container Form');
        ie_close('img');
      ie_close('p');
    ie_close('article');
    ie_open('article', null, null,
        'id', 'article_8');
      ie_open('h2');
        itext('8. The container is going to be up and running');
      ie_close('h2');
      ie_open('p');
        ie_open('img', null, null,
            'src', 'https://cloud.githubusercontent.com/assets/301291/18656561/f076a57c-7ea6-11e6-9d9d-aa288ca72135.png',
            'alt', 'Container Up and Running');
        ie_close('img');
      ie_close('p');
    ie_close('article');
    ie_open('article', null, null,
        'id', 'article_9');
      ie_open('h2');
        itext('9. Access the URL generated for your service');
      ie_close('h2');
      ie_open('p');
        itext('Now that you installed the boilerplate, in the service screen is possible to see the status of the service and its URL. Click on the URL to copy to your clipboard and open that in a new tab in your browser.');
        ie_open('img', null, null,
            'src', 'https://cloud.githubusercontent.com/assets/301291/18656570/0e5adc7a-7ea7-11e6-8dd8-74f3697b520f.png',
            'alt', 'URL Generated');
        ie_close('img');
      ie_close('p');
    ie_close('article');
    ie_open('article', null, null,
        'id', 'article_10');
      ie_open('h2');
        itext('10. It works!');
      ie_close('h2');
      ie_open('p');
        itext('That\'s it! Using a sofisticated Loadbalancer system and service discovering, WeDeploy automatically creates a URL and points that to your container.');
        ie_open('img', null, null,
            'src', 'https://cloud.githubusercontent.com/assets/301291/17796616/b2ca3fd4-6576-11e6-8e18-85423f206b94.jpg',
            'alt', 'URL Generated');
        ie_close('img');
      ie_close('p');
    ie_close('article');
  };
  $templateAlias1(soy.$$assignDefaults({content: param1076}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'docsIntroUsingTheDashboardHtml.render';
}

exports.render.params = [];
exports.render.types = {};
templates = exports;
return exports;

});

class docsIntroUsingTheDashboardHtml extends Component {}
Soy.register(docsIntroUsingTheDashboardHtml, templates);
export { docsIntroUsingTheDashboardHtml, templates };
export default templates;
/* jshint ignore:end */
