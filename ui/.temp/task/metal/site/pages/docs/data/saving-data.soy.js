/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from saving-data.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace kkkql.
 * @public
 */

goog.module('kkkql.incrementaldom');

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
  var param1211 = function() {
    ie_open('h3');
      var dyn66 = opt_data.page.title;
      if (typeof dyn66 == 'function') dyn66(); else if (dyn66 != null) itext(dyn66);
    ie_close('h3');
    ie_open('h6');
      var dyn67 = opt_data.page.description;
      if (typeof dyn67 == 'function') dyn67(); else if (dyn67 != null) itext(dyn67);
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
        itext('Inserting new data');
      ie_close('h2');
      ie_open('p');
        itext('Writing new data is as simple as sending a JSON.');
      ie_close('p');
      $templateAlias2({code: 'WeDeploy\n    .data(\'https://<serviceID>-<projectID>.wedeploy.io\')\n    .create(\'movies\', {\n        "title": "Star Wars IV",\n        "year": 1977,\n        "rating": 8.7\n    }).then(function(movie) {\n        console.log(movie);\n    });', mode: 'javascript'}, null, opt_ijData);
      $templateAlias2({code: 'WeDeploy\n    .data(\'https://<serviceID>-<projectID>.wedeploy.io\')\n    .create(resource: "movies", object: [\n        "title" : "Star Wars IV",\n        "year" : 1977,\n        "ratings" : 8.7\n    ])\n    .then { movie in\n        print(movie)\n    }', mode: 'swift'}, null, opt_ijData);
      $templateAlias2({code: 'JSONObject movieJsonObject = new JSONObject()\n    .put("title", "Star Wars IV")\n    .put("year", 1977)\n    .put("rating", 8.7);\n\nWeDeploy\n    .data(\'https://data-datademo.wedeploy.io\')\n    .create("movies", movieJsonObject)\n    .execute();', mode: 'text/x-java'}, null, opt_ijData);
      ie_open('p');
        itext('This operation will return the newly created document, with the following generated ID:');
      ie_close('p');
      $templateAlias2({code: '{\n    "id":" "115992383516607958",\n    "title": "Star Wars IV",\n    "year": 1977,\n    "rating": 8.7\n}', mode: 'javascript'}, null, opt_ijData);
      ie_open('p');
        itext('Generated ID is a string and it\'s structure may vary. It is also possible to define custom app-specific value for the ID, by simply passing the ');
        ie_open('code');
          itext('id');
        ie_close('code');
        itext(' field as part of the new document.');
      ie_close('p');
    ie_close('article');
    ie_open('article', null, null,
        'id', '2');
      ie_open('h2');
        itext('Inserting multiple data');
      ie_close('h2');
      ie_open('p');
        itext('With the same method you\'re able to create multiple data instead using the same method multiple times. You just need to use an array instead an object.');
      ie_close('p');
      $templateAlias2({code: 'WeDeploy\n    .data(\'https://<serviceID>-<projectID>.wedeploy.io\')\n    .create(\'movies\', [\n        {\n            "title": "Star Wars III",\n            "year": 2005,\n            "rating": 8.0\n        },\n        {\n            "title": "Star Wars II",\n            "year": 2002,\n            "rating": 8.6\n        }\n    ]).then(function(movies) {\n        console.log(movies);\n    });', mode: 'javascript'}, null, opt_ijData);
      $templateAlias2({code: 'WeDeploy\n    .data(\'https://<serviceID>-<projectID>.wedeploy.io\')\n    .create(resource: "movies", object: [\n    [\n        "title" : "Star Wars III",\n        "year" : 2005,\n        "ratings" : 8.0\n    ],\n    [\n        "title" : "Star Wars II",\n        "year" : 2002,\n        "ratings" : 8.6\n    ]\n    ])\n    .then { movie in\n        print(movie)\n    }', mode: 'swift'}, null, opt_ijData);
      $templateAlias2({code: 'JSONObject movie1JsonObject = new JSONObject()\n    .put("title", "Star Wars III")\n    .put("year", 2005)\n    .put("rating", 8.0);\n\nJSONObject movie2JsonObject = new JSONObject()\n    .put("title", "Star Wars II")\n    .put("year", 2002)\n    .put("rating", 8.6);\n\nJSONArray moviesJsonArray = new JSONArray()\n    .put(movie1JsonObject)\n    .put(movie2JsonObject);\n\nWeDeploy\n    .data(\'https://data-datademo.wedeploy.io\')\n    .create("movies", moviesJsonArray)\n    .execute();', mode: 'text/x-java'}, null, opt_ijData);
      ie_open('p');
        itext('This operation will return the newly created array of documents, with the following generated IDs:');
      ie_close('p');
      $templateAlias2({code: '[\n    {\n        "id":" 115992383516607959",\n        "title": "Star Wars III",\n        "year": 2005,\n        "rating": 8.0\n    },\n    {\n        "id":" 115992383516607954",\n        "title": "Star Wars II",\n        "year": 2002,\n        "rating": 8.6\n    }\n]', mode: 'javascript'}, null, opt_ijData);
    ie_close('article');
    ie_open('article', null, null,
        'id', '3');
      ie_open('h2');
        itext('Inserting new fields in an existing collection');
      ie_close('h2');
      ie_open('p');
        itext('WeDeploy Data service is really flexible in therms of data structure. You\'re able to insert new fiels in a collection by adding the new key in the object param.');
      ie_close('p');
      $templateAlias2({code: 'WeDeploy\n    .data(\'https://<serviceID>-<projectID>.wedeploy.io\')\n    .create(\'movies\', [\n        {\n            "title": "Star Wars I",\n            "obs": "First in ABC order",\n            "year": 1999,\n            "rating": 9.0\n        }\n    ]).then(function(movie) {\n        console.log(movie);\n    });', mode: 'javascript'}, null, opt_ijData);
      $templateAlias2({code: 'WeDeploy\n    .data(\'https://<serviceID>-<projectID>.wedeploy.io\')\n    .create(resource: "movies", object: [\n        "title": "Star Wars I",\n        "obs": "First in ABC order",\n        "year": 1999,\n        "rating": 9.0\n    ])\n    .then { movie in\n        print(movie)\n    }', mode: 'swift'}, null, opt_ijData);
      $templateAlias2({code: 'JSONObject movieJsonObject = new JSONObject()\n    .put("title", "Star Wars I")\n    .put("obs", "First in ABC order")\n    .put("year", 1999)\n    .put("rating", 9.0);\n\nWeDeploy\n    .data(\'https://data-datademo.wedeploy.io\')\n    .create("movies", movieJsonObject)\n    .execute();', mode: 'text/x-java'}, null, opt_ijData);
      ie_open('p');
        itext('This operation will return the newly created document, with the following generated ID:');
      ie_close('p');
      $templateAlias2({code: '{\n    "id":" 115992383516607954",\n    "title": "Star Wars I",\n    "obs": "First in ABC order",\n    "year": 1999,\n    "rating": 9.0\n}', mode: 'javascript'}, null, opt_ijData);
    ie_close('article');
    ie_open('article', null, null,
        'id', '4');
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
      $templateAlias2({code: 'https://<serviceID>-<projectID>.wedeploy.io/movies/115992383516607958/rating', mode: 'text'}, null, opt_ijData);
    ie_close('article');
    ie_open('h2');
      itext('What\'s next?');
    ie_close('h2');
    ie_open('p');
      itext('Now that you\'ve learned how to save, you can start ');
      ie_open('a', null, null,
          'href', '/docs/data/retrieving-data.html');
        itext('retrieving data');
      ie_close('a');
      itext('.');
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
  $templateAlias1(soy.$$assignDefaults({content: param1211}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'kkkql.render';
}

exports.render.params = ["page","site"];
exports.render.types = {"page":"any","site":"any"};
templates = exports;
return exports;

});

class kkkql extends Component {}
Soy.register(kkkql, templates);
export { kkkql, templates };
export default templates;
/* jshint ignore:end */
