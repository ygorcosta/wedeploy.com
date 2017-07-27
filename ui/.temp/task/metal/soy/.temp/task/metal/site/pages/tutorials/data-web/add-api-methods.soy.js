// This file was automatically generated from add-api-methods.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace knsyF.
 * @public
 */

goog.module('knsyF.incrementaldom');

/** @suppress {extraRequire} */
goog.require('soy');
/** @suppress {extraRequire} */
goog.require('soydata');
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
var $import1 = goog.require('ElectricCode.incrementaldom');
var $templateAlias2 = $import1.render;
var $import2 = goog.require('tutorial.incrementaldom');
var $templateAlias1 = $import2.render;


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ignored, opt_ijData) {
  var param2758 = function() {
    ie_open('h4');
      itext('Add API Methods');
    ie_close('h4');
    ie_open('h6');
      itext('Save Data');
    ie_close('h6');
    ie_open('p');
      itext('Now we want to add a script that will save data to a collection.');
    ie_close('p');
    ie_open('p');
      itext('To do this, go to ');
      ie_open('code');
        itext('tutorial-data-web/hosting/index.js');
      ie_close('code');
      itext(' and paste this code:');
    ie_close('p');
    $templateAlias2({code: 'WeDeploy\n    .data(\'data-<projectID>.wedeploy.sh\')\n    .create(\'tasks\', {name: form.item.value })\n    .then(function(response) {\n        form.reset();\n        form.item.focus();\n        console.info(\'Saved:\', response);\n    })\n    .catch(function(error) {\n        console.error(error);\n    });', mode: 'javascript'}, null, opt_ijData);
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
      itext('Next, we want to add a script that will fetch data from the collection.');
    ie_close('p');
    ie_open('p');
      itext('To do this, go to ');
      ie_open('code');
        itext('list.js');
      ie_close('code');
      itext(' inside of the same folder and paste this code:');
    ie_close('p');
    $templateAlias2({code: 'WeDeploy\n    .data(\'data-<projectID>.wedeploy.sh\')\n    .orderBy(\'id\', \'desc\')\n    .limit(5)\n    .get(\'tasks\')\n    .then(function(response) {\n        appendTasks(response);\n    })\n    .catch(function(error) {\n        console.error(error);\n    });', mode: 'javascript'}, null, opt_ijData);
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
  $templateAlias1(soy.$$assignDefaults({content: param2758}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'knsyF.render';
}
