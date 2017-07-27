// This file was automatically generated from wedeploy-beta-our-biggest-release-yet.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace hHShP.
 */

if (typeof hHShP == 'undefined') { var hHShP = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
hHShP.render = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(blog.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<article><p><a href="https://console.wedeploy.com" target="_blank"><figure style="margin-top: -1.5rem"><img src="../images/blog/post-12--0.png" alt="Introducing WeDeploy Beta"></figure></a></p><p>' + soy.$$escapeHtml(opt_data.page.description) + '</p><p>But first, a little backstory.</p><h4>Where we\'ve come</h4><p>314 days ago, we launched the first app on WeDeploy. It was such an exhilarating time but we had our eyes set on the future.</p><p>The thing is, WeDeploy didn\'t start as &quot;WeDeploy&quot;. Almost two years ago, me and a few others spent our spare time working on this project called Launchpad. It was just a shadow of what WeDeploy is today, but it was a start. It was <strong>our</strong> start.</p><p>After that first app was deployed, we got right back to work. Yes, we had achieved something, but it still had much room to grow. We needed to challenge our own mindset and imagination in order to create a platform that could change the way people develop software. We believe that this release puts us much closer to that goal.</p><hr><h4>What changed?</h4><h5>1. New Infrastructure on AWS</h5><p>One of the biggest changes was moving the WeDeploy infrastructure from our servers in the Liferay Headquarters to AWS. We knew that in order to continue to grow and expand globally, we had to start preparing now.</p><p>This move has greatly impacted the stability of WeDeploy and even though we don\'t support multi-region deployments yet, we are excited that this change will make that possible in the near future.</p><h5>2. Rewritten CLI, API, and Dashboard</h5><p>One of our goals the past nine months was not to just build on top of what we had, but to also rethink the way we built WeDeploy and be willing to rebuilt parts of it from the ground up if needed.</p><p>We\'ve spent hours and days refactoring the CLI, API, and Dashboard (which is now known as Console) and I can confidently say, it was worth it! By refactoring, we gave ourselves the opportunity to not only clean up the code, but to also improve performance, usability, and the overall design.</p><h5>3. HTTPS Out of the Box</h5><p>Yes, now every project you deploy and every service you install will automatically be given an HTTPS certificate. This means your app will safely communicate with your users without you having to configure anything.</p><p>We also make sure that those HTTPS certificates are valid by renewing them from time to time. That way you can always trust that your application will be secured.</p><h5>4. Custom Docker Services</h5><p>The container ecosystem has evolved a lot in the past years and <a href="https://www.docker.com/">Docker</a> is probably mainly responsible for such success.</p><p>Today we want to bring the benefits of this technology to you and facilitate the Docker-based development workflow. That\'s why we\'re introducing <code>Dockerfile</code> support.</p><p>During alpha you were limited by the services we provided, now your imagination is the limit. This opens up the possibility to deploy pretty much anything and we look forward to see what you\'re going to create.</p><p><em>Read more on the <a href="/docs/deploy/deploying-docker.html">documentation</a> or follow our <a href="/tutorials/docker/get-started.html">step-by-step tutorial</a>.</em></p><h5>5. Volume Support</h5><p>With the addition of custom Docker services, new challenges arrive. For example, let\'s say you deploy an app with PHP and MySQL, then you start adding entries to your database. What happens when you restart that project without a proper setup? Well, you\'re going to lose all the data that was saved.</p><p>In order to be able to persist and share data between services, we\'re introducing the concept of volumes. Quite simply, volumes are specially-designated directories that live outside of the file system where your code runs. This way, even if your application becomes unavailable due to a failure or other causes, your data still persists.</p><p><em>Read more on the <a href="#">documentation</a>.</em></p><h5>6. Instant Deployment</h5><p>Before you had to use Git, now it\'s <code>we deploy</code></p><p>Deploying should be the least of your worries, which is why we created a new Instant Deployment option! Using our simple <a href="/docs/intro/using-the-command-line.html">CLI</a></p><p><em>Read more on the <a href="/docs/deploy/instant-deployment.html">documentation</a>.</em></p><h5>7. Code Detector</h5><p>Before you always had to declare a container.json, now you can skip for certain situations.</p><p>our code-recipe detector, you can type <code>we deploy</code> in any folder containing static files, a Node.js app, or a Dockerfile and we will take it from there.</p><p><em>Read more on the <a href="/docs/deploy/instant-deployment.html">documentation</a>.</em></p><hr><h4>What\'s next?</h4><p>Some of these changes have implications on the way your current apps will deploy on the new infrastructure. But don\'t worry, we already have a <strong><a href="/blog/how-to-migrate-your-project-to-beta.html">Migration Guide</a></strong> ready for you so you can get started right away.</p><p><strong>What about my alpha projects?</strong> Don\'t worry, they are still there, but we will be <strong>destroying</strong> the old infrastructure on August 31st so you have one month to migrate your projects over.</p><p>We are so excited to be able to share this new release with you! Make sure to <strong><a href="https://console.wedeploy.com">try it out for yourself</a></strong> and <a href="https://chat.wedeploy.com">join our community</a> to ask questions or let us know what you are building!</p></article><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.page.title) + '"><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.site.title) + '">')}), null, opt_ijData));
};
if (goog.DEBUG) {
  hHShP.render.soyTemplateName = 'hHShP.render';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
hHShP.soyweb = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(base.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + hHShP.render(opt_data, null, opt_ijData))}), null, opt_ijData));
};
if (goog.DEBUG) {
  hHShP.soyweb.soyTemplateName = 'hHShP.soyweb';
}
