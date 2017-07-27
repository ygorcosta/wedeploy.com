// This file was automatically generated from Sidebar.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Sidebar.
 * @hassoydeltemplate {ElectricNavigation.anchor}
 */

if (typeof Sidebar == 'undefined') { var Sidebar = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Sidebar.render = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<nav class="sidebar"><a class="sidebar-header toggler-header-collapsed"><span class="sidebar-icon icon-16-menu"></span><span>Docs Menu</span><span class="sidebar-icon-right"><span class="icon-12-arrow-down-short"></span><span class="icon-12-arrow-up-short"></span></span></a><div class="sidebar-toggler-content toggler-collapsed"><div class="sidebar-search">' + ElectricSearchAutocomplete.render({maxResults: 3, path: '/docs/', placeholder: 'Search Docs'}, null, opt_ijData) + '</div>' + ElectricNavigation.render({elementClasses: 'sidebar-list sidebar-list-1', listItemClasses: 'sidebar-item', anchorVariant: 'sidebar', section: opt_data.page}, null, opt_ijData) + '</div></nav>');
};
if (goog.DEBUG) {
  Sidebar.render.soyTemplateName = 'Sidebar.render';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Sidebar.__deltemplate_s32_d34389eb = function(opt_data, opt_ignored, opt_ijData) {
  var output = '';
  var linkSelect__soy33 = opt_data.page.active && ('' + opt_data.page.url).indexOf('.html') != -1;
  output += '<a class="sidebar-link' + soy.$$escapeHtmlAttribute(linkSelect__soy33 ? ' sidebar-link-selected' : '') + '" href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(opt_data.page.url)) + '"><span class="sidebar-icon icon-16-' + soy.$$escapeHtmlAttribute(opt_data.page.icon) + '"></span><span>' + soy.$$escapeHtml(opt_data.page.title) + '</span></a>';
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  Sidebar.__deltemplate_s32_d34389eb.soyTemplateName = 'Sidebar.__deltemplate_s32_d34389eb';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('ElectricNavigation.anchor'), 'sidebar', 0, Sidebar.__deltemplate_s32_d34389eb);
