/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from getting-started.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace docsDataGettingStartedHtml.
 * @public
 */

goog.module('docsDataGettingStartedHtml.incrementaldom');

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

var $templateAlias2 = Soy.getTemplate('ElectricCode.incrementaldom', 'render');

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
  var param589 = function() {
    ie_open('h1');
      itext('Data');
    ie_close('h1');
    ie_open('h6');
      itext('Leverage a NoSQL database with search and real-time capabilities using ');
      ie_open('em');
        itext('WeDeploy\u2122 Data');
      ie_close('em');
      itext('.');
    ie_close('h6');
    ie_open('div', null, null,
        'class', 'guide-btn-cta');
      ie_open('a', null, null,
          'class', 'btn btn-accent btn-sm',
          'href', 'http://boilerplate-data.wedeploy.io',
          'target', '_blank');
        ie_void('span', null, null,
            'class', 'icon-16-external');
        itext('See Live Demo');
      ie_close('a');
    ie_close('div');
    ie_open('div', null, null,
        'class', 'guide-aux-cta');
      itext('or read the ');
      ie_open('a', null, null,
          'href', 'https://github.com/wedeploy/boilerplate-data/tree/js',
          'target', '_blank');
        itext('source code');
      ie_close('a');
      itext('.');
    ie_close('div');
    ie_open('article', null, null,
        'id', 'article_1');
      ie_open('h2');
        itext('Install dependencies');
      ie_close('h2');
      ie_open('p');
        itext('This section assumes you already have the ');
        ie_open('strong');
          itext('WeDeploy CLI');
        ie_close('strong');
        itext(' installed and ');
        ie_open('strong');
          itext('Docker');
        ie_close('strong');
        itext(' running. Make sure to ');
        ie_open('a', null, null,
            'href', '/docs/intro/using-the-command-line.html');
          itext('visit the installation guide');
        ie_close('a');
        itext(' if you need help setting that up.');
      ie_close('p');
      ie_open('p');
        itext('We also feature code snippets using the API Client, ');
        ie_open('a', null, null,
            'href', '/docs/intro/using-the-api-client.html');
          itext('visit this guide');
        ie_close('a');
        itext(' in order to start using it.');
      ie_close('p');
    ie_close('article');
    ie_open('article', null, null,
        'id', 'article_2');
      ie_open('h2');
        itext('Running locally');
      ie_close('h2');
      ie_open('ol');
        ie_open('li');
          itext('Start local infrastructure:');
        ie_close('li');
      ie_close('ol');
      $templateAlias2({code: 'we run', mode: 'xml'}, null, opt_ijData);
      ie_open('ol', null, null,
          'start', '2');
        ie_open('li');
          itext('Clone this repository:');
        ie_close('li');
      ie_close('ol');
      $templateAlias2({code: 'git clone -b js https://github.com/wedeploy/boilerplate-data.git boilerplate-data-js\ncd boilerplate-data-js', mode: 'xml'}, null, opt_ijData);
      ie_open('ol', null, null,
          'start', '3');
        ie_open('li');
          itext('Link this container with the local infrastructure:');
        ie_close('li');
      ie_close('ol');
      $templateAlias2({code: 'we link', mode: 'xml'}, null, opt_ijData);
      ie_open('ol', null, null,
          'start', '4');
        ie_open('li');
          itext('Now your container is ready to be used:');
        ie_close('li');
      ie_close('ol');
      $templateAlias2({code: 'http://boilerplate-data.wedeploy.me', mode: 'xml'}, null, opt_ijData);
    ie_close('article');
    ie_open('article', null, null,
        'id', 'article_3');
      ie_open('h2');
        itext('Deploying to the cloud');
      ie_close('h2');
      ie_open('ol');
        ie_open('li');
          ie_open('a', null, null,
              'href', 'https://github.com/wedeploy/boilerplate-data/fork');
            itext('Fork this repository');
          ie_close('a');
          itext('.');
        ie_close('li');
        ie_open('li');
          itext('Go to the ');
          ie_open('a', null, null,
              'href', 'http://dashboard.wedeploy.com');
            itext('Dashboard');
          ie_close('a');
          itext('.');
        ie_close('li');
        ie_open('li');
          ie_open('a', null, null,
              'href', 'http://dashboard.wedeploy.com/projects/create');
            itext('Create a project');
          ie_close('a');
          itext('.');
        ie_close('li');
        ie_open('li');
          itext('In the sidebar, click on ');
          ie_open('em');
            itext('Deployment');
          ie_close('em');
          itext('.');
        ie_close('li');
        ie_open('li');
          itext('Using your local machine, clone your Github fork:');
        ie_close('li');
      ie_close('ol');
      $templateAlias2({code: 'git clone -b js https://github.com/<username>/boilerplate-data', mode: 'xml'}, null, opt_ijData);
      ie_open('ol', null, null,
          'start', '6');
        ie_open('li');
          itext('Get into the folder: ');
          ie_open('code');
            itext('cd boilerplate-data');
          ie_close('code');
          itext('.');
        ie_close('li');
        ie_open('li');
          itext('Using the content on ');
          ie_open('em');
            itext('Deployment');
          ie_close('em');
          itext(' page. Add the WeDeploy remote url:');
        ie_close('li');
      ie_close('ol');
      $templateAlias2({code: 'git remote add wedeploy http://git.wedeploy.com/<projectID>.git', mode: 'xml'}, null, opt_ijData);
      ie_open('ol', null, null,
          'start', '8');
        ie_open('li');
          itext('Push your data to wedeploy git server: ');
          ie_open('code');
            itext('git push wedeploy js:master');
          ie_close('code');
          itext('.');
        ie_close('li');
        ie_open('li');
          itext('Once you see it in the Dashboard, your container will be ready to be used.');
        ie_close('li');
      ie_close('ol');
      $templateAlias2({code: 'http://boilerplate-data.wedeploy.io', mode: 'xml'}, null, opt_ijData);
    ie_close('article');
    ie_open('h2');
      itext('What\'s next?');
    ie_close('h2');
    ie_open('p');
      itext('Now that you have ');
      ie_open('em');
        itext('WeDeploy\u2122 Data');
      ie_close('em');
      itext(' API settled up, you can interact ');
      ie_open('a', null, null,
          'href', '/docs/data/js/configuring-data.html');
        itext('configuring the data service');
      ie_close('a');
      itext('.');
    ie_close('p');
  };
  $templateAlias1(soy.$$assignDefaults({content: param589}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'docsDataGettingStartedHtml.render';
}

exports.render.params = [];
exports.render.types = {};
templates = exports;
return exports;

});

class docsDataGettingStartedHtml extends Component {}
Soy.register(docsDataGettingStartedHtml, templates);
export { docsDataGettingStartedHtml, templates };
export default templates;
/* jshint ignore:end */
