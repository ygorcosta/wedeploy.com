/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from add-api-methods.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace rEhWc.
 * @public
 */

goog.module('rEhWc.incrementaldom');

/** @suppress {extraRequire} */
var soy = goog.require('soy');
/** @suppress {extraRequire} */
var soydata = goog.require('soydata');
/** @suppress {extraRequire} */
goog.require('goog.i18n.bidi');
/** @suppress {extraRequire} */
goog.require('goog.asserts');
/** @suppress {extraRequire} */
goog.require('goog.string');
var IncrementalDom = goog.require('incrementaldom');
var ie_open = IncrementalDom.elementOpen;
var ie_close = IncrementalDom.elementClose;
var ie_void = IncrementalDom.elementVoid;
var ie_open_start = IncrementalDom.elementOpenStart;
var ie_open_end = IncrementalDom.elementOpenEnd;
var itext = IncrementalDom.text;
var iattr = IncrementalDom.attr;

var $templateAlias2 = Soy.getTemplate('ElectricCode.incrementaldom', 'render');

var $templateAlias1 = Soy.getTemplate('tutorial.incrementaldom', 'render');


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ignored, opt_ijData) {
  var param2609 = function() {
    ie_open('h4');
      itext('Add API Methods');
    ie_close('h4');
    ie_open('h6');
      itext('Save Data');
    ie_close('h6');
    ie_open('p');
      itext('Now we want to add some code that will save data to a collection.');
    ie_close('p');
    ie_open('p');
      itext('To do this, go to ');
      ie_open('code');
        itext('AddToDoActivity.java');
      ie_close('code');
      itext(' and paste this code into the "addToDo" method:');
    ie_close('p');
    $templateAlias2({code: 'weDeploy.data("data-<projectID>.wedeploy.sh")\n    .create("tasks", jsonObject)\n    .execute(new Callback() {\n        @Override\n        public void onSuccess(Response response) {\n            Toast.makeText(AddToDoActivity.this, "To do added", Toast.LENGTH_SHORT).show();\n        }\n\n        @Override\n        public void onFailure(Exception e) {\n            Toast.makeText(AddToDoActivity.this, "Error adding to do", Toast.LENGTH_SHORT)\n                .show();\n        }\n    });', mode: 'text/x-java'}, null, opt_ijData);
    ie_open('p');
      ie_open('strong');
        itext('Note:');
      ie_close('strong');
      itext(' make sure to replace ');
      ie_open('code');
        itext('<projectID>');
      ie_close('code');
      itext(' with the id of your project.');
    ie_close('p');
    ie_open('h6');
      itext('Fetch Data');
    ie_close('h6');
    ie_open('p');
      itext('Next, we want to add the code that will fetch data from the collection.');
    ie_close('p');
    ie_open('p');
      itext('To do this, go to ');
      ie_open('code');
        itext('ToDoListActivity.java');
      ie_close('code');
      itext(' and paste this code into the "populateList" method:');
    ie_close('p');
    $templateAlias2({code: 'weDeploy.data("data-<projectID>.wedeploy.sh")\n    .limit(5)\n    .orderBy("id", SortOrder.DESCENDING)\n    .get("tasks")\n    .execute(new Callback() {\n        @Override\n        public void onSuccess(Response response) {\n            try {\n                JSONArray array = new JSONArray(response.getBody());\n                parseAndAddTodos(array);\n            } catch (JSONException e) {\n                onFailure(e);\n            }\n        }\n\n        @Override\n        public void onFailure(Exception e) {\n            Toast.makeText(ToDoListActivity.this, "Error loading todos", Toast.LENGTH_SHORT).show();\n        }\n    });', mode: 'text/x-java'}, null, opt_ijData);
    ie_open('p');
      ie_open('strong');
        itext('Note:');
      ie_close('strong');
      itext(' make sure to replace ');
      ie_open('code');
        itext('<projectID>');
      ie_close('code');
      itext(' with the id of your project.');
    ie_close('p');
    ie_open('aside');
      ie_open('h6');
        ie_void('span', null, null,
            'class', 'icon-16-star');
        itext(' Pro Tip');
      ie_close('h6');
      ie_open('p');
        itext('In this tutorial we teach you how to use the ');
        ie_open('code');
          itext('.get()');
        ie_close('code');
        itext(' method which fetches the data from your collection everytime you refresh the page or make a new request. We also have a ');
        ie_open('code');
          itext('.watch()');
        ie_close('code');
        itext(' task which retrieves new data automatically when new data is created, giving you the power of real-time data!');
      ie_close('p');
      ie_open('p');
        itext('Want to learn more about ');
        ie_open('a', null, null,
            'href', '/docs/data/real-time-feeds.html',
            'target', '_blank');
          itext('Real-Time Feeds');
        ie_close('a');
        itext('?');
      ie_close('p');
    ie_close('aside');
    ie_open('input', null, null,
        'type', 'hidden',
        'value', opt_data.page.title);
    ie_close('input');
    ie_open('input', null, null,
        'type', 'hidden',
        'value', opt_data.site.title);
    ie_close('input');
  };
  $templateAlias1(soy.$$assignDefaults({content: param2609}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'rEhWc.render';
}

exports.render.params = ["page","site"];
exports.render.types = {"page":"any","site":"any"};
templates = exports;
return exports;

});

class rEhWc extends Component {}
Soy.register(rEhWc, templates);
export { rEhWc, templates };
export default templates;
/* jshint ignore:end */
