/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from how-it-works.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace RjAGI.
 * @public
 */

goog.module('RjAGI.incrementaldom');

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
  var param1559 = function() {
    ie_open('h1');
      var dyn79 = opt_data.page.title;
      if (typeof dyn79 == 'function') dyn79(); else if (dyn79 != null) itext(dyn79);
    ie_close('h1');
    ie_open('h6');
      var dyn80 = opt_data.page.description;
      if (typeof dyn80 == 'function') dyn80(); else if (dyn80 != null) itext(dyn80);
    ie_close('h6');
    ie_open('article', null, null,
        'id', '1');
      ie_open('h2');
        itext('Introduction');
      ie_close('h2');
      ie_open('p');
        itext('There are basically two ways to deploy an app. You can use the command line for ');
        ie_open('a', null, null,
            'href', '/docs/deploy/instant-deployment.html');
          itext('instant deployment');
        ie_close('a');
        itext(' or you can integrate with GitHub for ');
        ie_open('a', null, null,
            'href', '/docs/deploy/continuous-deployment.html');
          itext('continuous deployment');
        ie_close('a');
        itext('.');
      ie_close('p');
      ie_open('p');
        itext('Both options give you a lot of power and flexibility, but there\'s another important concept that needs to be explained and that\'s our build step. When you send a bunch of files to WeDeploy we need to scan and detect what you would like to build. Maybe you want to run them with Java or maybe you just want to serve them as a static hosting.');
      ie_close('p');
    ie_close('article');
    ie_open('article', null, null,
        'id', '2');
      ie_open('h2');
        itext('Automatic build detection');
      ie_close('h2');
      ie_open('p');
        itext('The last thing any developer wants is to add a new tool that forces them to alter their workflow. This is why we\'ve worked hard to build WeDeploy so it can fit right into your regular way of working and fill the gaps needed to take your development to the next level.');
      ie_close('p');
      ie_open('p');
        itext('WeDeploy tries to determine what language your project uses. It then takes the matching buildpack to install dependencies, compile the code and run the application. WeDeploy comes with a number of pre-configured buildpacks for languages like Java, Ruby, Node.js and so on.');
      ie_close('p');
      ie_open('p');
        itext('On deploy, the platform will detect the programming language and build & run the application.');
      ie_close('p');
    ie_close('article');
    ie_open('article', null, null,
        'id', '3');
      ie_open('h2');
        itext('Manually set a build');
      ie_close('h2');
      ie_open('p');
        itext('When you push your local repo to your WeDeploy project, we scan it for ');
        ie_open('code');
          itext('wedeploy.json');
        ie_close('code');
        itext(' files, which specify the ID of your services as well as which service containers you are deciding to use. When we find a ');
        ie_open('code');
          itext('wedeploy.json');
        ie_close('code');
        itext(', we serve that whole directory as a part of the service you defined within.');
      ie_close('p');
      ie_open('p');
        itext('For example, let\'s say you have a folder named ');
        ie_open('code');
          itext('my-project');
        ie_close('code');
        itext(' that uses the Hosting, Data, and Email services. This is what your project\'s file structure could look like:');
      ie_close('p');
      $templateAlias2({code: 'my-project\n\u251C\u2500\u2500 data\n\u2502   \u251C\u2500\u2500 api.json\n\u2502   \u2514\u2500\u2500 wedeploy.json\n\u251C\u2500\u2500 email\n\u2502   \u2514\u2500\u2500 wedeploy.json\n\u2514\u2500\u2500 hosting\n    \u251C\u2500\u2500 wedeploy.json\n    \u251C\u2500\u2500 index.html\n    \u2514\u2500\u2500 main.css', mode: 'text'}, null, opt_ijData);
      ie_open('p');
        itext('The ');
        ie_open('code');
          itext('wedeploy.json');
        ie_close('code');
        itext(' file is a JSON file defining the service attributes and configurations. The default path for a ');
        ie_open('code');
          itext('wedeploy.json');
        ie_close('code');
        itext(' is ');
        ie_open('code');
          itext('./<service_folder>/wedeploy.json');
        ie_close('code');
        itext('.');
      ie_close('p');
      ie_open('p');
        itext('WeDeploy uses this json file to reference a service by ID in case it\'s already created. If a service with a matching ID does not exist, it creates a new service for you.');
      ie_close('p');
      ie_open('p');
        ie_open('strong');
          itext('Reference:');
        ie_close('strong');
      ie_close('p');
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
              itext('id');
            ie_close('td');
            ie_open('td');
              itext('Unique service ID.');
            ie_close('td');
          ie_close('tr');
          ie_open('tr');
            ie_open('td');
              itext('image');
            ie_close('td');
            ie_open('td');
              itext('Service stack/image type.');
            ie_close('td');
          ie_close('tr');
          ie_open('tr');
            ie_open('td');
              itext('env');
            ie_close('td');
            ie_open('td');
              itext('Environment variables to be exported in the service lifecycle.');
            ie_close('td');
          ie_close('tr');
        ie_close('tbody');
      ie_close('table');
      ie_open('p');
        ie_open('strong');
          itext('Usage:');
        ie_close('strong');
      ie_close('p');
      $templateAlias2({code: '{\n    "id": "conqueror",\n    "image": "wedeploy/java",\n    "description": "WeDeploy Service Example",\n    "hooks": {\n        "build": "./gradlew clean build installDist -x test"\n    },\n    "env": {\n        "WEDEPLOY_USER": "user"\n    }\n}', mode: 'application/json'}, null, opt_ijData);
    ie_close('article');
    ie_open('article', null, null,
        'id', '4');
      ie_open('h2');
        itext('Try it yourself');
      ie_close('h2');
      ie_open('p');
        itext('We have created a whole array of tutorials to teach you how to start using WeDeploy. Click on one of the links below that interests you and begin your journey towards deployment!');
      ie_close('p');
      ie_open('ul');
        ie_open('li');
          ie_open('strong');
            ie_open('a', null, null,
                'data-senna-off', '',
                'target', '_blank',
                'href', '/tutorials/hosting/');
              itext('Hosting');
            ie_close('a');
          ie_close('strong');
          itext(': Deploy static files like HTML, CSS, and JS.');
        ie_close('li');
        ie_open('li');
          ie_open('strong');
            ie_open('a', null, null,
                'data-senna-off', '',
                'target', '_blank',
                'href', '/tutorials/data-web/');
              itext('Data');
            ie_close('a');
          ie_close('strong');
          itext(': Deploy a to-do list app using our Data Service and JS.');
        ie_close('li');
        ie_open('li');
          ie_open('strong');
            ie_open('a', null, null,
                'data-senna-off', '',
                'target', '_blank',
                'href', '/tutorials/auth-web/');
              itext('Auth');
            ie_close('a');
          ie_close('strong');
          itext(': Deploy an authentication app using our Auth Service and JS.');
        ie_close('li');
        ie_open('li');
          ie_open('strong');
            ie_open('a', null, null,
                'data-senna-off', '',
                'target', '_blank',
                'href', '/tutorials/email-web/');
              itext('Email');
            ie_close('a');
          ie_close('strong');
          itext(': Deploy an email-sending app using our Email Service and JS.');
        ie_close('li');
        ie_open('li');
          ie_open('strong');
            ie_open('a', null, null,
                'data-senna-off', '',
                'target', '_blank',
                'href', '/tutorials/java/');
              itext('Java');
            ie_close('a');
          ie_close('strong');
          itext(': Deploy an app using Java and Spring Boot.');
        ie_close('li');
        ie_open('li');
          ie_open('strong');
            ie_open('a', null, null,
                'data-senna-off', '',
                'target', '_blank',
                'href', '/tutorials/ruby/');
              itext('Ruby');
            ie_close('a');
          ie_close('strong');
          itext(': Deploy an app using Ruby and Sinatra.');
        ie_close('li');
        ie_open('li');
          ie_open('strong');
            ie_open('a', null, null,
                'data-senna-off', '',
                'target', '_blank',
                'href', '/tutorials/nodejs/');
              itext('Node.js');
            ie_close('a');
          ie_close('strong');
          itext(': Deploy an app using Node.js and Express.');
        ie_close('li');
        ie_open('li');
          ie_open('strong');
            ie_open('a', null, null,
                'data-senna-off', '',
                'target', '_blank',
                'href', '/tutorials/liferay/');
              itext('Liferay');
            ie_close('a');
          ie_close('strong');
          itext(': Deploy a Liferay Portal instance.');
        ie_close('li');
        ie_open('li');
          ie_open('strong');
            ie_open('a', null, null,
                'data-senna-off', '',
                'target', '_blank',
                'href', '/tutorials/docker/');
              itext('Docker');
            ie_close('a');
          ie_close('strong');
          itext(': Deploy a Docker container.');
        ie_close('li');
      ie_close('ul');
    ie_close('article');
    ie_open('input', null, null,
        'type', 'hidden',
        'value', opt_data.page.title);
    ie_close('input');
    ie_open('input', null, null,
        'type', 'hidden',
        'value', opt_data.site.title);
    ie_close('input');
  };
  $templateAlias1(soy.$$assignDefaults({content: param1559}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'RjAGI.render';
}

exports.render.params = ["page","site"];
exports.render.types = {"page":"any","site":"any"};
templates = exports;
return exports;

});

class RjAGI extends Component {}
Soy.register(RjAGI, templates);
export { RjAGI, templates };
export default templates;
/* jshint ignore:end */
