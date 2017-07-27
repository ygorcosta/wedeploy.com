// This file was automatically generated from download-sample-file.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace IqbBO.
 */

if (typeof IqbBO == 'undefined') { var IqbBO = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
IqbBO.render = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(tutorial.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<h4>Download Sample File</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia incidunt tenetur cumque ducimus earum aliquid voluptate. Molestias tempora suscipit atque quidem excepturi, enim ducimus nobis dicta. Labore et maxime aspernatur.</p><h6>Download a ZIP</h6><p>You can <a href="https://github.com/wedeploy/tutorial-nodejs/archive/master.zip">download a ZIP file</a>.</p><h6>Or Download using Git</h6>' + ElectricCode.render({code: soydata.$$markUnsanitizedTextForInternalBlocks('git clone https://github.com/wedeploy/tutorial-hosting.git'), mode: 'xml'}, null, opt_ijData) + '<input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.page.title) + '"><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.site.title) + '">')}), null, opt_ijData));
};
if (goog.DEBUG) {
  IqbBO.render.soyTemplateName = 'IqbBO.render';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
IqbBO.soyweb = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(base.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + IqbBO.render(opt_data, null, opt_ijData))}), null, opt_ijData));
};
if (goog.DEBUG) {
  IqbBO.soyweb.soyTemplateName = 'IqbBO.soyweb';
}
