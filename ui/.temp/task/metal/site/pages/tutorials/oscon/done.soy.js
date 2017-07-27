/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from done.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace tqbfn.
 * @public
 */

goog.module('tqbfn.incrementaldom');

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
  var param3688 = function() {
    ie_open('h4');
      itext('Time to grab your raygun');
    ie_close('h4');
    ie_open('h6');
      itext('Nice job!! You just deployed an awesome game at the speed of light. \uD83D\uDCAA\uD83D\uDE80\u26A1\uFE0F');
    ie_close('h6');
    ie_open('figure');
      ie_open('img', null, null,
          'src', '/images/tutorials/oscon/lifebringer.png',
          'alt', 'The Lifebring Game');
      ie_close('img');
    ie_close('figure');
    ie_open('h4');
      itext('Checkout what you built');
    ie_close('h4');
    ie_open('p');
      itext('Now you can go to your projects url (');
      ie_open('code');
        itext('<your-projec>.wedeploy.sh');
      ie_close('code');
      itext(') in the top left corner of the Console, and ');
      ie_open('strong');
        itext('start playing');
      ie_close('strong');
      itext('!');
    ie_close('p');
    ie_open('h4');
      itext('What\'s next?');
    ie_close('h4');
    ie_open('p');
      ie_open('strong');
        itext('Grab a sticker!');
      ie_close('strong');
      itext(' Show the game you deployed to one of the members at the booth and they will give you an awesome WeDeploy hoodie!');
    ie_close('p');
    ie_open('p');
      ie_open('strong');
        itext('Win the grand prize!');
      ie_close('strong');
      itext(' Whats a game without a little competition? Start competing against others who built the app- ');
      ie_open('a', null, null,
          'href', '/leaderboard');
        itext('highest score');
      ie_close('a');
      itext(' will ');
      ie_open('strong');
        itext('win a handmade raygun');
      ie_close('strong');
      itext('!');
    ie_close('p');
    ie_open('figure');
      ie_open('img', null, null,
          'src', '/images/tutorials/oscon/raygun.jpg',
          'alt', 'Ray gun');
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
  $templateAlias1(soy.$$assignDefaults({content: param3688}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'tqbfn.render';
}

exports.render.params = ["page","site"];
exports.render.types = {"page":"any","site":"any"};
templates = exports;
return exports;

});

class tqbfn extends Component {}
Soy.register(tqbfn, templates);
export { tqbfn, templates };
export default templates;
/* jshint ignore:end */
