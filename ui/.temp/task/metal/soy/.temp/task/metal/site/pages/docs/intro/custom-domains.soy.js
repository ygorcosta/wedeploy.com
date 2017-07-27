// This file was automatically generated from custom-domains.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace HAIvD.
 * @public
 */

goog.module('HAIvD.incrementaldom');

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
var $import1 = goog.require('guide.incrementaldom');
var $templateAlias1 = $import1.render;


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ignored, opt_ijData) {
  var param1814 = function() {
    ie_open('h3');
      var dyn97 = opt_data.page.title;
      if (typeof dyn97 == 'function') dyn97(); else if (dyn97 != null) itext(dyn97);
    ie_close('h3');
    ie_open('h6');
      var dyn98 = opt_data.page.description;
      if (typeof dyn98 == 'function') dyn98(); else if (dyn98 != null) itext(dyn98);
    ie_close('h6');
    ie_open('article', null, null,
        'id', '1');
      ie_open('h2');
        itext('Introduction');
      ie_close('h2');
      ie_open('p');
        itext('To make your app live right away, WeDeploy makes every service accessible via its service domain, but when your app moves towards production, you will most likely want to add a custom domain to beautify your websites URL. Configuring custom domains can be a tricky and complicated process, which is why we wanted to make it simple and straightforward for you.');
      ie_close('p');
    ie_close('article');
    ie_open('article', null, null,
        'id', '2');
      ie_open('h2');
        itext('Simple Setup');
      ie_close('h2');
      ie_open('p');
        itext('The easiest way to configure your custom domain, is to add one of our WeDeploy name servers. Once you point to our name server from your domain provider, you can simply add the custom domain to your service and we will do all the configuration work for you.');
      ie_close('p');
      ie_open('ol');
        ie_open('li');
          itext('Go to your domain provider and find where you can set a custom name server.');
        ie_close('li');
        ie_open('li');
          itext('Enter one of the regional WeDeploy name servers from below.');
        ie_close('li');
        ie_open('li');
          itext('Go to the service of your project, click on ');
          ie_open('em');
            itext('"Custom Domains"');
          ie_close('em');
          itext(', and add the new domain.');
        ie_close('li');
      ie_close('ol');
      ie_open('p');
        ie_open('img', null, null,
            'src', '/images/docs/intro/custom-domains--settings.png',
            'alt', 'Custom Domains');
        ie_close('img');
      ie_close('p');
      ie_open('div', null, null,
          'class', 'table-container');
        ie_open('table');
          ie_open('thead');
            ie_open('tr');
              ie_open('th');
                itext('Country');
              ie_close('th');
              ie_open('th');
                itext('Name Server');
              ie_close('th');
            ie_close('tr');
          ie_close('thead');
          ie_open('tbody');
            ie_open('tr');
              ie_open('td');
                itext('Australia');
              ie_close('td');
              ie_open('td');
                ie_open('strong');
                  itext('sydney');
                ie_close('strong');
                itext('.wedeploy.domains');
              ie_close('td');
            ie_close('tr');
            ie_open('tr');
              ie_open('td');
                itext('Germany');
              ie_close('td');
              ie_open('td');
                ie_open('strong');
                  itext('frankfurt');
                ie_close('strong');
                itext('.wedeploy.domains');
              ie_close('td');
            ie_close('tr');
            ie_open('tr');
              ie_open('td');
                itext('France');
              ie_close('td');
              ie_open('td');
                ie_open('strong');
                  itext('paris');
                ie_close('strong');
                itext('.wedeploy.domains');
              ie_close('td');
            ie_close('tr');
            ie_open('tr');
              ie_open('td');
                itext('Netherlands');
              ie_close('td');
              ie_open('td');
                ie_open('strong');
                  itext('amsterdam');
                ie_close('strong');
                itext('.wedeploy.domains');
              ie_close('td');
            ie_close('tr');
            ie_open('tr');
              ie_open('td');
                itext('Singapore');
              ie_close('td');
              ie_open('td');
                ie_open('strong');
                  itext('singapore');
                ie_close('strong');
                itext('.wedeploy.domains');
              ie_close('td');
            ie_close('tr');
            ie_open('tr');
              ie_open('td');
                itext('United Kingdom');
              ie_close('td');
              ie_open('td');
                ie_open('strong');
                  itext('london');
                ie_close('strong');
                itext('.wedeploy.domains');
              ie_close('td');
            ie_close('tr');
            ie_open('tr');
              ie_open('td');
                itext('United States');
              ie_close('td');
              ie_open('td');
                ie_open('strong');
                  itext('california');
                ie_close('strong');
                itext('.wedeploy.domains');
              ie_close('td');
            ie_close('tr');
            ie_open('tr');
              ie_open('td');
                itext('United States');
              ie_close('td');
              ie_open('td');
                ie_open('strong');
                  itext('iowa');
                ie_close('strong');
                itext('.wedeploy.domains');
              ie_close('td');
            ie_close('tr');
            ie_open('tr');
              ie_open('td');
                itext('United States');
              ie_close('td');
              ie_open('td');
                ie_open('strong');
                  itext('newyork');
                ie_close('strong');
                itext('.wedeploy.domains');
              ie_close('td');
            ie_close('tr');
          ie_close('tbody');
        ie_close('table');
      ie_close('div');
    ie_close('article');
    ie_open('article', null, null,
        'id', '3');
      ie_open('h2');
        itext('Adding Subdomains');
      ie_close('h2');
      ie_open('p');
        itext('Now that you have your root domain setup, you may want to add a subdomain like ');
        ie_open('em');
          itext('www.myapp.com');
        ie_close('em');
        itext('. This is very simple and can by done by configuring the CNAME on your domain provider.');
      ie_close('p');
      ie_open('div', null, null,
          'class', 'table-container');
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
                itext('CNAME');
              ie_close('td');
              ie_open('td');
                itext('www.mydomain.com');
              ie_close('td');
              ie_open('td');
                itext('ui-myapp.wedeploy.io.');
              ie_close('td');
            ie_close('tr');
            ie_open('tr');
              ie_open('td');
                itext('CNAME');
              ie_close('td');
              ie_open('td');
                itext('api.mydomain.com');
              ie_close('td');
              ie_open('td');
                itext('db-myapp.wedeploy.io.');
              ie_close('td');
            ie_close('tr');
          ie_close('tbody');
        ie_close('table');
      ie_close('div');
    ie_close('article');
    ie_open('article', null, null,
        'id', '4');
      ie_open('h2');
        itext('Advanced Configuration');
      ie_close('h2');
      ie_open('p');
        itext('What if you want to configure the DNS yourself? No problem, that is a simple process as well. Instead of using a name server to route your project, you can simply add an apex domain as an CNAME.');
      ie_close('p');
      ie_open('div', null, null,
          'class', 'table-container');
        ie_open('table');
          ie_open('thead');
            ie_open('tr');
              ie_open('th');
                itext('NAME');
              ie_close('th');
              ie_open('th');
                itext('TYPE');
              ie_close('th');
              ie_open('th');
                itext('DATA');
              ie_close('th');
            ie_close('tr');
          ie_close('thead');
          ie_open('tbody');
            ie_open('tr');
              ie_open('td');
                itext('empty');
              ie_close('td');
              ie_open('td');
                itext('CNAME');
              ie_close('td');
              ie_open('td');
                itext('ui-myapp.wedeploy.io.');
              ie_close('td');
            ie_close('tr');
          ie_close('tbody');
        ie_close('table');
      ie_close('div');
      ie_open('aside');
        ie_open('h6');
          ie_void('span', null, null,
              'class', 'icon-16-alert');
          itext(' Attention');
        ie_close('h6');
        ie_open('p');
          itext('This method is only available for domain providers that allow CNAME configuration for root domains.');
        ie_close('p');
      ie_close('aside');
    ie_close('article');
    ie_open('h2');
      itext('What\'s next?');
    ie_close('h2');
    ie_open('ul');
      ie_open('li');
        itext('Learn more about using ');
        ie_open('a', null, null,
            'href', '/docs/intro/environment-variables.html');
          itext('environment variables');
        ie_close('a');
        itext('.');
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
  $templateAlias1(soy.$$assignDefaults({content: param1814}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'HAIvD.render';
}
