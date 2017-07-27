// This file was automatically generated from uptime-status-new-ruby-service-and-more.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace ALvBT.
 */

if (typeof ALvBT == 'undefined') { var ALvBT = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
ALvBT.render = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(blog.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<article><p>' + soy.$$escapeHtml(opt_data.page.description) + '</p><blockquote><p>You\'re shaping the future of this product.</p></blockquote><p>In the last few weeks we\'ve been working day and night to make WeDeploy more stable. Almost two hundred projects have been created since we first launched and dozens of bugs have been fixed.</p><p>Today, we would like to show you some of the things we\'re working on.</p><h4>Uptime Status</h4><p>Even though this is an alpha version and problems are somewhat expected, we recognize the importance of being transparent about outages. That\'s why we would like to share with you a new page where you can check <a href="https://status.wedeploy.com/">WeDeploy\'s uptime status</a>.</p><figure><img src="../images/blog/post-1--0.png" alt="Uptime Status"></figure><h4>Ruby Service</h4><p>Our mission is to create a platform for all kinds of developers. With that in mind, we\'re introducing a new Ruby service. You can get more information by <a href="/docs/other/ruby.html">reading the docs</a> or checking this <a href="https://github.com/wedeploy/boilerplate-ruby">boilerplate</a>. Go to <a href="https://console.wedeploy.com">Console</a> to start using Ruby Service.</p><figure><img class="original-size" src="../images/blog/post-1--1.png" srcset="../images/blog/post-1--1.png 1x, ../images/blog/post-1--1-2x.png 2x" alt="Ruby Service"></figure><blockquote><p>Our mission is to create a platform for all kinds of developers.</p></blockquote><p>If you have any questions, feel free to <a href="https://chat.wedeploy.com/">contact us</a>.</p></article><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.page.title) + '"><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.site.title) + '">')}), null, opt_ijData));
};
if (goog.DEBUG) {
  ALvBT.render.soyTemplateName = 'ALvBT.render';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
ALvBT.soyweb = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(base.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + ALvBT.render(opt_data, null, opt_ijData))}), null, opt_ijData));
};
if (goog.DEBUG) {
  ALvBT.soyweb.soyTemplateName = 'ALvBT.soyweb';
}
