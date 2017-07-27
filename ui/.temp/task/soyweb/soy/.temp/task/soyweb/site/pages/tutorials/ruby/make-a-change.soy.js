// This file was automatically generated from make-a-change.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace qLKRj.
 */

if (typeof qLKRj == 'undefined') { var qLKRj = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
qLKRj.render = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(tutorial.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<h4>Make a Change</h4><p>Our project is now live, but what\'s next? Let\'s try deploying a new change to our app!</p><h6>Develop</h6><p>Go back to your project and open up the <code>views/home.erb</code> in your code editor. Change the text in the <code>&lt;h1&gt;</code> element (try putting &quot;You Rock!&quot;).</p><h6>Push</h6><p>Now make another commit and push your changes to the WeDeploy remote!</p><ol><li><code>git add .</code></li><li><code>git commit -m &quot;update header&quot;</code></li><li><code>git push wedeploy master</code></li></ol><h6>See it live</h6><p>Give it a few moments and then go check your project\'s URL again. You should see the text change to &quot;You Rock!&quot; because let\'s be honest, you do!</p><aside><h6><span class="icon-16-star"></span> Pro Tip</h6><p>Want to make your Ruby Service the primary service so that it is served to your project\'s root url (<code>&lt;projectID&gt;.wedeploy.sh</code>)? Perfect, that is extremely easy to do. Go to the settings tab of your project\'s console and select <em>ruby</em> as your <em>Home Service</em>.</p></aside><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.page.title) + '"><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.site.title) + '">')}), null, opt_ijData));
};
if (goog.DEBUG) {
  qLKRj.render.soyTemplateName = 'qLKRj.render';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
qLKRj.soyweb = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(base.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + qLKRj.render(opt_data, null, opt_ijData))}), null, opt_ijData));
};
if (goog.DEBUG) {
  qLKRj.soyweb.soyTemplateName = 'qLKRj.soyweb';
}
