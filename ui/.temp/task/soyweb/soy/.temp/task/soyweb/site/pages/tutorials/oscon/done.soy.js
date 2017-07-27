// This file was automatically generated from done.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace tqbfn.
 */

if (typeof tqbfn == 'undefined') { var tqbfn = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
tqbfn.render = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(tutorial.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<h4>Time to grab your raygun</h4><h6>Nice job!! You just deployed an awesome game at the speed of light. \uD83D\uDCAA\uD83D\uDE80\u26A1\uFE0F</h6><figure><img src="/images/tutorials/oscon/lifebringer.png" alt="The Lifebring Game"></figure><h4>Checkout what you built</h4><p>Now you can go to your projects url (<code>&lt;your-projec&gt;.wedeploy.sh</code>) in the top left corner of the Console, and <strong>start playing</strong>!</p><h4>What\'s next?</h4><p><strong>Grab a sticker!</strong> Show the game you deployed to one of the members at the booth and they will give you an awesome WeDeploy hoodie!</p><p><strong>Win the grand prize!</strong> Whats a game without a little competition? Start competing against others who built the app- <a href="/leaderboard">highest score</a> will <strong>win a handmade raygun</strong>!</p><figure><img src="/images/tutorials/oscon/raygun.jpg" alt="Ray gun"></figure><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.page.title) + '"><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.site.title) + '">')}), null, opt_ijData));
};
if (goog.DEBUG) {
  tqbfn.render.soyTemplateName = 'tqbfn.render';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
tqbfn.soyweb = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(base.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + tqbfn.render(opt_data, null, opt_ijData))}), null, opt_ijData));
};
if (goog.DEBUG) {
  tqbfn.soyweb.soyTemplateName = 'tqbfn.soyweb';
}
