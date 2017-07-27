// This file was automatically generated from make-a-change.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace hgegh.
 */

if (typeof hgegh == 'undefined') { var hgegh = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
hgegh.render = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(tutorial.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<h4>Make a Change</h4><p>Our project is now live, but what\'s next? Let\'s try deploying a new change to our app!</p><h6>Develop</h6><p>Go back to your project and open up the <code>index.html</code> in your code editor. Change the text in the <code>&lt;h1&gt;</code> element (try putting &quot;You Rock!&quot;).</p><h6>Deploy</h6><p>Go to <code>tutorial-docker</code> in your terminal and deploy your project again:</p>' + ElectricCode.render({code: soydata.$$markUnsanitizedTextForInternalBlocks('we deploy --project projectID'), mode: 'xml'}, null, opt_ijData) + '<p><strong>Note:</strong> make sure to replace <code>projectID</code> with the id of your project.</p><h6>See it live</h6><p>Go to <code>docker-&lt;projectID&gt;.wedeploy.sh</code> in your browser and see the changes you made!</p><aside><h6><span class="icon-16-star"></span> Pro Tip</h6><p>Wanting to make a pretty url for your primary UI service without purchasing a custom domain? Perfect, you can go to the <em>Custom Domain</em> section of your service on the Dashboard and add a custom domain that ends with <code>wedeploy.io</code> (e.g. <code>yourapp.wedeploy.io</code>).</p></aside><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.page.title) + '"><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.site.title) + '">')}), null, opt_ijData));
};
if (goog.DEBUG) {
  hgegh.render.soyTemplateName = 'hgegh.render';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
hgegh.soyweb = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(base.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + hgegh.render(opt_data, null, opt_ijData))}), null, opt_ijData));
};
if (goog.DEBUG) {
  hgegh.soyweb.soyTemplateName = 'hgegh.soyweb';
}
