// This file was automatically generated from getting-started.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace IitOo.
 */

if (typeof IitOo == 'undefined') { var IitOo = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
IitOo.render = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(guide.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<h3>Email</h3><h6>' + soy.$$escapeHtml(opt_data.page.description) + '</h6><article id="1"><h2>Introduction</h2><p>Our Email service enables you to send customized emails to your users and check on their status with just a few lines of code.</p></article><article id="2"><h2>Try it yourself</h2><p>Want to see the process of deploying WeDeploy Email step by step?</p><div class="guide-btn-cta"><a class="btn btn-accent btn-sm" href="/tutorials/email-web" target="_blank" data-senna-off><span class="icon-16-external"></span>Try the tutorial</a></div><div class="guide-aux-cta">or see a <a href="http://boilerplate-email.wedeploy.io" target="_blank" data-senna-off>live demo</a>.</div></article><article id="3"><h2>Configuring</h2><aside><p>All WeDeploy projects use a consistant file structure and configuration files to deploy apps with the CLI or GitHub. Learn more on our <strong><a href="/docs/intro/how-it-works.html">How It Works Page</a></strong>.</p></aside><p>Below is an example of a <code>wedeploy.json</code> for an Email container.</p>' + ElectricCode.render({code: soydata.$$markUnsanitizedTextForInternalBlocks('{\n    "id": "mail",\n    "image": "wedeploy/email:beta"\n}'), mode: 'application/json'}, null, opt_ijData) + '<p>The <code>id</code> for your services are uniquely determined by you.</p></article><h2>What\'s next?</h2><p>Now you can learn more about <a href="/docs/email/sending-email.html">sending emails to our users</a>.</p><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.page.title) + '"><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.site.title) + '">')}), null, opt_ijData));
};
if (goog.DEBUG) {
  IitOo.render.soyTemplateName = 'IitOo.render';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
IitOo.soyweb = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(base.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + IitOo.render(opt_data, null, opt_ijData))}), null, opt_ijData));
};
if (goog.DEBUG) {
  IitOo.soyweb.soyTemplateName = 'IitOo.soyweb';
}
