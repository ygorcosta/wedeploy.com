// This file was automatically generated from tutorial.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace tutorial.
 */

if (typeof tutorial == 'undefined') { var tutorial = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
tutorial.render = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div class="' + soy.$$escapeHtmlAttribute(opt_data.elementClasses != null ? opt_data.elementClasses : 'main') + '"><main class="content"><div class="tutorial">' + ((opt_data.page) ? TutorialSidebar.render({page: opt_data.site.index.children['tutorials'].children[opt_data.page.parentId]}, null, opt_ijData) + tutorial.tutorials(opt_data, null, opt_ijData) : '') + '</div></main></div>');
};
if (goog.DEBUG) {
  tutorial.render.soyTemplateName = 'tutorial.render';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
tutorial.tutorials = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div class="sidebar-offset">' + TutorialTopbar.render({elementClasses: 'topbar-light', page: opt_data.page, logo: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<div class="topbar-logo"><span class="wedeploy-logo dashboard-logo"><span class="we-circle"><span class="we">We</span></span></span></div>')}, null, opt_ijData) + '<div class="container"><div class="container-blog card">' + soy.$$escapeHtml(opt_data.content) + tutorial.footerButtons(opt_data, null, opt_ijData) + '</div></div></div>');
};
if (goog.DEBUG) {
  tutorial.tutorials.soyTemplateName = 'tutorial.tutorials';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
tutorial.footerButtons = function(opt_data, opt_ignored, opt_ijData) {
  var output = '<div class="tutorial-page-nav">';
  var tutorialObject__soy445 = opt_data.site.index.children['tutorials'].children[opt_data.page.parentId];
  if (opt_data.page.weight < tutorialObject__soy445.childIds.length) {
    var nextPageUrl__soy448 = tutorialObject__soy445.children[tutorialObject__soy445.childIds[opt_data.page.weight]].url;
    output += ((opt_data.site.githubRepo) ? '<a href="https://github.com/' + soy.$$escapeHtmlAttribute(opt_data.site.githubRepo) + '/issues/new?title=Tutorial+Problem&body=%3E+URL%3A+' + soy.$$escapeUri(opt_data.page.url) + '" target="_blank" class="btn btn-default btn-sm">Report a problem</a>' : '') + ((opt_data.page.buttonTitle) ? '<a href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(nextPageUrl__soy448)) + '" class="btn btn-accent btn-sm">' + soy.$$escapeHtml(opt_data.page.buttonTitle) + '</a>' : '');
  }
  output += '</div>';
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  tutorial.footerButtons.soyTemplateName = 'tutorial.footerButtons';
}
