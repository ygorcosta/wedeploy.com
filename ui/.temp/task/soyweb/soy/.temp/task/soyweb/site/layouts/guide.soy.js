// This file was automatically generated from guide.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace guide.
 */

if (typeof guide == 'undefined') { var guide = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
guide.render = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div class="main guide"><main class="content"><div class="docs">' + guide.topbar(opt_data, null, opt_ijData) + Sidebar.render({page: opt_data.site.index.children['docs']}, null, opt_ijData) + '<div class="sidebar-offset">' + guide.guide(opt_data, null, opt_ijData) + '</div></div></main></div>');
};
if (goog.DEBUG) {
  guide.render.soyTemplateName = 'guide.render';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
guide.guide = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<header><div class="container-hybrid"><h1 class="title">' + soy.$$escapeHtml(opt_data.page.headerTitle) + ' Guide</h1></div></header><div class="container-hybrid"><div class="docs-guide row"><div class="docs-content col-xs-16 col-md-10 col-lg-offset-1 col-lg-9"><div class="guide-content">' + soy.$$escapeHtml(opt_data.content) + '</div>' + Feedback.render(opt_data, null, opt_ijData) + '</div><nav class="col-xs-16 col-md-offset-1 col-md-5 col-lg-4"><div class="docs-nav-container">' + AffixedReadingProgress.render({elementClasses: 'docs-nav topbar-is-fixed', offsetTop: 300, offsetBottom: 200}, null, opt_ijData) + '</div></nav></div></div>' + Newsletter.render(null, null, opt_ijData));
};
if (goog.DEBUG) {
  guide.guide.soyTemplateName = 'guide.guide';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
guide.topbar = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<nav class="topbar topbar-docs topbar-light topbar-large">' + guide.logo(opt_data, null, opt_ijData) + guide.menu(opt_data, null, opt_ijData) + '</nav>');
};
if (goog.DEBUG) {
  guide.topbar.soyTemplateName = 'guide.topbar';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
guide.logo = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div class="topbar-logo"><a class="topbar-logo-link" href="/"><span class="wedeploy-logo"><span class="we-circle"><span class="we">We</span></span><span class="deploy">Deploy\u2122</span><span class="liferay">by Liferay</span><span class="alpha-container"><span class="arrow-up"></span><span class="alpha">alpha</span></span></span></a></div>');
};
if (goog.DEBUG) {
  guide.logo.soyTemplateName = 'guide.logo';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
guide.menu = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(Topbar.render({section: opt_data.site.index}, null, opt_ijData));
};
if (goog.DEBUG) {
  guide.menu.soyTemplateName = 'guide.menu';
}
