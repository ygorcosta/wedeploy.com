// This file was automatically generated from happy-new-year-from-wedeploy.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace ecqYh.
 */

if (typeof ecqYh == 'undefined') { var ecqYh = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
ecqYh.render = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(blog.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<article><p>' + soy.$$escapeHtml(opt_data.page.description) + '</p><p>Last year, on September 20th, the very first app was created on WeDeploy. After that, we went to Chicago, Milan, London, Darmstad, and S\u00E3o Paulo to spread the word about this new product.</p><figure><img src="../images/blog/post-3--0.png" alt="WeDeploy Presentation"></figure><p>Today, we\'re serving hundreds of projects from awesome developers like you. We\'re proud. We\'re thankful. We\'re motivated! So, thank you all for being on this journey with us.</p><blockquote><p>We\'re serving hundreds of projects from awesome developers like you.</p></blockquote><p>And you know what, this is just the beginning. We have new and amazing stuff coming soon, including brand new services and tons of scalability improvements for you.</p><p>Happy New Year!</p><figure><img src="../images/blog/post-3--1.png" alt="WeDeploy Team"></figure></article><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.page.title) + '"><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.site.title) + '">')}), null, opt_ijData));
};
if (goog.DEBUG) {
  ecqYh.render.soyTemplateName = 'ecqYh.render';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
ecqYh.soyweb = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(base.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + ecqYh.render(opt_data, null, opt_ijData))}), null, opt_ijData));
};
if (goog.DEBUG) {
  ecqYh.soyweb.soyTemplateName = 'ecqYh.soyweb';
}
