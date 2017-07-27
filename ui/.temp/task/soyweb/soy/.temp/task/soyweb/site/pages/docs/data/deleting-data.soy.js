// This file was automatically generated from deleting-data.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace OdHWM.
 */

if (typeof OdHWM == 'undefined') { var OdHWM = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
OdHWM.render = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(guide.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<h3>' + soy.$$escapeHtml(opt_data.page.title) + '</h3><h6>' + soy.$$escapeHtml(opt_data.page.description) + '</h6><aside><p>If you are unfamiliar with our API, please visit the <a href="/docs/intro/api-clients.html">API Clients</a> page first to learn how to install and configure it.</p></aside><article id="1"><h2>Deleting existing data</h2><p>To delete a field or an entire collection, we use the delete method:</p>' + ElectricCode.render({code: soydata.$$markUnsanitizedTextForInternalBlocks('var data = WeDeploy.data(\'https://<serviceID>-<projectID>.wedeploy.io\');\n\ndata.delete(\'movies/star_wars_v/title\');\n\ndata.delete(\'movies/star_wars_v\');\n\ndata.delete(\'movies\');'), mode: 'javascript'}, null, opt_ijData) + ElectricCode.render({code: soydata.$$markUnsanitizedTextForInternalBlocks('let data = WeDeploy.data(\'https://<serviceID>-<projectID>.wedeploy.io\')\n\ndata.delete(collectionOrResourcePath: "movies/star_wars_v/title")\n\ndata.delete(collectionOrResourcePath: "movies/star_wars_v")\n\ndata.delete(collectionOrResourcePath: "movies")'), mode: 'swift'}, null, opt_ijData) + ElectricCode.render({code: soydata.$$markUnsanitizedTextForInternalBlocks('WeDeployData data = WeDeploy.data(\'https://data-datademo.wedeploy.io\');\n\ndata.delete("movies/star_wars_v/title");\n\ndata.delete("movies/star_wars_v");\n\ndata.delete("movies");'), mode: 'text/x-java'}, null, opt_ijData) + '</article><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.page.title) + '"><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.site.title) + '">')}), null, opt_ijData));
};
if (goog.DEBUG) {
  OdHWM.render.soyTemplateName = 'OdHWM.render';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
OdHWM.soyweb = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(base.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + OdHWM.render(opt_data, null, opt_ijData))}), null, opt_ijData));
};
if (goog.DEBUG) {
  OdHWM.soyweb.soyTemplateName = 'OdHWM.soyweb';
}
