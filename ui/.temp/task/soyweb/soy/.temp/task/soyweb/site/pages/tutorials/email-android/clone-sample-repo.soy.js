// This file was automatically generated from clone-sample-repo.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace VLPWh.
 */

if (typeof VLPWh == 'undefined') { var VLPWh = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
VLPWh.render = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(tutorial.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<h4>Clone Sample Repo</h4><p>First, you\'ll clone a sample repo that contains the necessary files and directories for deploying a site with Email and for creating an app that make use of those services.</p><p>Run this command in your terminal:</p>' + ElectricCode.render({code: soydata.$$markUnsanitizedTextForInternalBlocks('git clone https://github.com/wedeploy/tutorial-email-android.git'), mode: 'text'}, null, opt_ijData) + '<p>This project contains a folder named <code>app</code> that we will use to learn how to use the WeDeploy API client. This folder is not used by the WeDeploy infrastructure but we have it here to make the example simpler by not using two different repos (one for WeDeploy project and one for the app).</p><aside><h6><span class="icon-16-star"></span> Pro Tip</h6><p>Building an app with multiple services is very easy with WeDeploy. Every directory that contains a <code>wedeploy.json</code> will be treated as a separate service. If a specific image type is not detected, we will scan the conents of the directory and deploy the service that is most like your source code (<code>package.json</code> = Node.js, <code>Dockerfile</code> = Custom Docker Image, <code>index.html</code> = static hosting).</p>' + ElectricCode.render({code: soydata.$$markUnsanitizedTextForInternalBlocks('yourApp\n\u251C\u2500\u2500 auth\n\u2502   \u2514\u2500\u2500 wedeploy.json\n\u251C\u2500\u2500 db\n\u2502   \u2514\u2500\u2500 wedeploy.json\n\u2514\u2500\u2500 Docker\n    \u251C\u2500\u2500 wedeploy.json\n    \u2514\u2500\u2500 Dockerfile'), mode: 'xml'}, null, opt_ijData) + '</aside><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.page.title) + '"><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.site.title) + '">')}), null, opt_ijData));
};
if (goog.DEBUG) {
  VLPWh.render.soyTemplateName = 'VLPWh.render';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
VLPWh.soyweb = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(base.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + VLPWh.render(opt_data, null, opt_ijData))}), null, opt_ijData));
};
if (goog.DEBUG) {
  VLPWh.soyweb.soyTemplateName = 'VLPWh.soyweb';
}
