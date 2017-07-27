// This file was automatically generated from deploy-your-app.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace zKzkl.
 */

if (typeof zKzkl == 'undefined') { var zKzkl = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
zKzkl.render = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(tutorial.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<h4>Deploy the Project</h4><p>Now the moment you have been waiting for - deployment!</p><p>Go to <code>tutorial-hosting</code> in your terminal and deploy your project:</p>' + ElectricCode.render({code: soydata.$$markUnsanitizedTextForInternalBlocks('we deploy --project projectID'), mode: 'xml'}, null, opt_ijData) + '<p><strong>Note:</strong> make sure to replace <code>projectID</code> with the id of your project.</p><p>Now go to <code>hosting-&lt;projectID&gt;.wedeploy.sh</code> in your browser and see your live page!</p><aside><h6><span class="icon-16-star"></span> Pro Tip</h6><p>If you are deploying static files with no <code>wedeploy.json</code>, we will automatically choose a random service id for you. To choose the id of your hosting service yourself, add <code>--service serviceID</code> to the deploy command above with your custom id. It could look something like this:</p>' + ElectricCode.render({code: soydata.$$markUnsanitizedTextForInternalBlocks('we deploy --project myapp --service ui'), mode: 'xml'}, null, opt_ijData) + '</aside><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.page.title) + '"><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.site.title) + '">')}), null, opt_ijData));
};
if (goog.DEBUG) {
  zKzkl.render.soyTemplateName = 'zKzkl.render';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
zKzkl.soyweb = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(base.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + zKzkl.render(opt_data, null, opt_ijData))}), null, opt_ijData));
};
if (goog.DEBUG) {
  zKzkl.soyweb.soyTemplateName = 'zKzkl.soyweb';
}
