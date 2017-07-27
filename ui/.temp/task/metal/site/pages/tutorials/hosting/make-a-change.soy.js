/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from make-a-change.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace vVXDG.
 * @public
 */

goog.module('vVXDG.incrementaldom');

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

var $templateAlias1 = Soy.getTemplate('tutorial.incrementaldom', 'render');


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ignored, opt_ijData) {
  var param3390 = function() {
    ie_open('h4');
      itext('Make a Change');
    ie_close('h4');
    ie_open('p');
      itext('Our project is now live, but what\'s next? Let\'s try deploying a new change to our app!');
    ie_close('p');
    ie_open('h6');
      itext('Develop');
    ie_close('h6');
    ie_open('p');
      itext('Go back to your project and open up the ');
      ie_open('code');
        itext('index.html');
      ie_close('code');
      itext(' in your code editor. Change the text in the ');
      ie_open('code');
        itext('<h1>');
      ie_close('code');
      itext(' element (try putting "You Rock!").');
    ie_close('p');
    ie_open('h6');
      itext('Deploy');
    ie_close('h6');
    ie_open('p');
      itext('Go to ');
      ie_open('code');
        itext('tutorial-hosting');
      ie_close('code');
      itext(' in your terminal and deploy your project again:');
    ie_close('p');
    $templateAlias2({code: 'we deploy --project projectID', mode: 'xml'}, null, opt_ijData);
    ie_open('p');
      ie_open('strong');
        itext('Note:');
      ie_close('strong');
      itext(' make sure to replace ');
      ie_open('code');
        itext('projectID');
      ie_close('code');
      itext(' with the id of your project.');
    ie_close('p');
    ie_open('h6');
      itext('See it live');
    ie_close('h6');
    ie_open('p');
      itext('Go to ');
      ie_open('code');
        itext('hosting-<projectID>.wedeploy.sh');
      ie_close('code');
      itext(' in your browser and see the changes you made!');
    ie_close('p');
    ie_open('aside');
      ie_open('h6');
        ie_void('span', null, null,
            'class', 'icon-16-star');
        itext(' Pro Tip');
      ie_close('h6');
      ie_open('p');
        itext('Wanting to make a pretty url for your primary UI service without purchasing a custom domain? Perfect, you can go to the ');
        ie_open('em');
          itext('Custom Domain');
        ie_close('em');
        itext(' section of your service on the Dashboard and add a custom domain that ends with ');
        ie_open('code');
          itext('wedeploy.io');
        ie_close('code');
        itext(' (e.g. ');
        ie_open('code');
          itext('yourapp.wedeploy.io');
        ie_close('code');
        itext(').');
      ie_close('p');
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
  $templateAlias1(soy.$$assignDefaults({content: param3390}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'vVXDG.render';
}

exports.render.params = ["page","site"];
exports.render.types = {"page":"any","site":"any"};
templates = exports;
return exports;

});

class vVXDG extends Component {}
Soy.register(vVXDG, templates);
export { vVXDG, templates };
export default templates;
/* jshint ignore:end */
