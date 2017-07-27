// This file was automatically generated from wedeploy-beta-our-biggest-release-yet.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace hHShP.
 * @public
 */

goog.module('hHShP.incrementaldom');

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
  var param651 = function() {
    ie_open('article');
      ie_open('p');
        ie_open('a', null, null,
            'href', 'https://console.wedeploy.com',
            'target', '_blank');
          ie_open('figure', null, null,
              'style', 'margin-top: -1.5rem');
            ie_open('img', null, null,
                'src', '../images/blog/post-12--0.png',
                'alt', 'Introducing WeDeploy Beta');
            ie_close('img');
          ie_close('figure');
        ie_close('a');
      ie_close('p');
      ie_open('p');
        var dyn42 = opt_data.page.description;
        if (typeof dyn42 == 'function') dyn42(); else if (dyn42 != null) itext(dyn42);
      ie_close('p');
      ie_open('p');
        itext('But first, a little backstory.');
      ie_close('p');
      ie_open('h4');
        itext('Where we\'ve come');
      ie_close('h4');
      ie_open('p');
        itext('314 days ago, we launched the first app on WeDeploy. It was such an exhilarating time but we had our eyes set on the future.');
      ie_close('p');
      ie_open('p');
        itext('The thing is, WeDeploy didn\'t start as "WeDeploy". Almost two years ago, me and a few others spent our spare time working on this project called Launchpad. It was just a shadow of what WeDeploy is today, but it was a start. It was ');
        ie_open('strong');
          itext('our');
        ie_close('strong');
        itext(' start.');
      ie_close('p');
      ie_open('p');
        itext('After that first app was deployed, we got right back to work. Yes, we had achieved something, but it still had much room to grow. We needed to challenge our own mindset and imagination in order to create a platform that could change the way people develop software. We believe that this release puts us much closer to that goal.');
      ie_close('p');
      ie_open('hr');
      ie_close('hr');
      ie_open('h4');
        itext('What changed?');
      ie_close('h4');
      ie_open('h5');
        itext('1. New Infrastructure on AWS');
      ie_close('h5');
      ie_open('p');
        itext('One of the biggest changes was moving the WeDeploy infrastructure from our servers in the Liferay Headquarters to AWS. We knew that in order to continue to grow and expand globally, we had to start preparing now.');
      ie_close('p');
      ie_open('p');
        itext('This move has greatly impacted the stability of WeDeploy and even though we don\'t support multi-region deployments yet, we are excited that this change will make that possible in the near future.');
      ie_close('p');
      ie_open('h5');
        itext('2. Rewritten CLI, API, and Dashboard');
      ie_close('h5');
      ie_open('p');
        itext('One of our goals the past nine months was not to just build on top of what we had, but to also rethink the way we built WeDeploy and be willing to rebuilt parts of it from the ground up if needed.');
      ie_close('p');
      ie_open('p');
        itext('We\'ve spent hours and days refactoring the CLI, API, and Dashboard (which is now known as Console) and I can confidently say, it was worth it! By refactoring, we gave ourselves the opportunity to not only clean up the code, but to also improve performance, usability, and the overall design.');
      ie_close('p');
      ie_open('h5');
        itext('3. HTTPS Out of the Box');
      ie_close('h5');
      ie_open('p');
        itext('Yes, now every project you deploy and every service you install will automatically be given an HTTPS certificate. This means your app will safely communicate with your users without you having to configure anything.');
      ie_close('p');
      ie_open('p');
        itext('We also make sure that those HTTPS certificates are valid by renewing them from time to time. That way you can always trust that your application will be secured.');
      ie_close('p');
      ie_open('h5');
        itext('4. Custom Docker Services');
      ie_close('h5');
      ie_open('p');
        itext('The container ecosystem has evolved a lot in the past years and ');
        ie_open('a', null, null,
            'href', 'https://www.docker.com/');
          itext('Docker');
        ie_close('a');
        itext(' is probably mainly responsible for such success.');
      ie_close('p');
      ie_open('p');
        itext('Today we want to bring the benefits of this technology to you and facilitate the Docker-based development workflow. That\'s why we\'re introducing ');
        ie_open('code');
          itext('Dockerfile');
        ie_close('code');
        itext(' support.');
      ie_close('p');
      ie_open('p');
        itext('During alpha you were limited by the services we provided, now your imagination is the limit. This opens up the possibility to deploy pretty much anything and we look forward to see what you\'re going to create.');
      ie_close('p');
      ie_open('p');
        ie_open('em');
          itext('Read more on the ');
          ie_open('a', null, null,
              'href', '/docs/deploy/deploying-docker.html');
            itext('documentation');
          ie_close('a');
          itext(' or follow our ');
          ie_open('a', null, null,
              'href', '/tutorials/docker/get-started.html');
            itext('step-by-step tutorial');
          ie_close('a');
          itext('.');
        ie_close('em');
      ie_close('p');
      ie_open('h5');
        itext('5. Volume Support');
      ie_close('h5');
      ie_open('p');
        itext('With the addition of custom Docker services, new challenges arrive. For example, let\'s say you deploy an app with PHP and MySQL, then you start adding entries to your database. What happens when you restart that project without a proper setup? Well, you\'re going to lose all the data that was saved.');
      ie_close('p');
      ie_open('p');
        itext('In order to be able to persist and share data between services, we\'re introducing the concept of volumes. Quite simply, volumes are specially-designated directories that live outside of the file system where your code runs. This way, even if your application becomes unavailable due to a failure or other causes, your data still persists.');
      ie_close('p');
      ie_open('p');
        ie_open('em');
          itext('Read more on the ');
          ie_open('a', null, null,
              'href', '#');
            itext('documentation');
          ie_close('a');
          itext('.');
        ie_close('em');
      ie_close('p');
      ie_open('h5');
        itext('6. Instant Deployment');
      ie_close('h5');
      ie_open('p');
        itext('Before you had to use Git, now it\'s ');
        ie_open('code');
          itext('we deploy');
        ie_close('code');
      ie_close('p');
      ie_open('p');
        itext('Deploying should be the least of your worries, which is why we created a new Instant Deployment option! Using our simple ');
        ie_open('a', null, null,
            'href', '/docs/intro/using-the-command-line.html');
          itext('CLI');
        ie_close('a');
      ie_close('p');
      ie_open('p');
        ie_open('em');
          itext('Read more on the ');
          ie_open('a', null, null,
              'href', '/docs/deploy/instant-deployment.html');
            itext('documentation');
          ie_close('a');
          itext('.');
        ie_close('em');
      ie_close('p');
      ie_open('h5');
        itext('7. Code Detector');
      ie_close('h5');
      ie_open('p');
        itext('Before you always had to declare a container.json, now you can skip for certain situations.');
      ie_close('p');
      ie_open('p');
        itext('our code-recipe detector, you can type ');
        ie_open('code');
          itext('we deploy');
        ie_close('code');
        itext(' in any folder containing static files, a Node.js app, or a Dockerfile and we will take it from there.');
      ie_close('p');
      ie_open('p');
        ie_open('em');
          itext('Read more on the ');
          ie_open('a', null, null,
              'href', '/docs/deploy/instant-deployment.html');
            itext('documentation');
          ie_close('a');
          itext('.');
        ie_close('em');
      ie_close('p');
      ie_open('hr');
      ie_close('hr');
      ie_open('h4');
        itext('What\'s next?');
      ie_close('h4');
      ie_open('p');
        itext('Some of these changes have implications on the way your current apps will deploy on the new infrastructure. But don\'t worry, we already have a ');
        ie_open('strong');
          ie_open('a', null, null,
              'href', '/blog/how-to-migrate-your-project-to-beta.html');
            itext('Migration Guide');
          ie_close('a');
        ie_close('strong');
        itext(' ready for you so you can get started right away.');
      ie_close('p');
      ie_open('p');
        ie_open('strong');
          itext('What about my alpha projects?');
        ie_close('strong');
        itext(' Don\'t worry, they are still there, but we will be ');
        ie_open('strong');
          itext('destroying');
        ie_close('strong');
        itext(' the old infrastructure on August 31st so you have one month to migrate your projects over.');
      ie_close('p');
      ie_open('p');
        itext('We are so excited to be able to share this new release with you! Make sure to ');
        ie_open('strong');
          ie_open('a', null, null,
              'href', 'https://console.wedeploy.com');
            itext('try it out for yourself');
          ie_close('a');
        ie_close('strong');
        itext(' and ');
        ie_open('a', null, null,
            'href', 'https://chat.wedeploy.com');
          itext('join our community');
        ie_close('a');
        itext(' to ask questions or let us know what you are building!');
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
  $templateAlias1(soy.$$assignDefaults({content: param651}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'hHShP.render';
}
