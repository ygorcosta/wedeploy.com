/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from updating-data.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace mHXpI.
 * @public
 */

goog.module('mHXpI.incrementaldom');

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
  var param1427 = function() {
    ie_open('h3');
      var dyn70 = opt_data.page.title;
      if (typeof dyn70 == 'function') dyn70(); else if (dyn70 != null) itext(dyn70);
    ie_close('h3');
    ie_open('h6');
      var dyn71 = opt_data.page.description;
      if (typeof dyn71 == 'function') dyn71(); else if (dyn71 != null) itext(dyn71);
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
        itext('Updating existing data');
      ie_close('h2');
      ie_open('p');
        itext('Updating existing data is as simple as sending a JSON.');
      ie_close('p');
      $templateAlias2({code: 'WeDeploy\n    .data(\'https://<serviceID>-<projectID>.wedeploy.io\')\n    .update(\'movies/115992383516607958\', {\n        "rating": 9.1\n    }).then(function(movie) {\n        console.log(movie);\n    });', mode: 'javascript'}, null, opt_ijData);
      $templateAlias2({code: 'WeDeploy\n    .data(\'https://<serviceID>-<projectID>.wedeploy.io\')\n    .update(resourcePath: "movies/115992383516607958", updatedAttributes: [\n        "rating": 9.1\n    ])\n    .then { movie in\n        print(movie)\n    }', mode: 'swift'}, null, opt_ijData);
      $templateAlias2({code: 'JSONObject movieJsonObject = new JSONObject()\n    .put("rating", 9.1);\n\nWeDeploy\n    .data(\'https://data-datademo.wedeploy.io\')\n    .update("movies/115992383516607958", movieJsonObject)\n    .execute();', mode: 'text/x-java'}, null, opt_ijData);
      ie_open('p');
        itext('This operation will return the updated document with the new rating:');
      ie_close('p');
      $templateAlias2({code: '{\n    "id":" 115992383516607958",\n    "title": "Star Wars IV",\n    "year": 1977,\n    "rating": 9.1\n}', mode: 'javascript'}, null, opt_ijData);
    ie_close('article');
    ie_open('h2');
      itext('What\'s next?');
    ie_close('h2');
    ie_open('p');
      itext('Now that you\'ve learned how to update, you can start ');
      ie_open('a', null, null,
          'href', '/docs/data/deleting-data.html');
        itext('deleting data');
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
  $templateAlias1(soy.$$assignDefaults({content: param1427}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'mHXpI.render';
}

exports.render.params = ["page","site"];
exports.render.types = {"page":"any","site":"any"};
templates = exports;
return exports;

});

class mHXpI extends Component {}
Soy.register(mHXpI, templates);
export { mHXpI, templates };
export default templates;
/* jshint ignore:end */
