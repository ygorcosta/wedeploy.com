/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from how-to-migrate-projects-to-beta.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace WTLOZ.
 * @public
 */

goog.module('WTLOZ.incrementaldom');

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

var $templateAlias1 = Soy.getTemplate('blog.incrementaldom', 'render');


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ignored, opt_ijData) {
  var param505 = function() {
    ie_open('article');
      ie_open('figure', null, null,
          'style', 'margin-top: -1.5rem');
        ie_open('img', null, null,
            'src', '../images/blog/post-13--0.png',
            'alt', 'Beta Migration');
        ie_close('img');
      ie_close('figure');
      ie_open('p');
        itext('On July 31st, we announced ');
        ie_open('a', null, null,
            'href', '/blog/wedeploy-beta-our-biggest-release-yet.html');
          itext('our new Beta version of WeDeploy');
        ie_close('a');
        itext('. With that release we introduced the new infrastructure on AWS that can be accessed by our ');
        ie_open('a', null, null,
            'href', 'https://console.wedeploy.com');
          itext('Console');
        ie_close('a');
        itext('. Along with that big infrastructure change, we also introduced other things like custom Docker images and HTTPS, which lead to a big question that you might be asking yourself: will the projects I built on Alpha work on Beta? The answer is \'yes\', but there are a few easy changes that need to be made. Below is a guide on how to seamlessly do that!');
      ie_close('p');
      ie_open('p');
        itext('If you have any trouble, feel free to tap on the green button in the bottom corner to talk to a WeDeploy human, we\'d love to help.');
      ie_close('p');
      ie_open('hr');
      ie_close('hr');
      ie_open('h4');
        itext('Migrating Projects');
      ie_close('h4');
      ie_open('p');
        itext('We have made some fundamental changes to the way you setup your project source code and simplified the way you deploy your apps. Walk through these easy steps and your project will be ready for deployment.');
      ie_close('p');
      ie_open('h5');
        itext('Step One: Configuration Files');
      ie_close('h5');
      ie_open('ol');
        ie_open('li');
          itext('Delete ');
          ie_open('code');
            itext('project.json');
          ie_close('code');
          itext('. We no longer support these files.');
        ie_close('li');
        ie_open('li');
          itext('Rename all ');
          ie_open('code');
            itext('container.json');
          ie_close('code');
          itext(' files to ');
          ie_open('code');
            itext('wedeploy.json');
          ie_close('code');
          itext('.');
        ie_close('li');
        ie_open('li');
          itext('In ');
          ie_open('code');
            itext('wedeploy.json');
          ie_close('code');
          itext(', change ');
          ie_open('code');
            itext('type');
          ie_close('code');
          itext(' to ');
          ie_open('code');
            itext('image');
          ie_close('code');
          itext(' and add ');
          ie_open('code');
            itext(':beta');
          ie_close('code');
          itext(' tag.');
        ie_close('li');
      ie_close('ol');
      ie_open('p');
        itext('Here is an example of what the new ');
        ie_open('code');
          itext('wedeploy.json');
        ie_close('code');
        itext(' will look like.');
      ie_close('p');
      $templateAlias2({code: '{\n    "id": "ui",\n    "image": "wedeploy/hosting:beta"\n}', mode: 'application/json'}, null, opt_ijData);
      ie_open('aside');
        ie_open('h6');
          ie_void('span', null, null,
              'class', 'icon-16-alert');
          itext(' Attention');
        ie_close('h6');
        ie_open('p');
          itext('We no longer support the Java, Node.js, and Ruby WeDeploy images. To deploy projects with those languages, you can simply remove the ');
          ie_open('code');
            itext('image');
          ie_close('code');
          itext(' variable completely from your ');
          ie_open('code');
            itext('wedeploy.json');
          ie_close('code');
          itext(' and we will automatically detect the type of build you need.');
        ie_close('p');
      ie_close('aside');
      ie_open('h5');
        itext('Step Three: API Client');
      ie_close('h5');
      ie_open('ol');
        ie_open('li');
          itext('Update your CDN API links to ');
          ie_open('code');
            itext('https');
          ie_close('code');
          itext(' (yes, just simply add the \'s\').');
        ie_close('li');
        ie_open('li');
          itext('Each service now has its own domain instead of being a subdomain of your project. This means you must update your API endpoints (');
          ie_open('em');
            itext('serviceID-projectID.wedeploy.io');
          ie_close('em');
          itext(').');
        ie_close('li');
        ie_open('li');
          itext('Remove hardcoded protocals (');
          ie_open('code');
            itext('http://');
          ie_close('code');
          itext(') on API URL\'s.');
        ie_close('li');
        ie_open('li');
          itext('The Email API for JavaScript has changes. See ');
          ie_open('a', null, null,
              'href', '/docs/email/sending-email.html');
            itext('the documentation');
          ie_close('a');
          itext('.');
        ie_close('li');
        ie_open('li');
          itext('Update your Auth redirect URL\'s for your registered apps if you use OAuth providers like Google and Github. There is no way to migrate your previous users manually. To do so, reach out to us with the green circle button below and we can help you port your userbase.');
        ie_close('li');
      ie_close('ol');
      ie_open('hr');
      ie_close('hr');
      ie_open('h4');
        itext('Migrating Data Collections');
      ie_close('h4');
      ie_open('p');
        itext('Once you have your project redeployed on the Console, you might want to migrate your old data to your new site. Follow these instructions to do that.');
      ie_close('p');
      ie_open('h5');
        itext('Step One: Save Data');
      ie_close('h5');
      ie_open('ol');
        ie_open('li');
          itext('Go to the ');
          ie_open('a', null, null,
              'href', 'http://dashboard.wedeploy.com');
            itext('Dashboard');
          ie_close('a');
          itext(' of the project you are fetching the collection from and select the Data service.');
        ie_close('li');
        ie_open('li');
          itext('Click the link of your data service at the top and amend the collection you are wanting to migrate to the url like this: ');
          ie_open('code');
            itext('data-demo.wedeploy.io/todos');
          ie_close('code');
          itext('. If you have authentication parameters on your collection, you will need to update your ');
          ie_open('code');
            itext('api.json');
          ie_close('code');
          itext(' and deploy again.');
        ie_close('li');
        ie_open('li');
          itext('Now that you can see a your collection, press cmd + s to save as a JSON file onto your machine.');
        ie_close('li');
      ie_close('ol');
      ie_open('h5');
        itext('Step Two: Post Data');
      ie_close('h5');
      ie_open('ol');
        ie_open('li');
          ie_open('p');
            itext('Now open up your terminal and paste the script below. Make sure to replace your new project\u2019s info in place of serviceID, projectID, [desired] collectionID, and masterToken.');
          ie_close('p');
          $templateAlias2({code: 'curl --request POST \\\n  --url https://serviceID-projectID.wedeploy.sh/collectionID \\\n  --header \'authorization: bearer masterToken\' \\\n  --header \'content-type: application/json\' \\\n  --data \'databaseDocuments\'', mode: 'xml'}, null, opt_ijData);
        ie_close('li');
        ie_open('li');
          ie_open('p');
            itext('Open the JSON file you saved, select all the contents, copy to your clipboard, and paste into the script where you see databaseDocuments (inside the apostrophes).');
          ie_close('p');
        ie_close('li');
        ie_open('li');
          ie_open('p');
            itext('Now you can run the command. If it worked, you should see a response similar to this:');
          ie_close('p');
          $templateAlias2({code: '{"hasFailures":false,"results":[{"created":true,"document":{"id":"234841345046097992"},"successful":true},{"created":true,"document":{"id":"234841345053839632"},"successful":true}]}%', mode: 'xml'}, null, opt_ijData);
        ie_close('li');
        ie_open('li');
          ie_open('p');
            itext('Now you can go to that data service on the ');
            ie_open('a', null, null,
                'href', 'https://console.wedeploy.com');
              itext('Console');
            ie_close('a');
            itext(' and click on the ');
            ie_open('em');
              itext('Database');
            ie_close('em');
            itext(' section. You should now be able to see the documents you saved.');
          ie_close('p');
        ie_close('li');
      ie_close('ol');
    ie_close('article');
    ie_open('input', null, null,
        'type', 'hidden',
        'value', opt_data.page.title);
    ie_close('input');
    ie_open('input', null, null,
        'type', 'hidden',
        'value', opt_data.site.title);
    ie_close('input');
  };
  $templateAlias1(soy.$$assignDefaults({content: param505}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'WTLOZ.render';
}

exports.render.params = ["page","site"];
exports.render.types = {"page":"any","site":"any"};
templates = exports;
return exports;

});

class WTLOZ extends Component {}
Soy.register(WTLOZ, templates);
export { WTLOZ, templates };
export default templates;
/* jshint ignore:end */
