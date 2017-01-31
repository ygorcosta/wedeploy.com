/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from retrieving-data.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace docsDataRetrievingDataHtml.
 * @public
 */

goog.module('docsDataRetrievingDataHtml.incrementaldom');

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
  var param652 = function() {
    ie_open('h1');
      itext('Retrieving data');
    ie_close('h1');
    ie_open('h6');
      itext('The get() function retrieve an existing field, document or collection in the database.');
    ie_close('h6');
    ie_open('article', null, null,
        'id', 'article_1');
      ie_open('h2');
        itext('Get data');
      ie_close('h2');
      ie_open('p');
        itext('Reading data from our storage takes only 3 lines of code.');
      ie_close('p');
      $templateAlias2({code: 'var data = WeDeploy.data(\'http://datademo.wedeploy.io\');\n\ndata.get(\'movies/star_wars_v\')\n.then(function(movie) {\n  console.log(movie);\n});', mode: 'javascript'}, null, opt_ijData);
      ie_open('p');
        itext('The response body is the stored JSON document:');
      ie_close('p');
      $templateAlias2({code: '{\n  "id": "star_wars_v",\n  "title": "Star Wars: Episode V - The Empire Strikes Back",\n  "year": 1980,\n  "rating": 8.8\n}', mode: 'javascript'}, null, opt_ijData);
      ie_open('p');
        itext('We can also get any field value using the full path:');
      ie_close('p');
      $templateAlias2({code: 'WeDeploy\n.data(\'http://datademo.wedeploy.io\')\n.get(\'movies/star_wars_v/title\')\n.then(function(title) {\n  console.log(title);\n});', mode: 'javascript'}, null, opt_ijData);
      ie_open('p');
        itext('The full path returns the raw content in the response body:');
      ie_close('p');
      ie_open('p');
        itext('Star Wars: Episode V - The Empire Strikes Back Requesting the entire movies collection using curl -X "GET" "http://datademo.wedeploy.io/movies" results in the first 10 documents stored:');
      ie_close('p');
      $templateAlias2({code: '[\n  {"id":"star_wars_i", "title":"Star Wars: Episode I - The Phantom Menace", "year":1999, "rating":6.5},\n  {"id":"star_wars_ii", "title":"Star Wars: Episode II - Attack of the Clones", "year":2002, "rating":6.7},\n  {"id":"star_wars_iii", "title":"Star Wars: Episode III - Revenge of the Sith", "year":2005, "rating":7.7},\n  {"id":"star_wars_iv", "title":"Star Wars: Episode IV - A New Hope", "year":1977, "rating":8.7},\n  {"id":"star_wars_v", "title":"Star Wars: Episode V - The Empire Strikes Back", "year":1980, "rating":8.8},\n  {"id":"star_wars_vi", "title":"Star Wars: Episode VI - Return of the Jedi", "year":1983, "rating":8.4},\n  {"id":"star_wars_vii", "title":"Star Wars: Episode VII - The Force Awakens", "year":2015}\n]', mode: 'javascript'}, null, opt_ijData);
    ie_close('article');
    ie_open('article', null, null,
        'id', 'article_2');
      ie_open('h2');
        itext('Sorting data');
      ie_close('h2');
      ie_open('p');
        itext('The result is ordered by document id, as we can see in the list above. We can select the order of the results by passing a sort parameter, using the following code:');
      ie_close('p');
      $templateAlias2({code: 'var client = WeDeploy.data(\'http://datademo.wedeploy.io\');\n\nclient.orderBy(\'rating\', \'desc\')\n.get(\'movies\')\n.then(function(movies) {\n  console.log(movies);\n});', mode: 'javascript'}, null, opt_ijData);
      ie_open('p');
        itext('As expected, the result would be the following list:');
      ie_close('p');
      $templateAlias2({code: '[\n  {"id":"star_wars_v","title":"Star Wars: Episode V - The Empire Strikes Back","year":1980,"rating":8.8},\n  {"id":"star_wars_iv","title":"Star Wars: Episode IV - A New Hope","year":1977,"rating":8.7},\n  {"id":"star_wars_vi","title":"Star Wars: Episode VI - Return of the Jedi","year":1983,"rating":8.4},\n  {"id":"star_wars_iii","title":"Star Wars: Episode III - Revenge of the Sith","year":2005,"rating":7.7},\n  {"id":"star_wars_ii","title":"Star Wars: Episode II - Attack of the Clones","year":2002,"rating":6.7},\n  {"id":"star_wars_i","title":"Star Wars: Episode I - The Phantom Menace","year":1999,"rating":6.5},\n  {"id":"star_wars_vii","title":"Star Wars: Episode VII - The Force Awakens","year":2015}\n]', mode: 'javascript'}, null, opt_ijData);
      ie_open('p');
        itext('Notice that because Episode VII has no rating (as it was not released yet), it\'s sorted as the last document.');
      ie_close('p');
    ie_close('article');
    ie_open('article', null, null,
        'id', 'article_3');
      ie_open('h2');
        itext('Applying filters');
      ie_close('h2');
      ie_open('p');
        itext('In addition to sorting the results, we can also apply filters using the following code:');
      ie_close('p');
      $templateAlias2({code: 'WeDeploy.data(\'http://datademo.wedeploy.io\')\n.where(\'year\', \'<\', 2000)\n.or(\'rating\', \'>\', 8.5)\n.get(\'movies\')\n.then(function(movies) {\n  console.log(movies);\n});', mode: 'javascript'}, null, opt_ijData);
      ie_open('p');
        itext('The following entries are the result of the above filters:');
      ie_close('p');
      $templateAlias2({code: '[\n  {"id":"star_wars_iv","title":"Star Wars: Episode IV - A New Hope","year":1977,"rating":8.7},\n  {"id":"star_wars_v","title":"Star Wars: Episode V - The Empire Strikes Back","year":1980,"rating":8.8}\n]', mode: 'javascript'}, null, opt_ijData);
    ie_close('article');
    ie_open('article', null, null,
        'id', 'article_4');
      ie_open('h2');
        itext('Pagination');
      ie_close('h2');
      ie_open('p');
        itext('We can also paginate the result using the \'limit\' and \'offset\' properties. Combining all the tools we\'ve learned so far, we can run a detailed query on our data:');
      ie_close('p');
      $templateAlias2({code: 'WeDeploy.data(\'http://datademo.wedeploy.io\')\n.where(\'year\', \'>\', 2000)\n.orderBy(\'rating\')\n.limit(2)\n.offset(1)\n.get(\'movies\')\n.then(function(movies) {\n  console.log(movies);\n});', mode: 'javascript'}, null, opt_ijData);
      ie_open('p');
        itext('Notice that filtering by year only returns episodes I, II, III, and VII. Applying the \'rating\' sort will give us this same order. We also limited the result to show only two documents and skip the first one. The final result is the following entries:');
      ie_close('p');
      $templateAlias2({code: '[\n  {"id":"star_wars_ii","title":"Star Wars: Episode II - Attack of the Clones","year":2002,"rating":6.7},\n  {"id":"star_wars_iii","title":"Star Wars: Episode III - Revenge of the Sith","year":2005,"rating":7.7}\n]', mode: 'javascript'}, null, opt_ijData);
      ie_open('p');
        itext('We support all basic SQL-like operators (=, !=, >, >=, <, <=, ~), as well as \'any\' and \'none\' to filter elements in a list. We also give support for search operators, which we will see in more detail in the section Search Data.');
      ie_close('p');
    ie_close('article');
    ie_open('h2');
      itext('What\'s next?');
    ie_close('h2');
    ie_open('p');
      itext('Now that you have learned how to retrieve data, you can interact ');
      ie_open('a', null, null,
          'href', '/docs/data/js/searching-data.html');
        itext('searching data');
      ie_close('a');
      itext('.');
    ie_close('p');
  };
  $templateAlias1(soy.$$assignDefaults({content: param652}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'docsDataRetrievingDataHtml.render';
}

exports.render.params = [];
exports.render.types = {};
templates = exports;
return exports;

});

class docsDataRetrievingDataHtml extends Component {}
Soy.register(docsDataRetrievingDataHtml, templates);
export { docsDataRetrievingDataHtml, templates };
export default templates;
/* jshint ignore:end */
