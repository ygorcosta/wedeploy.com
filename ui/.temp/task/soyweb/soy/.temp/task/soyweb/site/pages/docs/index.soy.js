// This file was automatically generated from index.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace pageDocsIndex.
 */

if (typeof pageDocsIndex == 'undefined') { var pageDocsIndex = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
pageDocsIndex.render = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(docs.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + pageDocsIndex.topics(opt_data, null, opt_ijData))}), null, opt_ijData));
};
if (goog.DEBUG) {
  pageDocsIndex.render.soyTemplateName = 'pageDocsIndex.render';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
pageDocsIndex.topics = function(opt_data, opt_ignored, opt_ijData) {
  var output = '<div class="container-hybrid docs-home-top"><div class="row"><div class="col-xs-14 col-xs-offset-1 col-md-16 col-md-offset-0"><h1 class="docs-home-top-title">WeDeploy Docs Center</h1><p class="docs-home-top-description">Start learning how to leverage the power of ' + soy.$$escapeHtml(opt_data.site.title) + ' in your project.</p></div></div><div class="row"><div class="container-hybrid"><div class="row"><div class="col-xs-14 col-xs-offset-1 col-md-10 col-md-offset-3 col-lg-6 col-lg-offset-5"><div class="search">' + ElectricSearchAutocomplete.render({maxResults: 3, path: '/docs/', placeholder: 'Enter a search term here'}, null, opt_ijData) + '</div></div></div></div></div></div><div class="docs-home-topics"><div class="container-hybrid"><div class="row"><div class="col-xs-14 col-xs-offset-1 "><section class="docs-home-middle"><h2 class="docs-home-middle-subtitle">Choose a Guide</h2><p class="docs-home-middle-description">Each one provides step by step coverage for every core feature.</p></section></div></div><div class="row"><div class="col-md-12 col-md-offset-2 col-xs-16"><div class="row">';
  var childIdList749 = opt_data.page.childIds;
  var childIdListLen749 = childIdList749.length;
  for (var childIdIndex749 = 0; childIdIndex749 < childIdListLen749; childIdIndex749++) {
    var childIdData749 = childIdList749[childIdIndex749];
    output += (! opt_data.page.children[childIdData749].hidden) ? '<div class="col-md-8 col-md-offset-0 col-xs-14 col-xs-offset-1"><a class="topic radial-out" href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(opt_data.page.children[childIdData749].url)) + '"><div class="topic-icon"><span class="icon-16-' + soy.$$escapeHtmlAttribute(opt_data.page.children[childIdData749].icon) + '"></span></div><h3 class="topic-title">' + soy.$$escapeHtml(opt_data.page.children[childIdData749].title) + '</h3></a></div>' : '';
  }
  output += '</div></div></div></div></div>';
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  pageDocsIndex.topics.soyTemplateName = 'pageDocsIndex.topics';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
pageDocsIndex.soyweb = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(base.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + pageDocsIndex.render(opt_data, null, opt_ijData))}), null, opt_ijData));
};
if (goog.DEBUG) {
  pageDocsIndex.soyweb.soyTemplateName = 'pageDocsIndex.soyweb';
}
