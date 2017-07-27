/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from retrieving-data.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace aiKSd.
 * @public
 */

goog.module('aiKSd.incrementaldom');

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
  var param1108 = function() {
    ie_open('h3');
      var dyn64 = opt_data.page.title;
      if (typeof dyn64 == 'function') dyn64(); else if (dyn64 != null) itext(dyn64);
    ie_close('h3');
    ie_open('h6');
      var dyn65 = opt_data.page.description;
      if (typeof dyn65 == 'function') dyn65(); else if (dyn65 != null) itext(dyn65);
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
        itext('Get data');
      ie_close('h2');
      ie_open('p');
        itext('Reading data from our storage takes only 3 lines of code.');
      ie_close('p');
      $templateAlias2({code: 'WeDeploy\n    .data(\'https://<serviceID>-<projectID>.wedeploy.io\')\n    .get(\'movies/star_wars_v\')\n    .then(function(movie) {\n        console.log(movie);\n    });', mode: 'javascript'}, null, opt_ijData);
      $templateAlias2({code: 'WeDeploy\n    .data(\'https://<serviceID>-<projectID>.wedeploy.io\')\n    .get(resourcePath: "movies/star_wars_v")\n    .then { movie in\n        print(movie)\n    }', mode: 'swift'}, null, opt_ijData);
      $templateAlias2({code: 'WeDeploy\n    .data(\'https://data-datademo.wedeploy.io\')\n    .get("movies/star_wars_v")\n    .execute();', mode: 'text/x-java'}, null, opt_ijData);
      ie_open('p');
        itext('The response body is the stored JSON document:');
      ie_close('p');
      $templateAlias2({code: '{\n    "id": "star_wars_v",\n    "title": "Star Wars: Episode V - The Empire Strikes Back",\n    "year": 1980,\n    "rating": 8.8\n}', mode: 'javascript'}, null, opt_ijData);
      ie_open('p');
        itext('We can also get any field value using the full path:');
      ie_close('p');
      $templateAlias2({code: 'WeDeploy\n    .data(\'https://<serviceID>-<projectID>.wedeploy.io\')\n    .get(\'movies/star_wars_v/title\')\n    .then(function(title) {\n        console.log(title);\n    });', mode: 'javascript'}, null, opt_ijData);
      $templateAlias2({code: 'WeDeploy\n    .data(\'https://<serviceID>-<projectID>.wedeploy.io\')\n    .get(resourcePath: "movies/star_wars_v/title")\n    .then { (movie: String) in // You have to specify the type here to allow compiler infer type\n        print(movie)\n    }', mode: 'swift'}, null, opt_ijData);
      $templateAlias2({code: 'WeDeploy\n    .data(\'https://data-datademo.wedeploy.io\')\n    .get("movies/star_wars_v/title")\n    .execute();', mode: 'text/x-java'}, null, opt_ijData);
      ie_open('p');
        itext('The full path returns the raw content in the response body:');
      ie_close('p');
      $templateAlias2({code: '[\n    {"id":"star_wars_i", "title":"Star Wars: Episode I - The Phantom Menace", "year":1999, "rating":6.5},\n    {"id":"star_wars_ii", "title":"Star Wars: Episode II - Attack of the Clones", "year":2002, "rating":6.7},\n    {"id":"star_wars_iii", "title":"Star Wars: Episode III - Revenge of the Sith", "year":2005, "rating":7.7},\n    {"id":"star_wars_iv", "title":"Star Wars: Episode IV - A New Hope", "year":1977, "rating":8.7},\n    {"id":"star_wars_v", "title":"Star Wars: Episode V - The Empire Strikes Back", "year":1980, "rating":8.8},\n    {"id":"star_wars_vi", "title":"Star Wars: Episode VI - Return of the Jedi", "year":1983, "rating":8.4},\n    {"id":"star_wars_vii", "title":"Star Wars: Episode VII - The Force Awakens", "year":2015}\n]', mode: 'javascript'}, null, opt_ijData);
    ie_close('article');
    ie_open('article', null, null,
        'id', '2');
      ie_open('h2');
        itext('Sorting data');
      ie_close('h2');
      ie_open('p');
        itext('The result is ordered by document id, as we can see in the list above. We can select the order of the results by passing a sort parameter, using the following code:');
      ie_close('p');
      $templateAlias2({code: 'WeDeploy\n    .data(\'https://<serviceID>-<projectID>.wedeploy.io\')\n    .orderBy(\'rating\', \'desc\')\n    .get(\'movies\')\n    .then(function(movies) {\n        console.log(movies);\n    });', mode: 'javascript'}, null, opt_ijData);
      $templateAlias2({code: 'WeDeploy\n    .data(\'https://<serviceID>-<projectID>.wedeploy.io\')\n    .orderBy(field: "rating", order: .DESC)\n    .get(resourcePath: "movies")\n    .then { movies in\n        print(movies)\n    }', mode: 'swift'}, null, opt_ijData);
      $templateAlias2({code: 'WeDeploy\n    .data(\'https://data-datademo.wedeploy.io\')\n    .orderBy("rating", SortOrder.DESCENDING)\n    .get("movies")\n    .execute();', mode: 'text/x-java'}, null, opt_ijData);
      ie_open('p');
        itext('As expected, the result would be the following list:');
      ie_close('p');
      $templateAlias2({code: '[\n    {"id":"star_wars_v","title":"Star Wars: Episode V - The Empire Strikes Back","year":1980,"rating":8.8},\n    {"id":"star_wars_iv","title":"Star Wars: Episode IV - A New Hope","year":1977,"rating":8.7},\n    {"id":"star_wars_vi","title":"Star Wars: Episode VI - Return of the Jedi","year":1983,"rating":8.4},\n    {"id":"star_wars_iii","title":"Star Wars: Episode III - Revenge of the Sith","year":2005,"rating":7.7},\n    {"id":"star_wars_ii","title":"Star Wars: Episode II - Attack of the Clones","year":2002,"rating":6.7},\n    {"id":"star_wars_i","title":"Star Wars: Episode I - The Phantom Menace","year":1999,"rating":6.5},\n    {"id":"star_wars_vii","title":"Star Wars: Episode VII - The Force Awakens","year":2015}\n]', mode: 'javascript'}, null, opt_ijData);
      ie_open('p');
        itext('Notice that because Episode VII has no rating (as it was not released yet), it\'s sorted as the last document.');
      ie_close('p');
    ie_close('article');
    ie_open('article', null, null,
        'id', '3');
      ie_open('h2');
        itext('Applying filters');
      ie_close('h2');
      ie_open('p');
        itext('In addition to sorting the results, we can also apply filters using the following code:');
      ie_close('p');
      $templateAlias2({code: 'WeDeploy\n    .data(\'https://<serviceID>-<projectID>.wedeploy.io\')\n    .where(\'year\', \'<\', 2000)\n    .or(\'rating\', \'>\', 8.5)\n    .get(\'movies\')\n    .then(function(movies) {\n        console.log(movies);\n    });', mode: 'javascript'}, null, opt_ijData);
      $templateAlias2({code: 'WeDeploy\n    .data(\'https://<serviceID>-<projectID>.wedeploy.io\')\n    .where(field: "year", op: "<", value: 2000)\n    .or(field: "rating", op: ">", value: 8.5)\n    .get(resourcePath: "movies")\n    .then { movies in\n        print(movies)\n    }', mode: 'swift'}, null, opt_ijData);
      $templateAlias2({code: 'WeDeploy\n    .data(\'https://data-datademo.wedeploy.io\')\n    .where(lt("year", 2000).or(gt("rating", 8.5)))\n    .get("movies")\n    .execute();', mode: 'text/x-java'}, null, opt_ijData);
      ie_open('p');
        itext('The following entries are the result of the above filters:');
      ie_close('p');
      $templateAlias2({code: '[\n    {"id":"star_wars_iv","title":"Star Wars: Episode IV - A New Hope","year":1977,"rating":8.7},\n    {"id":"star_wars_v","title":"Star Wars: Episode V - The Empire Strikes Back","year":1980,"rating":8.8}\n]', mode: 'javascript'}, null, opt_ijData);
    ie_close('article');
    ie_open('article', null, null,
        'id', '4');
      ie_open('h2');
        itext('Pagination');
      ie_close('h2');
      ie_open('p');
        itext('We can also paginate the result using the \'limit\' and \'offset\' properties. Combining all the tools we\'ve learned so far, we can run a detailed query on our data:');
      ie_close('p');
      $templateAlias2({code: 'WeDeploy\n    .data(\'https://<serviceID>-<projectID>.wedeploy.io\')\n    .where(\'year\', \'>\', 2000)\n    .orderBy(\'rating\')\n    .limit(2)\n    .offset(1)\n    .get(\'movies\')\n    .then(function(movies) {\n        console.log(movies);\n    });', mode: 'javascript'}, null, opt_ijData);
      $templateAlias2({code: 'WeDeploy\n    .data(\'https://<serviceID>-<projectID>.wedeploy.io\')\n    .where(field: "year", op: "<", value: 2000)\n    .orderBy(field: "rating", order: .ASC)\n    .limit(2)\n    .offset(1)\n    .get(resourcePath: "movies")\n    .then { movies in\n        print(movies)\n    }', mode: 'swift'}, null, opt_ijData);
      $templateAlias2({code: 'WeDeploy\n    .data(\'https://data-datademo.wedeploy.io\')\n    .where(gt("year", 2000))\n    .orderBy("rating")\n    .limit(2)\n    .offset(1)\n    .get("movies")\n    .execute();', mode: 'text/x-java'}, null, opt_ijData);
      ie_open('p');
        itext('Notice that filtering by year only returns episodes I, II, III, and VII. Applying the \'rating\' sort will give us this same order. We also limited the result to show only two documents and skip the first one. The final result is the following entries:');
      ie_close('p');
      $templateAlias2({code: '[\n    {"id":"star_wars_ii","title":"Star Wars: Episode II - Attack of the Clones","year":2002,"rating":6.7},\n    {"id":"star_wars_iii","title":"Star Wars: Episode III - Revenge of the Sith","year":2005,"rating":7.7}\n]', mode: 'javascript'}, null, opt_ijData);
      ie_open('p');
        itext('We support all basic SQL-like operators (=, !=, >, >=, <, <=, ~), as well as \'any\' and \'none\' to filter elements in a list. We also give support for search operators, which we will see in more detail in the section Search Data.');
      ie_close('p');
    ie_close('article');
    ie_open('h2');
      itext('What\'s next?');
    ie_close('h2');
    ie_open('p');
      itext('Now that you\'ve learned how to retrieve, you can start ');
      ie_open('a', null, null,
          'href', '/docs/data/real-time-data.html');
        itext('using real-time');
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
  $templateAlias1(soy.$$assignDefaults({content: param1108}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'aiKSd.render';
}

exports.render.params = ["page","site"];
exports.render.types = {"page":"any","site":"any"};
templates = exports;
return exports;

});

class aiKSd extends Component {}
Soy.register(aiKSd, templates);
export { aiKSd, templates };
export default templates;
/* jshint ignore:end */
