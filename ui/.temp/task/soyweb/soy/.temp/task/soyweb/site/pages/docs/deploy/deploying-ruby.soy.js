// This file was automatically generated from deploying-ruby.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace mPmNs.
 */

if (typeof mPmNs == 'undefined') { var mPmNs = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
mPmNs.render = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(guide.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<h3>Ruby</h3><h6>' + soy.$$escapeHtml(opt_data.page.description) + '</h6><article id="1"><h2>Introduction</h2><p><a href="https://www.ruby-lang.org">Ruby</a> is a dynamic, open source programming language with a focus on simplicity and productivity. It has an elegant syntax that is natural to read and easy to write.</p><p>We currently support Ruby 2.4.1.</p></article><article id="2"><h2>Try it yourself</h2><p>Want to see the process of deploying Ruby step by step?</p><div class="guide-btn-cta"><a class="btn btn-accent btn-sm" href="/tutorials/ruby" target="_blank" data-senna-off><span class="icon-16-external"></span>Try the tutorial</a></div><div class="guide-aux-cta">or see a <a href="http://boilerplate-ruby.wedeploy.io" target="_blank" data-senna-off>live demo</a>.</div></article><article id="3"><h2>Configuring</h2><aside><p>All WeDeploy projects use a consistant file structure and configuration files to deploy apps with the CLI or GitHub. Learn more on our <strong><a href="/docs/deploy/how-it-works.html">How It Works Page</a></strong>.</p></aside><p>Below is an example of a <code>wedeploy.json</code> for a Ruby container.</p>' + ElectricCode.render({code: soydata.$$markUnsanitizedTextForInternalBlocks('{\n    "id": "ruby",\n    "image": "wedeploy/ruby:beta",\n    "hooks": {\n        "build": "bundle install"\n    }\n}'), mode: 'application/json'}, null, opt_ijData) + '<p>The <code>id</code> for your services are uniquely determined by you.</p></article><h2>What\'s next?</h2><p>Now you can start building your ruby based application.</p><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.page.title) + '"><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.site.title) + '">')}), null, opt_ijData));
};
if (goog.DEBUG) {
  mPmNs.render.soyTemplateName = 'mPmNs.render';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
mPmNs.soyweb = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(base.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + mPmNs.render(opt_data, null, opt_ijData))}), null, opt_ijData));
};
if (goog.DEBUG) {
  mPmNs.soyweb.soyTemplateName = 'mPmNs.soyweb';
}
