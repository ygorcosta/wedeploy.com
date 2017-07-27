// This file was automatically generated from add-config-file.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace ZuWar.
 */

if (typeof ZuWar == 'undefined') { var ZuWar = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
ZuWar.render = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(tutorial.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<h4>Add wedeploy.json</h4><p>It is not mandatory to include a <code>wedeploy.json</code> in this project because we will automatically detect that you are trying to deploy static files, but just so you can see what the inside of a <code>wedeploy.json</code> is, let\'s add one.</p><ol><li>Open the <code>tutorial-hosting</code> folder in a code editor</li><li>Create a new file named <code>wedeploy.json</code></li><li>In that file, paste this code:</li></ol>' + ElectricCode.render({code: soydata.$$markUnsanitizedTextForInternalBlocks('{\n    "id": "hosting",\n    "image": "wedeploy/hosting:beta"\n}'), mode: 'application/json'}, null, opt_ijData) + '<p>The <code>id</code> is completely customizable by you.</p><aside><h6><span class="icon-16-star"></span> Pro Tip</h6><p>Another thing you can do in your <code>wedeploy.json</code> file is add environment variables. There are many ways to use these; one example is to serve files in a different folder.</p>' + ElectricCode.render({code: soydata.$$markUnsanitizedTextForInternalBlocks('{\n    "id": "hosting",\n    "image": "wedeploy/hosting:beta",\n    "env": {\n        "WEDEPLOY_WEB_PATH": "/dist/"\n    }\n}'), mode: 'application/json'}, null, opt_ijData) + '<p>See the full list of <a href="http://wedeploy.com/docs/hosting/environment-variables.html" target="_blank">Environment Variables for Hosting</a>.</p></aside><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.page.title) + '"><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.site.title) + '">')}), null, opt_ijData));
};
if (goog.DEBUG) {
  ZuWar.render.soyTemplateName = 'ZuWar.render';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
ZuWar.soyweb = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(base.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + ZuWar.render(opt_data, null, opt_ijData))}), null, opt_ijData));
};
if (goog.DEBUG) {
  ZuWar.soyweb.soyTemplateName = 'ZuWar.soyweb';
}
