// This file was automatically generated from include-api-client.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace eYmFc.
 */

if (typeof eYmFc == 'undefined') { var eYmFc = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
eYmFc.render = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(tutorial.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<h4>Include API Client</h4><p>Before we can make any requests to create or sign-in any users, we must connect the WeDeploy Android API Client.</p><p>To do this, go to <code>tutorial-auth-android/app/tutorial-auth-android/app/build.gradle</code> and include this line inside the dependencies function of this file:</p>' + ElectricCode.render({code: soydata.$$markUnsanitizedTextForInternalBlocks('compile \'com.wedeploy:com.wedeploy.android:beta-20170505\''), mode: 'text/x-groovy'}, null, opt_ijData) + '<p>After doing this, you have to sync the project and then a few seconds later you will see that the project is built correctly.</p><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.page.title) + '"><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.site.title) + '">')}), null, opt_ijData));
};
if (goog.DEBUG) {
  eYmFc.render.soyTemplateName = 'eYmFc.render';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
eYmFc.soyweb = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(base.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + eYmFc.render(opt_data, null, opt_ijData))}), null, opt_ijData));
};
if (goog.DEBUG) {
  eYmFc.soyweb.soyTemplateName = 'eYmFc.soyweb';
}
