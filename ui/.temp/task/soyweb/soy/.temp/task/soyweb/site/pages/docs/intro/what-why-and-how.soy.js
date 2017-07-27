// This file was automatically generated from what-why-and-how.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace JWNlQ.
 */

if (typeof JWNlQ == 'undefined') { var JWNlQ = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
JWNlQ.render = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(guide.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<h3>' + soy.$$escapeHtml(opt_data.page.title) + '</h3><h6>' + soy.$$escapeHtml(opt_data.page.description) + '</h6><article id="1"><h2>What is WeDeploy?</h2><p>WeDeploy is <em>deployment platform</em> that gives you access to intuitive APIs that can help you create modern apps faster.</p><p>From simple applications to full microservice architectures, launch your production-ready environments in a matter of minutes without having to change your stack.</p><p>We also know it\'s not just about getting your app live quickly, but also about effectively meeting user demands with minimal development overhead. This is why we provide many features that allow you to quickly and efficiently respond to the needs of your users.</p><ul><li>Deploy and configure your cloud app from your command line</li><li>Automatically distribute incoming traffic across multiple instances.</li><li>Authenticate users with only a few lines of code.</li><li>Store data securely and consume information in real-time.</li><li>Release applications with zero downtime.</li><li>Build and deploy custom microservices.</li></ul></article><article id="2"><h2>Why should I use it?</h2><p>When building highly scalable applications there are many things you need to consider like performance bottlenecks, database resilience and scalability, authorization, and user authentication. Because of this, WeDeploy was built to become a deployment platform that handles all of your back-end challenges in one place.</p><p>Focus on creating amazing user experiences and WeDeploy will take care of the rest.</p></article><article id="3"><h2>How will it help me?</h2><p>From a solo project to a full project team application, WeDeploy will provide the tools to manage the visibility, scale, and DNS for your application. WeDeploy provides an infrastructure to deploy microservices in a managed cloud infrastructure.</p><p>Whether you use Node.js, PHP, Java, Wordpress, or even just HTML, CSS, and JavaScript, we provide an unopinionated deployment flow so you can use the stack you are already comfortable with. To do this, we utlilize the diversity of Docker</p></article><h2>What\'s next?</h2><ul><li>Learn more about <a href="/docs/intro/feature-overview.html">all we offer</a>.</li></ul><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.page.title) + '"><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.site.title) + '">')}), null, opt_ijData));
};
if (goog.DEBUG) {
  JWNlQ.render.soyTemplateName = 'JWNlQ.render';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
JWNlQ.soyweb = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(base.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + JWNlQ.render(opt_data, null, opt_ijData))}), null, opt_ijData));
};
if (goog.DEBUG) {
  JWNlQ.soyweb.soyTemplateName = 'JWNlQ.soyweb';
}
