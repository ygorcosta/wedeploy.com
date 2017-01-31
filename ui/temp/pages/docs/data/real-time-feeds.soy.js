/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from real-time-feeds.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace docsDataRealTimeFeedsHtml.
 * @public
 */

goog.module('docsDataRealTimeFeedsHtml.incrementaldom');

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
  var param632 = function() {
    ie_open('h1');
      itext('Real-time Feeds');
    ie_close('h1');
    ie_open('h6');
      ie_open('em');
        itext('WeDeploy\u2122 Data');
      ie_close('em');
      itext(' inverts the traditional database architecture, instead of polling for changes, the developer can tell WeDeploy Data to continuously push updated query results to applications in real-time.');
    ie_close('h6');
    ie_open('article', null, null,
        'id', 'article_1');
      ie_open('h2');
        itext('Watching data changes');
      ie_close('h2');
      ie_open('p');
        itext('We presented a lot of features for data filtering and search. You may be wondering where the real-time aspect is in all of this. Well, it\'s throughout the features we just presented to you. To access our data in real-time, all we need to do is change the ');
        ie_open('em');
          itext('WeDeploy\u2122');
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
      $templateAlias2({code: 'var data = WeDeploy.data(\'http://datademo.wedeploy.io\');\n\ndata.watch(\'movies\')\n.on(\'changes\', function(data){\n   console.log(data);\n})\n.on(\'fail\', function(error){\n   console.log(error);\n});', mode: 'javascript'}, null, opt_ijData);
      ie_open('p');
        itext('Now every time the storage detects changes that affect the query you\'re watching, you will receive a changes notification with the response body you\'d receive if you had done an HTTP GET instead. Furthermore, every time this change leads to an HTTP error response, you\'ll receive the error object in a fail notification on the client.');
      ie_close('p');
    ie_close('article');
    ie_open('article', null, null,
        'id', 'article_2');
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
      $templateAlias2({code: 'WeDeploy.data(\'http://datademo.wedeploy.io\')\n.where(\'category\', \'cinema\')\n.or(\'category\', \'cartoon\')\n.watch(\'movies\')\n.on(\'changes\', function(data){\n   console.log(data);\n})\n.on(\'fail\', function(error){\n   console.log(error);\n});', mode: 'javascript'}, null, opt_ijData);
    ie_close('article');
    ie_open('article', null, null,
        'id', 'article_3');
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
      $templateAlias2({code: 'WeDeploy.data(\'http://datademo.wedeploy.io\')\n.limit(1)\n.orderBy(\'id\', \'desc\')\n.watch(\'movies\')\n.on(\'changes\', function(data){\n   console.log(data);\n})\n.on(\'fail\', function(error){\n   console.log(error);\n});', mode: 'javascript'}, null, opt_ijData);
    ie_close('article');
    ie_open('h2');
      itext('What\'s next?');
    ie_close('h2');
    ie_open('ul');
      ie_open('li');
        itext('Now we\'re ready to save and retrieve data in real-time.');
      ie_close('li');
    ie_close('ul');
  };
  $templateAlias1(soy.$$assignDefaults({content: param632}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'docsDataRealTimeFeedsHtml.render';
}

exports.render.params = [];
exports.render.types = {};
templates = exports;
return exports;

});

class docsDataRealTimeFeedsHtml extends Component {}
Soy.register(docsDataRealTimeFeedsHtml, templates);
export { docsDataRealTimeFeedsHtml, templates };
export default templates;
/* jshint ignore:end */
