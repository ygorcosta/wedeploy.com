// This file was automatically generated from how-to-migrate-projects-to-beta.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace WTLOZ.
 */

if (typeof WTLOZ == 'undefined') { var WTLOZ = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
WTLOZ.render = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(blog.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<article><figure style="margin-top: -1.5rem"><img src="../images/blog/post-13--0.png" alt="Beta Migration"></figure><p>On July 31st, we announced <a href="/blog/wedeploy-beta-our-biggest-release-yet.html">our new Beta version of WeDeploy</a>. With that release we introduced the new infrastructure on AWS that can be accessed by our <a href="https://console.wedeploy.com">Console</a>. Along with that big infrastructure change, we also introduced other things like custom Docker images and HTTPS, which lead to a big question that you might be asking yourself: will the projects I built on Alpha work on Beta? The answer is \'yes\', but there are a few easy changes that need to be made. Below is a guide on how to seamlessly do that!</p><p>If you have any trouble, feel free to tap on the green button in the bottom corner to talk to a WeDeploy human, we\'d love to help.</p><hr><h4>Migrating Projects</h4><p>We have made some fundamental changes to the way you setup your project source code and simplified the way you deploy your apps. Walk through these easy steps and your project will be ready for deployment.</p><h5>Step One: Configuration Files</h5><ol><li>Delete <code>project.json</code>. We no longer support these files.</li><li>Rename all <code>container.json</code> files to <code>wedeploy.json</code>.</li><li>In <code>wedeploy.json</code>, change <code>type</code> to <code>image</code> and add <code>:beta</code> tag.</li></ol><p>Here is an example of what the new <code>wedeploy.json</code> will look like.</p>' + ElectricCode.render({code: soydata.$$markUnsanitizedTextForInternalBlocks('{\n    "id": "ui",\n    "image": "wedeploy/hosting:beta"\n}'), mode: 'application/json'}, null, opt_ijData) + '<aside><h6><span class="icon-16-alert"></span> Attention</h6><p>We no longer support the Java, Node.js, and Ruby WeDeploy images. To deploy projects with those languages, you can simply remove the <code>image</code> variable completely from your <code>wedeploy.json</code> and we will automatically detect the type of build you need.</p></aside><h5>Step Three: API Client</h5><ol><li>Update your CDN API links to <code>https</code> (yes, just simply add the \'s\').</li><li>Each service now has its own domain instead of being a subdomain of your project. This means you must update your API endpoints (<em>serviceID-projectID.wedeploy.io</em>).</li><li>Remove hardcoded protocals (<code>http://</code>) on API URL\'s.</li><li>The Email API for JavaScript has changes. See <a href="/docs/email/sending-email.html">the documentation</a>.</li><li>Update your Auth redirect URL\'s for your registered apps if you use OAuth providers like Google and Github. There is no way to migrate your previous users manually. To do so, reach out to us with the green circle button below and we can help you port your userbase.</li></ol><hr><h4>Migrating Data Collections</h4><p>Once you have your project redeployed on the Console, you might want to migrate your old data to your new site. Follow these instructions to do that.</p><h5>Step One: Save Data</h5><ol><li>Go to the <a href="http://dashboard.wedeploy.com">Dashboard</a> of the project you are fetching the collection from and select the Data service.</li><li>Click the link of your data service at the top and amend the collection you are wanting to migrate to the url like this: <code>data-demo.wedeploy.io/todos</code>. If you have authentication parameters on your collection, you will need to update your <code>api.json</code> and deploy again.</li><li>Now that you can see a your collection, press cmd + s to save as a JSON file onto your machine.</li></ol><h5>Step Two: Post Data</h5><ol><li><p>Now open up your terminal and paste the script below. Make sure to replace your new project\u2019s info in place of serviceID, projectID, [desired] collectionID, and masterToken.</p>' + ElectricCode.render({code: soydata.$$markUnsanitizedTextForInternalBlocks('curl --request POST \\\n  --url https://serviceID-projectID.wedeploy.sh/collectionID \\\n  --header \'authorization: bearer masterToken\' \\\n  --header \'content-type: application/json\' \\\n  --data \'databaseDocuments\''), mode: 'xml'}, null, opt_ijData) + '</li><li><p>Open the JSON file you saved, select all the contents, copy to your clipboard, and paste into the script where you see databaseDocuments (inside the apostrophes).</p></li><li><p>Now you can run the command. If it worked, you should see a response similar to this:</p>' + ElectricCode.render({code: soydata.$$markUnsanitizedTextForInternalBlocks('{"hasFailures":false,"results":[{"created":true,"document":{"id":"234841345046097992"},"successful":true},{"created":true,"document":{"id":"234841345053839632"},"successful":true}]}%'), mode: 'xml'}, null, opt_ijData) + '</li><li><p>Now you can go to that data service on the <a href="https://console.wedeploy.com">Console</a> and click on the <em>Database</em> section. You should now be able to see the documents you saved.</p></li></ol></article><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.page.title) + '"><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.site.title) + '">')}), null, opt_ijData));
};
if (goog.DEBUG) {
  WTLOZ.render.soyTemplateName = 'WTLOZ.render';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
WTLOZ.soyweb = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(base.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + WTLOZ.render(opt_data, null, opt_ijData))}), null, opt_ijData));
};
if (goog.DEBUG) {
  WTLOZ.soyweb.soyTemplateName = 'WTLOZ.soyweb';
}
