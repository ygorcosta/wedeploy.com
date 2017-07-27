// This file was automatically generated from api-clients.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace DLWpE.
 */

if (typeof DLWpE == 'undefined') { var DLWpE = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
DLWpE.render = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(guide.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<h3>' + soy.$$escapeHtml(opt_data.page.title) + '</h3><h6>' + soy.$$escapeHtml(opt_data.page.description) + '</h6><article id="1"><h2>Introduction</h2><p>You can use our API Clients for sending/receiving requests to/from WeDeploy services like <a href="/docs/auth/getting-started.html">Auth</a>, <a href="/docs/email/getting-started.html">Email</a>, and <a href="/docs/hosting/getting-started.html">Hosting</a>. We built those libraries to make your life easier and adapt to your current workflow.</p><p>Below you can find a list that contains all of them, including instructions on how to install and details for each specific platform.</p></article><article id="2"><h2>JavaScript (Web &amp; Node.js)</h2><p>You can use this by adding a script element in your HTML file or to load the library using NPM.</p><h5>Installation</h5><p><strong>CDN</strong></p>' + ElectricCode.render({code: soydata.$$markUnsanitizedTextForInternalBlocks('<script src="https://cdn.wedeploy.com/api/latest/wedeploy.js"><\/script>'), mode: 'xml'}, null, opt_ijData) + '<p><strong>NPM</strong></p>' + ElectricCode.render({code: soydata.$$markUnsanitizedTextForInternalBlocks('npm install --save wedeploy'), mode: 'text'}, null, opt_ijData) + '<h5>Nuances</h5><p>After installing WeDeploy using NPM, you can load this package like this:</p>' + ElectricCode.render({code: soydata.$$markUnsanitizedTextForInternalBlocks('var WeDeploy = require(\'wedeploy\');\n\n// Or if you\'re using ES6\nimport WeDeploy from \'wedeploy\';'), mode: 'javascript'}, null, opt_ijData) + '<p>This library is compatible with all major browsers (Chrome, Firefox, Safari, Edge, and IE10+) as well as <a href="https://facebook.github.io/react-native/">React Native</a> and <a href="https://facebook.github.io/react-vr/">React VR</a>.</p><p>The API calls are the same in all JavaScript environments.</p></article><article id="3"><h2>Swift (iOS)</h2><p>In order to start using you have to add it as Cocoapod in your <code>Podfile</code>.</p><h5>Installation</h5><p><strong>Cocoapods</strong></p>' + ElectricCode.render({code: soydata.$$markUnsanitizedTextForInternalBlocks('pod \'WeDeploy\''), mode: 'swift'}, null, opt_ijData) + '<h5>Nuances</h5><p>By default, all requests returns a promise like below.</p>' + ElectricCode.render({code: soydata.$$markUnsanitizedTextForInternalBlocks('WeDeploy\n    .data(\'https://<serviceID>-<projectID>.wedeploy.io\')\n    .get(resourcePath: "movies")\n    .then { movie -> Void in\n        print(movie)\n    }'), mode: 'swift'}, null, opt_ijData) + '<p>You are also able to return a callback or observable. These two methods are available:</p>' + ElectricCode.render({code: soydata.$$markUnsanitizedTextForInternalBlocks('// toCallback converts a promise into a callback\nWeDeploy\n    .data(\'https://<serviceID>-<projectID>.wedeploy.io\')\n    .get(resourcePath: "movies")\n    .toCallback { movies, error in\n        // here you can check the error or the response\n    }\n\n// toObservable converts a promise into an observable\nWeDeploy\n    .data(\'https://<serviceID>-<projectID>.wedeploy.io\')\n    .get(resourcePath: "movies")\n    .toObservable()\n    .subscribe(\n        onNext: { movies in\n            // here you receive the movies\n        },\n        onError: { error in\n            // oops something went wrong\n        }\n    )'), mode: 'swift'}, null, opt_ijData) + '</article><article id="4"><h2>Java (Android)</h2><p>You just need to add the following line to your <code>build.gradle</code> file.</p><h5>Installation</h5><p><strong>Gradle</strong></p>' + ElectricCode.render({code: soydata.$$markUnsanitizedTextForInternalBlocks('compile \'com.wedeploy:com.wedeploy.android:beta-20170505\''), mode: 'groovy'}, null, opt_ijData) + '<h5>Nuances</h5><p>Before calling any method from WeDeploy, you have to build an instance first:</p>' + ElectricCode.render({code: soydata.$$markUnsanitizedTextForInternalBlocks('WeDeploy weDeploy = new WeDeploy.Builder().build();'), mode: 'text/x-java'}, null, opt_ijData) + '<p>Then, you are able to synchronously fire requests to WeDeploy by calling <code>execute()</code>:</p>' + ElectricCode.render({code: soydata.$$markUnsanitizedTextForInternalBlocks('weDeploy\n    .data(\'https://data-datademo.wedeploy.io\')\n    .get("movies")\n    .execute();'), mode: 'text/x-java'}, null, opt_ijData) + '<p>You can also fire asynchronous requests by specifying a Callback to the <code>execute()</code> method:</p>' + ElectricCode.render({code: soydata.$$markUnsanitizedTextForInternalBlocks('weDeploy\n    .data(\'https://data-datademo.wedeploy.io\')\n    .get("movies")\n    .execute(new Callback() {\n        public void onSuccess(Response response) {\n            // here you receive the movies\n        }\n\n        public void onFailure(Exception e) {\n            // oops something went wrong\n        }\n    });'), mode: 'text/x-java'}, null, opt_ijData) + '<p>The WeDeploy Android API is RxJava 2 compatible. This means that you can convert the request into a Single RxJava object, which emits either a success or an error event. You must add a dependency to RxAndroid in your project <code>build.gradle</code> in order to use it.</p>' + ElectricCode.render({code: soydata.$$markUnsanitizedTextForInternalBlocks('weDeploy\n    .data(\'https://data-datademo.wedeploy.io\')\n    .get("movies")\n    .asSingle()\n    .subscribeOn(Schedulers.io())\n    .observeOn(AndroidSchedulers.mainThread())\n    .subscribe(\n        response -> {\n\n        },\n        throwable -> {\n\n        });'), mode: 'text/x-java'}, null, opt_ijData) + '</article><h2>What\'s next?</h2><ul><li>Learn more about using <a href="/docs/intro/custom-domains.html">Custom Domains</a>.</li></ul><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.page.title) + '"><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.site.title) + '">')}), null, opt_ijData));
};
if (goog.DEBUG) {
  DLWpE.render.soyTemplateName = 'DLWpE.render';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
DLWpE.soyweb = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(base.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + DLWpE.render(opt_data, null, opt_ijData))}), null, opt_ijData));
};
if (goog.DEBUG) {
  DLWpE.soyweb.soyTemplateName = 'DLWpE.soyweb';
}
