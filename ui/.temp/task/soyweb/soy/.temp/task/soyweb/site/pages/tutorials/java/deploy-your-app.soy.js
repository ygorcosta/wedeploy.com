// This file was automatically generated from deploy-your-app.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace hkmNe.
 */

if (typeof hkmNe == 'undefined') { var hkmNe = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
hkmNe.render = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(tutorial.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<h4>Deploy Your App</h4><p>Now the moment you have been waiting for - deployment!</p><h6>Add a Git remote</h6><p>Open up your terminal and go to the <code>tutorial-java</code> folder. Then, add a git remote by running:</p>' + ElectricCode.render({code: soydata.$$markUnsanitizedTextForInternalBlocks('git remote add wedeploy http://git.wedeploy.com/<projectID>.git'), mode: 'xml'}, null, opt_ijData) + '<h6>Push first commit</h6><p>The remote is now set up and you are ready to make your first commit!</p><ol><li><code>git add .</code></li><li><code>git commit -m &quot;Awesome commit&quot;</code></li><li><code>git push wedeploy master</code></li></ol><p>If it is your first time pushing to WeDeploy\'s git, you will need to enter the email and password for your WeDeploy account.</p><h6>See it live</h6><p>Once you have pushed, WeDeploy will immediately start deploying your project.</p><p>Give it a few moments and then go to <code>java-&lt;projectID&gt;.wedeploy.sh</code> to see what you deployed! Pretty cool, right?</p><figure><img src="/images/tutorials/it-works.png" alt="It works!"></figure><aside><h6><span class="icon-16-star"></span> Pro Tip</h6><p>You can always check the status of your deployment by going to the <em>overview</em> section of your project\'s <a href="https://console.wedeploy.com" target="_blank">console</a>.</p></aside><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.page.title) + '"><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.site.title) + '">')}), null, opt_ijData));
};
if (goog.DEBUG) {
  hkmNe.render.soyTemplateName = 'hkmNe.render';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
hkmNe.soyweb = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(base.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + hkmNe.render(opt_data, null, opt_ijData))}), null, opt_ijData));
};
if (goog.DEBUG) {
  hkmNe.soyweb.soyTemplateName = 'hkmNe.soyweb';
}
