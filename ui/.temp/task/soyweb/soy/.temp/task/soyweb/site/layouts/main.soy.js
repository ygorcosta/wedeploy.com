// This file was automatically generated from main.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace main.
 */

if (typeof main == 'undefined') { var main = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
main.render = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div class="' + soy.$$escapeHtmlAttribute(opt_data.elementClasses != null ? opt_data.elementClasses : 'main') + '"><main class="content">' + main.topbar(opt_data, null, opt_ijData) + soy.$$escapeHtml(opt_data.content) + '</main></div>');
};
if (goog.DEBUG) {
  main.render.soyTemplateName = 'main.render';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
main.topbar = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div id="topbar"><div class="col-xs-16 col-lg-14 col-lg-offset-1"><div class="row"><nav class="topbar topbar-large topbar-light">' + main.logo(opt_data, null, opt_ijData) + main.menu(opt_data, null, opt_ijData) + '</nav></div></div></div>');
};
if (goog.DEBUG) {
  main.topbar.soyTemplateName = 'main.topbar';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
main.logo = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div class="topbar-logo"><a class="topbar-logo-link" href="/"><span class="wedeploy-logo"><span class="we-circle"><span class="we">We</span></span><span class="deploy">Deploy\u2122</span><span class="liferay">by Liferay</span><span class="alpha-container"><span class="arrow-up"></span><span class="alpha">alpha</span></span></span></a></div>');
};
if (goog.DEBUG) {
  main.logo.soyTemplateName = 'main.logo';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
main.menu = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(Topbar.render({section: opt_data.site.index}, null, opt_ijData));
};
if (goog.DEBUG) {
  main.menu.soyTemplateName = 'main.menu';
}
