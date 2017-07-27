/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from deploying-liferay.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace fvUtW.
 * @public
 */

goog.module('fvUtW.incrementaldom');

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
  var param1511 = function() {
    ie_open('h3');
      itext('Liferay');
    ie_close('h3');
    ie_open('h6');
      var dyn76 = opt_data.page.description;
      if (typeof dyn76 == 'function') dyn76(); else if (dyn76 != null) itext(dyn76);
    ie_close('h6');
    ie_open('article', null, null,
        'id', '1');
      ie_open('h2');
        itext('Introduction');
      ie_close('h2');
      ie_open('p');
        ie_open('a', null, null,
            'href', 'https://www.liferay.com');
          itext('Liferay');
        ie_close('a');
        itext(' is a portal, web content management and collaboration software package. It includes social collaboration features such as a doc library, off-line document sync, internal messaging, online presence, and more.');
      ie_close('p');
      ie_open('p');
        itext('We currently support Liferay X.');
      ie_close('p');
    ie_close('article');
    ie_open('article', null, null,
        'id', '2');
      ie_open('h2');
        itext('Try it yourself');
      ie_close('h2');
      ie_open('p');
        itext('Want to see the process of deploying Liferay step by step?');
      ie_close('p');
      ie_open('div', null, null,
          'class', 'guide-btn-cta');
        ie_open('a', null, null,
            'class', 'btn btn-accent btn-sm',
            'href', '/tutorials/liferay',
            'target', '_blank',
            'data-senna-off', '');
          ie_void('span', null, null,
              'class', 'icon-16-external');
          itext('Try the tutorial');
        ie_close('a');
      ie_close('div');
      ie_open('div', null, null,
          'class', 'guide-aux-cta');
        itext('or see a ');
        ie_open('a', null, null,
            'href', 'http://boilerplate-liferay.wedeploy.io',
            'target', '_blank',
            'data-senna-off', '');
          itext('live demo');
        ie_close('a');
        itext('.');
      ie_close('div');
    ie_close('article');
    ie_open('article', null, null,
        'id', '3');
      ie_open('h2');
        itext('Configuring');
      ie_close('h2');
      ie_open('aside');
        ie_open('p');
          itext('All WeDeploy projects use a consistant file structure and configuration files to deploy apps with the CLI or GitHub. Learn more on our ');
          ie_open('strong');
            ie_open('a', null, null,
                'href', '/docs/deploy/how-it-works.html');
              itext('How It Works Page');
            ie_close('a');
          ie_close('strong');
          itext('.');
        ie_close('p');
      ie_close('aside');
      ie_open('p');
        itext('Below is an example of a ');
        ie_open('code');
          itext('wedeploy.json');
        ie_close('code');
        itext(' for a Liferay container.');
      ie_close('p');
      $templateAlias2({code: '{\n    "id": "liferay",\n    "image": "wedeploy/liferay:beta"\n}', mode: 'application/json'}, null, opt_ijData);
      ie_open('p');
        itext('The ');
        ie_open('code');
          itext('id');
        ie_close('code');
        itext(' for your services are uniquely determined by you.');
      ie_close('p');
    ie_close('article');
    ie_open('h2');
      itext('What\'s next?');
    ie_close('h2');
    ie_open('p');
      itext('Now you can start building your liferay based application.');
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
  $templateAlias1(soy.$$assignDefaults({content: param1511}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'fvUtW.render';
}

exports.render.params = ["page","site"];
exports.render.types = {"page":"any","site":"any"};
templates = exports;
return exports;

});

class fvUtW extends Component {}
Soy.register(fvUtW, templates);
export { fvUtW, templates };
export default templates;
/* jshint ignore:end */
