// This file was automatically generated from TutorialSidebar.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace TutorialSidebar.
 * @hassoydeltemplate {ElectricNavigation.anchor}
 */

if (typeof TutorialSidebar == 'undefined') { var TutorialSidebar = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
TutorialSidebar.render = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div class="sidebar-navigation' + soy.$$escapeHtmlAttribute(opt_data.navigationToggler ? ' open' : '') + '"><div class="sidebar-navigation-fade" data-onclick="closeNavigationMenu"></div><nav class="sidebar">' + ElectricNavigation.render({elementClasses: 'sidebar-list', listItemClasses: 'sidebar-item', anchorVariant: 'tutorial', section: opt_data.page}, null, opt_ijData) + '</nav></div>');
};
if (goog.DEBUG) {
  TutorialSidebar.render.soyTemplateName = 'TutorialSidebar.render';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
TutorialSidebar.__deltemplate_s85_88c0813b = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<a class="sidebar-link' + soy.$$escapeHtmlAttribute(opt_data.page.active ? ' sidebar-link-selected' : '') + '" href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(opt_data.page.url)) + '" data-time="' + soy.$$escapeHtmlAttribute(opt_data.page.time) + '"><span class="before"></span><span class="tutorial-step">' + soy.$$escapeHtml(opt_data.page.weight) + '</span><span class="section-title">' + soy.$$escapeHtml(opt_data.page.title) + '</span><span class="after"></span></a>');
};
if (goog.DEBUG) {
  TutorialSidebar.__deltemplate_s85_88c0813b.soyTemplateName = 'TutorialSidebar.__deltemplate_s85_88c0813b';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('ElectricNavigation.anchor'), 'tutorial', 0, TutorialSidebar.__deltemplate_s85_88c0813b);
