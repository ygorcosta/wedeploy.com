/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from updating-data.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace docsDataUpdatingDataHtml.
 * @public
 */

goog.module('docsDataUpdatingDataHtml.incrementaldom');

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
  var param827 = function() {
    ie_open('h1');
      itext('Updating Data');
    ie_close('h1');
    ie_open('h6');
      itext('The update() function updates an existing record in the database using the current attributes. It then returns the newly updated object in the Promise response.');
    ie_close('h6');
    ie_open('article', null, null,
        'id', 'article_1');
      ie_open('h2');
        itext('Updating existing data');
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
        itext('Updating existing data is as simple as sending a JSON.');
      ie_close('p');
      $templateAlias2({code: 'var client = WeDeploy.data(\'http://datademo.wedeploy.io\');\n\nclient.update(\'movies/115992383516607958\', {\n  "rating": 9.1\n}).then(function(movie) {\n  console.log(movie);\n});', mode: 'javascript'}, null, opt_ijData);
      ie_open('p');
        itext('As you can see, the data api uses Promises to help you to make async requests.');
      ie_close('p');
      ie_open('p');
        itext('This operation will return the updated document with the new rating:');
      ie_close('p');
      $templateAlias2({code: '{\n  "id":" 115992383516607958",\n  "title": "Star Wars IV",\n  "year": 1977,\n  "rating": 9.1\n}', mode: 'javascript'}, null, opt_ijData);
    ie_close('article');
    ie_open('h2');
      itext('What\'s next?');
    ie_close('h2');
    ie_open('p');
      itext('Now that you have learned how to update data, you can interact ');
      ie_open('a', null, null,
          'href', '/docs/data/js/deleting-data.html');
        itext('deleting data');
      ie_close('a');
      itext('.');
    ie_close('p');
  };
  $templateAlias1(soy.$$assignDefaults({content: param827}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'docsDataUpdatingDataHtml.render';
}

exports.render.params = [];
exports.render.types = {};
templates = exports;
return exports;

});

class docsDataUpdatingDataHtml extends Component {}
Soy.register(docsDataUpdatingDataHtml, templates);
export { docsDataUpdatingDataHtml, templates };
export default templates;
/* jshint ignore:end */
