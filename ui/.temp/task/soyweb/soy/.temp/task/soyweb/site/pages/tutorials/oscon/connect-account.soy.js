// This file was automatically generated from connect-account.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace ntygu.
 */

if (typeof ntygu == 'undefined') { var ntygu = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
ntygu.render = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(tutorial.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<h4>Create an account on WeDeploy</h4><p>Now go and <a href="#">create a WeDeploy account</a>, if you don\'t have one already.</p><h4>Create a new project</h4><p>On the <a href="https://console.wedeploy.com/projects">WeDeploy Console</a>, create a new project (name it whatever you want \uD83D\uDC4D).</p><h4>Link your GitHub account</h4><p>Inside of your new project on the Console:</p><ol><li>Go to <em>Deployment</em></li><li>Select <em>GitHub</em></li><li>Go to <em>Connect to GitHub</em></li><li>Select <em>Authorize application</em></li></ol><figure><img src="/images/tutorials/oscon/3-link-github.gif" alt="Link GitHub Account"></figure><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.page.title) + '"><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.site.title) + '">')}), null, opt_ijData));
};
if (goog.DEBUG) {
  ntygu.render.soyTemplateName = 'ntygu.render';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
ntygu.soyweb = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(base.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + ntygu.render(opt_data, null, opt_ijData))}), null, opt_ijData));
};
if (goog.DEBUG) {
  ntygu.soyweb.soyTemplateName = 'ntygu.soyweb';
}
