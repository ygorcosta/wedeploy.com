// This file was automatically generated from environment-variables.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace vOQWx.
 * @public
 */

goog.module('vOQWx.incrementaldom');

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
  var param1711 = function() {
    ie_open('h3');
      var dyn92 = opt_data.page.title;
      if (typeof dyn92 == 'function') dyn92(); else if (dyn92 != null) itext(dyn92);
    ie_close('h3');
    ie_open('h6');
      var dyn93 = opt_data.page.description;
      if (typeof dyn93 == 'function') dyn93(); else if (dyn93 != null) itext(dyn93);
    ie_close('h6');
    ie_open('aside');
      ie_open('p');
        itext('If you are unfamiliar with how you can apply this concept, please visit our main ');
        ie_open('a', null, null,
            'href', '/docs/intro/environment-variables.html');
          itext('Environment Variables');
        ie_close('a');
        itext(' page.');
      ie_close('p');
    ie_close('aside');
    ie_open('article', null, null,
        'id', '1');
      ie_open('h2');
        itext('Reference');
      ie_close('h2');
      ie_open('p');
        itext('Here\'s a list of all the environment variables you can use with this service.');
      ie_close('p');
      ie_open('div', null, null,
          'class', 'table-container');
        ie_open('table');
          ie_open('thead');
            ie_open('tr');
              ie_open('th');
                itext('Key');
              ie_close('th');
              ie_open('th');
                itext('Default Value');
              ie_close('th');
              ie_open('th');
                itext('Description');
              ie_close('th');
            ie_close('tr');
          ie_close('thead');
          ie_open('tbody');
            ie_open('tr');
              ie_open('td');
                itext('WEDEPLOY_WEB_PATH');
              ie_close('td');
              ie_open('td');
                ie_open('code');
                  itext('/');
                ie_close('code');
              ie_close('td');
              ie_open('td');
                itext('Path to serve static files');
              ie_close('td');
            ie_close('tr');
            ie_open('tr');
              ie_open('td');
                itext('WEDEPLOY_WEB_ERROR_PATH');
              ie_close('td');
              ie_open('td');
                ie_open('code');
                  itext('/_error');
                ie_close('code');
              ie_close('td');
              ie_open('td');
                itext('Path to serve ');
                ie_open('a', null, null,
                    'href', '/docs/hosting/custom-error-pages.html');
                  itext('error pages');
                ie_close('a');
              ie_close('td');
            ie_close('tr');
          ie_close('tbody');
        ie_close('table');
      ie_close('div');
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
  $templateAlias1(soy.$$assignDefaults({content: param1711}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'vOQWx.render';
}
