// This file was automatically generated from deploy.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace DbwUt.
 */

if (typeof DbwUt == 'undefined') { var DbwUt = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
DbwUt.render = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(tutorial.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<h4>Select the fork</h4><p>After logging in, you will get redirected back to the deployment page.</p><p>There you can add details about the repo you want to deploy.</p><ol><li>Add your fork\'s</li><ul><li><strong>owner</strong> (you)</li><li><strong>repo</strong> (oscon-game)</li><li><strong>branch</strong> (master)</li></ul><li>Click <em>Connect Repository</em></li></ol><p>Now WeDeploy will automatically start deploying your repo.</p><figure><img src="/images/tutorials/oscon/4-choose-repo.gif" alt="Choose Repo"></figure><h4>Set home container</h4><p>In order to have a cleaner url for your game, we will set the home conatiner.</p><ol><li>Go to your project <em>Settings</em></li><li>Under <em>Home Services</em>, select the hosting container</li><li>Click <em>Update Project</em></li></ol><figure><img src="/images/tutorials/oscon/5-home-container.gif" alt="Change home container"></figure><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.page.title) + '"><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.site.title) + '">')}), null, opt_ijData));
};
if (goog.DEBUG) {
  DbwUt.render.soyTemplateName = 'DbwUt.render';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
DbwUt.soyweb = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(base.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + DbwUt.render(opt_data, null, opt_ijData))}), null, opt_ijData));
};
if (goog.DEBUG) {
  DbwUt.soyweb.soyTemplateName = 'DbwUt.soyweb';
}
