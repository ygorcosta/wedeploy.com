// This file was automatically generated from updating-data.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace mHXpI.
 */

if (typeof mHXpI == 'undefined') { var mHXpI = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
mHXpI.render = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(guide.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<h3>' + soy.$$escapeHtml(opt_data.page.title) + '</h3><h6>' + soy.$$escapeHtml(opt_data.page.description) + '</h6><aside><p>If you are unfamiliar with our API, please visit the <a href="/docs/intro/api-clients.html">API Clients</a> page first to learn how to install and configure it.</p></aside><article id="1"><h2>Updating existing data</h2><p>Updating existing data is as simple as sending a JSON.</p>' + ElectricCode.render({code: soydata.$$markUnsanitizedTextForInternalBlocks('WeDeploy\n    .data(\'https://<serviceID>-<projectID>.wedeploy.io\')\n    .update(\'movies/115992383516607958\', {\n        "rating": 9.1\n    }).then(function(movie) {\n        console.log(movie);\n    });'), mode: 'javascript'}, null, opt_ijData) + ElectricCode.render({code: soydata.$$markUnsanitizedTextForInternalBlocks('WeDeploy\n    .data(\'https://<serviceID>-<projectID>.wedeploy.io\')\n    .update(resourcePath: "movies/115992383516607958", updatedAttributes: [\n        "rating": 9.1\n    ])\n    .then { movie in\n        print(movie)\n    }'), mode: 'swift'}, null, opt_ijData) + ElectricCode.render({code: soydata.$$markUnsanitizedTextForInternalBlocks('JSONObject movieJsonObject = new JSONObject()\n    .put("rating", 9.1);\n\nWeDeploy\n    .data(\'https://data-datademo.wedeploy.io\')\n    .update("movies/115992383516607958", movieJsonObject)\n    .execute();'), mode: 'text/x-java'}, null, opt_ijData) + '<p>This operation will return the updated document with the new rating:</p>' + ElectricCode.render({code: soydata.$$markUnsanitizedTextForInternalBlocks('{\n    "id":" 115992383516607958",\n    "title": "Star Wars IV",\n    "year": 1977,\n    "rating": 9.1\n}'), mode: 'javascript'}, null, opt_ijData) + '</article><h2>What\'s next?</h2><p>Now that you\'ve learned how to update, you can start <a href="/docs/data/deleting-data.html">deleting data</a>.</p><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.page.title) + '"><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.site.title) + '">')}), null, opt_ijData));
};
if (goog.DEBUG) {
  mHXpI.render.soyTemplateName = 'mHXpI.render';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
mHXpI.soyweb = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(base.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + mHXpI.render(opt_data, null, opt_ijData))}), null, opt_ijData));
};
if (goog.DEBUG) {
  mHXpI.soyweb.soyTemplateName = 'mHXpI.soyweb';
}
