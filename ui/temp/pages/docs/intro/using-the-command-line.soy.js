/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from using-the-command-line.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace docsIntroUsingTheCommandLineHtml.
 * @public
 */

goog.module('docsIntroUsingTheCommandLineHtml.incrementaldom');

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

var $templateAlias1 = Soy.getTemplate('guide.incrementaldom', 'render');


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ignored, opt_ijData) {
  opt_data = opt_data || {};
  var param981 = function() {
    ie_open('h1');
      itext('Using the Command-line');
    ie_close('h1');
    ie_open('h6');
      itext('The WeDeploy Command-Line Interface is a tool for helping you to use the WeDeploy platform by providing support to things like creating, managing, and scaling applications.');
    ie_close('h6');
    ie_open('article', null, null,
        'id', 'article_1');
      ie_open('h2');
        itext('Dependencies');
      ie_close('h2');
      ie_open('p');
        itext('The following external software dependencies are necessary to correctly run some commands:');
      ie_close('p');
      ie_open('p');
        itext('a) ');
        ie_open('a', null, null,
            'href', 'https://git-scm.com/');
          itext('Git');
        ie_close('a');
        itext(' (download for ');
        ie_open('a', null, null,
            'href', 'https://git-scm.com/download/linux');
          itext('Linux');
        ie_close('a');
        itext(', ');
        ie_open('a', null, null,
            'href', 'https://git-scm.com/download/mac');
          itext('macOS');
        ie_close('a');
        itext(', ');
        ie_open('a', null, null,
            'href', 'https://git-scm.com/download/win');
          itext('Windows');
        ie_close('a');
        itext(')');
      ie_close('p');
      ie_open('p');
        itext('b) ');
        ie_open('a', null, null,
            'href', 'https://www.docker.com/');
          itext('Docker');
        ie_close('a');
        itext(' (download for ');
        ie_open('a', null, null,
            'href', 'https://docs.docker.com/engine/installation/linux/');
          itext('Linux');
        ie_close('a');
        itext(', ');
        ie_open('a', null, null,
            'href', 'https://download.docker.com/mac/stable/Docker.dmg');
          itext('macOS');
        ie_close('a');
        itext(', ');
        ie_open('a', null, null,
            'href', 'https://download.docker.com/win/stable/InstallDocker.msi');
          itext('Windows');
        ie_close('a');
        itext(')');
      ie_close('p');
      ie_open('p');
        itext('Docker version 1.12.0 or later is required. If you use macOS, install the Docker for Mac. If you use Windows, please install Docker for Windows. Docker Toolbox, still available for earlier Mac and Windows systems is not supported.');
      ie_close('p');
    ie_close('article');
    ie_open('article', null, null,
        'id', 'article_2');
      ie_open('h2');
        itext('Installing');
      ie_close('h2');
      ie_open('p');
        itext('If you use a Unix-like system such as macOS or Linux open your Terminal and run:');
      ie_close('p');
      $templateAlias2({code: 'curl http://cdn.wedeploy.com/cli/latest/wedeploy.sh -sL | bash', mode: 'xml'}, null, opt_ijData);
      ie_open('p');
        itext('If you use Windows, you probably want the ');
        ie_open('a', null, null,
            'href', 'https://bin.equinox.io/c/8WGbGy94JXa/cli-stable-windows-amd64.msi');
          itext('Windows amd64 installer');
        ie_close('a');
        itext('. For other systems, check a list of ');
        ie_open('a', null, null,
            'href', 'https://bin.equinox.io/c/8WGbGy94JXa/cli-stable-windows-amd64.zip');
          itext('all builds available');
        ie_close('a');
        itext('.');
      ie_close('p');
      ie_open('p');
        ie_open('strong');
          itext('Check your docker configuration:');
        ie_close('strong');
        itext(' docker comes with a 2.0GB maximum memory limit by default on macOS and Windows. You should increase this limit to at least 4.0GB.');
      ie_close('p');
    ie_close('article');
    ie_open('article', null, null,
        'id', 'article_3');
      ie_open('h2');
        itext('Creating projects locally');
      ie_close('h2');
      ie_open('p');
        itext('You are able to organize your services by project. Inside each project you can create services (called containers here), like static hosting, data API, Auth service, etc.');
      ie_close('p');
      ie_open('p');
        itext('Use ');
        ie_open('code');
          itext('we create');
        ie_close('code');
        itext(' to create projects and containers. You can create a project anywhere on your machine. Containers might be created one directory above a project for your convenience.');
      ie_close('p');
      $templateAlias2({code: 'Usage:\n  we create --project <project> --container <container>', mode: 'xml'}, null, opt_ijData);
    ie_close('article');
    ie_open('article', null, null,
        'id', 'article_4');
      ie_open('h2');
        itext('Running projects locally');
      ie_close('h2');
      ie_open('p');
        itext('For this demo we are going to use the hosting boilerplate.');
      ie_close('p');
      ie_open('ol');
        ie_open('li');
          itext('Start local infrastructure:');
        ie_close('li');
      ie_close('ol');
      $templateAlias2({code: 'we run', mode: 'xml'}, null, opt_ijData);
      ie_open('ol', null, null,
          'start', '2');
        ie_open('li');
          itext('Clone this repository:');
        ie_close('li');
      ie_close('ol');
      $templateAlias2({code: 'git clone https://github.com/wedeploy/boilerplate-hosting.git\ncd boilerplate-hosting', mode: 'xml'}, null, opt_ijData);
      ie_open('ol', null, null,
          'start', '3');
        ie_open('li');
          itext('Link this container to a new project named demo:');
        ie_close('li');
      ie_close('ol');
      $templateAlias2({code: 'we link --project demo', mode: 'xml'}, null, opt_ijData);
      ie_open('ol', null, null,
          'start', '4');
        ie_open('li');
          itext('Now your container should be accessible from ');
          ie_open('a', null, null,
              'href', 'http://hosting.demo.wedeploy.me');
            itext('http://hosting.demo.wedeploy.me');
          ie_close('a');
        ie_close('li');
      ie_close('ol');
      ie_open('p');
        ie_open('em');
          itext('On the first first time it might take a few minutes while downloading the hosting image on the background.');
        ie_close('em');
      ie_close('p');
    ie_close('article');
    ie_open('article', null, null,
        'id', 'article_5');
      ie_open('h2');
        itext('Remotes and friendly host style');
      ie_close('h2');
      ie_open('p');
        itext('Many commands requires ');
        ie_open('code');
          itext('--project');
        ie_close('code');
        itext(', ');
        ie_open('code');
          itext('--container');
        ie_close('code');
        itext(', or ');
        ie_open('code');
          itext('--remote');
        ie_close('code');
        itext(' flags. You can use the following patterns for passing these values:');
      ie_close('p');
      $templateAlias2({code: 'we <command> --project <project> --container <container>', mode: 'xml'}, null, opt_ijData);
      ie_open('p');
        itext('and the friendly host style:');
      ie_close('p');
      $templateAlias2({code: 'we <command> <container>.<project>.<remote address>', mode: 'xml'}, null, opt_ijData);
      ie_open('p');
        itext('or even');
      ie_close('p');
      $templateAlias2({code: 'we <command> <container>.<project> --remote <remote>', mode: 'xml'}, null, opt_ijData);
      ie_open('p');
        itext('For the local cloud, just don\'t add a ');
        ie_open('code');
          itext('--remote');
        ie_close('code');
        itext(' or ');
        ie_open('code');
          itext('<remote address>');
        ie_close('code');
        itext(' value like in:');
      ie_close('p');
      $templateAlias2({code: 'we log public.chat', mode: 'xml'}, null, opt_ijData);
      ie_open('p');
        itext('or to list all logs by containers on the project "chat":');
      ie_close('p');
      $templateAlias2({code: 'we log chat', mode: 'xml'}, null, opt_ijData);
      ie_open('p');
        itext('Remotes can be managed in a similar fashion as git\'s remote command:');
      ie_close('p');
      $templateAlias2({code: '$ we remote -v\nwedeploy        wedeploy.io', mode: 'xml'}, null, opt_ijData);
      ie_open('p');
        itext('If you know how to use ');
        ie_open('code');
          itext('git remote');
        ie_close('code');
        itext(' you already know how to use ');
        ie_open('code');
          itext('we remote');
        ie_close('code');
        itext('.');
      ie_close('p');
      ie_open('p');
        itext('For your convenience we include the wedeploy cloud remote by default once you log in on the CLI app with ');
        ie_open('code');
          itext('we login');
        ie_close('code');
        itext(' (requested when necessary).');
      ie_close('p');
      ie_open('p');
        itext('All commands that support ');
        ie_open('code');
          itext('--project');
        ie_close('code');
        itext(', ');
        ie_open('code');
          itext('--container');
        ie_close('code');
        itext(', and / or ');
        ie_open('code');
          itext('--remote');
        ie_close('code');
        itext(' support this host style as well.');
      ie_close('p');
    ie_close('article');
    ie_open('article', null, null,
        'id', 'article_6');
      ie_open('h2');
        itext('Fetching project and container logs');
      ie_close('h2');
      ie_open('p');
        itext('You can fetch projects and container logs with');
      ie_close('p');
      $templateAlias2({code: 'we log --project <project> --container <container>', mode: 'xml'}, null, opt_ijData);
      ie_open('p');
        itext('or with a friendly host style like');
      ie_close('p');
      $templateAlias2({code: 'we log <container>.<project>.wedeploy.me', mode: 'xml'}, null, opt_ijData);
      ie_open('h3');
        itext('Examples:');
      ie_close('h3');
      ie_open('p');
        itext('See the logs for the last 20min for the data container on the wechat project:');
      ie_close('p');
      $templateAlias2({code: 'we log --project wechat --container data --since 20min', mode: 'xml'}, null, opt_ijData);
      ie_open('p');
        itext('Watch for logs on the hosting container on the demo project:');
      ie_close('p');
      $templateAlias2({code: 'we log hosting.demo.wedeploy.me --watch', mode: 'xml'}, null, opt_ijData);
    ie_close('article');
    ie_open('article', null, null,
        'id', 'article_7');
      ie_open('h2');
        itext('Listing projects and containers');
      ie_close('h2');
      ie_open('p');
        itext('Watch the listing of all projects running locally:');
      ie_close('p');
      $templateAlias2({code: 'we list --watch', mode: 'xml'}, null, opt_ijData);
      ie_open('p');
        itext('List all your projects running on the WeDeploy cloud:');
      ie_close('p');
      $templateAlias2({code: 'we list wedeploy.io', mode: 'xml'}, null, opt_ijData);
      ie_open('p');
        itext('or');
      ie_close('p');
      $templateAlias2({code: 'we list --remote wedeploy', mode: 'xml'}, null, opt_ijData);
    ie_close('article');
  };
  $templateAlias1(soy.$$assignDefaults({content: param981}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'docsIntroUsingTheCommandLineHtml.render';
}

exports.render.params = [];
exports.render.types = {};
templates = exports;
return exports;

});

class docsIntroUsingTheCommandLineHtml extends Component {}
Soy.register(docsIntroUsingTheCommandLineHtml, templates);
export { docsIntroUsingTheCommandLineHtml, templates };
export default templates;
/* jshint ignore:end */
