// This file was automatically generated from continuous-deployment.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace AUMkI.
 */

if (typeof AUMkI == 'undefined') { var AUMkI = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
AUMkI.render = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(guide.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<h3>' + soy.$$escapeHtml(opt_data.page.title) + '</h3><h6>' + soy.$$escapeHtml(opt_data.page.description) + '</h6><article id="1"><h2>Create a project</h2><ol><li>Go to the <a href="https://console.wedeploy.xyz">WeDeploy Console</a></li><li>Click on <em>&quot;New Project&quot;</em> in the top right corner of the screen</li><li>Type a desired project name and then click <em>&quot;Create Project&quot;</em></li></ol><p><img src="/images/docs/deploy/new-project.png" alt="New Project"></p></article><article id="2"><h2>Connect to GitHub</h2><ol><li>On your project, click on <em>&quot;Deployment&quot;</em></li><li>Go to the <em>&quot;GitHub&quot;</em> tab</li><li>Click on <em>&quot;Connect to Github&quot;</em> (if its your first time, you will need to authenticate with GitHub)</li><li>Select the repository and branch that you want to deploy</li><li>Click on the <em>&quot;Connect Repository&quot;</em> button</li></ol><p><img src="/images/docs/deploy/connect-to-github.png" alt="Connect to GitHub"></p><p>This will immediately start building and deploying your application. In the end, you\'ll be able to see it online in any browser.</p><aside><p>If you don\'t have a project ready to deploy, you can fork this <a href="https://github.com/wedeploy/boilerplate-hosting">GitHub repository</a> and connect to it.</p></aside></article><h2>What\'s next?</h2><p>Now you\'re ready to connect to GitHub and deploy any kind of application. Let\'s start with <a href="/docs/deploy/continuous-deployment.html">Deploying Node.js</a>?</p><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.page.title) + '"><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.site.title) + '">')}), null, opt_ijData));
};
if (goog.DEBUG) {
  AUMkI.render.soyTemplateName = 'AUMkI.render';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
AUMkI.soyweb = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(base.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + AUMkI.render(opt_data, null, opt_ijData))}), null, opt_ijData));
};
if (goog.DEBUG) {
  AUMkI.soyweb.soyTemplateName = 'AUMkI.soyweb';
}
