// This file was automatically generated from instant-deployment.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace USZvY.
 */

if (typeof USZvY == 'undefined') { var USZvY = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
USZvY.render = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(guide.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<h3>' + soy.$$escapeHtml(opt_data.page.title) + '</h3><h6>' + soy.$$escapeHtml(opt_data.page.description) + '</h6><article id="1"><h2>Download the CLI</h2><p>In your terminal, run this command:</p>' + ElectricCode.render({code: soydata.$$markUnsanitizedTextForInternalBlocks('curl https://cdn.wedeploy.com/cli/latest/wedeploy.sh -sL | bash'), mode: 'text'}, null, opt_ijData) + '<p>This will install our command-line interface which is a tool that will help you use the WeDeploy platform.</p><aside><p>The command above will only work for Unix-like systems such as macOS or Linux. If you use Windows, you should download the <a href="https://bin.equinox.io/c/8WGbGy94JXa/cli-stable-windows-amd64.msi">Windows amd64 installer</a>.</p></aside></article><article id="2"><h2>Deploy instantly</h2><p>Assuming you already have a project locally, now you just need to run:</p>' + ElectricCode.render({code: soydata.$$markUnsanitizedTextForInternalBlocks('we deploy'), mode: 'text'}, null, opt_ijData) + '<p>This will immediately start uploading your files. Once that\'s finished, WeDeploy will start building and deploying your application. In the end, you\'ll be able to see it online in any browser.</p><aside><p>If you don\'t have a project ready to deploy, you can download this <a href="https://github.com/wedeploy/boilerplate-hosting/archive/master.zip">simple project</a> and run the <code>we deploy</code> command inside that folder.</p></aside></article><h2>What\'s next?</h2><p>Being able to deploy instantaneously is great, but sometimes you want to trigger a deploy every time a push is made to GitHub. If that\'s your case, check the <a href="/docs/deploy/continuous-deployment.html">Continuous Deployment</a> section.</p><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.page.title) + '"><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.site.title) + '">')}), null, opt_ijData));
};
if (goog.DEBUG) {
  USZvY.render.soyTemplateName = 'USZvY.render';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
USZvY.soyweb = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(base.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + USZvY.render(opt_data, null, opt_ijData))}), null, opt_ijData));
};
if (goog.DEBUG) {
  USZvY.soyweb.soyTemplateName = 'USZvY.soyweb';
}
