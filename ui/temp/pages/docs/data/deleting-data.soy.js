/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from deleting-data.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace docsDataDeletingDataHtml.
 * @public
 */

goog.module('docsDataDeletingDataHtml.incrementaldom');

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
  opt_data = opt_data || {};
  var param579 = function() {
    ie_open('h1');
      itext('Deleting Data');
    ie_close('h1');
    ie_open('h6');
      itext('The delete() function destroys an existing field, document or collection in the database.');
    ie_close('h6');
    ie_open('article', null, null,
        'id', 'article_1');
      ie_open('h2');
        itext('Deleting existing data');
      ie_close('h2');
      ie_open('blockquote');
        ie_open('p');
          itext('By default, all the operation access to your database are restricted so only authenticated users can manipulate data. To get started without setting up Authentication, you can configure your rules for public access. To learn more about rules, see ');
          ie_open('a', null, null,
              'href', '/docs/data/configuring-rules.html');
            itext('configuring rules');
          ie_close('a');
          itext(' section.');
        ie_close('p');
      ie_close('blockquote');
      ie_open('p');
        itext('To delete a field, document, or the entire collection, we use the DELETE method:');
      ie_close('p');
      $templateAlias2({code: 'var data = WeDeploy.data(\'http://datademo.wedeploy.io\');\n\ndata.delete(\'movies/star_wars_v/title\');\n\ndata.delete(\'movies/star_wars_v\');\n\ndata.delete(\'movies\');', mode: 'javascript'}, null, opt_ijData);
    ie_close('article');
    ie_open('h2');
      itext('What\'s next?');
    ie_close('h2');
    ie_open('p');
      itext('Now that you have learned how to update data, you can interact ');
      ie_open('a', null, null,
          'href', '/docs/data/js/retrieving-data.html');
        itext('retrieving data');
      ie_close('a');
      itext('.');
    ie_close('p');
  };
  $templateAlias1(soy.$$assignDefaults({content: param579}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'docsDataDeletingDataHtml.render';
}

exports.render.params = [];
exports.render.types = {};
templates = exports;
return exports;

});

class docsDataDeletingDataHtml extends Component {}
Soy.register(docsDataDeletingDataHtml, templates);
export { docsDataDeletingDataHtml, templates };
export default templates;
/* jshint ignore:end */
