// This file was automatically generated from deploying-java.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace qLfAe.
 */

if (typeof qLfAe == 'undefined') { var qLfAe = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
qLfAe.render = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(guide.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<h3>Java</h3><h6>' + soy.$$escapeHtml(opt_data.page.description) + '</h6><article id="1"><h2>Introduction</h2><p><a href="https://www.oracle.com/java/">Java</a> is a concurrent, class-based, object-oriented language expressly designed for use in the distributed environment of the web. It is normally compiled to the binary format defined in the JVM Specification.</p><p>We currently support Java 8.</p></article><article id="2"><h2>Try it yourself</h2><p>Want to see the process of deploying Java step by step?</p><div class="guide-btn-cta"><a class="btn btn-accent btn-sm" href="/tutorials/java" target="_blank" data-senna-off><span class="icon-16-external"></span>Try the tutorial</a></div><div class="guide-aux-cta">or see a <a href="http://boilerplate-java.wedeploy.io" target="_blank" data-senna-off>live demo</a>.</div></article><article id="3"><h2>Configuring</h2><aside><p>All WeDeploy projects use a consistant file structure and configuration files to deploy apps with the CLI or GitHub. Learn more on our <strong><a href="/docs/deploy/how-it-works.html">How It Works Page</a></strong>.</p></aside><p>Below is a few examples of a <code>wedeploy.json</code> for the Java container.</p>' + ElectricCode.render({code: soydata.$$markUnsanitizedTextForInternalBlocks('{\n    "id": "java",\n    "image": "wedeploy/java:beta",\n    "hooks": {\n    "build": "gradle -Dorg.gradle.native=false clean build -x test"\n  }\n}'), mode: 'gradle'}, null, opt_ijData) + ElectricCode.render({code: soydata.$$markUnsanitizedTextForInternalBlocks('{\n    "id": "java",\n    "image": "wedeploy/java:beta",\n    "hooks": {\n    "build": "mvn package"\n  }\n}'), mode: 'maven'}, null, opt_ijData) + ElectricCode.render({code: soydata.$$markUnsanitizedTextForInternalBlocks('{\n    "id": "java",\n    "image": "wedeploy/java:beta",\n    "hooks": {\n    "build": "ant build"\n  }\n}'), mode: 'ant'}, null, opt_ijData) + '<p>The <code>id</code> for your services are uniquely determined by you.</p></article><h2>What\'s next?</h2><p>Now you can start building your Java based application.</p><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.page.title) + '"><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.site.title) + '">')}), null, opt_ijData));
};
if (goog.DEBUG) {
  qLfAe.render.soyTemplateName = 'qLfAe.render';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
qLfAe.soyweb = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(base.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + qLfAe.render(opt_data, null, opt_ijData))}), null, opt_ijData));
};
if (goog.DEBUG) {
  qLfAe.soyweb.soyTemplateName = 'qLfAe.soyweb';
}
