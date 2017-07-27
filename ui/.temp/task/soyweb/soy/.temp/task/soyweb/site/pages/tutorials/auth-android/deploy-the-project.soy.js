// This file was automatically generated from deploy-the-project.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace GajTN.
 */

if (typeof GajTN == 'undefined') { var GajTN = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
GajTN.render = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(tutorial.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<h4>Deploy the Project</h4><p>Now the moment you have been waiting for - deployment!</p><p>Go to <code>tutorial-auth-android</code> in your terminal and deploy your project:</p>' + ElectricCode.render({code: soydata.$$markUnsanitizedTextForInternalBlocks('we deploy --project projectID'), mode: 'xml'}, null, opt_ijData) + '<p><strong>Note:</strong> make sure to replace <code>projectID</code> with the id of your project.</p><aside><h6><span class="icon-16-star"></span> Pro Tip</h6><p>You can always check the status of your builds/deploys by going to the <em>overview</em> section of your project\'s <a href="https://console.wedeploy.com" target="_blank">Console</a>.</p></aside><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.page.title) + '"><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.site.title) + '">')}), null, opt_ijData));
};
if (goog.DEBUG) {
  GajTN.render.soyTemplateName = 'GajTN.render';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
GajTN.soyweb = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(base.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + GajTN.render(opt_data, null, opt_ijData))}), null, opt_ijData));
};
if (goog.DEBUG) {
  GajTN.soyweb.soyTemplateName = 'GajTN.soyweb';
}
