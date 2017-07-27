// This file was automatically generated from 3-reasons-why-you-should-use-environment-variables.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace byZmD.
 */

if (typeof byZmD == 'undefined') { var byZmD = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
byZmD.render = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(blog.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<article><p>There are some really big things coming down the pipe with our Beta release right around the corner, but we just couldn\'t wait to tell you about something we are really excited about: <strong><a href="/docs/intro/environment-variables.html">Environment Variables</a></strong>.</p><p>Environments have been around for a while, mainly hiding in the deep code forests, so we wanted to highlight them and share that we wrote some fresh documentation so you can start using them right away!</p><figure><img src="../images/blog/post-7--0.gif" alt="Adding environment variables"></figure><p><em>Here are a couple easy ways they can improve your app!</em>\u200B</p><h4>\uD83D\uDE80 Change Hosting serve directory</h4><p>By default, WeDeploy Hosting looks to your service\'s root directory to know what files to serve, but what if you are using a Gulp or Grunt build task to compile your files? No problem, just add the <code>WEDEPLOY_WEB_PATH</code> key and use the build path as your value.</p><p><strong>See the full list at our <a href="/docs/hosting/environment-variables.html">Hosting Environment Variable Docs</a></strong>.</p><h4>\uD83D\uDD10 Integrate OAuth into your app</h4><p>Want your users to log in with Facebook, Google, or Github accounts? Perfect, because that is super easy to do with WeDeploy Auth. Start by just adding a few environment variables for each provider.</p><p><strong>See the full list at our <a href="/docs/auth/environment-variables.html">Auth Environment Variable Docs</a></strong>.</p><h4>\uD83D\uDCE7 Change Email provider</h4><p>WeDeploy Email supplies you with an email service straight out of the box, but what if you want to use your own SMTP server? With Environment Variables, you can change the email host, username, port, and much more.</p><p><strong>See the full list at our <a href="/docs/email/environment-variables.html">Email Environment Variable Docs</a></strong>.</p><p>That\'s it! If you have any question, just <a href="mailto:team@wedeploy.com">shoot us an email</a> or join the conversation on <a href="https://chat.wedeploy.com/">Slack</a>.</p><p>Happy coding! \uD83D\uDCBB</p></article><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.page.title) + '"><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.site.title) + '">')}), null, opt_ijData));
};
if (goog.DEBUG) {
  byZmD.render.soyTemplateName = 'byZmD.render';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
byZmD.soyweb = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(base.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + byZmD.render(opt_data, null, opt_ijData))}), null, opt_ijData));
};
if (goog.DEBUG) {
  byZmD.soyweb.soyTemplateName = 'byZmD.soyweb';
}
