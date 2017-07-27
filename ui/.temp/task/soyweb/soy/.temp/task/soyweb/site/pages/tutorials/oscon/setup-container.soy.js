// This file was automatically generated from setup-container.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace wZRSj.
 */

if (typeof wZRSj == 'undefined') { var wZRSj = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
wZRSj.render = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(tutorial.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<h4>Create a wedeploy.json file</h4><p>On the github interface of your new fork:</p><ol><li>Go to the <code>hosting</code> folder and select <em>create new file</em>.</li><li>Name the file <code>wedeploy.json</code></li><li>Paste the bellow code</li><li>Click <em>Commit new file</em></li></ol>' + ElectricCode.render({code: soydata.$$markUnsanitizedTextForInternalBlocks('{\n    "id": "hosting",\n    "image": "wedeploy/hosting:beta"\n}'), mode: 'application/json'}, null, opt_ijData) + '<figure><img src="/images/tutorials/oscon/2-create-wedeploy.json.gif" alt="Create wedeploy.json"></figure><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.page.title) + '"><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.site.title) + '">')}), null, opt_ijData));
};
if (goog.DEBUG) {
  wZRSj.render.soyTemplateName = 'wZRSj.render';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
wZRSj.soyweb = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(base.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + wZRSj.render(opt_data, null, opt_ijData))}), null, opt_ijData));
};
if (goog.DEBUG) {
  wZRSj.soyweb.soyTemplateName = 'wZRSj.soyweb';
}
