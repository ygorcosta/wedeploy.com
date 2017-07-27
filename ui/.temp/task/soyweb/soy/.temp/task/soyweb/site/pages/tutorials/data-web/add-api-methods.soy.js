// This file was automatically generated from add-api-methods.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace knsyF.
 */

if (typeof knsyF == 'undefined') { var knsyF = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
knsyF.render = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(tutorial.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<h4>Add API Methods</h4><h6>Save Data</h6><p>Now we want to add a script that will save data to a collection.</p><p>To do this, go to <code>tutorial-data-web/hosting/index.js</code> and paste this code:</p>' + ElectricCode.render({code: soydata.$$markUnsanitizedTextForInternalBlocks('WeDeploy\n    .data(\'data-<projectID>.wedeploy.sh\')\n    .create(\'tasks\', {name: form.item.value })\n    .then(function(response) {\n        form.reset();\n        form.item.focus();\n        console.info(\'Saved:\', response);\n    })\n    .catch(function(error) {\n        console.error(error);\n    });'), mode: 'javascript'}, null, opt_ijData) + '<p><strong>Note:</strong> make sure to replace <code>&lt;projectID&gt;</code> with the id of your project.</p><h6>Fetch Data</h6><p>Next, we want to add a script that will fetch data from the collection.</p><p>To do this, go to <code>list.js</code> inside of the same folder and paste this code:</p>' + ElectricCode.render({code: soydata.$$markUnsanitizedTextForInternalBlocks('WeDeploy\n    .data(\'data-<projectID>.wedeploy.sh\')\n    .orderBy(\'id\', \'desc\')\n    .limit(5)\n    .get(\'tasks\')\n    .then(function(response) {\n        appendTasks(response);\n    })\n    .catch(function(error) {\n        console.error(error);\n    });'), mode: 'javascript'}, null, opt_ijData) + '<p><strong>Note:</strong> make sure to replace <code>&lt;projectID&gt;</code> with the id of your project.</p><aside><h6><span class="icon-16-star"></span> Pro Tip</h6><p>In this tutorial we teach you how to use the <code>.get()</code> method which fetches the data from your collection everytime you refresh the page or make a new request. We also have a <code>.watch()</code> task which retrieves new data automatically when new data is created, giving you the power of real-time data!</p><p>Want to learn more about <a href="/docs/data/real-time-feeds.html" target="_blank">Real-Time Feeds</a>?</p></aside><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.page.title) + '"><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.site.title) + '">')}), null, opt_ijData));
};
if (goog.DEBUG) {
  knsyF.render.soyTemplateName = 'knsyF.render';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
knsyF.soyweb = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(base.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + knsyF.render(opt_data, null, opt_ijData))}), null, opt_ijData));
};
if (goog.DEBUG) {
  knsyF.soyweb.soyTemplateName = 'knsyF.soyweb';
}
