// This file was automatically generated from api-clients.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace DLWpE.
 * @public
 */

goog.module('DLWpE.incrementaldom');

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
var $import2 = goog.require('guide.incrementaldom');
var $templateAlias1 = $import2.render;


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ignored, opt_ijData) {
  var param1746 = function() {
    ie_open('h3');
      var dyn95 = opt_data.page.title;
      if (typeof dyn95 == 'function') dyn95(); else if (dyn95 != null) itext(dyn95);
    ie_close('h3');
    ie_open('h6');
      var dyn96 = opt_data.page.description;
      if (typeof dyn96 == 'function') dyn96(); else if (dyn96 != null) itext(dyn96);
    ie_close('h6');
    ie_open('article', null, null,
        'id', '1');
      ie_open('h2');
        itext('Introduction');
      ie_close('h2');
      ie_open('p');
        itext('You can use our API Clients for sending/receiving requests to/from WeDeploy services like ');
        ie_open('a', null, null,
            'href', '/docs/auth/getting-started.html');
          itext('Auth');
        ie_close('a');
        itext(', ');
        ie_open('a', null, null,
            'href', '/docs/email/getting-started.html');
          itext('Email');
        ie_close('a');
        itext(', and ');
        ie_open('a', null, null,
            'href', '/docs/hosting/getting-started.html');
          itext('Hosting');
        ie_close('a');
        itext('. We built those libraries to make your life easier and adapt to your current workflow.');
      ie_close('p');
      ie_open('p');
        itext('Below you can find a list that contains all of them, including instructions on how to install and details for each specific platform.');
      ie_close('p');
    ie_close('article');
    ie_open('article', null, null,
        'id', '2');
      ie_open('h2');
        itext('JavaScript (Web & Node.js)');
      ie_close('h2');
      ie_open('p');
        itext('You can use this by adding a script element in your HTML file or to load the library using NPM.');
      ie_close('p');
      ie_open('h5');
        itext('Installation');
      ie_close('h5');
      ie_open('p');
        ie_open('strong');
          itext('CDN');
        ie_close('strong');
      ie_close('p');
      $templateAlias2({code: '<script src="https://cdn.wedeploy.com/api/latest/wedeploy.js"><\/script>', mode: 'xml'}, null, opt_ijData);
      ie_open('p');
        ie_open('strong');
          itext('NPM');
        ie_close('strong');
      ie_close('p');
      $templateAlias2({code: 'npm install --save wedeploy', mode: 'text'}, null, opt_ijData);
      ie_open('h5');
        itext('Nuances');
      ie_close('h5');
      ie_open('p');
        itext('After installing WeDeploy using NPM, you can load this package like this:');
      ie_close('p');
      $templateAlias2({code: 'var WeDeploy = require(\'wedeploy\');\n\n// Or if you\'re using ES6\nimport WeDeploy from \'wedeploy\';', mode: 'javascript'}, null, opt_ijData);
      ie_open('p');
        itext('This library is compatible with all major browsers (Chrome, Firefox, Safari, Edge, and IE10+) as well as ');
        ie_open('a', null, null,
            'href', 'https://facebook.github.io/react-native/');
          itext('React Native');
        ie_close('a');
        itext(' and ');
        ie_open('a', null, null,
            'href', 'https://facebook.github.io/react-vr/');
          itext('React VR');
        ie_close('a');
        itext('.');
      ie_close('p');
      ie_open('p');
        itext('The API calls are the same in all JavaScript environments.');
      ie_close('p');
    ie_close('article');
    ie_open('article', null, null,
        'id', '3');
      ie_open('h2');
        itext('Swift (iOS)');
      ie_close('h2');
      ie_open('p');
        itext('In order to start using you have to add it as Cocoapod in your ');
        ie_open('code');
          itext('Podfile');
        ie_close('code');
        itext('.');
      ie_close('p');
      ie_open('h5');
        itext('Installation');
      ie_close('h5');
      ie_open('p');
        ie_open('strong');
          itext('Cocoapods');
        ie_close('strong');
      ie_close('p');
      $templateAlias2({code: 'pod \'WeDeploy\'', mode: 'swift'}, null, opt_ijData);
      ie_open('h5');
        itext('Nuances');
      ie_close('h5');
      ie_open('p');
        itext('By default, all requests returns a promise like below.');
      ie_close('p');
      $templateAlias2({code: 'WeDeploy\n    .data(\'https://<serviceID>-<projectID>.wedeploy.io\')\n    .get(resourcePath: "movies")\n    .then { movie -> Void in\n        print(movie)\n    }', mode: 'swift'}, null, opt_ijData);
      ie_open('p');
        itext('You are also able to return a callback or observable. These two methods are available:');
      ie_close('p');
      $templateAlias2({code: '// toCallback converts a promise into a callback\nWeDeploy\n    .data(\'https://<serviceID>-<projectID>.wedeploy.io\')\n    .get(resourcePath: "movies")\n    .toCallback { movies, error in\n        // here you can check the error or the response\n    }\n\n// toObservable converts a promise into an observable\nWeDeploy\n    .data(\'https://<serviceID>-<projectID>.wedeploy.io\')\n    .get(resourcePath: "movies")\n    .toObservable()\n    .subscribe(\n        onNext: { movies in\n            // here you receive the movies\n        },\n        onError: { error in\n            // oops something went wrong\n        }\n    )', mode: 'swift'}, null, opt_ijData);
    ie_close('article');
    ie_open('article', null, null,
        'id', '4');
      ie_open('h2');
        itext('Java (Android)');
      ie_close('h2');
      ie_open('p');
        itext('You just need to add the following line to your ');
        ie_open('code');
          itext('build.gradle');
        ie_close('code');
        itext(' file.');
      ie_close('p');
      ie_open('h5');
        itext('Installation');
      ie_close('h5');
      ie_open('p');
        ie_open('strong');
          itext('Gradle');
        ie_close('strong');
      ie_close('p');
      $templateAlias2({code: 'compile \'com.wedeploy:com.wedeploy.android:beta-20170505\'', mode: 'groovy'}, null, opt_ijData);
      ie_open('h5');
        itext('Nuances');
      ie_close('h5');
      ie_open('p');
        itext('Before calling any method from WeDeploy, you have to build an instance first:');
      ie_close('p');
      $templateAlias2({code: 'WeDeploy weDeploy = new WeDeploy.Builder().build();', mode: 'text/x-java'}, null, opt_ijData);
      ie_open('p');
        itext('Then, you are able to synchronously fire requests to WeDeploy by calling ');
        ie_open('code');
          itext('execute()');
        ie_close('code');
        itext(':');
      ie_close('p');
      $templateAlias2({code: 'weDeploy\n    .data(\'https://data-datademo.wedeploy.io\')\n    .get("movies")\n    .execute();', mode: 'text/x-java'}, null, opt_ijData);
      ie_open('p');
        itext('You can also fire asynchronous requests by specifying a Callback to the ');
        ie_open('code');
          itext('execute()');
        ie_close('code');
        itext(' method:');
      ie_close('p');
      $templateAlias2({code: 'weDeploy\n    .data(\'https://data-datademo.wedeploy.io\')\n    .get("movies")\n    .execute(new Callback() {\n        public void onSuccess(Response response) {\n            // here you receive the movies\n        }\n\n        public void onFailure(Exception e) {\n            // oops something went wrong\n        }\n    });', mode: 'text/x-java'}, null, opt_ijData);
      ie_open('p');
        itext('The WeDeploy Android API is RxJava 2 compatible. This means that you can convert the request into a Single RxJava object, which emits either a success or an error event. You must add a dependency to RxAndroid in your project ');
        ie_open('code');
          itext('build.gradle');
        ie_close('code');
        itext(' in order to use it.');
      ie_close('p');
      $templateAlias2({code: 'weDeploy\n    .data(\'https://data-datademo.wedeploy.io\')\n    .get("movies")\n    .asSingle()\n    .subscribeOn(Schedulers.io())\n    .observeOn(AndroidSchedulers.mainThread())\n    .subscribe(\n        response -> {\n\n        },\n        throwable -> {\n\n        });', mode: 'text/x-java'}, null, opt_ijData);
    ie_close('article');
    ie_open('h2');
      itext('What\'s next?');
    ie_close('h2');
    ie_open('ul');
      ie_open('li');
        itext('Learn more about using ');
        ie_open('a', null, null,
            'href', '/docs/intro/custom-domains.html');
          itext('Custom Domains');
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
  $templateAlias1(soy.$$assignDefaults({content: param1746}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'DLWpE.render';
}
