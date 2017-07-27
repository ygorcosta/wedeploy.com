// This file was automatically generated from how-it-works.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace RjAGI.
 */

if (typeof RjAGI == 'undefined') { var RjAGI = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
RjAGI.render = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(guide.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<h1>' + soy.$$escapeHtml(opt_data.page.title) + '</h1><h6>' + soy.$$escapeHtml(opt_data.page.description) + '</h6><article id="1"><h2>Introduction</h2><p>There are basically two ways to deploy an app. You can use the command line for <a href="/docs/deploy/instant-deployment.html">instant deployment</a> or you can integrate with GitHub for <a href="/docs/deploy/continuous-deployment.html">continuous deployment</a>.</p><p>Both options give you a lot of power and flexibility, but there\'s another important concept that needs to be explained and that\'s our build step. When you send a bunch of files to WeDeploy we need to scan and detect what you would like to build. Maybe you want to run them with Java or maybe you just want to serve them as a static hosting.</p></article><article id="2"><h2>Automatic build detection</h2><p>The last thing any developer wants is to add a new tool that forces them to alter their workflow. This is why we\'ve worked hard to build WeDeploy so it can fit right into your regular way of working and fill the gaps needed to take your development to the next level.</p><p>WeDeploy tries to determine what language your project uses. It then takes the matching buildpack to install dependencies, compile the code and run the application. WeDeploy comes with a number of pre-configured buildpacks for languages like Java, Ruby, Node.js and so on.</p><p>On deploy, the platform will detect the programming language and build &amp; run the application.</p></article><article id="3"><h2>Manually set a build</h2><p>When you push your local repo to your WeDeploy project, we scan it for <code>wedeploy.json</code> files, which specify the ID of your services as well as which service containers you are deciding to use. When we find a <code>wedeploy.json</code>, we serve that whole directory as a part of the service you defined within.</p><p>For example, let\'s say you have a folder named <code>my-project</code> that uses the Hosting, Data, and Email services. This is what your project\'s file structure could look like:</p>' + ElectricCode.render({code: soydata.$$markUnsanitizedTextForInternalBlocks('my-project\n\u251C\u2500\u2500 data\n\u2502   \u251C\u2500\u2500 api.json\n\u2502   \u2514\u2500\u2500 wedeploy.json\n\u251C\u2500\u2500 email\n\u2502   \u2514\u2500\u2500 wedeploy.json\n\u2514\u2500\u2500 hosting\n    \u251C\u2500\u2500 wedeploy.json\n    \u251C\u2500\u2500 index.html\n    \u2514\u2500\u2500 main.css'), mode: 'text'}, null, opt_ijData) + '<p>The <code>wedeploy.json</code> file is a JSON file defining the service attributes and configurations. The default path for a <code>wedeploy.json</code> is <code>./&lt;service_folder&gt;/wedeploy.json</code>.</p><p>WeDeploy uses this json file to reference a service by ID in case it\'s already created. If a service with a matching ID does not exist, it creates a new service for you.</p><p><strong>Reference:</strong></p><table><thead><tr><th>Field</th><th>Description</th></tr></thead><tbody><tr><td>id</td><td>Unique service ID.</td></tr><tr><td>image</td><td>Service stack/image type.</td></tr><tr><td>env</td><td>Environment variables to be exported in the service lifecycle.</td></tr></tbody></table><p><strong>Usage:</strong></p>' + ElectricCode.render({code: soydata.$$markUnsanitizedTextForInternalBlocks('{\n    "id": "conqueror",\n    "image": "wedeploy/java",\n    "description": "WeDeploy Service Example",\n    "hooks": {\n        "build": "./gradlew clean build installDist -x test"\n    },\n    "env": {\n        "WEDEPLOY_USER": "user"\n    }\n}'), mode: 'application/json'}, null, opt_ijData) + '</article><article id="4"><h2>Try it yourself</h2><p>We have created a whole array of tutorials to teach you how to start using WeDeploy. Click on one of the links below that interests you and begin your journey towards deployment!</p><ul><li><strong><a data-senna-off target="_blank" href="/tutorials/hosting/">Hosting</a></strong>: Deploy static files like HTML, CSS, and JS.</li><li><strong><a data-senna-off target="_blank" href="/tutorials/data-web/">Data</a></strong>: Deploy a to-do list app using our Data Service and JS.</li><li><strong><a data-senna-off target="_blank" href="/tutorials/auth-web/">Auth</a></strong>: Deploy an authentication app using our Auth Service and JS.</li><li><strong><a data-senna-off target="_blank" href="/tutorials/email-web/">Email</a></strong>: Deploy an email-sending app using our Email Service and JS.</li><li><strong><a data-senna-off target="_blank" href="/tutorials/java/">Java</a></strong>: Deploy an app using Java and Spring Boot.</li><li><strong><a data-senna-off target="_blank" href="/tutorials/ruby/">Ruby</a></strong>: Deploy an app using Ruby and Sinatra.</li><li><strong><a data-senna-off target="_blank" href="/tutorials/nodejs/">Node.js</a></strong>: Deploy an app using Node.js and Express.</li><li><strong><a data-senna-off target="_blank" href="/tutorials/liferay/">Liferay</a></strong>: Deploy a Liferay Portal instance.</li><li><strong><a data-senna-off target="_blank" href="/tutorials/docker/">Docker</a></strong>: Deploy a Docker container.</li></ul></article><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.page.title) + '"><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.site.title) + '">')}), null, opt_ijData));
};
if (goog.DEBUG) {
  RjAGI.render.soyTemplateName = 'RjAGI.render';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
RjAGI.soyweb = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(base.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + RjAGI.render(opt_data, null, opt_ijData))}), null, opt_ijData));
};
if (goog.DEBUG) {
  RjAGI.soyweb.soyTemplateName = 'RjAGI.soyweb';
}
