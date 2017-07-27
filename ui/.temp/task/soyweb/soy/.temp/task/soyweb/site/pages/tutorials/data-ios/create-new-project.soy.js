// This file was automatically generated from create-new-project.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace pCBLs.
 */

if (typeof pCBLs == 'undefined') { var pCBLs = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
pCBLs.render = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(tutorial.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<h4>Create New Project</h4><p>To begin, we will create a new WeDeploy project.</p><ol><li>Go to the <a href="https://console.wedeploy.com" target="_blank">WeDeploy Console</a></li><li>Click on the <em>New Project</em> button</li><li>Enter a <em>Project ID</em></li><li>Click on the <em>Create Project</em> button</li></ol><p>The Project ID you entered is the ID you will use in place of all future <code>&lt;projectID&gt;</code> elements in this tutorial.</p><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.page.title) + '"><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.site.title) + '">')}), null, opt_ijData));
};
if (goog.DEBUG) {
  pCBLs.render.soyTemplateName = 'pCBLs.render';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
pCBLs.soyweb = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(base.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + pCBLs.render(opt_data, null, opt_ijData))}), null, opt_ijData));
};
if (goog.DEBUG) {
  pCBLs.soyweb.soyTemplateName = 'pCBLs.soyweb';
}
