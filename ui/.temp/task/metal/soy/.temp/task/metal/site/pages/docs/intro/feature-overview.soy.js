// This file was automatically generated from feature-overview.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace OyLHN.
 * @public
 */

goog.module('OyLHN.incrementaldom');

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
  var param1845 = function() {
    ie_open('h3');
      var dyn101 = opt_data.page.title;
      if (typeof dyn101 == 'function') dyn101(); else if (dyn101 != null) itext(dyn101);
    ie_close('h3');
    ie_open('h6');
      var dyn102 = opt_data.page.description;
      if (typeof dyn102 == 'function') dyn102(); else if (dyn102 != null) itext(dyn102);
    ie_close('h6');
    ie_open('article', null, null,
        'id', '1');
      ie_open('h2');
        itext('Zero downtime upgrades');
      ie_close('h2');
      ie_open('p');
        itext('WeDeploy provides automation for updating services and the systems with zero downtime.');
      ie_close('p');
      ie_open('p');
        itext('WeDeploy services can all be updated with rolling, blue-green, or canary deployment patterns. If the update fails, roll it back with a single click. These powerful tools are critical for minimizing downtime and user interruption.');
      ie_close('p');
    ie_close('article');
    ie_open('article', null, null,
        'id', '2');
      ie_open('h2');
        itext('Service discovery and load balancing');
      ie_close('h2');
      ie_open('p');
        itext('WeDeploy includes several options for automating service discovery and load balancing.');
      ie_close('p');
      ie_open('p');
        itext('Distributed services create distributed problems, but you don\u2019t have to solve them all yourself. WeDeploy includes automatic DNS endpoint generation, an API for service lookup, transport layer (L4) virtual IP proxying for high speed internal communication, and application layer (L7) load balancing for external-facing services.');
      ie_close('p');
    ie_close('article');
    ie_open('article', null, null,
        'id', '3');
      ie_open('h2');
        itext('Service visibility');
      ie_close('h2');
      ie_open('p');
        itext('WeDeploy provides an option for you to specify whether your service is going to be public or private for public access.');
      ie_close('p');
    ie_close('article');
    ie_open('article', null, null,
        'id', '4');
      ie_open('h2');
        itext('High availability');
      ie_close('h2');
      ie_open('p');
        itext('WeDeploy is highly available and makes it easy for your services to be highly available too.');
      ie_close('p');
      ie_open('p');
        itext('Mission-critical services require health monitoring, self-healing, and fault tolerance both for themselves and the platform and infrastructure they run on. WeDeploy gives you multiple layers of protection.');
      ie_close('p');
      ie_open('p');
        itext('To achieve self-healing, WeDeploy services are monitored and restarted when they fail. Even legacy services that don\u2019t support distribution or replication can be automatically restarted to maximize uptime and reduce service interruption.');
      ie_close('p');
    ie_close('article');
    ie_open('article', null, null,
        'id', '5');
      ie_open('h2');
        itext('Elastic scalability');
      ie_close('h2');
      ie_open('p');
        itext('WeDeploy gives you the power to easily scale your services up and down with the turn of a dial.');
      ie_close('p');
      ie_open('p');
        itext('Horizontal scaling is trivial in Docker Swarm, as long as your service supports it. You can change the number of service instances at any time. WeDeploy even lets you autoscale the number of instances based on session count, using the WeDeploy Load Balancer.');
      ie_close('p');
    ie_close('article');
    ie_open('article', null, null,
        'id', '6');
      ie_open('h2');
        itext('User interfaces');
      ie_close('h2');
      ie_open('p');
        itext('WeDeploy offers two interfaces to make it easy to monitor and manage the projects and its services.');
      ie_close('p');
      ie_open('p');
        itext('The ');
        ie_open('strong');
          ie_open('a', null, null,
              'href', '/docs/intro/using-the-console.html');
            itext('WeDeploy Console');
          ie_close('a');
        ie_close('strong');
        itext(' lets you monitor resource allocation, running services health, and more with intuitive browser-based navigation, real-time graphs, and interactive debugging tools.');
      ie_close('p');
      ie_open('p');
        itext('The ');
        ie_open('strong');
          ie_open('a', null, null,
              'href', '/docs/intro/using-the-command-line.html');
            itext('WeDeploy Command-line Interface (CLI)');
          ie_close('a');
        ie_close('strong');
        itext(' provides you control from the comfort of a terminal. It\u2019s powerful, yet easily scriptable, with handy plugins to interact with installed projects.');
      ie_close('p');
    ie_close('article');
    ie_open('h2');
      itext('What\'s next?');
    ie_close('h2');
    ie_open('ul');
      ie_open('li');
        itext('Learn more about ');
        ie_open('a', null, null,
            'href', '/docs/intro/how-it-works.html');
          itext('how it works');
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
  $templateAlias1(soy.$$assignDefaults({content: param1845}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'OyLHN.render';
}
