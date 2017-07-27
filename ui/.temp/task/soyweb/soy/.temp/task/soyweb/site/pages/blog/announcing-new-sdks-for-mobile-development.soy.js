// This file was automatically generated from announcing-new-sdks-for-mobile-development.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace RihtB.
 */

if (typeof RihtB == 'undefined') { var RihtB = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
RihtB.render = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(blog.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<article><p>' + soy.$$escapeHtml(opt_data.page.description) + '</p><figure><img src="../images/blog/post-11--0.png" alt="New SDK\'s for mobile development"></figure><p>Nowadays, we live in a world full of devices. From watching movies on your Apple TV, Receiving notifications on your smart watch, or reading books on your Kindle, we rarely go anywhere without our devices. It doesn\'t seem to be slowing down either; more and more devices are being built and more and more services are being created for them.</p><blockquote><p>Mobile and web development just isn\'t enough, we are entering an age of multi-device development.</p></blockquote><p>That\'s why WeDeploy was born with more than web development in mind. We understood that as more and more devices consumed API\'s, this would be the future of development.</p><p>We didn\'t want to just use raw HTTP requests, so we built API Clients that could be called easily and safely. You already know about our <a href="/docs/intro/using-the-api-client.html#1">JavaScript client</a>, but starting today, there are two new kids on the block.</p><p><strong>Introducing the new WeDeploy <a data-senna-off target="_blank" href="/docs/intro/using-the-api-client.html#2">iOS (Swift)</a> and <a data-senna-off target="_blank" href="/docs/intro/using-the-api-client.html#3">Android (Java)</a> SDKs.</strong></p><p>With them, you will be able to build apps for the following platforms:</p><ul><li><strong>Apple</strong>: iOS (iPhone, iPad, iPod Touch), watchOS (AppleWatch), tvOS (AppleTV), macOS (CarPlay and Desktop apps).</li><li><strong>Google</strong>: Android phones and tablets, Android Wear, Android TV, Android Auto and any platform that supports Java!</li></ul><figure><img src="../images/blog/post-11--1.gif" alt="Realtime communication across devices"></figure><h4>What can I do on those mobile platforms?</h4><p>Mainly, the clients provides you access to:</p><ul><li><strong>Data service</strong>: Search inside your schema-less database or communicate in realtime with other apps, not matter the platform, using WebSockets under the hood. <br><em>\u21B3 See <a data-senna-off target="_blank" href="/tutorials/data-ios/">iOS (Swift)</a> and <a data-senna-off target="_blank" href="/tutorials/data-android/">Android (Java)</a> tutorials.</em><br><br></li><li><strong>Auth service</strong>: Create or authenticate users, reset passwords or sign-in using Google, Facebook or Github\'s OAuth2. <br><em>\u21B3 See <a data-senna-off target="_blank" href="/tutorials/auth-ios/">iOS (Swift)</a> and <a data-senna-off target="_blank" href="/tutorials/auth-android/">Android (Java)</a> tutorials.</em><br><br></li><li><strong>Email service</strong>: Send emails directly from your app and check their delivery status. <br><em>\u21B3 See <a data-senna-off target="_blank" href="/tutorials/email-ios/">iOS (Swift)</a> and <a data-senna-off target="_blank" href="/tutorials/email-android/">Android (Java)</a> tutorials.</em><br><br></li><li><strong>Raw HTTP Requests</strong>: and if you would like to build your own HTTP requests, you can using our fluent API.</li></ul><h4>How do I start</h4><p>Just use the regular package managers for each platform.</p>' + ElectricCode.render({code: soydata.$$markUnsanitizedTextForInternalBlocks('target \'MyApp\' do\n  use_frameworks!\n\n  ... rest of your dependencies ...\n  pod \'WeDeploy\'\nend'), mode: 'Podfile'}, null, opt_ijData) + ElectricCode.render({code: soydata.$$markUnsanitizedTextForInternalBlocks('dependencies {\n    ... rest of your dependencies ...\n    compile \'com.wedeploy:com.wedeploy.android:beta-20170505\'\n}'), mode: 'build.gradle'}, null, opt_ijData) + '<h4>It\'s that easy!</h4><p>So, the only thing left to do is to go to the <a href="/docs/">documentation</a> and start deploying your mobile apps!</p><p>Don\'t forget to let us know how it goes! You can connect with us on <a href="https://twitter.com/wedeploy">Twitter</a> or join our community on <a href="https://chat.wedeploy.com">Slack</a>.</p></article><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.page.title) + '"><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.site.title) + '">')}), null, opt_ijData));
};
if (goog.DEBUG) {
  RihtB.render.soyTemplateName = 'RihtB.render';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
RihtB.soyweb = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(base.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + RihtB.render(opt_data, null, opt_ijData))}), null, opt_ijData));
};
if (goog.DEBUG) {
  RihtB.soyweb.soyTemplateName = 'RihtB.soyweb';
}
