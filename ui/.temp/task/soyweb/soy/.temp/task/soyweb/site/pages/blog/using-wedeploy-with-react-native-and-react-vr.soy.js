// This file was automatically generated from using-wedeploy-with-react-native-and-react-vr.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace rRwWs.
 */

if (typeof rRwWs == 'undefined') { var rRwWs = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
rRwWs.render = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(blog.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<article><p>' + soy.$$escapeHtml(opt_data.page.description) + '</p><p>As a fundamental player in today\'s development around the world, JavaScript is a key member of that WeDeploy family, but until recently, our API Client only supported Web and Node.js applications. That\'s why we are excited to announce that <strong><a href="https://facebook.github.io/react-native/">React Native</a> and <a href="https://facebook.github.io/react-vr/">React VR</a> are joining the list too</strong>!</p><figure><a href="https://github.com/wedeploy/boilerplate-data/tree/react-native" target="_blank"><img src="../images/blog/post-9--0.png" alt="React Native"></a></figure><p>If you are not aware of <a href="https://facebook.github.io/react-native/">React Native</a>, this is it in a nutshell - it allows you to build mobile applications using only JavaScript. Interestingly, you don\'t build a &quot;hybrid app&quot;; rather, you use the same UI building blocks as a regular iOS and Android application, and leverage the full power of the mobile platforms to create a real, first class mobile application.</p><p>Also, <a href="https://facebook.github.io/react-vr">React VR</a> allows you to step into the the Virtual Reality and build VR websites and interactive 360 experiences with React.</p><h4>Using WeDeploy in React Native and React VR</h4><p>There is no difference between the usage of the JavaScript API for Web and React Native or React VR. The same API calls for <a href="/docs/data/saving-data.html">Data</a>, <a href="/docs/auth/manage-users.html">Auth</a>, and <a href="/docs/email/sending-email.html">Email</a> are available when your app is running in React Native or React VR environment too. There are no API nuances - the same code you would write for a Web application, will run successfully on React Native and React VR too.</p><p>Here is <a href="https://github.com/wedeploy/boilerplate-data/blob/43e5d19b49ac3d5b59f7ec646f36aadd1cecc616/TodoApp/pages/list-items.js#L24-L36">an example taken from the boilerplate application</a>:</p>' + ElectricCode.render({code: soydata.$$markUnsanitizedTextForInternalBlocks('WeDeploy\n  .data(\'<data-url-here>\')\n  .orderBy(\'id\', \'desc\')\n  .limit(5)\n  .get(\'tasks\')\n  .then((tasks) => {\n    this.setState({\n      items: tasks\n    });\n  })\n  .catch((error) => {\n    console.error(error);\n  });'), mode: 'text/javascript'}, null, opt_ijData) + '<p>The above code establishes a connection with the Data Service and retrieves the first five To-do tasks, then sets them to the <code>state</code> of the component to be rendered on the screen.</p><h4>Building an application</h4><p>To help you start building applications, we created an example To-Do List application. You may check the code <a href="https://github.com/wedeploy/boilerplate-data/tree/react-native">here</a>. The application is short but powerful enough to showcase a few fundamental things:</p><ol><li>Instantiating WeDeploy</li><li>Working with the data service</li><li>Working with Real-time events</li><li>Sharing application code between iOS and Android.</li></ol><p>Here is what the To-Do List application looks like:</p><figure><video controls style="max-width: 300px;"><source src="../images/blog/post-9--1.webm" type="video/webm"><source src="../images/blog/post-9--1.mp4" type="video/mp4">Your browser doesn\'t support HTML5 video in WebM with VP8/VP9 or MP4 with H.264.</video></figure><p>We are excited to see what you start building with WeDeploy using React Native and React VR!</p></article><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.page.title) + '"><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.site.title) + '">')}), null, opt_ijData));
};
if (goog.DEBUG) {
  rRwWs.render.soyTemplateName = 'rRwWs.render';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
rRwWs.soyweb = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(base.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + rRwWs.render(opt_data, null, opt_ijData))}), null, opt_ijData));
};
if (goog.DEBUG) {
  rRwWs.soyweb.soyTemplateName = 'rRwWs.soyweb';
}
