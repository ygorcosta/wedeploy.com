/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from searching-data.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace docsDataSearchingDataHtml.
 * @public
 */

goog.module('docsDataSearchingDataHtml.incrementaldom');

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
  var param752 = function() {
    ie_open('h1');
      itext('Searching Data');
    ie_close('h1');
    ie_open('h6');
      itext('Advanced queries using search.');
    ie_close('h6');
    ie_open('article', null, null,
        'id', 'article_1');
      ie_open('h2');
        itext('Search data');
      ie_close('h2');
      ie_open('p');
        itext('We did some great stuff with basic data methods, like create, update, and delete JSON documents. We also learned how to retrieve documents with where, sort, and pagination. What if we need more powerful queries with our documents? In WeDeploy you can do a text search, handle user misspellings, and show the number of documents by category with your data, and much more.');
      ie_close('p');
      ie_open('p');
        itext('First take a look at the text search. It\'s a simple, yet very powerful way to filter our results by a text query. Using the movie database we created before, let\'s search for a Star Wars movie by the episode title, like "Revenge of the Sith". We are not interested if the letter is in upper or lower case, since we are using English connectors like "of" and "the". We want something flexible enough that it will also work for texts like "The revenge of the Sith", or "Sith\'s revenge". Our match operator is flexible enough for both.');
      ie_close('p');
      $templateAlias2({code: 'var data = WeDeploy.data(\'http://datademo.wedeploy.io\');\n\ndata.match(\'title\', "Sith\'s revenge")\n.get(\'movies\')\n.then(function(movies) {\n  console.log(movies);\n});', mode: 'javascript'}, null, opt_ijData);
      ie_open('p');
        itext('The result of the match operator query is the following entry:');
      ie_close('p');
      $templateAlias2({code: '[{"id":"star_wars_iii","title":"Star Wars: Episode III - Revenge of the Sith","year":2005,"rating":7.7}]', mode: 'javascript'}, null, opt_ijData);
      ie_open('p');
        itext('We can also use simple text operators in our match:');
      ie_close('p');
      $templateAlias2({code: '// we can run this\nWeDeploy\n.data()\n.match(\'title\', \'(jedi | force) -return\')\n.get(\'movies\')\n.then(function(movies) {\n  console.log(movies);\n});\n\n// or this\nWeDeploy\n.data()\n.match(\'title\', \'awake*\')\n.get(\'movies\')\n.then(function(movies) {\n  console.log(movies);\n});\n\n// or even this\nWeDeploy\n.data()\n.match(\'title\', \'wakens~\')\n.get(\'movies\')\n.then(function(movies) {\n  console.log(movies);\n});', mode: 'javascript'}, null, opt_ijData);
      ie_open('p');
        itext('Any search in the previous example results in the following match:');
      ie_close('p');
      $templateAlias2({code: '[{"id":"star_wars_vii","title":"Star Wars: Episode VII - The Force Awakens","year":2015}]', mode: 'javascript'}, null, opt_ijData);
      ie_open('p');
        itext('What we did with * can also be done with the prefix operator Filter.prefix(\'title\', \'awake\'). The fuzziness we added to \'wakens\' using ~, can also be done explicitly with the fuzzy operator Filter.fuzzy(\'title\', \'wakens\').');
      ie_close('p');
      ie_open('p');
        itext('So far we are still just filtering data with filters. We can do so much more than that! If we use \'query search\' instead of \'filter\' to send those filters to the server, we can also get information about how relevant a document is to a given search, and order our results by this criteria. Let us introduce this with a new filter that allows us to query movies with a title similar to a given text:');
      ie_close('p');
      $templateAlias2({code: 'WeDeploy\n.data()\n.similar(\'title\', \'The attack an awaken Jedi uses to strike a Sith is pure force!\')\n.search(\'movies\')\n.then(function(movies) {\n  console.log(movies);\n});', mode: 'javascript'}, null, opt_ijData);
      ie_open('p');
        itext('We receive not only the documents that match the filter, but also search metadata:');
      ie_close('p');
      $templateAlias2({code: '{\n  "total": 5,\n  "documents": [\n    {\n      "title": "Star Wars: Episode VII - The Force Awakens",\n      "id": "star_wars_vii"\n    },\n    {\n      "title": "Star Wars: Episode V - The Empire Strikes Back",\n      "id": "star_wars_v"\n    },\n    {\n      "title": "Star Wars: Episode VI - Return of the Jedi",\n      "id": "star_wars_vi"\n    },\n    {\n      "title": "Star Wars: Episode III - Revenge of the Sith",\n      "id": "star_wars_iii"\n    },\n    {\n      "title": "Star Wars: Episode II - Attack of the Clones",\n      "id": "staw_wars_ii"\n    }\n  ],\n  "scores": {\n    "star_wars_ii": 0.13102644681930542,\n    "star_wars_iii": 0.13102644681930542,\n    "star_wars_v": 0.13102644681930542,\n    "star_wars_vi": 0.13102644681930542,\n    "star_wars_vii": 0.5241057872772217\n  },\n  "queryTime": 1\n}', mode: 'javascript'}, null, opt_ijData);
      ie_open('p');
        itext('Notice that the score of the star_wars_vii document is bigger than the other matches, indicating its title is more similar to the given filter than the others. The documents in the result are now ordered by the relevance of the document, expressed as a number in the scores metadata, rather than the document\'s ID. Now we can show not only filtered results, but also order our results by relevance!');
      ie_close('p');
      ie_open('p');
        itext('Want more? Well, let\'s make things even easier for the user! Adding one entry to the search query, we can automatically highlight the words that matched our query, showing not only how relevant the document is to the search, but also where it matches our criteria. We can do this with small changes in our previous search, using the following code:');
      ie_close('p');
      $templateAlias2({code: 'WeDeploy.data()\n.similar(\'title\', \'The attack an awakened Jedi uses to strike a Sith is pure force!\')\n.highlight(\'title\')\n.search(\'movies\')\n.then(function(movies) {\n  console.log(movies);\n});', mode: 'javascript'}, null, opt_ijData);
      ie_open('p');
        itext('As you can see in the code below, our keywords are highlighted in the results:');
      ie_close('p');
      $templateAlias2({code: '{\n  "total": 5,\n  "documents": [\n    {\n      "title": "Star Wars: Episode VII - The <em>Force</em> <em>Awakens</em>",\n      "id": "star_wars_vii"\n    },\n    {\n      "title": "Star Wars: Episode V - The Empire <em>Strikes</em> Back",\n      "id": "star_wars_v"\n    },\n    {\n      "title": "Star Wars: Episode VI - Return of the <em>Jedi</em>",\n      "id": "star_wars_vi"\n    },\n    {\n      "title": "Star Wars: Episode III - Revenge of the <em>Sith</em>",\n      "id": "star_wars_iii"\n    },\n    {\n      "title": "Star Wars: Episode II - <em>Attack</em> of the Clones",\n      "id": "star_wars_ii"\n    }\n  ],\n  "scores": {\n    "star_wars_ii": 0.13102644681930542,\n    "star_wars_iii": 0.13102644681930542,\n    "star_wars_v": 0.13102644681930542,\n    "star_wars_vi": 0.13102644681930542,\n    "star_wars_vii": 0.5241057872772217\n  },\n  "queryTime": 1\n}', mode: 'javascript'}, null, opt_ijData);
      ie_open('p');
        itext('The third search feature is also quite simple, but can be applied to generate meaningful statistical information about our data. What if we need to compare the average rating the first three movies received, with the last three movies? We can do that with aggregations, using the following code:');
      ie_close('p');
      $templateAlias2({code: 'WeDeploy\n.data()\n.lt(\'year\', 1990)\n.aggregate(\'Old Movies\', \'rating\', \'avg\')\n.count()\n.get(\'movies\')\n.then(function(aggregation) {\n  console.log(aggregation);\n});', mode: 'javascript'}, null, opt_ijData);
      ie_open('p');
        itext('The count we added to the query informed the server that we are not interested in the documents themselves, but rather the number of matches and search metadata. The result, in this case, will be the following data:');
      ie_close('p');
      $templateAlias2({code: '{\n  "total": 3,\n  "queryTime": 13,\n  "aggregations": {\n    "Old Movies": 8.633333333333333\n  }\n}', mode: 'javascript'}, null, opt_ijData);
      ie_open('p');
        itext('Cool, right? Simply run another query for the newest movies, and then you\'ll have the data you need to compare them. There are some additional operators that you might find useful: min, max, sum, histogram, and even a generic stats that returns several statistics over the field. Take a look at the example below to see results using the additional operators:');
      ie_close('p');
      $templateAlias2({code: '{\n  "total": 3,\n  "queryTime": 8,\n  "aggregations": {\n    "Old Movies": {\n      "average": 8.633333333333333,\n      "count": 3,\n      "max": 8.8,\n      "min": 8.4,\n      "name": "Old Movies",\n      "standardDeviation": null,\n      "sum": 25.9,\n      "sumOfSquares": null,\n      "variance": null\n    }\n  }\n}', mode: 'javascript'}, null, opt_ijData);
      ie_open('p');
        itext('Notice that in order to read and write your service\'s root path you need to map it with an API endpoint and data flag active. If we want to inform the server of the data type of a collection field before it receives its first document, we can POST/PATCH the data root with the mapping information:');
      ie_close('p');
      $templateAlias2({code: 'WeDeploy\n.url(\'http://data.datademo.wedeploy.me/\')\n.post({\n   "places": {\n     "location": "geo_point"\n   }\n});', mode: 'javascript'}, null, opt_ijData);
      ie_open('p');
        itext('We can never update an already mapped field, but we can map new fields in an existing collection, as we did in the request above. When we manually map our collection, we can use some extra datatypes that are not mapped dynamically: date, geo_point, and geo_shape. We will focus on geo_point for this next feature.');
      ie_close('p');
      ie_open('p');
        itext('So, we mapped a field called location, in the collection places, as representing a geolocation point. This means we can operate, filter, and aggregate the places we put in that collection, using geo filters over this field! Let\'s try something simple: find cinemas close to London\'s Waterloo Station. To run the search criteria, we\'ll use the following code:');
      ie_close('p');
      $templateAlias2({code: 'WeDeploy\n.data()\n.any(\'category\', \'cinema\')\n.distance(\'location\', \'51.5031653,-0.1123051\', \'1mi\')\n.get(\'places\')\n.then(function(places) {\n  console.log(places);\n});', mode: 'javascript'}, null, opt_ijData);
      ie_open('p');
        itext('Our result is the following matches:');
      ie_close('p');
      $templateAlias2({code: '[\n  {\n    "name": "BFI IMAX",\n    "location": "51.5126928,-0.12052",\n    "id": "116686224946770924",\n    "category": [\n      "cinema"\n    ]\n  },\n  {\n    "name": "Cinema Museum",\n    "location": "51.501661,-0.1177734",\n    "id": "116686224946770925",\n    "category": [\n      "cinema",\n      "museum"\n    ]\n  },\n  {\n    "name": "Roxy Bar and Screen",\n    "location": "51.5012603,-0.1146835",\n    "id": "116686224946770926",\n    "category": [\n      "cinema",\n      "bar",\n      "restaurant"\n    ]\n  }\n]', mode: 'javascript'}, null, opt_ijData);
      ie_open('p');
        itext('Now we can plug a map to our app, and let users see and filter places, with just a few lines of code.');
      ie_close('p');
    ie_close('article');
    ie_open('h2');
      itext('What\'s next?');
    ie_close('h2');
    ie_open('p');
      itext('Now that you have learned how to retrieve data, you can interact with ');
      ie_open('a', null, null,
          'href', '/docs/data/js/real-time-feeds.html');
        itext('real-time feeds');
      ie_close('a');
      itext('.');
    ie_close('p');
  };
  $templateAlias1(soy.$$assignDefaults({content: param752}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'docsDataSearchingDataHtml.render';
}

exports.render.params = [];
exports.render.types = {};
templates = exports;
return exports;

});

class docsDataSearchingDataHtml extends Component {}
Soy.register(docsDataSearchingDataHtml, templates);
export { docsDataSearchingDataHtml, templates };
export default templates;
/* jshint ignore:end */
