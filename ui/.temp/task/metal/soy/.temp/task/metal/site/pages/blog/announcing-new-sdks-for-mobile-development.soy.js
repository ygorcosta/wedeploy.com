// This file was automatically generated from announcing-new-sdks-for-mobile-development.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace RihtB.
 * @public
 */

goog.module('RihtB.incrementaldom');

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
  var param463 = function() {
    ie_open('article');
      ie_open('p');
        var dyn33 = opt_data.page.description;
        if (typeof dyn33 == 'function') dyn33(); else if (dyn33 != null) itext(dyn33);
      ie_close('p');
      ie_open('figure');
        ie_open('img', null, null,
            'src', '../images/blog/post-11--0.png',
            'alt', 'New SDK\'s for mobile development');
        ie_close('img');
      ie_close('figure');
      ie_open('p');
        itext('Nowadays, we live in a world full of devices. From watching movies on your Apple TV, Receiving notifications on your smart watch, or reading books on your Kindle, we rarely go anywhere without our devices. It doesn\'t seem to be slowing down either; more and more devices are being built and more and more services are being created for them.');
      ie_close('p');
      ie_open('blockquote');
        ie_open('p');
          itext('Mobile and web development just isn\'t enough, we are entering an age of multi-device development.');
        ie_close('p');
      ie_close('blockquote');
      ie_open('p');
        itext('That\'s why WeDeploy was born with more than web development in mind. We understood that as more and more devices consumed API\'s, this would be the future of development.');
      ie_close('p');
      ie_open('p');
        itext('We didn\'t want to just use raw HTTP requests, so we built API Clients that could be called easily and safely. You already know about our ');
        ie_open('a', null, null,
            'href', '/docs/intro/using-the-api-client.html#1');
          itext('JavaScript client');
        ie_close('a');
        itext(', but starting today, there are two new kids on the block.');
      ie_close('p');
      ie_open('p');
        ie_open('strong');
          itext('Introducing the new WeDeploy ');
          ie_open('a', null, null,
              'data-senna-off', '',
              'target', '_blank',
              'href', '/docs/intro/using-the-api-client.html#2');
            itext('iOS (Swift)');
          ie_close('a');
          itext(' and ');
          ie_open('a', null, null,
              'data-senna-off', '',
              'target', '_blank',
              'href', '/docs/intro/using-the-api-client.html#3');
            itext('Android (Java)');
          ie_close('a');
          itext(' SDKs.');
        ie_close('strong');
      ie_close('p');
      ie_open('p');
        itext('With them, you will be able to build apps for the following platforms:');
      ie_close('p');
      ie_open('ul');
        ie_open('li');
          ie_open('strong');
            itext('Apple');
          ie_close('strong');
          itext(': iOS (iPhone, iPad, iPod Touch), watchOS (AppleWatch), tvOS (AppleTV), macOS (CarPlay and Desktop apps).');
        ie_close('li');
        ie_open('li');
          ie_open('strong');
            itext('Google');
          ie_close('strong');
          itext(': Android phones and tablets, Android Wear, Android TV, Android Auto and any platform that supports Java!');
        ie_close('li');
      ie_close('ul');
      ie_open('figure');
        ie_open('img', null, null,
            'src', '../images/blog/post-11--1.gif',
            'alt', 'Realtime communication across devices');
        ie_close('img');
      ie_close('figure');
      ie_open('h4');
        itext('What can I do on those mobile platforms?');
      ie_close('h4');
      ie_open('p');
        itext('Mainly, the clients provides you access to:');
      ie_close('p');
      ie_open('ul');
        ie_open('li');
          ie_open('strong');
            itext('Data service');
          ie_close('strong');
          itext(': Search inside your schema-less database or communicate in realtime with other apps, not matter the platform, using WebSockets under the hood. ');
          ie_open('br');
          ie_close('br');
          ie_open('em');
            itext('\u21B3 See ');
            ie_open('a', null, null,
                'data-senna-off', '',
                'target', '_blank',
                'href', '/tutorials/data-ios/');
              itext('iOS (Swift)');
            ie_close('a');
            itext(' and ');
            ie_open('a', null, null,
                'data-senna-off', '',
                'target', '_blank',
                'href', '/tutorials/data-android/');
              itext('Android (Java)');
            ie_close('a');
            itext(' tutorials.');
          ie_close('em');
          ie_open('br');
          ie_close('br');
          ie_open('br');
          ie_close('br');
        ie_close('li');
        ie_open('li');
          ie_open('strong');
            itext('Auth service');
          ie_close('strong');
          itext(': Create or authenticate users, reset passwords or sign-in using Google, Facebook or Github\'s OAuth2. ');
          ie_open('br');
          ie_close('br');
          ie_open('em');
            itext('\u21B3 See ');
            ie_open('a', null, null,
                'data-senna-off', '',
                'target', '_blank',
                'href', '/tutorials/auth-ios/');
              itext('iOS (Swift)');
            ie_close('a');
            itext(' and ');
            ie_open('a', null, null,
                'data-senna-off', '',
                'target', '_blank',
                'href', '/tutorials/auth-android/');
              itext('Android (Java)');
            ie_close('a');
            itext(' tutorials.');
          ie_close('em');
          ie_open('br');
          ie_close('br');
          ie_open('br');
          ie_close('br');
        ie_close('li');
        ie_open('li');
          ie_open('strong');
            itext('Email service');
          ie_close('strong');
          itext(': Send emails directly from your app and check their delivery status. ');
          ie_open('br');
          ie_close('br');
          ie_open('em');
            itext('\u21B3 See ');
            ie_open('a', null, null,
                'data-senna-off', '',
                'target', '_blank',
                'href', '/tutorials/email-ios/');
              itext('iOS (Swift)');
            ie_close('a');
            itext(' and ');
            ie_open('a', null, null,
                'data-senna-off', '',
                'target', '_blank',
                'href', '/tutorials/email-android/');
              itext('Android (Java)');
            ie_close('a');
            itext(' tutorials.');
          ie_close('em');
          ie_open('br');
          ie_close('br');
          ie_open('br');
          ie_close('br');
        ie_close('li');
        ie_open('li');
          ie_open('strong');
            itext('Raw HTTP Requests');
          ie_close('strong');
          itext(': and if you would like to build your own HTTP requests, you can using our fluent API.');
        ie_close('li');
      ie_close('ul');
      ie_open('h4');
        itext('How do I start');
      ie_close('h4');
      ie_open('p');
        itext('Just use the regular package managers for each platform.');
      ie_close('p');
      $templateAlias2({code: 'target \'MyApp\' do\n  use_frameworks!\n\n  ... rest of your dependencies ...\n  pod \'WeDeploy\'\nend', mode: 'Podfile'}, null, opt_ijData);
      $templateAlias2({code: 'dependencies {\n    ... rest of your dependencies ...\n    compile \'com.wedeploy:com.wedeploy.android:beta-20170505\'\n}', mode: 'build.gradle'}, null, opt_ijData);
      ie_open('h4');
        itext('It\'s that easy!');
      ie_close('h4');
      ie_open('p');
        itext('So, the only thing left to do is to go to the ');
        ie_open('a', null, null,
            'href', '/docs/');
          itext('documentation');
        ie_close('a');
        itext(' and start deploying your mobile apps!');
      ie_close('p');
      ie_open('p');
        itext('Don\'t forget to let us know how it goes! You can connect with us on ');
        ie_open('a', null, null,
            'href', 'https://twitter.com/wedeploy');
          itext('Twitter');
        ie_close('a');
        itext(' or join our community on ');
        ie_open('a', null, null,
            'href', 'https://chat.wedeploy.com');
          itext('Slack');
        ie_close('a');
        itext('.');
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
  $templateAlias1(soy.$$assignDefaults({content: param463}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'RihtB.render';
}
