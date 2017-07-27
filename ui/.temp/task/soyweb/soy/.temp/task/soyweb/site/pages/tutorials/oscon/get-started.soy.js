// This file was automatically generated from get-started.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace LRIsy.
 */

if (typeof LRIsy == 'undefined') { var LRIsy = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
LRIsy.render = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(tutorial.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<h4>Are you ready for this?</h4><p>Glad you\'re here! This tutorial will take you through the experience of deploying an app with WeDeploy.</p><p>By the end, you will deploy a highly addictive game from scratch and get an awesome hoodie from us!</p><figure><img src="https://vangogh.teespring.com/og_pic/13841816/10337509/front.jpg?v=2017-03-22-03-41&background-image=wood&effects=inner-glow"></figure><h4>What do you need?</h4><ul class="checklist"><li>A GitHub account</li></ul><p>Thats it. You won\'t even need to install anything or download any source code.</p><p>You might be curious now how it could be <strong>that</strong> easy... perfect, lets get you started! \uD83D\uDC47</p><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.page.title) + '"><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.site.title) + '">')}), null, opt_ijData));
};
if (goog.DEBUG) {
  LRIsy.render.soyTemplateName = 'LRIsy.render';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
LRIsy.soyweb = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(base.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + LRIsy.render(opt_data, null, opt_ijData))}), null, opt_ijData));
};
if (goog.DEBUG) {
  LRIsy.soyweb.soyTemplateName = 'LRIsy.soyweb';
}
