// This file was automatically generated from blog.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace blog.
 * @public
 */

goog.module('blog.incrementaldom');

/** @suppress {extraRequire} */
goog.require('soy');
/** @suppress {extraRequire} */
goog.require('soydata');
/** @suppress {extraRequire} */
goog.require('goog.i18n.bidi');
/** @suppress {extraRequire} */
goog.require('goog.asserts');
/** @suppress {extraRequire} */
goog.require('goog.string');
var IncrementalDom = goog.require('incrementaldom');
var ie_open = IncrementalDom.elementOpen;
var ie_close = IncrementalDom.elementClose;
var ie_void = IncrementalDom.elementVoid;
var ie_open_start = IncrementalDom.elementOpenStart;
var ie_open_end = IncrementalDom.elementOpenEnd;
var itext = IncrementalDom.text;
var iattr = IncrementalDom.attr;
var $import1 = goog.require('main.incrementaldom');
var $templateAlias1 = $import1.render;


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ignored, opt_ijData) {
  opt_data = opt_data || {};
  var param117 = function() {
    ie_open('div', null, null,
        'class', 'blog');
      $mainPost(opt_data, null, opt_ijData);
      $olderPosts(opt_data, null, opt_ijData);
    ie_close('div');
  };
  $templateAlias1(soy.$$assignDefaults({elementClasses: 'blog', content: param117, currentPage: 'blog'}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'blog.render';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $mainPost(opt_data, opt_ignored, opt_ijData) {
  ie_open('article', null, null,
      'class', 'container');
    ie_open('header');
      ie_open('small');
        itext('By ');
        var dyn7 = opt_data.page.author;
        if (typeof dyn7 == 'function') dyn7(); else if (dyn7 != null) itext(dyn7);
        itext(' ');
        ie_open('span');
          itext('| ');
          var dyn8 = opt_data.page.date;
          if (typeof dyn8 == 'function') dyn8(); else if (dyn8 != null) itext(dyn8);
        ie_close('span');
      ie_close('small');
      ie_open('h1');
        var dyn9 = opt_data.page.title;
        if (typeof dyn9 == 'function') dyn9(); else if (dyn9 != null) itext(dyn9);
      ie_close('h1');
    ie_close('header');
    ie_open('div', null, null,
        'class', 'content');
      var dyn10 = opt_data.content;
      if (typeof dyn10 == 'function') dyn10(); else if (dyn10 != null) itext(dyn10);
      ie_open('div', null, null,
          'class', 'we-container');
        ie_open('span', null, null,
            'class', 'we-circle');
          ie_open('span', null, null,
              'class', 'we');
            itext('We');
          ie_close('span');
        ie_close('span');
      ie_close('div');
    ie_close('div');
  ie_close('article');
}
exports.mainPost = $mainPost;
if (goog.DEBUG) {
  $mainPost.soyTemplateName = 'blog.mainPost';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $olderPosts(opt_data, opt_ignored, opt_ijData) {
  ie_open('div', null, null,
      'class', 'posts-list');
    ie_open('div', null, null,
        'class', 'container');
      var blogObject__soy136 = opt_data.site.index.children['blog'];
      var childIdList148 = blogObject__soy136.childIds;
      var childIdListLen148 = childIdList148.length;
      for (var childIdIndex148 = 0; childIdIndex148 < childIdListLen148; childIdIndex148++) {
        var childIdData148 = childIdList148[childIdIndex148];
        if (opt_data.page.url != blogObject__soy136.children[childIdData148].url && childIdIndex148 < 4) {
          ie_open('div', null, null,
              'class', 'post-item container-blog');
            ie_open('a', null, null,
                'class', 'post-item__link',
                'href', blogObject__soy136.children[childIdData148].url);
              ie_open('small');
                itext('By ');
                var dyn11 = blogObject__soy136.children[childIdData148].author;
                if (typeof dyn11 == 'function') dyn11(); else if (dyn11 != null) itext(dyn11);
                itext(' ');
                ie_open('span');
                  itext('| ');
                  var dyn12 = blogObject__soy136.children[childIdData148].date;
                  if (typeof dyn12 == 'function') dyn12(); else if (dyn12 != null) itext(dyn12);
                ie_close('span');
              ie_close('small');
              ie_open('h4', null, null,
                  'class', 'post-item__title');
                var dyn13 = blogObject__soy136.children[childIdData148].title;
                if (typeof dyn13 == 'function') dyn13(); else if (dyn13 != null) itext(dyn13);
              ie_close('h4');
            ie_close('a');
          ie_close('div');
        }
      }
    ie_close('div');
  ie_close('div');
}
exports.olderPosts = $olderPosts;
if (goog.DEBUG) {
  $olderPosts.soyTemplateName = 'blog.olderPosts';
}
