// This file was automatically generated from add-api-methods.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace rEhWc.
 */

if (typeof rEhWc == 'undefined') { var rEhWc = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
rEhWc.render = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(tutorial.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<h4>Add API Methods</h4><h6>Save Data</h6><p>Now we want to add some code that will save data to a collection.</p><p>To do this, go to <code>AddToDoActivity.java</code> and paste this code into the &quot;addToDo&quot; method:</p>' + ElectricCode.render({code: soydata.$$markUnsanitizedTextForInternalBlocks('weDeploy.data("data-<projectID>.wedeploy.sh")\n    .create("tasks", jsonObject)\n    .execute(new Callback() {\n        @Override\n        public void onSuccess(Response response) {\n            Toast.makeText(AddToDoActivity.this, "To do added", Toast.LENGTH_SHORT).show();\n        }\n\n        @Override\n        public void onFailure(Exception e) {\n            Toast.makeText(AddToDoActivity.this, "Error adding to do", Toast.LENGTH_SHORT)\n                .show();\n        }\n    });'), mode: 'text/x-java'}, null, opt_ijData) + '<p><strong>Note:</strong> make sure to replace <code>&lt;projectID&gt;</code> with the id of your project.</p><h6>Fetch Data</h6><p>Next, we want to add the code that will fetch data from the collection.</p><p>To do this, go to <code>ToDoListActivity.java</code> and paste this code into the &quot;populateList&quot; method:</p>' + ElectricCode.render({code: soydata.$$markUnsanitizedTextForInternalBlocks('weDeploy.data("data-<projectID>.wedeploy.sh")\n    .limit(5)\n    .orderBy("id", SortOrder.DESCENDING)\n    .get("tasks")\n    .execute(new Callback() {\n        @Override\n        public void onSuccess(Response response) {\n            try {\n                JSONArray array = new JSONArray(response.getBody());\n                parseAndAddTodos(array);\n            } catch (JSONException e) {\n                onFailure(e);\n            }\n        }\n\n        @Override\n        public void onFailure(Exception e) {\n            Toast.makeText(ToDoListActivity.this, "Error loading todos", Toast.LENGTH_SHORT).show();\n        }\n    });'), mode: 'text/x-java'}, null, opt_ijData) + '<p><strong>Note:</strong> make sure to replace <code>&lt;projectID&gt;</code> with the id of your project.</p><aside><h6><span class="icon-16-star"></span> Pro Tip</h6><p>In this tutorial we teach you how to use the <code>.get()</code> method which fetches the data from your collection everytime you refresh the page or make a new request. We also have a <code>.watch()</code> task which retrieves new data automatically when new data is created, giving you the power of real-time data!</p><p>Want to learn more about <a href="/docs/data/real-time-feeds.html" target="_blank">Real-Time Feeds</a>?</p></aside><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.page.title) + '"><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.site.title) + '">')}), null, opt_ijData));
};
if (goog.DEBUG) {
  rEhWc.render.soyTemplateName = 'rEhWc.render';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
rEhWc.soyweb = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(base.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + rEhWc.render(opt_data, null, opt_ijData))}), null, opt_ijData));
};
if (goog.DEBUG) {
  rEhWc.soyweb.soyTemplateName = 'rEhWc.soyweb';
}
