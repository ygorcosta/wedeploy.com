// This file was automatically generated from Topbar.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Topbar.
 * @hassoydeltemplate {ElectricNavigation.anchor}
 */

if (typeof Topbar == 'undefined') { var Topbar = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Topbar.render = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(ElectricNavigation.render({depth: 1, elementClasses: 'topbar-list', linkClasses: 'topbar-link', listItemClasses: 'topbar-item', anchorVariant: 'topbar', section: opt_data.section}, null, opt_ijData));
};
if (goog.DEBUG) {
  Topbar.render.soyTemplateName = 'Topbar.render';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Topbar.__deltemplate_s52_99ee0d1f = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(((opt_data.page.url == '//console.wedeploy.com/signup') ? '<a class="btn btn-accent btn-sm get-started" href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(opt_data.page.url)) + '">' : (opt_data.page.url == '//console.wedeploy.com/login') ? '<a class="topbar-link login" href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(opt_data.page.url)) + '">' : (opt_data.page.url == '//chat.wedeploy.com/') ? '<a class="topbar-link" target="_blank" href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(opt_data.page.url)) + '">' : '<a class="topbar-link' + soy.$$escapeHtmlAttribute(opt_data.page.active ? ' active' : '') + '" href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(opt_data.page.redirect != null ? opt_data.page.redirect : opt_data.page.url)) + '">') + soy.$$escapeHtml(opt_data.page.title) + '</a>');
};
if (goog.DEBUG) {
  Topbar.__deltemplate_s52_99ee0d1f.soyTemplateName = 'Topbar.__deltemplate_s52_99ee0d1f';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('ElectricNavigation.anchor'), 'topbar', 0, Topbar.__deltemplate_s52_99ee0d1f);
