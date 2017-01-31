/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from custom-domains.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace docsIntroCustomDomainsHtml.
 * @public
 */

goog.module('docsIntroCustomDomainsHtml.incrementaldom');

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
  var param953 = function() {
    ie_open('h1');
      itext('Custom Domains');
    ie_close('h1');
    ie_open('h6');
      itext('This is an overview of how WeDeploy manages custom domains for your projects.');
    ie_close('h6');
    ie_open('article', null, null,
        'id', 'article_1');
      ie_open('h2');
        itext('Introduction');
      ie_close('h2');
      ie_open('p');
        itext('To make your app accessible right away, WeDeploy makes any project accessible via its project domain, which looks like ');
        ie_open('code');
          itext('<serviceID>.<projectID>.wedeploy.io');
        ie_close('code');
        itext('. If you have a project named ');
        ie_open('code');
          itext('project');
        ie_close('code');
        itext(' with a service named ');
        ie_open('code');
          itext('web');
        ie_close('code');
        itext(', the WeDeploy project domain would be ');
        ie_open('code');
          itext('web.project.wedeploy.io');
        ie_close('code');
        itext('. Every project in WeDeploy supports one or more custom domains.');
      ie_close('p');
    ie_close('article');
    ie_open('article', null, null,
        'id', 'article_2');
      ie_open('h2');
        itext('Configuring custom domains');
      ie_close('h2');
      ie_open('p');
        itext('WeDeploy can help you to configure your own custom domain, like ');
        ie_open('code');
          itext('http://mydomain.com');
        ie_close('code');
        itext(' or ');
        ie_open('code');
          itext('http://www.mydomain.com');
        ie_close('code');
        itext('. To make a project accessible via one or more non-WeDeploy domain names, you must add custom domain(s) to your project configuration as described below:');
      ie_close('p');
      ie_open('ol');
        ie_open('li');
          itext('After create a project on the ');
          ie_open('a', null, null,
              'href', 'http://dashboard.wedeploy.com');
            itext('dashboard');
          ie_close('a');
          itext('. Go to the project settings page.');
        ie_close('li');
        ie_open('li');
          itext('On custom domain session, add the custom domains related to the project.');
        ie_close('li');
        ie_open('li');
          itext('Click in Update Project.');
        ie_close('li');
        ie_open('li');
          itext('Update the domain DNS to point to the project WeDeploy domain (');
          ie_open('code');
            itext('<projectID>.wedeploy.io');
          ie_close('code');
          itext(').');
        ie_close('li');
      ie_close('ol');
      ie_open('p');
        ie_open('img', null, null,
            'src', 'https://cloud.githubusercontent.com/assets/301291/19607402/73aca3b6-977e-11e6-82d6-e3374d3aa6ed.png',
            'alt', 'settings');
        ie_close('img');
      ie_close('p');
    ie_close('article');
    ie_open('article', null, null,
        'id', 'article_3');
      ie_open('h2');
        itext('Configuring DNS for root domains');
      ie_close('h2');
      ie_open('p');
        itext('A root domain is the highest level of hierarchy for the website you control, ex: ');
        ie_open('code');
          itext('mydomain.com');
        ie_close('code');
        itext('. When you register a domain name, you are registering a root domain. This means you have the access to create subdomains and file structures all branching from that root domain.');
      ie_close('p');
      ie_open('p');
        itext('If your DNS provider allows you to either use CNAME or ALIAS records for root domains, you just need to point the CNAME/ALIAS entry for your root domain as described below:');
      ie_close('p');
      ie_open('table');
        ie_open('thead');
          ie_open('tr');
            ie_open('th');
              itext('Record');
            ie_close('th');
            ie_open('th');
              itext('Name');
            ie_close('th');
            ie_open('th');
              itext('Project Target Domain');
            ie_close('th');
          ie_close('tr');
        ie_close('thead');
        ie_open('tbody');
          ie_open('tr');
            ie_open('td');
              ie_open('code');
                itext('ALIAS');
              ie_close('code');
              itext(' or ');
              ie_open('code');
                itext('CNAME');
              ie_close('code');
            ie_close('td');
            ie_open('td');
              ie_open('code');
                itext('<empty>');
              ie_close('code');
              itext(' or ');
              ie_open('code');
                itext('@');
              ie_close('code');
            ie_close('td');
            ie_open('td');
              itext('project1.wedeploy.io.');
            ie_close('td');
          ie_close('tr');
        ie_close('tbody');
      ie_close('table');
      ie_open('p');
        itext('In many DNS Providers, you are only allowed to use Address Records (A) for your root domain. In that case, you can use the static IP provided by WeDeploy as the target for the Address Record (A):');
      ie_close('p');
      ie_open('table');
        ie_open('thead');
          ie_open('tr');
            ie_open('th');
              itext('Record');
            ie_close('th');
            ie_open('th');
              itext('Name');
            ie_close('th');
            ie_open('th');
              itext('Project Target Domain');
            ie_close('th');
          ie_close('tr');
        ie_close('thead');
        ie_open('tbody');
          ie_open('tr');
            ie_open('td');
              ie_open('code');
                itext('A');
              ie_close('code');
            ie_close('td');
            ie_open('td');
              ie_open('code');
                itext('<empty>');
              ie_close('code');
              itext(' or ');
              ie_open('code');
                itext('@');
              ie_close('code');
            ie_close('td');
            ie_open('td');
              ie_open('code');
                itext('173.196.61.238');
              ie_close('code');
            ie_close('td');
          ie_close('tr');
        ie_close('tbody');
      ie_close('table');
    ie_close('article');
    ie_open('article', null, null,
        'id', 'article_4');
      ie_open('h2');
        itext('Configuring DNS for subdomains');
      ie_close('h2');
      ie_open('p');
        itext('After configuring the custom domains on the Project Settings, you must point your DNS record to the project WeDeploy domain. You can configure your subdomain as a new CNAME record with your DNS provider. If you\'re not sure about how to configure CNAME records for subdomains, visit your DNS provider\'s documentation page.');
      ie_close('p');
      ie_open('table');
        ie_open('thead');
          ie_open('tr');
            ie_open('th');
              itext('Record');
            ie_close('th');
            ie_open('th');
              itext('Subdomain');
            ie_close('th');
            ie_open('th');
              itext('Project Target Domain');
            ie_close('th');
          ie_close('tr');
        ie_close('thead');
        ie_open('tbody');
          ie_open('tr');
            ie_open('td');
              ie_open('code');
                itext('CNAME');
              ie_close('code');
            ie_close('td');
            ie_open('td');
              ie_open('strong');
                itext('www');
              ie_close('strong');
              itext('.mydomain.com');
            ie_close('td');
            ie_open('td');
              itext('project1.wedeploy.io.');
            ie_close('td');
          ie_close('tr');
        ie_close('tbody');
      ie_close('table');
    ie_close('article');
    ie_open('article', null, null,
        'id', 'article_5');
      ie_open('h2');
        itext('Configuring DNS for wildcard domain');
      ie_close('h2');
      ie_open('p');
        itext('WeDeploy automatically creates a subdomain for each service. Since you typically will have multiple services inside a project, you will either need multiple records, or a single wildcard record. A wildcard record allows you to map all subdomains to your WeDeploy project with a single record.');
      ie_close('p');
      ie_open('table');
        ie_open('thead');
          ie_open('tr');
            ie_open('th');
              itext('Record');
            ie_close('th');
            ie_open('th');
              itext('Subdomain');
            ie_close('th');
            ie_open('th');
              itext('Project Target Domain');
            ie_close('th');
          ie_close('tr');
        ie_close('thead');
        ie_open('tbody');
          ie_open('tr');
            ie_open('td');
              ie_open('code');
                itext('CNAME');
              ie_close('code');
            ie_close('td');
            ie_open('td');
              itext('*.mydomain.com');
            ie_close('td');
            ie_open('td');
              itext('project1.wedeploy.io.');
            ie_close('td');
          ie_close('tr');
        ie_close('tbody');
      ie_close('table');
      ie_open('p');
        ie_open('br');
        ie_close('br');
      ie_close('p');
      ie_open('p');
        itext('Result:');
      ie_close('p');
      ie_open('p');
        ie_open('br');
        ie_close('br');
      ie_close('p');
      ie_open('table');
        ie_open('thead');
          ie_open('tr');
            ie_open('th');
              itext('WeDeploy Domain');
            ie_close('th');
            ie_open('th');
              itext('Custom Domain');
            ie_close('th');
          ie_close('tr');
        ie_close('thead');
        ie_open('tbody');
          ie_open('tr');
            ie_open('td');
              itext('service1.project.wedeploy.io');
            ie_close('td');
            ie_open('td');
              itext('service1.mydomain.com');
            ie_close('td');
          ie_close('tr');
          ie_open('tr');
            ie_open('td');
              itext('service2.project.wedeploy.io');
            ie_close('td');
            ie_open('td');
              itext('service2.mydomain.com');
            ie_close('td');
          ie_close('tr');
          ie_open('tr');
            ie_open('td');
              itext('service3.project.wedeploy.io');
            ie_close('td');
            ie_open('td');
              itext('service3.mydomain.com');
            ie_close('td');
          ie_close('tr');
          ie_open('tr');
            ie_open('td');
              itext('service4.project.wedeploy.io');
            ie_close('td');
            ie_open('td');
              itext('service4.mydomain.com');
            ie_close('td');
          ie_close('tr');
        ie_close('tbody');
      ie_close('table');
    ie_close('article');
  };
  $templateAlias1(soy.$$assignDefaults({content: param953}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'docsIntroCustomDomainsHtml.render';
}

exports.render.params = [];
exports.render.types = {};
templates = exports;
return exports;

});

class docsIntroCustomDomainsHtml extends Component {}
Soy.register(docsIntroCustomDomainsHtml, templates);
export { docsIntroCustomDomainsHtml, templates };
export default templates;
/* jshint ignore:end */
