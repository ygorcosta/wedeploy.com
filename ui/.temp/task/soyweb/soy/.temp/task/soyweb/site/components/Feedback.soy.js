// This file was automatically generated from Feedback.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Feedback.
 */

if (typeof Feedback == 'undefined') { var Feedback = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Feedback.render = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div><div class="feedback"><p>Was this section helpful?</p><button class="btn btn-accent feedback-btn feedback-btn-yes" data-onclick="sendFeedback" data-feedback="true">Yes</button><button class="btn btn-accent feedback-btn feedback-btn-no" data-onclick="sendFeedback" data-feedback="false">No</button></div>' + ((opt_data.site.githubRepo) ? '<div class="contribute"><div class="contribute-img"><span class="icon-16-github"></span></div><div class="contribute-text"><p>Contribute on Github! <a href="https://github.com/' + soy.$$escapeHtmlAttribute(opt_data.site.githubRepo) + '/tree/master/ui/' + soy.$$escapeHtmlAttribute(opt_data.page.srcFilePath) + '" class="contribute-link " target="_blank">Edit this section</a>.</p></div></div>' : '') + '</div>');
};
if (goog.DEBUG) {
  Feedback.render.soyTemplateName = 'Feedback.render';
}
