// This file was automatically generated from real-time-data.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace zpJEZ.
 */

if (typeof zpJEZ == 'undefined') { var zpJEZ = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
zpJEZ.render = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(guide.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<h3>' + soy.$$escapeHtml(opt_data.page.title) + '</h3><h6>' + soy.$$escapeHtml(opt_data.page.description) + '</h6><aside><p>If you are unfamiliar with our API, please visit the <a href="/docs/intro/api-clients.html">API Clients</a> page first to learn how to install and configure it.</p></aside><article id="1"><h2>Watching data changes</h2><p>We presented a lot of features for data filtering and search. You may be wondering where the real-time aspect is in all of this. Well, it\'s throughout the features we just presented to you. To access our data in real-time, all we need to do is change the <em>WeDeploy</em> API  <code>get</code> method to use to the <code>watch</code> method:</p>' + ElectricCode.render({code: soydata.$$markUnsanitizedTextForInternalBlocks('WeDeploy\n    .data(\'https://<serviceID>-<projectID>.wedeploy.io\')\n    .watch(\'movies\')\n    .on(\'changes\', function(data) {\n        console.log(data);\n    })\n    .on(\'fail\', function(error) {\n        console.log(error);\n    });'), mode: 'javascript'}, null, opt_ijData) + ElectricCode.render({code: soydata.$$markUnsanitizedTextForInternalBlocks('// You have to hold a strong reference to the socket or it will be released\nsocket = WeDeploy\n    .data(\'https://<serviceID>-<projectID>.wedeploy.io\')\n    .watch(resourcePath: "movies")\n\nsocket.on([.changes, .error]) { data in\n    switch(data.type) {\n    case .changes:\n        print("changes \\(data.document)")\n    case .error:\n        print("error \\(data.document)")\n    default:\n        break\n    }\n}'), mode: 'swift'}, null, opt_ijData) + ElectricCode.render({code: soydata.$$markUnsanitizedTextForInternalBlocks('WeDeploy\n    .data(\'https://data-datademo.wedeploy.io\')\n    .watch("movies")\n    .on("changes", data -> System.out.println(data))\n    .on("fail", error -> System.out.println(error));'), mode: 'text/x-java'}, null, opt_ijData) + '<p>Now every time the storage detects changes that affect the query you\'re watching, you will receive a changes notification with the response body you\'d receive if you had done an HTTP GET instead. Furthermore, every time this change leads to an HTTP error response, you\'ll receive the error object in a fail notification on the client.</p></article><article id="2"><h2>Watching with advanced filters</h2><p>To present data using advanced search is simple as performing normal queries. You just would need to keep using the <code>watch</code> method and apply any filter you desire.</p>' + ElectricCode.render({code: soydata.$$markUnsanitizedTextForInternalBlocks('WeDeploy\n    .data(\'https://<serviceID>-<projectID>.wedeploy.io\')\n    .where(\'category\', \'cinema\')\n    .or(\'category\', \'cartoon\')\n    .watch(\'movies\')\n    .on(\'changes\', function(data) {\n        console.log(data);\n    })\n    .on(\'fail\', function(error) {\n        console.log(error);\n    });'), mode: 'javascript'}, null, opt_ijData) + ElectricCode.render({code: soydata.$$markUnsanitizedTextForInternalBlocks('// You have to hold a strong reference to the socket or it will be released\nsocket = WeDeploy\n    .data(\'https://<serviceID>-<projectID>.wedeploy.io\')\n    .where(field: "category", op: "=", value: "cinema")\n    .or(field: "category", op: "=", value: "cartoon")\n    .watch(resourcePath: "movies")\n\nsocket.on([.changes, .error]) { data in\n    switch(data.type) {\n    case .changes:\n        print("changes \\(data.document)")\n    case .error:\n        print("error \\(data.document)")\n    default:\n        break\n    }\n}'), mode: 'swift'}, null, opt_ijData) + ElectricCode.render({code: soydata.$$markUnsanitizedTextForInternalBlocks('WeDeploy\n    .data(\'https://data-datademo.wedeploy.io\')\n    .where(equal("category", "cinema").or("category", "cartoon"))\n    .watch("movies")\n    .on("changes", data -> System.out.println(data))\n    .on("fail", error -> System.out.println(error));'), mode: 'text/x-java'}, null, opt_ijData) + '</article><article id="3"><h2>Getting the latest changes</h2><p>The data service uses a query limit <code>500</code> by default. In order to always get the latest new record, you would need to limit the query by <code>1</code> and order by <code>id</code> <code>desc</code>.</p>' + ElectricCode.render({code: soydata.$$markUnsanitizedTextForInternalBlocks('WeDeploy\n    .data(\'https://<serviceID>-<projectID>.wedeploy.io\')\n    .limit(1)\n    .orderBy(\'id\', \'desc\')\n    .watch(\'movies\')\n    .on(\'changes\', function(data) {\n        console.log(data);\n    })\n    .on(\'fail\', function(error) {\n        console.log(error);\n    });'), mode: 'javascript'}, null, opt_ijData) + ElectricCode.render({code: soydata.$$markUnsanitizedTextForInternalBlocks('// You have to hold a strong reference to the socket or it will be released\nsocket = WeDeploy\n    .data(\'https://<serviceID>-<projectID>.wedeploy.io\')\n    .limit(1)\n    .orderBy(field: "id", order: .DESC)\n    .watch(resourcePath: "movies")\n\nsocket.on([.changes, .error]) { data in\n    switch(data.type) {\n    case .changes:\n        print("changes \\(data.document)")\n    case .error:\n        print("error \\(data.document)")\n    default:\n        break\n    }\n}'), mode: 'swift'}, null, opt_ijData) + ElectricCode.render({code: soydata.$$markUnsanitizedTextForInternalBlocks('WeDeploy\n    .data(\'https://data-datademo.wedeploy.io\')\n    .limit(1)\n    .orderBy("id", SortOrder.DESCENDING)\n    .watch("movies")\n    .on("changes", data -> System.out.println(data))\n    .on("fail", error -> System.out.println(error));'), mode: 'text/x-java'}, null, opt_ijData) + '</article><h2>What\'s next?</h2><p>Now that you\'ve learned how to use real-time, you can start <a href="/docs/data/searching-data.html">searching data</a>.</p><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.page.title) + '"><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.site.title) + '">')}), null, opt_ijData));
};
if (goog.DEBUG) {
  zpJEZ.render.soyTemplateName = 'zpJEZ.render';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
zpJEZ.soyweb = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(base.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + zpJEZ.render(opt_data, null, opt_ijData))}), null, opt_ijData));
};
if (goog.DEBUG) {
  zpJEZ.soyweb.soyTemplateName = 'zpJEZ.soyweb';
}
