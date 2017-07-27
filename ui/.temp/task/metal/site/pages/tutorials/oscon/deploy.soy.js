/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from deploy.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace DbwUt.
 * @public
 */

goog.module('DbwUt.incrementaldom');

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

var $templateAlias1 = Soy.getTemplate('tutorial.incrementaldom', 'render');


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ignored, opt_ijData) {
  var param3679 = function() {
    ie_open('h4');
      itext('Select the fork');
    ie_close('h4');
    ie_open('p');
      itext('After logging in, you will get redirected back to the deployment page.');
    ie_close('p');
    ie_open('p');
      itext('There you can add details about the repo you want to deploy.');
    ie_close('p');
    ie_open('ol');
      ie_open('li');
        itext('Add your fork\'s');
      ie_close('li');
      ie_open('ul');
        ie_open('li');
          ie_open('strong');
            itext('owner');
          ie_close('strong');
          itext(' (you)');
        ie_close('li');
        ie_open('li');
          ie_open('strong');
            itext('repo');
          ie_close('strong');
          itext(' (oscon-game)');
        ie_close('li');
        ie_open('li');
          ie_open('strong');
            itext('branch');
          ie_close('strong');
          itext(' (master)');
        ie_close('li');
      ie_close('ul');
      ie_open('li');
        itext('Click ');
        ie_open('em');
          itext('Connect Repository');
        ie_close('em');
      ie_close('li');
    ie_close('ol');
    ie_open('p');
      itext('Now WeDeploy will automatically start deploying your repo.');
    ie_close('p');
    ie_open('figure');
      ie_open('img', null, null,
          'src', '/images/tutorials/oscon/4-choose-repo.gif',
          'alt', 'Choose Repo');
      ie_close('img');
    ie_close('figure');
    ie_open('h4');
      itext('Set home container');
    ie_close('h4');
    ie_open('p');
      itext('In order to have a cleaner url for your game, we will set the home conatiner.');
    ie_close('p');
    ie_open('ol');
      ie_open('li');
        itext('Go to your project ');
        ie_open('em');
          itext('Settings');
        ie_close('em');
      ie_close('li');
      ie_open('li');
        itext('Under ');
        ie_open('em');
          itext('Home Services');
        ie_close('em');
        itext(', select the hosting container');
      ie_close('li');
      ie_open('li');
        itext('Click ');
        ie_open('em');
          itext('Update Project');
        ie_close('em');
      ie_close('li');
    ie_close('ol');
    ie_open('figure');
      ie_open('img', null, null,
          'src', '/images/tutorials/oscon/5-home-container.gif',
          'alt', 'Change home container');
      ie_close('img');
    ie_close('figure');
    ie_open('input', null, null,
        'type', 'hidden',
        'value', opt_data.page.title);
    ie_close('input');
    ie_open('input', null, null,
        'type', 'hidden',
        'value', opt_data.site.title);
    ie_close('input');
  };
  $templateAlias1(soy.$$assignDefaults({content: param3679}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'DbwUt.render';
}

exports.render.params = ["page","site"];
exports.render.types = {"page":"any","site":"any"};
templates = exports;
return exports;

});

class DbwUt extends Component {}
Soy.register(DbwUt, templates);
export { DbwUt, templates };
export default templates;
/* jshint ignore:end */
