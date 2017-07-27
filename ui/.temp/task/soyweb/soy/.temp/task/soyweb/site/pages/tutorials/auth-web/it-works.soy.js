// This file was automatically generated from it-works.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace EeKDM.
 */

if (typeof EeKDM == 'undefined') { var EeKDM = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
EeKDM.render = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(tutorial.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<h4>It Works</h4><p>Great work, your app is now live! Now let\'s start playing with user sign-in.</p><ol><li>Go to <code>hosting-&lt;projectID&gt;.wedeploy.sh</code> in your browser.</li><li>Click &quot;Create an account&quot; and fill in the form.</li><li>You are logged in! Now try signing out and signing back in.</li></ol><p>Awesome! You just deployed an app and started authenticating users within a few minutes! We can\'t wait to see what else you create with WeDeploy!</p><aside><h6><span class="icon-16-star"></span> Pro Tip</h6><p>Wanting to make a pretty url for your primary UI service without purchasing a custom domain? Perfect, you can go to the <em>Custom Domain</em> section of your service on the Dashboard and add a custom domain that ends with <code>wedeploy.io</code> (e.g. <code>yourapp.wedeploy.io</code>).</p></aside><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.page.title) + '"><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.site.title) + '">')}), null, opt_ijData));
};
if (goog.DEBUG) {
  EeKDM.render.soyTemplateName = 'EeKDM.render';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
EeKDM.soyweb = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(base.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + EeKDM.render(opt_data, null, opt_ijData))}), null, opt_ijData));
};
if (goog.DEBUG) {
  EeKDM.soyweb.soyTemplateName = 'EeKDM.soyweb';
}
