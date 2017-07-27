// This file was automatically generated from 3-reasons-why-you-should-use-environment-variables.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace byZmD.
 * @public
 */

goog.module('byZmD.incrementaldom');

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
var $import1 = goog.require('blog.incrementaldom');
var $templateAlias1 = $import1.render;


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ignored, opt_ijData) {
  var param443 = function() {
    ie_open('article');
      ie_open('p');
        itext('There are some really big things coming down the pipe with our Beta release right around the corner, but we just couldn\'t wait to tell you about something we are really excited about: ');
        ie_open('strong');
          ie_open('a', null, null,
              'href', '/docs/intro/environment-variables.html');
            itext('Environment Variables');
          ie_close('a');
        ie_close('strong');
        itext('.');
      ie_close('p');
      ie_open('p');
        itext('Environments have been around for a while, mainly hiding in the deep code forests, so we wanted to highlight them and share that we wrote some fresh documentation so you can start using them right away!');
      ie_close('p');
      ie_open('figure');
        ie_open('img', null, null,
            'src', '../images/blog/post-7--0.gif',
            'alt', 'Adding environment variables');
        ie_close('img');
      ie_close('figure');
      ie_open('p');
        ie_open('em');
          itext('Here are a couple easy ways they can improve your app!');
        ie_close('em');
        itext('\u200B');
      ie_close('p');
      ie_open('h4');
        itext('\uD83D\uDE80 Change Hosting serve directory');
      ie_close('h4');
      ie_open('p');
        itext('By default, WeDeploy Hosting looks to your service\'s root directory to know what files to serve, but what if you are using a Gulp or Grunt build task to compile your files? No problem, just add the ');
        ie_open('code');
          itext('WEDEPLOY_WEB_PATH');
        ie_close('code');
        itext(' key and use the build path as your value.');
      ie_close('p');
      ie_open('p');
        ie_open('strong');
          itext('See the full list at our ');
          ie_open('a', null, null,
              'href', '/docs/hosting/environment-variables.html');
            itext('Hosting Environment Variable Docs');
          ie_close('a');
        ie_close('strong');
        itext('.');
      ie_close('p');
      ie_open('h4');
        itext('\uD83D\uDD10 Integrate OAuth into your app');
      ie_close('h4');
      ie_open('p');
        itext('Want your users to log in with Facebook, Google, or Github accounts? Perfect, because that is super easy to do with WeDeploy Auth. Start by just adding a few environment variables for each provider.');
      ie_close('p');
      ie_open('p');
        ie_open('strong');
          itext('See the full list at our ');
          ie_open('a', null, null,
              'href', '/docs/auth/environment-variables.html');
            itext('Auth Environment Variable Docs');
          ie_close('a');
        ie_close('strong');
        itext('.');
      ie_close('p');
      ie_open('h4');
        itext('\uD83D\uDCE7 Change Email provider');
      ie_close('h4');
      ie_open('p');
        itext('WeDeploy Email supplies you with an email service straight out of the box, but what if you want to use your own SMTP server? With Environment Variables, you can change the email host, username, port, and much more.');
      ie_close('p');
      ie_open('p');
        ie_open('strong');
          itext('See the full list at our ');
          ie_open('a', null, null,
              'href', '/docs/email/environment-variables.html');
            itext('Email Environment Variable Docs');
          ie_close('a');
        ie_close('strong');
        itext('.');
      ie_close('p');
      ie_open('p');
        itext('That\'s it! If you have any question, just ');
        ie_open('a', null, null,
            'href', 'mailto:team@wedeploy.com');
          itext('shoot us an email');
        ie_close('a');
        itext(' or join the conversation on ');
        ie_open('a', null, null,
            'href', 'https://chat.wedeploy.com/');
          itext('Slack');
        ie_close('a');
        itext('.');
      ie_close('p');
      ie_open('p');
        itext('Happy coding! \uD83D\uDCBB');
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
  $templateAlias1(soy.$$assignDefaults({content: param443}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'byZmD.render';
}
