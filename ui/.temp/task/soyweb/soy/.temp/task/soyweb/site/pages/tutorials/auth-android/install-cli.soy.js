// This file was automatically generated from install-cli.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace epLLM.
 */

if (typeof epLLM == 'undefined') { var epLLM = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
epLLM.render = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(tutorial.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<h4>Install CLI</h4><h5>Download</h5><p>The WeDeploy CLI allows you to do many things with your projects like show logs, analyze metrics, manage domains, and most importantly, deploy.</p>' + ElectricCode.render({code: soydata.$$markUnsanitizedTextForInternalBlocks('curl http://cdn.wedeploy.com/cli/beta/wedeploy.sh -sL | bash'), mode: 'xml'}, null, opt_ijData) + '<h5>Login</h5><p>Now open your terminal and login to your WeDeploy account:</p>' + ElectricCode.render({code: soydata.$$markUnsanitizedTextForInternalBlocks('we login'), mode: 'xml'}, null, opt_ijData) + '<input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.page.title) + '"><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.site.title) + '">')}), null, opt_ijData));
};
if (goog.DEBUG) {
  epLLM.render.soyTemplateName = 'epLLM.render';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
epLLM.soyweb = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(base.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + epLLM.render(opt_data, null, opt_ijData))}), null, opt_ijData));
};
if (goog.DEBUG) {
  epLLM.soyweb.soyTemplateName = 'epLLM.soyweb';
}
