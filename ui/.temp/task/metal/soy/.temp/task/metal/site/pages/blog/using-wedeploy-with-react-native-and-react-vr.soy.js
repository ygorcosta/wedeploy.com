// This file was automatically generated from using-wedeploy-with-react-native-and-react-vr.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace rRwWs.
 * @public
 */

goog.module('rRwWs.incrementaldom');

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
var $import2 = goog.require('blog.incrementaldom');
var $templateAlias1 = $import2.render;


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ignored, opt_ijData) {
  var param635 = function() {
    ie_open('article');
      ie_open('p');
        var dyn41 = opt_data.page.description;
        if (typeof dyn41 == 'function') dyn41(); else if (dyn41 != null) itext(dyn41);
      ie_close('p');
      ie_open('p');
        itext('As a fundamental player in today\'s development around the world, JavaScript is a key member of that WeDeploy family, but until recently, our API Client only supported Web and Node.js applications. That\'s why we are excited to announce that ');
        ie_open('strong');
          ie_open('a', null, null,
              'href', 'https://facebook.github.io/react-native/');
            itext('React Native');
          ie_close('a');
          itext(' and ');
          ie_open('a', null, null,
              'href', 'https://facebook.github.io/react-vr/');
            itext('React VR');
          ie_close('a');
          itext(' are joining the list too');
        ie_close('strong');
        itext('!');
      ie_close('p');
      ie_open('figure');
        ie_open('a', null, null,
            'href', 'https://github.com/wedeploy/boilerplate-data/tree/react-native',
            'target', '_blank');
          ie_open('img', null, null,
              'src', '../images/blog/post-9--0.png',
              'alt', 'React Native');
          ie_close('img');
        ie_close('a');
      ie_close('figure');
      ie_open('p');
        itext('If you are not aware of ');
        ie_open('a', null, null,
            'href', 'https://facebook.github.io/react-native/');
          itext('React Native');
        ie_close('a');
        itext(', this is it in a nutshell - it allows you to build mobile applications using only JavaScript. Interestingly, you don\'t build a "hybrid app"; rather, you use the same UI building blocks as a regular iOS and Android application, and leverage the full power of the mobile platforms to create a real, first class mobile application.');
      ie_close('p');
      ie_open('p');
        itext('Also, ');
        ie_open('a', null, null,
            'href', 'https://facebook.github.io/react-vr');
          itext('React VR');
        ie_close('a');
        itext(' allows you to step into the the Virtual Reality and build VR websites and interactive 360 experiences with React.');
      ie_close('p');
      ie_open('h4');
        itext('Using WeDeploy in React Native and React VR');
      ie_close('h4');
      ie_open('p');
        itext('There is no difference between the usage of the JavaScript API for Web and React Native or React VR. The same API calls for ');
        ie_open('a', null, null,
            'href', '/docs/data/saving-data.html');
          itext('Data');
        ie_close('a');
        itext(', ');
        ie_open('a', null, null,
            'href', '/docs/auth/manage-users.html');
          itext('Auth');
        ie_close('a');
        itext(', and ');
        ie_open('a', null, null,
            'href', '/docs/email/sending-email.html');
          itext('Email');
        ie_close('a');
        itext(' are available when your app is running in React Native or React VR environment too. There are no API nuances - the same code you would write for a Web application, will run successfully on React Native and React VR too.');
      ie_close('p');
      ie_open('p');
        itext('Here is ');
        ie_open('a', null, null,
            'href', 'https://github.com/wedeploy/boilerplate-data/blob/43e5d19b49ac3d5b59f7ec646f36aadd1cecc616/TodoApp/pages/list-items.js#L24-L36');
          itext('an example taken from the boilerplate application');
        ie_close('a');
        itext(':');
      ie_close('p');
      $templateAlias2({code: 'WeDeploy\n  .data(\'<data-url-here>\')\n  .orderBy(\'id\', \'desc\')\n  .limit(5)\n  .get(\'tasks\')\n  .then((tasks) => {\n    this.setState({\n      items: tasks\n    });\n  })\n  .catch((error) => {\n    console.error(error);\n  });', mode: 'text/javascript'}, null, opt_ijData);
      ie_open('p');
        itext('The above code establishes a connection with the Data Service and retrieves the first five To-do tasks, then sets them to the ');
        ie_open('code');
          itext('state');
        ie_close('code');
        itext(' of the component to be rendered on the screen.');
      ie_close('p');
      ie_open('h4');
        itext('Building an application');
      ie_close('h4');
      ie_open('p');
        itext('To help you start building applications, we created an example To-Do List application. You may check the code ');
        ie_open('a', null, null,
            'href', 'https://github.com/wedeploy/boilerplate-data/tree/react-native');
          itext('here');
        ie_close('a');
        itext('. The application is short but powerful enough to showcase a few fundamental things:');
      ie_close('p');
      ie_open('ol');
        ie_open('li');
          itext('Instantiating WeDeploy');
        ie_close('li');
        ie_open('li');
          itext('Working with the data service');
        ie_close('li');
        ie_open('li');
          itext('Working with Real-time events');
        ie_close('li');
        ie_open('li');
          itext('Sharing application code between iOS and Android.');
        ie_close('li');
      ie_close('ol');
      ie_open('p');
        itext('Here is what the To-Do List application looks like:');
      ie_close('p');
      ie_open('figure');
        ie_open('video', null, null,
            'controls', '',
            'style', 'max-width: 300px;');
          ie_open('source', null, null,
              'src', '../images/blog/post-9--1.webm',
              'type', 'video/webm');
          ie_close('source');
          ie_open('source', null, null,
              'src', '../images/blog/post-9--1.mp4',
              'type', 'video/mp4');
          ie_close('source');
          itext('Your browser doesn\'t support HTML5 video in WebM with VP8/VP9 or MP4 with H.264.');
        ie_close('video');
      ie_close('figure');
      ie_open('p');
        itext('We are excited to see what you start building with WeDeploy using React Native and React VR!');
      ie_close('p');
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
  $templateAlias1(soy.$$assignDefaults({content: param635}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'rRwWs.render';
}
