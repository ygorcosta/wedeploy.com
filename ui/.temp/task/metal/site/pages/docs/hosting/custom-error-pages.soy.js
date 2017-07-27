/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from custom-error-pages.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace SGSnP.
 * @public
 */

goog.module('SGSnP.incrementaldom');

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

var $templateAlias1 = Soy.getTemplate('guide.incrementaldom', 'render');


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ignored, opt_ijData) {
  var param1698 = function() {
    ie_open('h3');
      var dyn90 = opt_data.page.title;
      if (typeof dyn90 == 'function') dyn90(); else if (dyn90 != null) itext(dyn90);
    ie_close('h3');
    ie_open('h6');
      var dyn91 = opt_data.page.description;
      if (typeof dyn91 == 'function') dyn91(); else if (dyn91 != null) itext(dyn91);
    ie_close('h6');
    ie_open('article', null, null,
        'id', '1');
      ie_open('h2');
        itext('Custom Error Pages');
      ie_close('h2');
      ie_open('p');
        itext('When people try to access nonexistent pages on your site, WeDeploy will display a 404 error page. This page follows a template that might not fit to your visual needs. The good news is that you can create custom error pages that are consistent with your site\'s style.');
      ie_close('p');
      ie_open('p');
        itext('Files put into the special directory ');
        ie_open('code');
          itext('/_error');
        ie_close('code');
        itext(' are mapped as the error files to be served in case of an error. They must take the form of ');
        ie_open('code');
          itext('<error code>.html');
        ie_close('code');
        itext('.');
      ie_close('p');
      ie_open('aside');
        ie_open('p');
          ie_open('strong');
            itext('Check the ');
            ie_open('a', null, null,
                'href', 'https://github.com/wedeploy/boilerplate-hosting/tree/master/_error');
              itext('boilerplate-hosting');
            ie_close('a');
            itext(' for a practical example.');
          ie_close('strong');
        ie_close('p');
      ie_close('aside');
    ie_close('article');
    ie_open('input', null, null,
        'type', 'hidden',
        'value', opt_data.page.title);
    ie_close('input');
    ie_open('input', null, null,
        'type', 'hidden',
        'value', opt_data.site.title);
    ie_close('input');
  };
  $templateAlias1(soy.$$assignDefaults({content: param1698}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'SGSnP.render';
}

exports.render.params = ["page","site"];
exports.render.types = {"page":"any","site":"any"};
templates = exports;
return exports;

});

class SGSnP extends Component {}
Soy.register(SGSnP, templates);
export { SGSnP, templates };
export default templates;
/* jshint ignore:end */
