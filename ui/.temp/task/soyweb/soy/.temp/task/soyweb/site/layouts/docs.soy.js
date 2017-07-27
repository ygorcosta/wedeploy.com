// This file was automatically generated from docs.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace docs.
 */

if (typeof docs == 'undefined') { var docs = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
docs.render = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div class="main"><main class="content guide"><div class="docs">' + docs.topbar(opt_data, null, opt_ijData) + Sidebar.render(opt_data, null, opt_ijData) + '<div class="sidebar-offset">' + soy.$$escapeHtml(opt_data.content) + Newsletter.render(null, null, opt_ijData) + '</div></div></main></div>');
};
if (goog.DEBUG) {
  docs.render.soyTemplateName = 'docs.render';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
docs.topbar = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<nav class="topbar topbar-docs topbar-light topbar-large">' + docs.logo(opt_data, null, opt_ijData) + docs.menu(opt_data, null, opt_ijData) + '</nav>');
};
if (goog.DEBUG) {
  docs.topbar.soyTemplateName = 'docs.topbar';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
docs.logo = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div class="topbar-logo"><a class="topbar-logo-link" href="/"><span class="wedeploy-logo"><span class="we-circle"><span class="we">We</span></span><span class="deploy">Deploy\u2122</span><span class="liferay">by Liferay</span><span class="alpha-container"><span class="arrow-up"></span><span class="alpha">alpha</span></span></span></a></div>');
};
if (goog.DEBUG) {
  docs.logo.soyTemplateName = 'docs.logo';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
docs.menu = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(Topbar.render({section: opt_data.site.index}, null, opt_ijData));
};
if (goog.DEBUG) {
  docs.menu.soyTemplateName = 'docs.menu';
}
