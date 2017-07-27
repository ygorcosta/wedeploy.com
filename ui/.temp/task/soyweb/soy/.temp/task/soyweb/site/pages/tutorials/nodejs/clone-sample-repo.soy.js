// This file was automatically generated from clone-sample-repo.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace DkOpn.
 */

if (typeof DkOpn == 'undefined') { var DkOpn = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
DkOpn.render = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(tutorial.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<h4>Clone Sample Repo</h4><p>First, you\'ll clone a sample repo that contains the necessary files and directories for deploying a site.</p><p>To do this, run the command below in your terminal:</p>' + ElectricCode.render({code: soydata.$$markUnsanitizedTextForInternalBlocks('git clone https://github.com/wedeploy/tutorial-nodejs.git'), mode: 'xml'}, null, opt_ijData) + '<p>In this example, we\'ll use <a href="https://expressjs.com/">Express</a> as our web framework. Don\'t worry if you\'ve never used this before, there\'s no need to learn or download anything.</p><aside><h6><span class="icon-16-star"></span> Pro Tip</h6><p>Every WeDeploy project follows a similar file structure by using JSON files to manage your project and service-level configurations.</p>' + ElectricCode.render({code: soydata.$$markUnsanitizedTextForInternalBlocks('your-project\n\u251C\u2500\u2500 email\n\u2502   \u2514\u2500\u2500 wedeploy.json\n\u251C\u2500\u2500 nodejs\n\u2502   \u251C\u2500\u2500 wedeploy.json\n\u2502   \u2514\u2500\u2500 index.js\n\u2514\u2500\u2500 project.json'), mode: 'xml'}, null, opt_ijData) + '<p>Want to know more about <a href="/docs/intro/configuration-files.html" target="_blank">configuration files</a>?</p></aside><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.page.title) + '"><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.site.title) + '">')}), null, opt_ijData));
};
if (goog.DEBUG) {
  DkOpn.render.soyTemplateName = 'DkOpn.render';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
DkOpn.soyweb = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(base.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + DkOpn.render(opt_data, null, opt_ijData))}), null, opt_ijData));
};
if (goog.DEBUG) {
  DkOpn.soyweb.soyTemplateName = 'DkOpn.soyweb';
}
