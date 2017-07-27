// This file was automatically generated from add-config-files.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace YHwQE.
 */

if (typeof YHwQE == 'undefined') { var YHwQE = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
YHwQE.render = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(tutorial.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<h4>Add Config Files</h4><h6>wedeploy.json</h6><p>Since every service folder must have a <code>wedeploy.json</code> file that configures the service, let\'s add one to our Data Service in the repo we just cloned.</p><ol><li>Open the <code>tutorial-data-ios</code> folder in a code editor.</li><li>Create a new file inside of the <code>data</code> folder and name it <code>wedeploy.json</code>.</li><li>Inside of that file, paste this code.</li></ol>' + ElectricCode.render({code: soydata.$$markUnsanitizedTextForInternalBlocks('{\n    "id": "data",\n    "image": "wedeploy/data:beta"\n}'), mode: 'application/json'}, null, opt_ijData) + '<h6>api.json</h6><p>Along with the wedeploy.json, each Data service must have an <code>api.json</code> file to configure your database (eg. set path, allow certain methods, and require authentication).</p><ol><li>Go back to <code>tutorial-data-ios</code> in your code editor.</li><li>Create another file inside of the <code>data</code> folder and name it <code>api.json</code>.</li><li>Inside of that file, paste this code.</li></ol>' + ElectricCode.render({code: soydata.$$markUnsanitizedTextForInternalBlocks('[\n    {\n        "path": "/tasks/*",\n        "data": true\n    }\n]'), mode: 'application/json'}, null, opt_ijData) + '<aside><h6><span class="icon-16-star"></span> Pro Tip</h6><p>Another thing you can do with your <code>api.json</code> file is add other parameters for the collections in your database. One example is to set certain REST methods for each category like this:</p>' + ElectricCode.render({code: soydata.$$markUnsanitizedTextForInternalBlocks('[\n    {\n        "path": "/movies/*",\n        "data": true,\n        "method": ["GET", "PATCH", "PUT", "DELETE"]\n    },\n    {\n        "path": "/shows/*",\n        "data": true,\n        "method": "POST"\n    }\n]'), mode: 'application/json'}, null, opt_ijData) + '<p>See the full list of possible <a href="/docs/data/configuring-data.html" target="_blank">data configurations</a>.</p></aside><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.page.title) + '"><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.site.title) + '">')}), null, opt_ijData));
};
if (goog.DEBUG) {
  YHwQE.render.soyTemplateName = 'YHwQE.render';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
YHwQE.soyweb = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(base.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + YHwQE.render(opt_data, null, opt_ijData))}), null, opt_ijData));
};
if (goog.DEBUG) {
  YHwQE.soyweb.soyTemplateName = 'YHwQE.soyweb';
}
