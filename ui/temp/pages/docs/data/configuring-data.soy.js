/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from configuring-data.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace docsDataConfiguringDataHtml.
 * @public
 */

goog.module('docsDataConfiguringDataHtml.incrementaldom');

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
  var param514 = function() {
    ie_open('h1');
      itext('Configuring Data');
    ie_close('h1');
    ie_open('h6');
      itext('The ');
      ie_open('code');
        itext('api.json');
      ie_close('code');
      itext(' and ');
      ie_open('code');
        itext('api-*.json');
      ie_close('code');
      itext(' files allow us to configure the accessible paths for each data service.');
    ie_close('h6');
    ie_open('article', null, null,
        'id', 'article_1');
      ie_open('h2');
        itext('Understanding configuration files');
      ie_close('h2');
      ie_open('p');
        itext('By default WeDeploy Data service is going to use all the JSON files starting with ');
        ie_open('code');
          itext('api-*');
        ie_close('code');
        itext(' and also the file ');
        ie_open('code');
          itext('api.json');
        ie_close('code');
        itext('.');
      ie_close('p');
      ie_open('p');
        itext('These files are used to help you manage features such as path validation, authentication, and params validation.');
      ie_close('p');
      ie_open('p');
        itext('The api JSON files are located at the same path of the ');
        ie_open('code');
          itext('./container.json');
        ie_close('code');
        itext(' and are used following the ordering filesystem.');
      ie_close('p');
    ie_close('article');
    ie_open('article', null, null,
        'id', 'article_2');
      ie_open('h2');
        itext('JSON attributes');
      ie_close('h2');
      ie_open('p');
        itext('After understanding how the api configuration files work, it\'s time to learn what are the supported attributes:');
      ie_close('p');
      ie_open('table', null, null,
          'class', 'table');
        ie_open('tr');
          ie_open('th');
            itext('Field');
          ie_close('th');
          itext(' ');
          ie_open('th');
            itext('Description');
          ie_close('th');
        ie_close('tr');
        ie_open('tr');
          ie_open('td');
            itext('path');
          ie_close('td');
          itext(' ');
          ie_open('td');
            itext('The path that represents the collection used to handle the request data.');
          ie_close('td');
        ie_close('tr');
        ie_open('tr');
          ie_open('td');
            itext('data');
          ie_close('td');
          itext(' ');
          ie_open('td');
            itext('Tells the service if the request to a collection should be stored or not.');
          ie_close('td');
        ie_close('tr');
        ie_open('tr');
          ie_open('td');
            itext('description');
          ie_close('td');
          itext(' ');
          ie_open('td');
            itext('Used to describe the behavior of an endpoint.');
          ie_close('td');
        ie_close('tr');
        ie_open('tr');
          ie_open('td');
            itext('auth');
          ie_close('td');
          itext(' ');
          ie_open('td');
            itext('Used to define authentication rules for the endpoint.');
          ie_close('td');
        ie_close('tr');
        ie_open('tr');
          ie_open('td');
            itext('method');
          ie_close('td');
          itext(' ');
          ie_open('td');
            itext('HTTP method allowed for the request.');
          ie_close('td');
        ie_close('tr');
        ie_open('tr');
          ie_open('td');
            itext('parameters');
          ie_close('td');
          itext(' ');
          ie_open('td');
            itext('Parameters and validation rules for the collection.');
          ie_close('td');
        ie_close('tr');
      ie_close('table');
      ie_open('h5');
        itext('path');
      ie_close('h5');
      ie_open('p');
        itext('A path represents the resource used to store your project data.');
      ie_close('p');
      $templateAlias2({code: '[\n  {\n    "path": "/movies/:movieId"\n  },\n  {\n    "path": "/fruits/*"\n  }\n]', mode: 'text'}, null, opt_ijData);
      ie_open('h5');
        itext('data');
      ie_close('h5');
      ie_open('p');
        itext('You can create endpoints just for validation, in this case, data is used to finish the request in case you just need a validation or want to store the request in the collection.');
      ie_close('p');
      $templateAlias2({code: '[\n  {\n    "path": "/fruits/*",\n    "data": true\n  }\n]', mode: 'json'}, null, opt_ijData);
      ie_open('h5');
        itext('description');
      ie_close('h5');
      ie_open('p');
        itext('Used to describe the behavior of an endpoint.');
      ie_close('p');
      $templateAlias2({code: '[\n  {\n    "description": "Returns actors of a movie",\n    "path": "/movies/:movieId/actors",\n    "method": "GET"\n  }\n]', mode: 'json'}, null, opt_ijData);
      ie_open('h5');
        itext('auth');
      ie_close('h5');
      ie_open('p');
        itext('You can unauthorized applications and users to access any endpoint by using the auth field. The example below verify if the application is authenticated in order to perform the request:');
      ie_close('p');
      $templateAlias2({code: '[\n  {\n    "path": "/movies/*",\n    "auth": {\n      "validator": "$auth != null"\n    }\n  }\n]', mode: 'json'}, null, opt_ijData);
      ie_open('h5');
        itext('method');
      ie_close('h5');
      ie_open('p');
        itext('Specifies the HTTP method used for the request. In the example bellow, it allows a GET request and if you try to do a PUT or DELETE the route will not be recognized and will fail.');
      ie_close('p');
      $templateAlias2({code: '[\n  {\n    "path": "/moives/:movieId",\n    "data": true,\n    "method": "GET"\n  }\n]', mode: 'json'}, null, opt_ijData);
      ie_open('h5');
        itext('parameters');
      ie_close('h5');
      ie_open('p');
        itext('You generally would use ');
        ie_open('code');
          itext('parameters');
        ie_close('code');
        itext(' to force validation in order to make sure that the params sent to a collection follow predefined rules.');
      ie_close('p');
      $templateAlias2({code: '[\n  {\n    "description": "Creates a new movie",\n    "path": "/movies",\n    "method": "POST",\n    "parameters": {\n      "title": {\n        "type": "string"\n      }\n    },\n    "data": true\n  }\n]', mode: 'json'}, null, opt_ijData);
    ie_close('article');
    ie_open('article', null, null,
        'id', 'article_3');
      ie_open('h2');
        itext('Allowing usage of all the collections');
      ie_close('h2');
      ie_open('p');
        itext('In order to freely use any collection with any kind of operation, you just need to add the following content in your ');
        ie_open('code');
          itext('api.json');
        ie_close('code');
        itext('.');
      ie_close('p');
      $templateAlias2({code: '[\n  {\n    "path": "/*",\n    "data": true\n  }\n]', mode: 'json'}, null, opt_ijData);
      ie_open('p');
        itext('The path ');
        ie_open('code');
          itext('/\\*');
        ie_close('code');
        itext(' tells the data service to allow any request to the base path of the data service.');
      ie_close('p');
    ie_close('article');
    ie_open('article', null, null,
        'id', 'article_4');
      ie_open('h2');
        itext('Validating resources');
      ie_close('h2');
      ie_open('p');
        itext('The Validator script will be executed in an environment where several request and server data will be available. In this environment, there are several global variables available to you that can be used to validate the request parameter, body, or even to authorize the request.');
      ie_close('p');
      ie_open('p');
        itext('The validator can be used as an integration with the Auth service:');
      ie_close('p');
      $templateAlias2({code: '{\n  "path": "/movies/*",\n  "auth": {\n    "validator": "$auth != null"\n  }\n}', mode: 'json'}, null, opt_ijData);
      ie_open('p');
        itext('The global variables are:');
      ie_close('p');
      ie_open('table', null, null,
          'class', 'table');
        ie_open('tr');
          ie_open('th');
            itext('Variable');
          ie_close('th');
          itext(' ');
          ie_open('th');
            itext('Description');
          ie_close('th');
        ie_close('tr');
        ie_open('tr');
          ie_open('td');
            itext('$auth');
          ie_close('td');
          itext(' ');
          ie_open('td');
            itext('The authenticated user of this request. If the request was not authenticated, it will be null.');
          ie_close('td');
        ie_close('tr');
        ie_open('tr');
          ie_open('td');
            itext('$config');
          ie_close('td');
          itext(' ');
          ie_open('td');
            itext('The raw JSON data stored in the service\'s config.json file.');
          ie_close('td');
        ie_close('tr');
        ie_open('tr');
          ie_open('td');
            itext('$session');
          ie_close('td');
          itext(' ');
          ie_open('td');
            itext('All stored session data. If the request had no session cookie, it will be an empty map for the new session created for this request.');
          ie_close('td');
        ie_close('tr');
        ie_open('tr');
          ie_open('td');
            itext('$params');
          ie_close('td');
          itext(' ');
          ie_open('td');
            itext('The request params as they were loaded from url query and request body. All query and form parameters will be strings here.');
          ie_close('td');
        ie_close('tr');
        ie_open('tr');
          ie_open('td');
            itext('$values');
          ie_close('td');
          itext(' ');
          ie_open('td');
            itext('The parsed request params, as they are used for parameter validation. All query and form parameters will be parsed to JSON values.');
          ie_close('td');
        ie_close('tr');
        ie_open('tr');
          ie_open('td');
            itext('$body');
          ie_close('td');
          itext(' ');
          ie_open('td');
            itext('The parsed request body, according to the request Content-Type.');
          ie_close('td');
        ie_close('tr');
        ie_open('tr');
          ie_open('td');
            itext('$data');
          ie_close('td');
          itext(' ');
          ie_open('td');
            itext('The data view for this request, if a data path is mounted in the API path, and the request path represents a key to access any data resource (collection, document or inner field from a document). It will be null otherwise.');
          ie_close('td');
        ie_close('tr');
      ie_close('table');
      ie_open('p');
        itext('Some common validators are:');
      ie_close('p');
      ie_open('ol');
        ie_open('li');
          itext('Authenticated users only:');
        ie_close('li');
      ie_close('ol');
      $templateAlias2({code: '$auth !== null', mode: 'xml'}, null, opt_ijData);
      ie_open('ol', null, null,
          'start', '2');
        ie_open('li');
          itext('Mixed with dynamic values:');
        ie_close('li');
      ie_close('ol');
      $templateAlias2({code: '$auth.id === $params.id', mode: 'xml'}, null, opt_ijData);
      ie_open('ol', null, null,
          'start', '3');
        ie_open('li');
          itext('Validate new data value agains old one:');
        ie_close('li');
      ie_close('ol');
      $templateAlias2({code: '$body.timestamp > $data.timestamp', mode: 'xml'}, null, opt_ijData);
      ie_open('ol', null, null,
          'start', '4');
        ie_open('li');
          itext('Multiple contitional validation:');
        ie_close('li');
      ie_close('ol');
      $templateAlias2({code: '$auth !== null && $auth.id === $params.id', mode: 'xml'}, null, opt_ijData);
    ie_close('article');
    ie_open('h2');
      itext('What\'s next?');
    ie_close('h2');
    ie_open('p');
      itext('Now that you have ');
      ie_open('em');
        itext('WeDeploy\u2122 Data');
      ie_close('em');
      itext(' API settled up, you can interact ');
      ie_open('a', null, null,
          'href', '/docs/data/js/saving-data.html');
        itext('saving data');
      ie_close('a');
      itext('.');
    ie_close('p');
  };
  $templateAlias1(soy.$$assignDefaults({content: param514}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'docsDataConfiguringDataHtml.render';
}

exports.render.params = [];
exports.render.types = {};
templates = exports;
return exports;

});

class docsDataConfiguringDataHtml extends Component {}
Soy.register(docsDataConfiguringDataHtml, templates);
export { docsDataConfiguringDataHtml, templates };
export default templates;
/* jshint ignore:end */
