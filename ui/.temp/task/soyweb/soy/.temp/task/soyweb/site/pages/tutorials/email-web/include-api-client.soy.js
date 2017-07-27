// This file was automatically generated from include-api-client.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace eGhbD.
 */

if (typeof eGhbD == 'undefined') { var eGhbD = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
eGhbD.render = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(tutorial.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<h4>Include API Client</h4><p>Before we can make any requests to send an email, we must connect the WeDeploy API Client.</p><p>To do this, go to <code>index.html</code> in that <code>hosting</code> directory and include this script link at the bottom of the <code>&lt;body&gt;</code> element:</p>' + ElectricCode.render({code: soydata.$$markUnsanitizedTextForInternalBlocks('<script src="https://cdn.wedeploy.com/api/beta/wedeploy.js"><\/script>'), mode: 'xml'}, null, opt_ijData) + '<input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.page.title) + '"><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.site.title) + '">')}), null, opt_ijData));
};
if (goog.DEBUG) {
  eGhbD.render.soyTemplateName = 'eGhbD.render';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
eGhbD.soyweb = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(base.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + eGhbD.render(opt_data, null, opt_ijData))}), null, opt_ijData));
};
if (goog.DEBUG) {
  eGhbD.soyweb.soyTemplateName = 'eGhbD.soyweb';
}
