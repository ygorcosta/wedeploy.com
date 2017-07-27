// This file was automatically generated from getting-started.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace eSQAT.
 */

if (typeof eSQAT == 'undefined') { var eSQAT = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
eSQAT.render = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(guide.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<h3>Hosting</h3><h6>' + soy.$$escapeHtml(opt_data.page.description) + '</h6><article id="1"><h2>Introduction</h2><p>Our Hosting service allows you to deliver HTML, CSS, JavaScript, or any other static files using powerful static hosting. It\'s super fast and will save you a lot of time.</p></article><article id="2"><h2>Try it yourself</h2><p>Want to see the process of deploying WeDeploy Hosting step by step?</p><div class="guide-btn-cta"><a class="btn btn-accent btn-sm" href="/tutorials/hosting" target="_blank" data-senna-off><span class="icon-16-external"></span>Try the tutorial</a></div><div class="guide-aux-cta">or see a <a href="http://boilerplate-hosting.wedeploy.io" target="_blank" data-senna-off>live demo</a>.</div></article><article id="3"><h2>Configuring</h2><aside><p>All WeDeploy projects use a consistant file structure and configuration files to deploy apps with the CLI or GitHub. Learn more on our <strong><a href="/docs/intro/how-it-works.html">How It Works Page</a></strong>.</p></aside><p>Below is an example of a <code>wedeploy.json</code> for a Hosting container.</p>' + ElectricCode.render({code: soydata.$$markUnsanitizedTextForInternalBlocks('{\n    "id": "ui",\n    "image": "wedeploy/hosting:beta"\n}'), mode: 'application/json'}, null, opt_ijData) + '<p>The <code>id</code> for your services are uniquely determined by you.</p></article><h2>What\'s next?</h2><p>Now you can learn more about <strong><a href="/docs/hosting/custom-error-pages.html">custom error pages</a></strong>.</p><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.page.title) + '"><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.site.title) + '">')}), null, opt_ijData));
};
if (goog.DEBUG) {
  eSQAT.render.soyTemplateName = 'eSQAT.render';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
eSQAT.soyweb = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(base.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + eSQAT.render(opt_data, null, opt_ijData))}), null, opt_ijData));
};
if (goog.DEBUG) {
  eSQAT.soyweb.soyTemplateName = 'eSQAT.soyweb';
}
