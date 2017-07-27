/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from the-first-wedeploy-hack-day-in-madrid.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace HPLlN.
 * @public
 */

goog.module('HPLlN.incrementaldom');

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

var $templateAlias1 = Soy.getTemplate('blog.incrementaldom', 'render');


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ignored, opt_ijData) {
  var param613 = function() {
    ie_open('article');
      ie_open('p');
        var dyn39 = opt_data.page.description;
        if (typeof dyn39 == 'function') dyn39(); else if (dyn39 != null) itext(dyn39);
      ie_close('p');
      ie_open('p');
        itext('Since we knew there were lots of great developers in Spain, we decided to jump on a plane and go to our Madrid office to host a WeDeploy hack day!');
      ie_close('p');
      ie_open('figure');
        ie_open('img', null, null,
            'src', '../images/blog/post-10--1.jpg',
            'alt', 'Hack day Preparations');
        ie_close('img');
      ie_close('figure');
      ie_open('p');
        itext('We could feel the excitement in the office as the day drew near.');
      ie_close('p');
      ie_open('p');
        itext('I mean honestly, who can pass up the opportunity of a free day to play around with whatever creative dev project you want?');
      ie_close('p');
      ie_open('p');
        itext('But what were the rules? For this event, we simply asked each team to use WeDeploy in their projects. Other than that, they could build whatever they wanted.');
      ie_close('p');
      ie_open('figure');
        ie_open('img', null, null,
            'src', '../images/blog/post-10--2.jpg',
            'alt', 'Teamwork at the hack day');
        ie_close('img');
      ie_close('figure');
      ie_open('h4');
        itext('Let\'s do this!');
      ie_close('h4');
      ie_open('p');
        itext('At 9am they all started to arrive and we gave everyone five minutes to write down project ideas. Then, they each presented their ideas to the whole group and mentioned specific resources or talent that they would need to accomplish it. The rest of the participants were free to join whatever project interested them.');
      ie_close('p');
      ie_open('p');
        itext('The ideas were ready, the teams were made, and the countdown was started. Nine hours later we got the results!');
      ie_close('p');
      ie_open('h4');
        itext('So what did they build?');
      ie_close('h4');
      ie_open('p');
        itext('For those who prefer to watch instead of read, here are the presentation videos.');
      ie_close('p');
      ie_void('iframe', null, null,
          'width', '560',
          'height', '315',
          'src', 'https://www.youtube.com/embed/videoseries?list=PLKb_gn-WO_Ko30pgNP-gxTKKrsaAC-jlk',
          'frameborder', '0',
          'allowfullscreen', '');
      ie_open('h4');
        ie_open('a', null, null,
            'href', 'https://www.youtube.com/watch?v=7iMfTvhB-38&list=PLKb_gn-WO_Ko30pgNP-gxTKKrsaAC-jlk&index=1');
          itext('Emoji Chat');
        ie_close('a');
      ie_close('h4');
      ie_open('p');
        itext('Emojis have done a lot to help us communitate with each other in ways that words cannot. But what if we wanted to take our online communication to the next level? Hello Emoji Chat. Once you join the site, you will be assigned an emoji and you can start moving it around and interacting with the other emoji users, even sending classic text.');
      ie_close('p');
      ie_open('p');
        ie_open('strong');
          itext('What they used:');
        ie_close('strong');
        itext(' ');
        ie_open('a', null, null,
            'href', '/docs/hosting');
          itext('WeDeploy Hosting');
        ie_close('a');
        itext(', ');
        ie_open('a', null, null,
            'href', '/docs/data');
          itext('WeDeploy Data');
        ie_close('a');
      ie_close('p');
      ie_open('h4');
        ie_open('a', null, null,
            'href', 'https://www.youtube.com/watch?v=OcUhyNp7KFY&list=PLKb_gn-WO_Ko30pgNP-gxTKKrsaAC-jlk&index=5');
          itext('Salmorejo');
        ie_close('a');
      ie_close('h4');
      ie_open('p');
        itext('There is a workplace efficiency technique called Pomodoro that basically goes like this. You set a timer for 25 min and place a signal on your desk to notify your coworkers that you are busy. Then you focus only on one task during that time, and after the timer is done, you can tend to other things like meetings, emails, and coffee breaks. The problem is that sometimes you leave the signal up or maybe never put it there in the first place so the others at work don\'t know if they can interupt you or not.');
      ie_close('p');
      ie_open('p');
        itext('The good news is that this project fixes those problems with a ');
        ie_open('a', null, null,
            'href', 'https://slack.com/');
          itext('Slack');
        ie_close('a');
        itext(' notification integration and a designated site to start and track the Salmorejos that are happening in your office.');
      ie_close('p');
      ie_open('p');
        ie_open('strong');
          itext('What they used:');
        ie_close('strong');
        itext(' ');
        ie_open('a', null, null,
            'href', '/docs/hosting');
          itext('WeDeploy Hosting');
        ie_close('a');
        itext(', ');
        ie_open('a', null, null,
            'href', '/docs/data');
          itext('WeDeploy Data');
        ie_close('a');
      ie_close('p');
      ie_open('blockquote', null, null,
          'class', 'twitter-tweet',
          'data-lang', 'en');
        ie_open('p', null, null,
            'lang', 'en',
            'dir', 'ltr');
          itext('Presenting the result of our ');
          ie_open('a', null, null,
              'href', 'https://twitter.com/hashtag/hackday?src=hash');
            itext('#hackday');
          ie_close('a');
          itext('. Salmorejo is alive! and WeDeploy too! ');
          ie_open('a', null, null,
              'href', 'https://twitter.com/juliocamarero');
            itext('@juliocamarero');
          ie_close('a');
          itext(' ');
          ie_open('a', null, null,
              'href', 'https://twitter.com/izaera');
            itext('@izaera');
          ie_close('a');
          itext(' ');
          ie_open('a', null, null,
              'href', 'https://twitter.com/Liferay_es');
            itext('@Liferay_es');
          ie_close('a');
          itext(' ');
          ie_open('a', null, null,
              'href', 'https://twitter.com/Liferay');
            itext('@Liferay');
          ie_close('a');
          itext(' ');
          ie_open('a', null, null,
              'href', 'https://t.co/1JmvcW3lwx');
            itext('pic.twitter.com/1JmvcW3lwx');
          ie_close('a');
        ie_close('p');
        itext('\u2014 Carlos Lancha (@carloslancha) ');
        ie_open('a', null, null,
            'href', 'https://twitter.com/carloslancha/status/861979492230844416');
          itext('May 9, 2017');
        ie_close('a');
      ie_close('blockquote');
      ie_void('script', null, null,
          'async', '',
          'src', '//platform.twitter.com/widgets.js',
          'charset', 'utf-8');
      ie_open('h4');
        ie_open('a', null, null,
            'href', 'https://www.youtube.com/watch?v=5AoDiNM1kbI&list=PLKb_gn-WO_Ko30pgNP-gxTKKrsaAC-jlk&index=3');
          itext('Multi-Device Pizza Ordering');
        ie_close('a');
      ie_close('h4');
      ie_open('p');
        itext('Ever been sitting on your couch and wanted to order a pizza but you don\'t have your computer with you or you want to be notified from your phone when the delivery is arriving? We have good news for you, this team created a multi-device system for ordering pizza, going from a Apple TV app, to your cell phone, to the deliverer\'s iPad, and then of course, to your hungry stomache.');
      ie_close('p');
      ie_open('p');
        ie_open('strong');
          itext('What they used:');
        ie_close('strong');
        itext(' ');
        ie_open('a', null, null,
            'href', '/docs/data');
          itext('WeDeploy Data');
        ie_close('a');
      ie_close('p');
      ie_open('h4');
        ie_open('a', null, null,
            'href', 'https://www.youtube.com/watch?v=OcUhyNp7KFY&list=PLKb_gn-WO_Ko30pgNP-gxTKKrsaAC-jlk&index=5');
          itext('Tinder for Startups');
        ie_close('a');
      ie_close('h4');
      ie_open('p');
        itext('This team had an exciting day. Although they did not have a finished prototype at the end of the day, they had the opportunity of diving deep into many technologies that none of them had tried before. When presenting, they talked about all the things they had learned and how even though the didn\'t finish anything, the lessons they learned on the journey were invaluable.');
      ie_close('p');
      ie_open('h4');
        ie_open('a', null, null,
            'href', 'https://www.youtube.com/watch?v=06kDmXkoo50&list=PLKb_gn-WO_Ko30pgNP-gxTKKrsaAC-jlk&index=2');
          itext('Eyes to Run');
        ie_close('a');
      ie_close('h4');
      ie_open('p');
        itext('Technology is doing great things in the world of helping the disabled, and this project was no different. This team created an app that paired up blind runners with non-blind partners so that they are able to pound the pavement again.');
      ie_close('p');
      ie_open('p');
        itext('This team also won the grand prize for the hack day!');
      ie_close('p');
      ie_open('p');
        ie_open('strong');
          itext('What they used:');
        ie_close('strong');
        itext(' ');
        ie_open('a', null, null,
            'href', '/docs/hosting');
          itext('WeDeploy Hosting');
        ie_close('a');
        itext(', ');
        ie_open('a', null, null,
            'href', '/docs/data');
          itext('WeDeploy Data');
        ie_close('a');
        itext(', ');
        ie_open('a', null, null,
            'href', '/docs/auth');
          itext('WeDeploy Auth');
        ie_close('a');
        itext(', ');
        ie_open('a', null, null,
            'href', '/docs/other/java.html');
          itext('WeDeploy Java');
        ie_close('a');
      ie_close('p');
      ie_open('figure');
        ie_open('img', null, null,
            'src', '../images/blog/post-10--3.jpg',
            'alt', 'Liferay Madrid hack day');
        ie_close('img');
      ie_close('figure');
      ie_open('p');
        itext('The day was a huge success, and we were impressed and inspired by what each team produced!');
      ie_close('p');
      ie_open('p');
        itext('We\'re also so thankful for the hospitality of the Madrid office and the courageous developers in the hack day that pushed the limits and tried things they weren\'t sure they were capable off.');
      ie_close('p');
      ie_open('blockquote', null, null,
          'class', 'twitter-tweet',
          'data-lang', 'en');
        ie_open('p', null, null,
            'lang', 'en',
            'dir', 'ltr');
          itext('In the train heading home after the ');
          ie_open('a', null, null,
              'href', 'https://twitter.com/wedeploy');
            itext('@wedeploy');
          ie_close('a');
          itext(' ');
          ie_open('a', null, null,
              'href', 'https://twitter.com/hashtag/hackday?src=hash');
            itext('#hackday');
          ie_close('a');
          itext('. So many positive energy from ');
          ie_open('a', null, null,
              'href', 'https://twitter.com/hashtag/liferayers?src=hash');
            itext('#liferayers');
          ie_close('a');
          itext(' creating amazing projects... or products? \uD83D\uDE32');
        ie_close('p');
        itext('\u2014 Manuel de la Pe\u00F1a (@mdelapenya) ');
        ie_open('a', null, null,
            'href', 'https://twitter.com/mdelapenya/status/862035557932830721');
          itext('May 9, 2017');
        ie_close('a');
      ie_close('blockquote');
      ie_void('script', null, null,
          'async', '',
          'src', '//platform.twitter.com/widgets.js',
          'charset', 'utf-8');
      ie_open('p');
        itext('Till next time, Spain!');
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
  $templateAlias1(soy.$$assignDefaults({content: param613}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'HPLlN.render';
}

exports.render.params = ["page","site"];
exports.render.types = {"page":"any","site":"any"};
templates = exports;
return exports;

});

class HPLlN extends Component {}
Soy.register(HPLlN, templates);
export { HPLlN, templates };
export default templates;
/* jshint ignore:end */
