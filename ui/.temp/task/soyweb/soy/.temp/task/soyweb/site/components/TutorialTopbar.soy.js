// This file was automatically generated from TutorialTopbar.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace TutorialTopbar.
 */

if (typeof TutorialTopbar == 'undefined') { var TutorialTopbar = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
TutorialTopbar.render = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<nav class="topbar' + soy.$$escapeHtmlAttribute(opt_data.elementClasses ? ' ' + opt_data.elementClasses : '') + '"><button class="btn btn-transparent btn-icon" type="button" data-onclick="openNavigationMenu"><span class="icon-16-menu"></span></button>' + ((opt_data.logo) ? soy.$$escapeHtml(opt_data.logo) : '') + '<h3 class="topbar-logo-text">' + soy.$$escapeHtml(opt_data.page.tutorialTitle != null ? opt_data.page.tutorialTitle : '') + '</h3><div class="time-remaining">' + ((opt_data.page.timeRemaining) ? '<span class="icon icon-16-clock"></span><span class="name">' + soy.$$escapeHtml(opt_data.page.timeRemaining != null ? opt_data.page.timeRemaining : '') + '</span>' : '') + '</div></nav>');
};
if (goog.DEBUG) {
  TutorialTopbar.render.soyTemplateName = 'TutorialTopbar.render';
}
