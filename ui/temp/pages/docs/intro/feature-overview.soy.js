/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from feature-overview.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace docsIntroFeatureOverviewHtml.
 * @public
 */

goog.module('docsIntroFeatureOverviewHtml.incrementaldom');

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
  var param963 = function() {
    ie_open('h1');
      itext('Feature Overview');
    ie_close('h1');
    ie_open('h6');
      itext('This is an overview of the features that make WeDeploy easiest way to deploy and scale applications.');
    ie_close('h6');
    ie_open('article', null, null,
        'id', 'article_1');
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
        'id', 'article_2');
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
        'id', 'article_3');
      ie_open('h2');
        itext('Service visibility');
      ie_close('h2');
      ie_open('p');
        itext('WeDeploy provides an option for you to specify whether your service is going to be public or private for public access.');
      ie_close('p');
    ie_close('article');
    ie_open('article', null, null,
        'id', 'article_4');
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
        'id', 'article_5');
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
        'id', 'article_6');
      ie_open('h2');
        itext('User interfaces');
      ie_close('h2');
      ie_open('p');
        itext('WeDeploy offers two interfaces to make it easy to monitor and manage the projects and its services.');
      ie_close('p');
      ie_open('p');
        itext('The ');
        ie_open('strong');
          itext('WeDeploy Dashboard');
        ie_close('strong');
        itext(' lets you monitor resource allocation, running services health, and more with intuitive browser-based navigation, real-time graphs, and interactive debugging tools.');
      ie_close('p');
      ie_open('p');
        itext('The ');
        ie_open('strong');
          itext('WeDeploy Command-line Interface (CLI)');
        ie_close('strong');
        itext(' provides you control from the comfort of a terminal. It\u2019s powerful, yet easily scriptable, with handy plugins to interact with installed projects.');
      ie_close('p');
    ie_close('article');
  };
  $templateAlias1(soy.$$assignDefaults({content: param963}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'docsIntroFeatureOverviewHtml.render';
}

exports.render.params = [];
exports.render.types = {};
templates = exports;
return exports;

});

class docsIntroFeatureOverviewHtml extends Component {}
Soy.register(docsIntroFeatureOverviewHtml, templates);
export { docsIntroFeatureOverviewHtml, templates };
export default templates;
/* jshint ignore:end */
