/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from environment-variables.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace docsIntroEnvironmentVariablesHtml.
 * @public
 */

goog.module('docsIntroEnvironmentVariablesHtml.incrementaldom');

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
  var param958 = function() {
    ie_open('h1');
      itext('Environment Variables');
    ie_close('h1');
    ie_open('h6');
      itext('This is an overview of how WeDeploy manages environment variables for your projects.');
    ie_close('h6');
    ie_open('article', null, null,
        'id', 'article_1');
      ie_open('h2');
        itext('Introduction');
      ie_close('h2');
      ie_open('p');
        itext('A project may have numerous environments: a production app, a staging app, and any number of test and local environments maintained by many different developers. However, the code is the same. In order to make it happen, each environment would have specific configurations.');
      ie_close('p');
      ie_open('p');
        itext('A good example would be credentials for the database, where each environment has its own credentials. The ideal scenario for handling this scenario, would be using Environment variables, in order to set up different configurations for different environment using the same code. In a traditional development proccess, you would speciffy the configurations in different files. On WeDeploy you can take advantage of Environment Variables using the dashboard.');
      ie_close('p');
    ie_close('article');
    ie_open('article', null, null,
        'id', 'article_2');
      ie_open('h2');
        itext('Configuring environment variables');
      ie_close('h2');
      ie_open('p');
        itext('WeDeploy can help you to configure environment variables for your services. Each service can have its own group of environment variables and can be configured follwing these steps:');
      ie_close('p');
      ie_open('ol');
        ie_open('li');
          itext('After create a project and installing a service on the ');
          ie_open('a', null, null,
              'href', 'http://dashboard.wedeploy.com');
            itext('dashboard');
          ie_close('a');
          itext('. Go to the service page.');
        ie_close('li');
        ie_open('li');
          itext('Click on Environment Vars.');
        ie_close('li');
        ie_open('li');
          itext('Click on Update Service.');
        ie_close('li');
      ie_close('ol');
      ie_open('p');
        ie_open('img', null, null,
            'src', 'https://cloud.githubusercontent.com/assets/301291/19909475/27d9d6f0-a045-11e6-9483-54d76a164384.png',
            'alt', 'envvar');
        ie_close('img');
      ie_close('p');
      ie_open('p');
        itext('Any environment variable provided using dashboard overwrites the environment variables provided in ');
        ie_open('code');
          itext('container.json');
        ie_close('code');
        itext(' of your service.');
      ie_close('p');
    ie_close('article');
  };
  $templateAlias1(soy.$$assignDefaults({content: param958}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'docsIntroEnvironmentVariablesHtml.render';
}

exports.render.params = [];
exports.render.types = {};
templates = exports;
return exports;

});

class docsIntroEnvironmentVariablesHtml extends Component {}
Soy.register(docsIntroEnvironmentVariablesHtml, templates);
export { docsIntroEnvironmentVariablesHtml, templates };
export default templates;
/* jshint ignore:end */
