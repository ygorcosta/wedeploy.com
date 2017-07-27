// This file was automatically generated from it-works.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace aqajz.
 */

if (typeof aqajz == 'undefined') { var aqajz = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
aqajz.render = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(tutorial.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<h4>Send an Email</h4><p>Great work, your app is now live! Now let\'s send an email.</p><ol><li>Run the app in the simulator.</li><li>Fill in the form (make sure you put your email in the &quot;to&quot; field).</li><li>Click submit and check your email inbox because you\'ve got mail!</li></ol><p>Awesome! You just deployed an app and sent an email within a few minutes! We can\'t wait to see what else you create with WeDeploy!</p><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.page.title) + '"><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.site.title) + '">')}), null, opt_ijData));
};
if (goog.DEBUG) {
  aqajz.render.soyTemplateName = 'aqajz.render';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
aqajz.soyweb = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(base.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + aqajz.render(opt_data, null, opt_ijData))}), null, opt_ijData));
};
if (goog.DEBUG) {
  aqajz.soyweb.soyTemplateName = 'aqajz.soyweb';
}
