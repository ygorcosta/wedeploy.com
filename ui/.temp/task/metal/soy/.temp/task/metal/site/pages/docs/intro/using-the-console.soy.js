// This file was automatically generated from using-the-console.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace PlUMi.
 * @public
 */

goog.module('PlUMi.incrementaldom');

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
var $import1 = goog.require('guide.incrementaldom');
var $templateAlias1 = $import1.render;


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ignored, opt_ijData) {
  var param1967 = function() {
    ie_open('h3');
      var dyn105 = opt_data.page.title;
      if (typeof dyn105 == 'function') dyn105(); else if (dyn105 != null) itext(dyn105);
    ie_close('h3');
    ie_open('h6');
      var dyn106 = opt_data.page.description;
      if (typeof dyn106 == 'function') dyn106(); else if (dyn106 != null) itext(dyn106);
    ie_close('h6');
    ie_open('article', null, null,
        'id', '1');
      ie_open('h2');
        itext('Introduction');
      ie_close('h2');
      ie_open('p');
        itext('The WeDeploy Console is a home for you to create, install, manage, configure, view logs, and check the status of your projects.');
      ie_close('p');
      ie_open('p');
        itext('To get started, you first need to create a WeDeploy account by signing up through the ');
        ie_open('a', null, null,
            'href', 'https://console.wedeploy.com/signup');
          itext('Console Signup Page');
        ie_close('a');
        itext('.');
      ie_close('p');
      ie_open('p');
        itext('When you login to the Console, you will see a list of your WeDeploy projects. If you don\'t have any yet, don\'t worry, we will go over how to change that below.');
      ie_close('p');
      ie_open('p');
        ie_open('img', null, null,
            'src', '/images/docs/intro/using-the-dashboard--dashboard.png',
            'alt', 'Console');
        ie_close('img');
      ie_close('p');
    ie_close('article');
    ie_open('article', null, null,
        'id', '2');
      ie_open('h2');
        itext('Create a new project');
      ie_close('h2');
      ie_open('p');
        itext('To start, you must create new project by going to the button in the top right corner named ');
        ie_open('em');
          itext('"New Project"');
        ie_close('em');
        itext('. Then you can type an ID for your project. Project names are permanent and cannot be changed later.');
      ie_close('p');
      ie_open('p');
        ie_open('img', null, null,
            'src', '/images/docs/intro/using-the-dashboard--new-project.png',
            'alt', 'New Project');
        ie_close('img');
      ie_close('p');
      ie_open('p');
        itext('Once your project is created, it will show up on your Console main page. To see the details of your project, click on the name of the project.');
      ie_close('p');
      ie_open('p');
        ie_open('img', null, null,
            'src', '/images/docs/intro/using-the-dashboard--project-container-list.png',
            'alt', 'Project Container List');
        ie_close('img');
      ie_close('p');
    ie_close('article');
    ie_open('article', null, null,
        'id', '3');
      ie_open('h2');
        itext('Install a service');
      ie_close('h2');
      ie_open('p');
        itext('By clicking on a project, you can start monitoring and configuring your project and its services.');
      ie_close('p');
      ie_open('p');
        itext('In each project, you can have up to five services installed. To install a new service, click on the ');
        ie_open('em');
          itext('"Install Service"');
        ie_close('em');
        itext(' button in the top right corner of your project\'s Console screen.');
      ie_close('p');
      ie_open('p');
        ie_open('img', null, null,
            'src', '/images/docs/intro/using-the-dashboard--install-container.png',
            'alt', 'Install Container');
        ie_close('img');
      ie_close('p');
      ie_open('h5');
        itext('Select a service type');
      ie_close('h5');
      ie_open('p');
        itext('You must choose the type of service you want to install.');
      ie_close('p');
      ie_open('p');
        ie_open('img', null, null,
            'src', '/images/docs/intro/using-the-dashboard--select-a-container-type.png',
            'alt', 'Select a Container Type');
        ie_close('img');
      ie_close('p');
      ie_open('h5');
        itext('Choose an ID');
      ie_close('h5');
      ie_open('p');
        itext('Similar to project ID\'s, service ID\'s are permanent and cannot be changed later. When you have chosen an ID, click ');
        ie_open('em');
          itext('"Install Service"');
        ie_close('em');
        itext('.');
      ie_close('p');
      ie_open('p');
        ie_open('img', null, null,
            'src', '/images/docs/intro/using-the-dashboard--install-container-form.png',
            'alt', 'Install Container Form');
        ie_close('img');
      ie_close('p');
      ie_open('h5');
        itext('Install service');
      ie_close('h5');
      ie_open('p');
        itext('Now WeDeploy will start building and deploying your service automatically.');
      ie_close('p');
      ie_open('p');
        ie_open('img', null, null,
            'src', '/images/docs/intro/using-the-dashboard--container-up-and-running.png',
            'alt', 'Container Up and Running');
        ie_close('img');
      ie_close('p');
    ie_close('article');
    ie_open('article', null, null,
        'id', '4');
      ie_open('h2');
        itext('View your service live');
      ie_close('h2');
      ie_open('p');
        itext('Once your service is installed, we give you a specific URL for that service that is made up with the service and project ID\'s (');
        ie_open('em');
          itext('website-strawberry.wedeploy.io');
        ie_close('em');
        itext('). You can always find this URL by clicking on the service in the overview section.');
      ie_close('p');
      ie_open('p');
        ie_open('img', null, null,
            'src', '/images/docs/intro/using-the-dashboard--url-generated.png',
            'alt', 'URL Generated');
        ie_close('img');
      ie_close('p');
    ie_close('article');
    ie_open('h2');
      itext('What\'s next?');
    ie_close('h2');
    ie_open('ul');
      ie_open('li');
        itext('Learn more about using ');
        ie_open('a', null, null,
            'href', '/docs/intro/using-the-command-line.html');
          itext('the WeDeploy CLI');
        ie_close('a');
        itext('.');
      ie_close('li');
    ie_close('ul');
    ie_open('input', null, null,
        'type', 'hidden',
        'value', opt_data.page.title);
    ie_close('input');
    ie_open('input', null, null,
        'type', 'hidden',
        'value', opt_data.site.title);
    ie_close('input');
  };
  $templateAlias1(soy.$$assignDefaults({content: param1967}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'PlUMi.render';
}
