/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from real-time-data.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace zpJEZ.
 * @public
 */

goog.module('zpJEZ.incrementaldom');

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
  var param1056 = function() {
    ie_open('h3');
      var dyn62 = opt_data.page.title;
      if (typeof dyn62 == 'function') dyn62(); else if (dyn62 != null) itext(dyn62);
    ie_close('h3');
    ie_open('h6');
      var dyn63 = opt_data.page.description;
      if (typeof dyn63 == 'function') dyn63(); else if (dyn63 != null) itext(dyn63);
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
        itext('Watching data changes');
      ie_close('h2');
      ie_open('p');
        itext('We presented a lot of features for data filtering and search. You may be wondering where the real-time aspect is in all of this. Well, it\'s throughout the features we just presented to you. To access our data in real-time, all we need to do is change the ');
        ie_open('em');
          itext('WeDeploy');
        ie_close('em');
        itext(' API  ');
        ie_open('code');
          itext('get');
        ie_close('code');
        itext(' method to use to the ');
        ie_open('code');
          itext('watch');
        ie_close('code');
        itext(' method:');
      ie_close('p');
      $templateAlias2({code: 'WeDeploy\n    .data(\'https://<serviceID>-<projectID>.wedeploy.io\')\n    .watch(\'movies\')\n    .on(\'changes\', function(data) {\n        console.log(data);\n    })\n    .on(\'fail\', function(error) {\n        console.log(error);\n    });', mode: 'javascript'}, null, opt_ijData);
      $templateAlias2({code: '// You have to hold a strong reference to the socket or it will be released\nsocket = WeDeploy\n    .data(\'https://<serviceID>-<projectID>.wedeploy.io\')\n    .watch(resourcePath: "movies")\n\nsocket.on([.changes, .error]) { data in\n    switch(data.type) {\n    case .changes:\n        print("changes \\(data.document)")\n    case .error:\n        print("error \\(data.document)")\n    default:\n        break\n    }\n}', mode: 'swift'}, null, opt_ijData);
      $templateAlias2({code: 'WeDeploy\n    .data(\'https://data-datademo.wedeploy.io\')\n    .watch("movies")\n    .on("changes", data -> System.out.println(data))\n    .on("fail", error -> System.out.println(error));', mode: 'text/x-java'}, null, opt_ijData);
      ie_open('p');
        itext('Now every time the storage detects changes that affect the query you\'re watching, you will receive a changes notification with the response body you\'d receive if you had done an HTTP GET instead. Furthermore, every time this change leads to an HTTP error response, you\'ll receive the error object in a fail notification on the client.');
      ie_close('p');
    ie_close('article');
    ie_open('article', null, null,
        'id', '2');
      ie_open('h2');
        itext('Watching with advanced filters');
      ie_close('h2');
      ie_open('p');
        itext('To present data using advanced search is simple as performing normal queries. You just would need to keep using the ');
        ie_open('code');
          itext('watch');
        ie_close('code');
        itext(' method and apply any filter you desire.');
      ie_close('p');
      $templateAlias2({code: 'WeDeploy\n    .data(\'https://<serviceID>-<projectID>.wedeploy.io\')\n    .where(\'category\', \'cinema\')\n    .or(\'category\', \'cartoon\')\n    .watch(\'movies\')\n    .on(\'changes\', function(data) {\n        console.log(data);\n    })\n    .on(\'fail\', function(error) {\n        console.log(error);\n    });', mode: 'javascript'}, null, opt_ijData);
      $templateAlias2({code: '// You have to hold a strong reference to the socket or it will be released\nsocket = WeDeploy\n    .data(\'https://<serviceID>-<projectID>.wedeploy.io\')\n    .where(field: "category", op: "=", value: "cinema")\n    .or(field: "category", op: "=", value: "cartoon")\n    .watch(resourcePath: "movies")\n\nsocket.on([.changes, .error]) { data in\n    switch(data.type) {\n    case .changes:\n        print("changes \\(data.document)")\n    case .error:\n        print("error \\(data.document)")\n    default:\n        break\n    }\n}', mode: 'swift'}, null, opt_ijData);
      $templateAlias2({code: 'WeDeploy\n    .data(\'https://data-datademo.wedeploy.io\')\n    .where(equal("category", "cinema").or("category", "cartoon"))\n    .watch("movies")\n    .on("changes", data -> System.out.println(data))\n    .on("fail", error -> System.out.println(error));', mode: 'text/x-java'}, null, opt_ijData);
    ie_close('article');
    ie_open('article', null, null,
        'id', '3');
      ie_open('h2');
        itext('Getting the latest changes');
      ie_close('h2');
      ie_open('p');
        itext('The data service uses a query limit ');
        ie_open('code');
          itext('500');
        ie_close('code');
        itext(' by default. In order to always get the latest new record, you would need to limit the query by ');
        ie_open('code');
          itext('1');
        ie_close('code');
        itext(' and order by ');
        ie_open('code');
          itext('id');
        ie_close('code');
        itext(' ');
        ie_open('code');
          itext('desc');
        ie_close('code');
        itext('.');
      ie_close('p');
      $templateAlias2({code: 'WeDeploy\n    .data(\'https://<serviceID>-<projectID>.wedeploy.io\')\n    .limit(1)\n    .orderBy(\'id\', \'desc\')\n    .watch(\'movies\')\n    .on(\'changes\', function(data) {\n        console.log(data);\n    })\n    .on(\'fail\', function(error) {\n        console.log(error);\n    });', mode: 'javascript'}, null, opt_ijData);
      $templateAlias2({code: '// You have to hold a strong reference to the socket or it will be released\nsocket = WeDeploy\n    .data(\'https://<serviceID>-<projectID>.wedeploy.io\')\n    .limit(1)\n    .orderBy(field: "id", order: .DESC)\n    .watch(resourcePath: "movies")\n\nsocket.on([.changes, .error]) { data in\n    switch(data.type) {\n    case .changes:\n        print("changes \\(data.document)")\n    case .error:\n        print("error \\(data.document)")\n    default:\n        break\n    }\n}', mode: 'swift'}, null, opt_ijData);
      $templateAlias2({code: 'WeDeploy\n    .data(\'https://data-datademo.wedeploy.io\')\n    .limit(1)\n    .orderBy("id", SortOrder.DESCENDING)\n    .watch("movies")\n    .on("changes", data -> System.out.println(data))\n    .on("fail", error -> System.out.println(error));', mode: 'text/x-java'}, null, opt_ijData);
    ie_close('article');
    ie_open('h2');
      itext('What\'s next?');
    ie_close('h2');
    ie_open('p');
      itext('Now that you\'ve learned how to use real-time, you can start ');
      ie_open('a', null, null,
          'href', '/docs/data/searching-data.html');
        itext('searching data');
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
  $templateAlias1(soy.$$assignDefaults({content: param1056}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'zpJEZ.render';
}

exports.render.params = ["page","site"];
exports.render.types = {"page":"any","site":"any"};
templates = exports;
return exports;

});

class zpJEZ extends Component {}
Soy.register(zpJEZ, templates);
export { zpJEZ, templates };
export default templates;
/* jshint ignore:end */
