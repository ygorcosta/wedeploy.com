// This file was automatically generated from liferay-hack-day.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace EAIyu.
 */

if (typeof EAIyu == 'undefined') { var EAIyu = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
EAIyu.render = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(blog.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<article><p>' + soy.$$escapeHtml(opt_data.page.description) + '</p><p><strong>Every January, developers from all around the world gather at our Los Angeles office.</strong></p><p>It\'s an exhilarating time together full of talks, catered meals, new friendships, and even spontaneous adventures to the Hollywood sign and the Santa Monica Pier.</p><figure><img src="../images/blog/post-5--0.png" alt="Engineering Retreat"></figure><p>On the final day of the retreat, we put on a hack day (because how could we bring all the engineers to one location without having one?!).</p><blockquote><p>Every year we are amazed at the creativity of the projects, and this year did not disappoint.</p></blockquote><p>There are only two requirements for their projects:</p><ul><li>The code needs to be new</li><li>It has to be pushed to Github</li></ul><p>On top of that, this year we encouraged the teams to use WeDeploy to host their projects. Four teams did, and these were there projects.</p><h4><a href="https://youtu.be/SEtTxgRpw28">Game Room Availability</a></h4><p>Nobody wants to walk all the way down to the Game Room to find that the ping pong table is taken. Never fear, Game Room Availability app is here to show you in real time if anyone is using your game.</p><h6>What they used: <a href="/docs/hosting">WeDeploy\u2122 Hosting</a>.</h6><figure><img src="../images/blog/post-5--1.png" alt="Game Room Availability"></figure><h4><a href="https://youtu.be/Za3nUelYPsE">Liferay Home</a></h4><p>Don\'t ever come home to a freezing cold house again. Liferay home will learn your habits, track your commute, and automate pretty much anything in your house.</p><h6>What they used: <a href="/docs/hosting">WeDeploy\u2122 Hosting</a>, <a href="/docs/data">WeDeploy\u2122 Data</a>.</h6><figure><img src="../images/blog/post-5--2.png" alt="Liferay Home"></figure><h4><a href="https://youtu.be/LfcGDiQq0zI">Release Notes</a></h4><p>Annoyed by manually checking for fix pack releases for Portal 7.0? This team created an app that fetched the fix pack information and sorted them by component so you easily find what you need.</p><h6>What they used: <a href="/docs/hosting">WeDeploy\u2122 Hosting</a>.</h6><figure><img src="../images/blog/post-5--3.png" alt="Release Notes"></figure><h4><a href="https://youtu.be/cYvZuL_9W4M">Chicken Fingers</a></h4><p>Don\'t let the name deceive you, this project was the real deal- and the grand prize winner of the hack day. Using voice recognition, they paved the way for a stellar hands-free-recipe cooking experience.</p><h6>What they used: <a href="/docs/hosting">WeDeploy\u2122 Hosting</a>, <a href="/docs/data">WeDeploy\u2122 Data</a>.</h6><figure><img src="../images/blog/post-5--4.png" alt="Chicken Fingers"></figure><p>We were so impressed with what the teams came up with in less than nine hours! We hope that these projects have inspired you to keep creating, to keep dreaming, and of course, to keep deploying. \uD83D\uDE80</p></article><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.page.title) + '"><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.site.title) + '">')}), null, opt_ijData));
};
if (goog.DEBUG) {
  EAIyu.render.soyTemplateName = 'EAIyu.render';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
EAIyu.soyweb = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(base.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + EAIyu.render(opt_data, null, opt_ijData))}), null, opt_ijData));
};
if (goog.DEBUG) {
  EAIyu.soyweb.soyTemplateName = 'EAIyu.soyweb';
}
