// This file was automatically generated from deleting-data.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace OdHWM.
 * @public
 */

goog.module('OdHWM.incrementaldom');

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
var $import1 = goog.require('ElectricCode.incrementaldom');
var $templateAlias2 = $import1.render;
var $import2 = goog.require('guide.incrementaldom');
var $templateAlias1 = $import2.render;


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ignored, opt_ijData) {
  var param1008 = function() {
    ie_open('h3');
      var dyn59 = opt_data.page.title;
      if (typeof dyn59 == 'function') dyn59(); else if (dyn59 != null) itext(dyn59);
    ie_close('h3');
    ie_open('h6');
      var dyn60 = opt_data.page.description;
      if (typeof dyn60 == 'function') dyn60(); else if (dyn60 != null) itext(dyn60);
    ie_close('h6');
    ie_open('aside');
      ie_open('p');
        itext('If you are unfamiliar with our API, please visit the ');
        ie_open('a', null, null,
            'href', '/docs/intro/api-clients.html');
          itext('API Clients');
        ie_close('a');
        itext(' page first to learn how to install and configure it.');
      ie_close('p');
    ie_close('aside');
    ie_open('article', null, null,
        'id', '1');
      ie_open('h2');
        itext('Deleting existing data');
      ie_close('h2');
      ie_open('p');
        itext('To delete a field or an entire collection, we use the delete method:');
      ie_close('p');
      $templateAlias2({code: 'var data = WeDeploy.data(\'https://<serviceID>-<projectID>.wedeploy.io\');\n\ndata.delete(\'movies/star_wars_v/title\');\n\ndata.delete(\'movies/star_wars_v\');\n\ndata.delete(\'movies\');', mode: 'javascript'}, null, opt_ijData);
      $templateAlias2({code: 'let data = WeDeploy.data(\'https://<serviceID>-<projectID>.wedeploy.io\')\n\ndata.delete(collectionOrResourcePath: "movies/star_wars_v/title")\n\ndata.delete(collectionOrResourcePath: "movies/star_wars_v")\n\ndata.delete(collectionOrResourcePath: "movies")', mode: 'swift'}, null, opt_ijData);
      $templateAlias2({code: 'WeDeployData data = WeDeploy.data(\'https://data-datademo.wedeploy.io\');\n\ndata.delete("movies/star_wars_v/title");\n\ndata.delete("movies/star_wars_v");\n\ndata.delete("movies");', mode: 'text/x-java'}, null, opt_ijData);
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
  $templateAlias1(soy.$$assignDefaults({content: param1008}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'OdHWM.render';
}
