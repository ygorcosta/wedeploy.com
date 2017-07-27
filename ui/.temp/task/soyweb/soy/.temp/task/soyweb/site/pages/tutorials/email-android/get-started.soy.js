// This file was automatically generated from get-started.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace iAzit.
 */

if (typeof iAzit == 'undefined') { var iAzit = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
iAzit.render = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(tutorial.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<h4>Get Started</h4><p>Sending emails with WeDeploy is super easy. This tutorial will walk you through how to send an email in your app using the API Client and how to deploy your project with one terminal command.</p><h6>What you\'ll need</h6><ul class="checklist"><li><a href="https://console.wedeploy.com/signup" target="_blank">A WeDeploy account</a></li><li><a href="https://developer.android.com/studio/index.html" target="_blank">Android Studio</a></li></ul><h6>What you\'ll do</h6><ul class="checklist"><li>Clone a sample Git repository</li><li>Add a configuration file</li><li>Link the API client</li><li>Deploy the project</li><li>Add the API method</li><li>Run the App</li><li>Start sending emails</li></ul><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.page.title) + '"><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.site.title) + '">')}), null, opt_ijData));
};
if (goog.DEBUG) {
  iAzit.render.soyTemplateName = 'iAzit.render';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
iAzit.soyweb = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(base.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + iAzit.render(opt_data, null, opt_ijData))}), null, opt_ijData));
};
if (goog.DEBUG) {
  iAzit.soyweb.soyTemplateName = 'iAzit.soyweb';
}
