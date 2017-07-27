// This file was automatically generated from blog.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace blog.
 */

if (typeof blog == 'undefined') { var blog = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
blog.render = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(main.render(soy.$$augmentMap(opt_data, {elementClasses: 'blog', content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<div class="blog">' + blog.mainPost(opt_data, null, opt_ijData) + blog.olderPosts(opt_data, null, opt_ijData) + '</div>'), currentPage: 'blog'}), null, opt_ijData));
};
if (goog.DEBUG) {
  blog.render.soyTemplateName = 'blog.render';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
blog.mainPost = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<article class="container"><header><small>By ' + soy.$$escapeHtml(opt_data.page.author) + ' <span>| ' + soy.$$escapeHtml(opt_data.page.date) + '</span></small><h1>' + soy.$$escapeHtml(opt_data.page.title) + '</h1></header><div class="content">' + soy.$$escapeHtml(opt_data.content) + '<div class="we-container"><span class="we-circle"><span class="we">We</span></span></div></div></article>');
};
if (goog.DEBUG) {
  blog.mainPost.soyTemplateName = 'blog.mainPost';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
blog.olderPosts = function(opt_data, opt_ignored, opt_ijData) {
  var output = '<div class="posts-list"><div class="container">';
  var blogObject__soy298 = opt_data.site.index.children['blog'];
  var childIdList299 = blogObject__soy298.childIds;
  var childIdListLen299 = childIdList299.length;
  for (var childIdIndex299 = 0; childIdIndex299 < childIdListLen299; childIdIndex299++) {
    var childIdData299 = childIdList299[childIdIndex299];
    output += (opt_data.page.url != blogObject__soy298.children[childIdData299].url && childIdIndex299 < 4) ? '<div class="post-item container-blog"><a class="post-item__link" href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(blogObject__soy298.children[childIdData299].url)) + '"><small>By ' + soy.$$escapeHtml(blogObject__soy298.children[childIdData299].author) + ' <span>| ' + soy.$$escapeHtml(blogObject__soy298.children[childIdData299].date) + '</span></small><h4 class="post-item__title">' + soy.$$escapeHtml(blogObject__soy298.children[childIdData299].title) + '</h4></a></div>' : '';
  }
  output += '</div></div>';
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  blog.olderPosts.soyTemplateName = 'blog.olderPosts';
}
