// This file was automatically generated from add-api-methods.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace lIiLz.
 */

if (typeof lIiLz == 'undefined') { var lIiLz = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
lIiLz.render = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(tutorial.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<h4>Add API Methods</h4><h6>Save Data</h6><p>Now we want to add some code that will save data to a collection.</p><p>To do this, go to <code>tutorial-data-ios/app/tutorial-data-ios/ToDoListViewController.swift</code> and paste this code into the &quot;loadToDos&quot; function:</p>' + ElectricCode.render({code: soydata.$$markUnsanitizedTextForInternalBlocks('WeDeploy.data("data-<projectID>.wedeploy.sh")\n    .create(resource: "tasks", object: ["name" : todo])\n    .toCallback { objectCreated, error in\n        if let objectCreated = objectCreated {\n            print("To do added: \\(objectCreated)")\n            self.toDoTextField.text = ""\n        }\n        else {\n            print("Error: \\(error!)")\n        }\n    }'), mode: 'swift'}, null, opt_ijData) + '<p><strong>Note:</strong> make sure to replace <code>&lt;projectID&gt;</code> with the id of your project.</p><h6>Fetch Data</h6><p>Next, we want to add the code that will fetch data from the collection.</p><p>To do this, go to <code>tutorial-data-ios/app/tutorial-data-ios/AddToDoViewController.swift</code> and paste this cod into the &quot;addToDoClic&quot; function:</p>' + ElectricCode.render({code: soydata.$$markUnsanitizedTextForInternalBlocks('WeDeploy.data("data-<projectID>.wedeploy.sh")\n    .orderBy(field: "id", order: .DESC)\n    .limit(5)\n    .get(resourcePath: "tasks")\n    .toCallback { tasks, error in\n        if let tasks = tasks {\n            self.todos = tasks.map({ $0["name"] as! String})\n            self.tableView.reloadData()\n        }\n        else {\n            print("Error: \\(error!)")\n        }\n    }'), mode: 'swift'}, null, opt_ijData) + '<p><strong>Note:</strong> make sure to replace <code>&lt;projectID&gt;</code> with the id of your project.</p><aside><h6><span class="icon-16-star"></span> Pro Tip</h6><p>In this tutorial we teach you how to use the <code>.get()</code> method which fetches the data from your collection everytime you refresh the page or make a new request. We also have a <code>.watch()</code> task which retrieves new data automatically when new data is created, giving you the power of real-time data!</p><p>Want to learn more about <a href="/docs/data/real-time-feeds.html" target="_blank">Real-Time Feeds</a>?</p></aside><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.page.title) + '"><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.site.title) + '">')}), null, opt_ijData));
};
if (goog.DEBUG) {
  lIiLz.render.soyTemplateName = 'lIiLz.render';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
lIiLz.soyweb = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(base.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + lIiLz.render(opt_data, null, opt_ijData))}), null, opt_ijData));
};
if (goog.DEBUG) {
  lIiLz.soyweb.soyTemplateName = 'lIiLz.soyweb';
}
