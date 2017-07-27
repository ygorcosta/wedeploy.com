/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from make-a-change.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace ppOdj.
 * @public
 */

goog.module('ppOdj.incrementaldom');

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
  var param3652 = function() {
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
        itext('public/index.html');
      ie_close('code');
      itext(' in your code editor. Change the text in the ');
      ie_open('code');
        itext('<h1>');
      ie_close('code');
      itext(' element (try putting "You Rock!").');
    ie_close('p');
    ie_open('h6');
      itext('Push');
    ie_close('h6');
    ie_open('p');
      itext('Now make another commit and push your changes to the WeDeploy remote!');
    ie_close('p');
    ie_open('ol');
      ie_open('li');
        ie_open('code');
          itext('git add .');
        ie_close('code');
      ie_close('li');
      ie_open('li');
        ie_open('code');
          itext('git commit -m "update header"');
        ie_close('code');
      ie_close('li');
      ie_open('li');
        ie_open('code');
          itext('git push wedeploy master');
        ie_close('code');
      ie_close('li');
    ie_close('ol');
    ie_open('h6');
      itext('See it live');
    ie_close('h6');
    ie_open('p');
      itext('Give it a few moments and then go check your project\'s URL again. You should see the text change to "You Rock!" because let\'s be honest, you do!');
    ie_close('p');
    ie_open('aside');
      ie_open('h6');
        ie_void('span', null, null,
            'class', 'icon-16-star');
        itext(' Pro Tip');
      ie_close('h6');
      ie_open('p');
        itext('Want to make your Node.js Service the primary service so that it is served to your project\'s root url (');
        ie_open('code');
          itext('<projectID>.wedeploy.sh');
        ie_close('code');
        itext(')? Perfect, that is extremely easy to do. Go to the settings tab of your project\'s console and select ');
        ie_open('em');
          itext('nodejs');
        ie_close('em');
        itext(' as your ');
        ie_open('em');
          itext('Home Service');
        ie_close('em');
        itext('.');
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
  $templateAlias1(soy.$$assignDefaults({content: param3652}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'ppOdj.render';
}

exports.render.params = ["page","site"];
exports.render.types = {"page":"any","site":"any"};
templates = exports;
return exports;

});

class ppOdj extends Component {}
Soy.register(ppOdj, templates);
export { ppOdj, templates };
export default templates;
/* jshint ignore:end */
