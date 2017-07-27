// This file was automatically generated from it-works.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace EImks.
 */

if (typeof EImks == 'undefined') { var EImks = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
EImks.render = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(tutorial.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<h4>Send an Email</h4><p>Great work, your app is now live! Now let\'s send an email.</p><ol><li>Go to <code>hosting-&lt;projectID&gt;.wedeploy.sh</code> in your browser.</li><li>Fill in the form (make sure you put your email in the &quot;to&quot; field).</li><li>Click submit and check your email inbox because you\'ve got mail!</li></ol><p>Awesome! You just deployed an app and sent an email within a few minutes! We can\'t wait to see what else you create with WeDeploy!</p><aside><h6><span class="icon-16-star"></span> Pro Tip</h6><p>Wanting to make a pretty url for your primary UI service without purchasing a custom domain? Perfect, you can go to the <em>Custom Domain</em> section of your service on the Dashboard and add a custom domain that ends with <code>wedeploy.io</code> (e.g. <code>yourapp.wedeploy.io</code>).</p></aside><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.page.title) + '"><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.site.title) + '">')}), null, opt_ijData));
};
if (goog.DEBUG) {
  EImks.render.soyTemplateName = 'EImks.render';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
EImks.soyweb = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(base.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + EImks.render(opt_data, null, opt_ijData))}), null, opt_ijData));
};
if (goog.DEBUG) {
  EImks.soyweb.soyTemplateName = 'EImks.soyweb';
}
