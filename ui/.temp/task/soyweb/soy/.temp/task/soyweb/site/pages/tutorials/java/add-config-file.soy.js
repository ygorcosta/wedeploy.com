// This file was automatically generated from add-config-file.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Girfg.
 */

if (typeof Girfg == 'undefined') { var Girfg = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Girfg.render = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(tutorial.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<h4>Add wedeploy.json</h4><p>Since every service folder must have a <code>wedeploy.json</code> file that configures the service, let\'s add one to the repo we just cloned.</p><ol><li>Open the <code>tutorial-java</code> folder in a code editor</li><li>Create a new file named <code>wedeploy.json</code> inside the <code>java</code> folder.</li><li>In that file, paste this code:</li></ol>' + ElectricCode.render({code: soydata.$$markUnsanitizedTextForInternalBlocks('{\n    "id": "java",\n    "image": "wedeploy/java",\n    "hooks": {\n        "build": "gradle -Dorg.gradle.native=false clean build -x test"\n    }\n}'), mode: 'application/json'}, null, opt_ijData) + '<aside><h6><span class="icon-16-star"></span> Pro Tip</h6><p>As you can see above, we added a <code>hook</code> in our <code>wedeploy.json</code> file. Whatever task you put as a <code>hook</code> will be completed during the build cycle prior to each deployment. This mean deploying an app with Maven or Ant is as simple as adding a new build hook like this:</p>' + ElectricCode.render({code: soydata.$$markUnsanitizedTextForInternalBlocks('{\n    "id": "java",\n    "image": "wedeploy/java",\n    "hooks": {\n        "build": "mvn package"\n    }\n}'), mode: 'application/json'}, null, opt_ijData) + '</aside><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.page.title) + '"><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.site.title) + '">')}), null, opt_ijData));
};
if (goog.DEBUG) {
  Girfg.render.soyTemplateName = 'Girfg.render';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Girfg.soyweb = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(base.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + Girfg.render(opt_data, null, opt_ijData))}), null, opt_ijData));
};
if (goog.DEBUG) {
  Girfg.soyweb.soyTemplateName = 'Girfg.soyweb';
}
