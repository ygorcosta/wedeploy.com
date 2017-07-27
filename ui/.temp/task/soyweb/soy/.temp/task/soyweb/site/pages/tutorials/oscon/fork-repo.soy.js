// This file was automatically generated from fork-repo.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace tZqRk.
 */

if (typeof tZqRk == 'undefined') { var tZqRk = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
tZqRk.render = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(tutorial.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<h4>Fork the Repo</h4><p>Go to <a href="https://github.com/wedeploy/oscon-game#fork-destination-box">github.com/wedeploy/oscon-game</a> and fork the repo.</p><figure><img src="/images/tutorials/oscon/1-fork-repo.gif" alt="Fork Repo"></figure><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.page.title) + '"><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.site.title) + '">')}), null, opt_ijData));
};
if (goog.DEBUG) {
  tZqRk.render.soyTemplateName = 'tZqRk.render';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
tZqRk.soyweb = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(base.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + tZqRk.render(opt_data, null, opt_ijData))}), null, opt_ijData));
};
if (goog.DEBUG) {
  tZqRk.soyweb.soyTemplateName = 'tZqRk.soyweb';
}
