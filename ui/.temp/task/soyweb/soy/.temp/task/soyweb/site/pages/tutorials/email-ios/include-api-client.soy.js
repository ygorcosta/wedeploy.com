// This file was automatically generated from include-api-client.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace zCceX.
 */

if (typeof zCceX == 'undefined') { var zCceX = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
zCceX.render = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(tutorial.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<h4>Include API Client</h4><p>Before we can make any requests to create or sign-in any users, we must connect the WeDeploy Swift API Client.</p><p>To do this, go to <code>tutorial-data-ios/app/Podfile</code> and include this line inside the target function of this file:</p>' + ElectricCode.render({code: soydata.$$markUnsanitizedTextForInternalBlocks('pod \'WeDeploy\''), mode: 'swift'}, null, opt_ijData) + '<p>After doing this, you have to install the dependencies on the project, to do that open a terminal in that folder and execute the next command:</p>' + ElectricCode.render({code: soydata.$$markUnsanitizedTextForInternalBlocks('pod install'), mode: 'swift'}, null, opt_ijData) + '<p>You will see all the dependencies being installed.</p><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.page.title) + '"><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.site.title) + '">')}), null, opt_ijData));
};
if (goog.DEBUG) {
  zCceX.render.soyTemplateName = 'zCceX.render';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
zCceX.soyweb = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(base.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + zCceX.render(opt_data, null, opt_ijData))}), null, opt_ijData));
};
if (goog.DEBUG) {
  zCceX.soyweb.soyTemplateName = 'zCceX.soyweb';
}
