// This file was automatically generated from configuring-data.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace EOJoi.
 * @public
 */

goog.module('EOJoi.incrementaldom');

/** @suppress {extraRequire} */
goog.require('soy');
/** @suppress {extraRequire} */
goog.require('soydata');
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
var $import1 = goog.require('ElectricCode.incrementaldom');
var $templateAlias2 = $import1.render;
var $import2 = goog.require('guide.incrementaldom');
var $templateAlias1 = $import2.render;


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ignored, opt_ijData) {
  var param935 = function() {
    ie_open('h3');
      var dyn57 = opt_data.page.title;
      if (typeof dyn57 == 'function') dyn57(); else if (dyn57 != null) itext(dyn57);
    ie_close('h3');
    ie_open('h6');
      var dyn58 = opt_data.page.description;
      if (typeof dyn58 == 'function') dyn58(); else if (dyn58 != null) itext(dyn58);
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
          itext('./wedeploy.json');
        ie_close('code');
        itext(' and are used following the ordering filesystem.');
      ie_close('p');
    ie_close('article');
    ie_open('article', null, null,
        'id', '2');
      ie_open('h2');
        itext('JSON attributes');
      ie_close('h2');
      ie_open('p');
        itext('After understanding how the api configuration files work, it\'s time to learn what are the supported attributes:');
      ie_close('p');
      ie_open('div', null, null,
          'class', 'table-container');
        ie_open('table');
          ie_open('thead');
            ie_open('tr');
              ie_open('th');
                itext('Field');
              ie_close('th');
              ie_open('th');
                itext('Description');
              ie_close('th');
            ie_close('tr');
          ie_close('thead');
          ie_open('tbody');
            ie_open('tr');
              ie_open('td');
                itext('path');
              ie_close('td');
              ie_open('td');
                itext('The path that represents the collection used to handle the request data.');
              ie_close('td');
            ie_close('tr');
            ie_open('tr');
              ie_open('td');
                itext('data');
              ie_close('td');
              ie_open('td');
                itext('Tells the service if the request to a collection should be stored or not.');
              ie_close('td');
            ie_close('tr');
            ie_open('tr');
              ie_open('td');
                itext('description');
              ie_close('td');
              ie_open('td');
                itext('Used to describe the behavior of an endpoint.');
              ie_close('td');
            ie_close('tr');
            ie_open('tr');
              ie_open('td');
                itext('auth');
              ie_close('td');
              ie_open('td');
                itext('Used to define authentication rules for the endpoint.');
              ie_close('td');
            ie_close('tr');
            ie_open('tr');
              ie_open('td');
                itext('method');
              ie_close('td');
              ie_open('td');
                itext('HTTP method allowed for the request.');
              ie_close('td');
            ie_close('tr');
            ie_open('tr');
              ie_open('td');
                itext('parameters');
              ie_close('td');
              ie_open('td');
                itext('Parameters and validation rules for the collection.');
              ie_close('td');
            ie_close('tr');
          ie_close('tbody');
        ie_close('table');
      ie_close('div');
      ie_open('h5');
        itext('path');
      ie_close('h5');
      ie_open('p');
        itext('A path represents the resource used to store your project data.');
      ie_close('p');
      $templateAlias2({code: '[\n    {\n        "path": "/movies/:movieId"\n    },\n    {\n        "path": "/fruits/*"\n    }\n]', mode: 'application/json'}, null, opt_ijData);
      ie_open('h5');
        itext('data');
      ie_close('h5');
      ie_open('p');
        itext('You can create endpoints just for validation, in this case, data is used to finish the request in case you just need a validation or want to store the request in the collection.');
      ie_close('p');
      $templateAlias2({code: '[\n    {\n        "path": "/fruits/*",\n        "data": true\n    }\n]', mode: 'application/json'}, null, opt_ijData);
      ie_open('h5');
        itext('description');
      ie_close('h5');
      ie_open('p');
        itext('Used to describe the behavior of an endpoint.');
      ie_close('p');
      $templateAlias2({code: '[\n    {\n        "description": "Returns actors of a movie",\n        "path": "/movies/:movieId/actors",\n        "method": "GET"\n    }\n]', mode: 'application/json'}, null, opt_ijData);
      ie_open('h5');
        itext('auth');
      ie_close('h5');
      ie_open('p');
        itext('You can unauthorized applications and users to access any endpoint by using the auth field. The example below verify if the application is authenticated in order to perform the request:');
      ie_close('p');
      $templateAlias2({code: '[\n    {\n        "path": "/movies/*",\n        "auth": {\n            "validator": "$auth != null"\n        }\n    }\n]', mode: 'application/json'}, null, opt_ijData);
      ie_open('h5');
        itext('method');
      ie_close('h5');
      ie_open('p');
        itext('Specifies the HTTP method used for the request. In the example bellow, it allows a GET request and if you try to do a PUT or DELETE the route will not be recognized and will fail.');
      ie_close('p');
      $templateAlias2({code: '[\n    {\n        "path": "/movies/:movieId",\n        "data": true,\n        "method": "GET"\n    }\n]', mode: 'application/json'}, null, opt_ijData);
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
      $templateAlias2({code: '[\n    {\n        "description": "Creates a new movie",\n        "path": "/movies",\n        "method": "POST",\n        "parameters": {\n            "title": {\n                "type": "string",\n                "required": true\n            }\n        },\n        "data": true\n    }\n]', mode: 'application/json'}, null, opt_ijData);
    ie_close('article');
    ie_open('article', null, null,
        'id', '3');
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
      $templateAlias2({code: '[\n    {\n        "path": "/*",\n        "data": true\n    }\n]', mode: 'application/json'}, null, opt_ijData);
      ie_open('p');
        itext('The path ');
        ie_open('code');
          itext('/\\*');
        ie_close('code');
        itext(' tells the data service to allow any request to the base path of the data service.');
      ie_close('p');
    ie_close('article');
    ie_open('article', null, null,
        'id', '4');
      ie_open('h2');
        itext('Validating resources');
      ie_close('h2');
      ie_open('p');
        itext('The Validator script will be executed in an environment where several request and server data will be available. In this environment, there are several global variables available to you that can be used to validate the request parameter, body, or even to authorize the request.');
      ie_close('p');
      ie_open('p');
        itext('The validator can be used as an integration with the Auth service:');
      ie_close('p');
      $templateAlias2({code: '{\n    "path": "/movies/*",\n    "auth": {\n        "validator": "$auth != null"\n    }\n}', mode: 'application/json'}, null, opt_ijData);
      ie_open('p');
        itext('The global variables are:');
      ie_close('p');
      ie_open('div', null, null,
          'class', 'table-container');
        ie_open('table');
          ie_open('thead');
            ie_open('tr');
              ie_open('th');
                itext('Variable');
              ie_close('th');
              ie_open('th');
                itext('Description');
              ie_close('th');
            ie_close('tr');
          ie_close('thead');
          ie_open('tbody');
            ie_open('tr');
              ie_open('td');
                itext('$auth');
              ie_close('td');
              ie_open('td');
                itext('The authenticated user of this request. If the request was not authenticated, it will be null.');
              ie_close('td');
            ie_close('tr');
            ie_open('tr');
              ie_open('td');
                itext('$config');
              ie_close('td');
              ie_open('td');
                itext('The raw JSON data stored in the service\'s config.json file.');
              ie_close('td');
            ie_close('tr');
            ie_open('tr');
              ie_open('td');
                itext('$session');
              ie_close('td');
              ie_open('td');
                itext('All stored session data. If the request had no session cookie, it will be an empty map for the new session created for this request.');
              ie_close('td');
            ie_close('tr');
            ie_open('tr');
              ie_open('td');
                itext('$params');
              ie_close('td');
              ie_open('td');
                itext('The request params as they were loaded from url query and request body. All query and form parameters will be strings here.');
              ie_close('td');
            ie_close('tr');
            ie_open('tr');
              ie_open('td');
                itext('$values');
              ie_close('td');
              ie_open('td');
                itext('The parsed request params, as they are used for parameter validation. All query and form parameters will be parsed to JSON values.');
              ie_close('td');
            ie_close('tr');
            ie_open('tr');
              ie_open('td');
                itext('$body');
              ie_close('td');
              ie_open('td');
                itext('The parsed request body, according to the request Content-Type.');
              ie_close('td');
            ie_close('tr');
            ie_open('tr');
              ie_open('td');
                itext('$data');
              ie_close('td');
              ie_open('td');
                itext('The data view for this request, if a data path is mounted in the API path, and the request path represents a key to access any data resource (collection, document or inner field from a document). It will be null otherwise.');
              ie_close('td');
            ie_close('tr');
          ie_close('tbody');
        ie_close('table');
      ie_close('div');
      ie_open('p');
        itext('Some common validators are:');
      ie_close('p');
      ie_open('ol');
        ie_open('li');
          itext('Authenticated users only:');
        ie_close('li');
        $templateAlias2({code: '$auth !== null', mode: 'xml'}, null, opt_ijData);
        ie_open('li');
          itext('Mixed with dynamic values:');
        ie_close('li');
        $templateAlias2({code: '$auth.id === $params.id', mode: 'xml'}, null, opt_ijData);
        ie_open('li');
          itext('Validate new data value agains old one:');
        ie_close('li');
        $templateAlias2({code: '$body.timestamp > $data.timestamp', mode: 'xml'}, null, opt_ijData);
        ie_open('li');
          itext('Multiple contitional validation:');
        ie_close('li');
        $templateAlias2({code: '$auth !== null && $auth.id === $params.id', mode: 'xml'}, null, opt_ijData);
      ie_close('ol');
    ie_close('article');
    ie_open('h2');
      itext('What\'s next?');
    ie_close('h2');
    ie_open('p');
      itext('Now that you have configured, you can start ');
      ie_open('a', null, null,
          'href', '/docs/data/saving-data.html');
        itext('saving data');
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
  $templateAlias1(soy.$$assignDefaults({content: param935}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'EOJoi.render';
}
