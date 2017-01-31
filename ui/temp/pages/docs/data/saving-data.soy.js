/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from saving-data.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace docsDataSavingDataHtml.
 * @public
 */

goog.module('docsDataSavingDataHtml.incrementaldom');

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
  var param707 = function() {
    ie_open('h1');
      itext('Saving Data');
    ie_close('h1');
    ie_open('h6');
      itext('The create() function creates a new record in the database using the current attributes. It then returns the newly saved object in the Promise response.');
    ie_close('h6');
    ie_open('article', null, null,
        'id', 'article_1');
      ie_open('h2');
        itext('Inserting new data');
      ie_close('h2');
      ie_open('blockquote');
        ie_open('p');
          itext('By default, all the operation access to your database are restricted so only authenticated users can manipulate data. To get started without setting up Authentication, you can configure your rules for public access. To learn more about rules, see configuring rules section.');
        ie_close('p');
      ie_close('blockquote');
      ie_open('p');
        itext('Writing new data is as simple as sending a JSON.');
      ie_close('p');
      $templateAlias2({code: 'var data = WeDeploy.data(\'http://datademo.wedeploy.io\');\n\ndata.create(\'movies\', {\n  "title": "Star Wars IV",\n  "year": 1977,\n  "rating": 8.7\n}).then(function(movie) {\n  console.log(movie);\n});', mode: 'javascript'}, null, opt_ijData);
      ie_open('p');
        itext('As you can see, the data api uses Promises to help you to make async requests.');
      ie_close('p');
      ie_open('p');
        itext('This operation will return the newly created document, with the following generated ID:');
      ie_close('p');
      $templateAlias2({code: '{\n  "id":" "115992383516607958",\n  "title": "Star Wars IV",\n  "year": 1977,\n  "rating": 8.7\n}', mode: 'javascript'}, null, opt_ijData);
      ie_open('p');
        itext('Generated ID is a string and it\'s structure may vary. It is also possible to define custom app-specific value for the ID, by simply passing the ');
        ie_open('code');
          itext('id');
        ie_close('code');
        itext(' field as part of the new document.');
      ie_close('p');
    ie_close('article');
    ie_open('article', null, null,
        'id', 'article_2');
      ie_open('h2');
        itext('Inserting multiple data');
      ie_close('h2');
      ie_open('p');
        itext('With the same method you\'re able to create multiple data instead using the method ');
        ie_open('code');
          itext('.create');
        ie_close('code');
        itext(' multiple times. You just need to use an array instead an object as the second param.');
      ie_close('p');
      $templateAlias2({code: 'WeDeploy.data(\'http://datademo.wedeploy.io\').create(\'movies\', [\n  {\n    "title": "Star Wars III",\n    "year": 2005,\n    "rating": 8.0\n  },\n  {\n    "title": "Star Wars II",\n    "year": 2002,\n    "rating": 8.6\n  }\n]).then(function(movies) {\n  console.log(movies);\n});', mode: 'javascript'}, null, opt_ijData);
      ie_open('p');
        itext('This operation will return the newly created array of documents, with the following generated IDs:');
      ie_close('p');
      $templateAlias2({code: '[\n  {\n    "id":" 115992383516607959",\n    "title": "Star Wars III",\n    "year": 2005,\n    "rating": 8.0\n  },\n  {\n    "id":" 115992383516607954",\n    "title": "Star Wars II",\n    "year": 2002,\n    "rating": 8.6\n  }\n]', mode: 'javascript'}, null, opt_ijData);
    ie_close('article');
    ie_open('article', null, null,
        'id', 'article_3');
      ie_open('h2');
        itext('Inserting new fields in an existing collection');
      ie_close('h2');
      ie_open('p');
        itext('WeDeploy Data service is really flexible in therms of data structure. You\'re able to insert new fiels in a collection by adding the new key in the object param.');
      ie_close('p');
      $templateAlias2({code: 'WeDeploy.data(\'http://datademo.wedeploy.io\').create(\'movies\', [\n  {\n    "title": "Star Wars I",\n    "obs": "First in ABC order",\n    "year": 1999,\n    "rating": 9.0\n  }\n]).then(function(movie) {\n  console.log(movie);\n});', mode: 'javascript'}, null, opt_ijData);
      ie_open('p');
        itext('This operation will return the newly created document, with the following generated ID:');
      ie_close('p');
      $templateAlias2({code: '{\n  "id":" 115992383516607954",\n  "title": "Star Wars I",\n  "obs": "First in ABC order",\n  "year": 1999,\n  "rating": 9.0\n}', mode: 'javascript'}, null, opt_ijData);
    ie_close('article');
    ie_open('article', null, null,
        'id', 'article_4');
      ie_open('h2');
        itext('URL scope structure');
      ie_close('h2');
      ie_open('p');
        itext('The URL we just created stored a new document in our app\'s service inside the "movies" collection. More information on how to set up this datastore URL can be seen in the section Building APIs. For now, we only need to know that within the path where the data is mounted. The URL will be interpreted as a key that points to a stored resource like the one below:');
      ie_close('p');
      $templateAlias2({code: '/collectionName/documentId/documentProperty/documentInnerProperty', mode: 'text'}, null, opt_ijData);
      ie_open('p');
        itext('For example, to reference the newly created Star Wars rating, we can use the path:');
      ie_close('p');
      $templateAlias2({code: 'http://data.datademo.wedeploy.me/movies/115992383516607958/rating', mode: 'text'}, null, opt_ijData);
    ie_close('article');
    ie_open('h2');
      itext('What\'s next?');
    ie_close('h2');
    ie_open('p');
      itext('Now that you have learned how to create data, you can interact ');
      ie_open('a', null, null,
          'href', '/docs/data/js/updating-data.html');
        itext('updating data');
      ie_close('a');
      itext('.');
    ie_close('p');
  };
  $templateAlias1(soy.$$assignDefaults({content: param707}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'docsDataSavingDataHtml.render';
}

exports.render.params = [];
exports.render.types = {};
templates = exports;
return exports;

});

class docsDataSavingDataHtml extends Component {}
Soy.register(docsDataSavingDataHtml, templates);
export { docsDataSavingDataHtml, templates };
export default templates;
/* jshint ignore:end */
