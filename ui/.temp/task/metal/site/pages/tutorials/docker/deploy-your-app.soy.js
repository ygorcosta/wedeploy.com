/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from deploy-your-app.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace vuIMj.
 * @public
 */

goog.module('vuIMj.incrementaldom');

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
  var param2926 = function() {
    ie_open('h4');
      itext('Deploy the Project');
    ie_close('h4');
    ie_open('p');
      itext('Now the moment you have been waiting for - deployment!');
    ie_close('p');
    ie_open('p');
      itext('Go to ');
      ie_open('code');
        itext('tutorial-docker');
      ie_close('code');
      itext(' in your terminal and deploy your project:');
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
    ie_open('p');
      itext('Now go to ');
      ie_open('code');
        itext('docker-<projectID>.wedeploy.sh');
      ie_close('code');
      itext(' in your browser and see your live page!');
    ie_close('p');
    ie_open('aside');
      ie_open('h6');
        ie_void('span', null, null,
            'class', 'icon-16-star');
        itext(' Pro Tip');
      ie_close('h6');
      ie_open('p');
        itext('If you are deploying static files with no ');
        ie_open('code');
          itext('wedeploy.json');
        ie_close('code');
        itext(', we will automatically choose a random service id for you. To choose the id of your docker service yourself, add ');
        ie_open('code');
          itext('--service serviceID');
        ie_close('code');
        itext(' to the deploy command above with your custom id. It could look something like this:');
      ie_close('p');
      $templateAlias2({code: 'we deploy --project myapp --service ui', mode: 'xml'}, null, opt_ijData);
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
  $templateAlias1(soy.$$assignDefaults({content: param2926}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'vuIMj.render';
}

exports.render.params = ["page","site"];
exports.render.types = {"page":"any","site":"any"};
templates = exports;
return exports;

});

class vuIMj extends Component {}
Soy.register(vuIMj, templates);
export { vuIMj, templates };
export default templates;
/* jshint ignore:end */
