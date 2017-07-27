/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from tutorial.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace tutorial.
 * @public
 */

goog.module('tutorial.incrementaldom');

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

var $templateAlias1 = Soy.getTemplate('TutorialSidebar.incrementaldom', 'render');

var $templateAlias2 = Soy.getTemplate('TutorialTopbar.incrementaldom', 'render');


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ignored, opt_ijData) {
  var $$temp;
  ie_open('div', null, null,
      'class', ($$temp = opt_data.elementClasses) == null ? 'main' : $$temp);
    ie_open('main', null, null,
        'class', 'content');
      ie_open('div', null, null,
          'class', 'tutorial');
        if (opt_data.page) {
          $templateAlias1({page: opt_data.site.index.children['tutorials'].children[opt_data.page.parentId]}, null, opt_ijData);
          $tutorials(opt_data, null, opt_ijData);
        }
      ie_close('div');
    ie_close('main');
  ie_close('div');
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'tutorial.render';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $tutorials(opt_data, opt_ignored, opt_ijData) {
  ie_open('div', null, null,
      'class', 'sidebar-offset');
    var param272 = function() {
      ie_open('div', null, null,
          'class', 'topbar-logo');
        ie_open('span', null, null,
            'class', 'wedeploy-logo dashboard-logo');
          ie_open('span', null, null,
              'class', 'we-circle');
            ie_open('span', null, null,
                'class', 'we');
              itext('We');
            ie_close('span');
          ie_close('span');
        ie_close('span');
      ie_close('div');
    };
    $templateAlias2({elementClasses: 'topbar-light', page: opt_data.page, logo: param272}, null, opt_ijData);
    ie_open('div', null, null,
        'class', 'container');
      ie_open('div', null, null,
          'class', 'container-blog card');
        var dyn20 = opt_data.content;
        if (typeof dyn20 == 'function') dyn20(); else if (dyn20 != null) itext(dyn20);
        $footerButtons(opt_data, null, opt_ijData);
      ie_close('div');
    ie_close('div');
  ie_close('div');
}
exports.tutorials = $tutorials;
if (goog.DEBUG) {
  $tutorials.soyTemplateName = 'tutorial.tutorials';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $footerButtons(opt_data, opt_ignored, opt_ijData) {
  ie_open('div', null, null,
      'class', 'tutorial-page-nav');
    var tutorialObject__soy283 = opt_data.site.index.children['tutorials'].children[opt_data.page.parentId];
    if (opt_data.page.weight < tutorialObject__soy283.childIds.length) {
      var nextPageUrl__soy286 = tutorialObject__soy283.children[tutorialObject__soy283.childIds[opt_data.page.weight]].url;
      if (opt_data.site.githubRepo) {
        ie_open('a', null, null,
            'href', 'https://github.com/' + opt_data.site.githubRepo + '/issues/new?title=Tutorial+Problem&body=%3E+URL%3A+' + opt_data.page.url,
            'target', '_blank',
            'class', 'btn btn-default btn-sm');
          itext('Report a problem');
        ie_close('a');
      }
      if (opt_data.page.buttonTitle) {
        ie_open('a', null, null,
            'href', nextPageUrl__soy286,
            'class', 'btn btn-accent btn-sm');
          var dyn21 = opt_data.page.buttonTitle;
          if (typeof dyn21 == 'function') dyn21(); else if (dyn21 != null) itext(dyn21);
        ie_close('a');
      }
    }
  ie_close('div');
}
exports.footerButtons = $footerButtons;
if (goog.DEBUG) {
  $footerButtons.soyTemplateName = 'tutorial.footerButtons';
}

exports.render.params = ["content","elementClasses","page","site"];
exports.render.types = {"content":"any","elementClasses":"any","page":"any","site":"any"};
exports.tutorials.params = ["content","page","site"];
exports.tutorials.types = {"content":"any","page":"any","site":"any"};
exports.footerButtons.params = ["page","site"];
exports.footerButtons.types = {"page":"any","site":"any"};
templates = exports;
return exports;

});

class tutorial extends Component {}
Soy.register(tutorial, templates);
export { tutorial, templates };
export default templates;
/* jshint ignore:end */
