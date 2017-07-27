/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from environment-variables.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace hKsxY.
 * @public
 */

goog.module('hKsxY.incrementaldom');

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
  var param1827 = function() {
    ie_open('h3');
      var dyn99 = opt_data.page.title;
      if (typeof dyn99 == 'function') dyn99(); else if (dyn99 != null) itext(dyn99);
    ie_close('h3');
    ie_open('h6');
      var dyn100 = opt_data.page.description;
      if (typeof dyn100 == 'function') dyn100(); else if (dyn100 != null) itext(dyn100);
    ie_close('h6');
    ie_open('article', null, null,
        'id', '1');
      ie_open('h2');
        itext('Introduction');
      ie_close('h2');
      ie_open('p');
        itext('Environment variables are a set of dynamic placeholders that can affect the way a certain service will behave. They are dynamic because they can change according to your needs.');
      ie_close('p');
      ie_open('p');
        itext('A good example would be credentials for a database, where each environment has its own values. The ideal solution for handling this scenario, would be using environment variables, in order to set up different configurations for different environments using the same code.');
      ie_close('p');
      ie_open('p');
        itext('WeDeploy can help you configure environment variables in two ways, you can either ');
        ie_open('a', null, null,
            'href', '#2');
          itext('use the Console');
        ie_close('a');
        itext(' or ');
        ie_open('a', null, null,
            'href', '#3');
          itext('use the wedeploy.json');
        ie_close('a');
        itext(' file.');
      ie_close('p');
    ie_close('article');
    ie_open('article', null, null,
        'id', '2');
      ie_open('h2');
        itext('Using the Console');
      ie_close('h2');
      ie_open('ol');
        ie_open('li');
          itext('Go to the specific service page.');
        ie_close('li');
        ie_open('li');
          itext('Click on ');
          ie_open('em');
            itext('"Environment"');
          ie_close('em');
          itext('.');
        ie_close('li');
        ie_open('li');
          itext('Add your keys and values.');
        ie_close('li');
        ie_open('li');
          itext('Click on ');
          ie_open('em');
            itext('"Update Environment"');
          ie_close('em');
          itext('.');
        ie_close('li');
      ie_close('ol');
      ie_open('p');
        ie_open('img', null, null,
            'src', '/images/docs/intro/environment-variables.png',
            'alt', 'Using the Console');
        ie_close('img');
      ie_close('p');
      ie_open('p');
        itext('This will restart your service with the new environment variables.');
      ie_close('p');
      ie_open('aside');
        ie_open('h6');
          ie_void('span', null, null,
              'class', 'icon-16-alert');
          itext(' Attention');
        ie_close('h6');
        ie_open('p');
          itext('If you create or update a variable on the Console, this will not automatically reflect on ');
          ie_open('code');
            itext('wedeploy.json');
          ie_close('code');
          itext('. So make sure you also update your local file if you need both environments in sync.');
        ie_close('p');
      ie_close('aside');
    ie_close('article');
    ie_open('article', null, null,
        'id', '3');
      ie_open('h2');
        itext('Using wedeploy.json');
      ie_close('h2');
      ie_open('p');
        itext('You can also define environment variables directly on your code repository by using the ');
        ie_open('code');
          itext('wedeploy.json');
        ie_close('code');
        itext(' files like this:');
      ie_close('p');
      $templateAlias2({code: '{\n    "id": "myservice",\n    "env": {\n        "DATABASE_USER": "root",\n        "DATABASE_PASSWORD": "test"\n    }\n}', mode: 'application/json'}, null, opt_ijData);
      ie_open('aside');
        ie_open('h6');
          ie_void('span', null, null,
              'class', 'icon-16-alert');
          itext(' Attention');
        ie_close('h6');
        ie_open('p');
          itext('All environment variables specified on ');
          ie_open('code');
            itext('wedeploy.json');
          ie_close('code');
          itext(' will be created or updated on the Console. If there are variables specified only on Console, they will remain the same.');
        ie_close('p');
      ie_close('aside');
    ie_close('article');
    ie_open('h2');
      itext('What\'s next?');
    ie_close('h2');
    ie_open('p');
      itext('Some WeDeploy services have pre-defined environment variables, you can learn more about it by visiting them individually:');
    ie_close('p');
    ie_open('ul');
      ie_open('li');
        ie_open('a', null, null,
            'href', '/docs/auth/environment-variables.html');
          ie_open('strong');
            itext('Auth Environment Variables');
          ie_close('strong');
        ie_close('a');
      ie_close('li');
      ie_open('li');
        ie_open('a', null, null,
            'href', '/docs/email/environment-variables.html');
          ie_open('strong');
            itext('Email Environment Variables');
          ie_close('strong');
        ie_close('a');
      ie_close('li');
      ie_open('li');
        ie_open('a', null, null,
            'href', '/docs/hosting/environment-variables.html');
          ie_open('strong');
            itext('Hosting Environment Variables');
          ie_close('strong');
        ie_close('a');
      ie_close('li');
    ie_close('ul');
    ie_open('input', null, null,
        'type', 'hidden',
        'value', opt_data.page.title);
    ie_close('input');
    ie_open('input', null, null,
        'type', 'hidden',
        'value', opt_data.site.title);
    ie_close('input');
  };
  $templateAlias1(soy.$$assignDefaults({content: param1827}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'hKsxY.render';
}

exports.render.params = ["page","site"];
exports.render.types = {"page":"any","site":"any"};
templates = exports;
return exports;

});

class hKsxY extends Component {}
Soy.register(hKsxY, templates);
export { hKsxY, templates };
export default templates;
/* jshint ignore:end */
