// This file was automatically generated from clone-sample-repo.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace vGXRj.
 * @public
 */

goog.module('vGXRj.incrementaldom');

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
var $import1 = goog.require('ElectricCode.incrementaldom');
var $templateAlias2 = $import1.render;
var $import2 = goog.require('tutorial.incrementaldom');
var $templateAlias1 = $import2.render;


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ignored, opt_ijData) {
  var param2190 = function() {
    ie_open('h4');
      itext('Clone Sample Repo');
    ie_close('h4');
    ie_open('p');
      itext('First, you\'ll clone a sample repo that contains the necessary files and directories for deploying a site with Auth and for creating an app that make use of these services.');
    ie_close('p');
    ie_open('p');
      itext('Run this command in your terminal:');
    ie_close('p');
    $templateAlias2({code: 'git clone https://github.com/wedeploy/tutorial-auth-ios.git', mode: 'text'}, null, opt_ijData);
    ie_open('p');
      itext('This project contains a folder named ');
      ie_open('code');
        itext('app');
      ie_close('code');
      itext(' that we will use to learn how to use the WeDeploy API client. This folder is not used by the WeDeploy infrastructure, but we have it here to make the example simpler by not using two different repos (one for WeDeploy project and one for the app).');
    ie_close('p');
    ie_open('aside');
      ie_open('h6');
        ie_void('span', null, null,
            'class', 'icon-16-star');
        itext(' Pro Tip');
      ie_close('h6');
      ie_open('p');
        itext('Building an app with multiple services is very easy with WeDeploy. Every directory that contains a ');
        ie_open('code');
          itext('wedeploy.json');
        ie_close('code');
        itext(' will be treated as a separate service. If a specific image type is not detected, we will scan the conents of the directory and deploy the service that is most like your source code (');
        ie_open('code');
          itext('package.json');
        ie_close('code');
        itext(' = Node.js, ');
        ie_open('code');
          itext('Dockerfile');
        ie_close('code');
        itext(' = Custom Docker Image, ');
        ie_open('code');
          itext('index.html');
        ie_close('code');
        itext(' = static hosting).');
      ie_close('p');
      $templateAlias2({code: 'yourApp\n\u251C\u2500\u2500 auth\n\u2502   \u2514\u2500\u2500 wedeploy.json\n\u251C\u2500\u2500 db\n\u2502   \u2514\u2500\u2500 wedeploy.json\n\u2514\u2500\u2500 Docker\n    \u2514\u2500\u2500 wedeploy.json\n    \u2514\u2500\u2500 Dockerfile', mode: 'xml'}, null, opt_ijData);
    ie_close('aside');
    ie_open('input', null, null,
        'type', 'hidden',
        'value', opt_data.page.title);
    ie_close('input');
    ie_open('input', null, null,
        'type', 'hidden',
        'value', opt_data.site.title);
    ie_close('input');
  };
  $templateAlias1(soy.$$assignDefaults({content: param2190}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'vGXRj.render';
}
