// This file was automatically generated from continuous-deployment.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace AUMkI.
 * @public
 */

goog.module('AUMkI.incrementaldom');

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
  var param1458 = function() {
    ie_open('h3');
      var dyn72 = opt_data.page.title;
      if (typeof dyn72 == 'function') dyn72(); else if (dyn72 != null) itext(dyn72);
    ie_close('h3');
    ie_open('h6');
      var dyn73 = opt_data.page.description;
      if (typeof dyn73 == 'function') dyn73(); else if (dyn73 != null) itext(dyn73);
    ie_close('h6');
    ie_open('article', null, null,
        'id', '1');
      ie_open('h2');
        itext('Create a project');
      ie_close('h2');
      ie_open('ol');
        ie_open('li');
          itext('Go to the ');
          ie_open('a', null, null,
              'href', 'https://console.wedeploy.xyz');
            itext('WeDeploy Console');
          ie_close('a');
        ie_close('li');
        ie_open('li');
          itext('Click on ');
          ie_open('em');
            itext('"New Project"');
          ie_close('em');
          itext(' in the top right corner of the screen');
        ie_close('li');
        ie_open('li');
          itext('Type a desired project name and then click ');
          ie_open('em');
            itext('"Create Project"');
          ie_close('em');
        ie_close('li');
      ie_close('ol');
      ie_open('p');
        ie_open('img', null, null,
            'src', '/images/docs/deploy/new-project.png',
            'alt', 'New Project');
        ie_close('img');
      ie_close('p');
    ie_close('article');
    ie_open('article', null, null,
        'id', '2');
      ie_open('h2');
        itext('Connect to GitHub');
      ie_close('h2');
      ie_open('ol');
        ie_open('li');
          itext('On your project, click on ');
          ie_open('em');
            itext('"Deployment"');
          ie_close('em');
        ie_close('li');
        ie_open('li');
          itext('Go to the ');
          ie_open('em');
            itext('"GitHub"');
          ie_close('em');
          itext(' tab');
        ie_close('li');
        ie_open('li');
          itext('Click on ');
          ie_open('em');
            itext('"Connect to Github"');
          ie_close('em');
          itext(' (if its your first time, you will need to authenticate with GitHub)');
        ie_close('li');
        ie_open('li');
          itext('Select the repository and branch that you want to deploy');
        ie_close('li');
        ie_open('li');
          itext('Click on the ');
          ie_open('em');
            itext('"Connect Repository"');
          ie_close('em');
          itext(' button');
        ie_close('li');
      ie_close('ol');
      ie_open('p');
        ie_open('img', null, null,
            'src', '/images/docs/deploy/connect-to-github.png',
            'alt', 'Connect to GitHub');
        ie_close('img');
      ie_close('p');
      ie_open('p');
        itext('This will immediately start building and deploying your application. In the end, you\'ll be able to see it online in any browser.');
      ie_close('p');
      ie_open('aside');
        ie_open('p');
          itext('If you don\'t have a project ready to deploy, you can fork this ');
          ie_open('a', null, null,
              'href', 'https://github.com/wedeploy/boilerplate-hosting');
            itext('GitHub repository');
          ie_close('a');
          itext(' and connect to it.');
        ie_close('p');
      ie_close('aside');
    ie_close('article');
    ie_open('h2');
      itext('What\'s next?');
    ie_close('h2');
    ie_open('p');
      itext('Now you\'re ready to connect to GitHub and deploy any kind of application. Let\'s start with ');
      ie_open('a', null, null,
          'href', '/docs/deploy/continuous-deployment.html');
        itext('Deploying Node.js');
      ie_close('a');
      itext('?');
    ie_close('p');
    ie_open('input', null, null,
        'type', 'hidden',
        'value', opt_data.page.title);
    ie_close('input');
    ie_open('input', null, null,
        'type', 'hidden',
        'value', opt_data.site.title);
    ie_close('input');
  };
  $templateAlias1(soy.$$assignDefaults({content: param1458}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'AUMkI.render';
}
