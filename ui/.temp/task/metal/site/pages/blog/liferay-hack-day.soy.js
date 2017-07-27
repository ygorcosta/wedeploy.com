/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from liferay-hack-day.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace EAIyu.
 * @public
 */

goog.module('EAIyu.incrementaldom');

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
  var param535 = function() {
    ie_open('article');
      ie_open('p');
        var dyn36 = opt_data.page.description;
        if (typeof dyn36 == 'function') dyn36(); else if (dyn36 != null) itext(dyn36);
      ie_close('p');
      ie_open('p');
        ie_open('strong');
          itext('Every January, developers from all around the world gather at our Los Angeles office.');
        ie_close('strong');
      ie_close('p');
      ie_open('p');
        itext('It\'s an exhilarating time together full of talks, catered meals, new friendships, and even spontaneous adventures to the Hollywood sign and the Santa Monica Pier.');
      ie_close('p');
      ie_open('figure');
        ie_open('img', null, null,
            'src', '../images/blog/post-5--0.png',
            'alt', 'Engineering Retreat');
        ie_close('img');
      ie_close('figure');
      ie_open('p');
        itext('On the final day of the retreat, we put on a hack day (because how could we bring all the engineers to one location without having one?!).');
      ie_close('p');
      ie_open('blockquote');
        ie_open('p');
          itext('Every year we are amazed at the creativity of the projects, and this year did not disappoint.');
        ie_close('p');
      ie_close('blockquote');
      ie_open('p');
        itext('There are only two requirements for their projects:');
      ie_close('p');
      ie_open('ul');
        ie_open('li');
          itext('The code needs to be new');
        ie_close('li');
        ie_open('li');
          itext('It has to be pushed to Github');
        ie_close('li');
      ie_close('ul');
      ie_open('p');
        itext('On top of that, this year we encouraged the teams to use WeDeploy to host their projects. Four teams did, and these were there projects.');
      ie_close('p');
      ie_open('h4');
        ie_open('a', null, null,
            'href', 'https://youtu.be/SEtTxgRpw28');
          itext('Game Room Availability');
        ie_close('a');
      ie_close('h4');
      ie_open('p');
        itext('Nobody wants to walk all the way down to the Game Room to find that the ping pong table is taken. Never fear, Game Room Availability app is here to show you in real time if anyone is using your game.');
      ie_close('p');
      ie_open('h6');
        itext('What they used: ');
        ie_open('a', null, null,
            'href', '/docs/hosting');
          itext('WeDeploy\u2122 Hosting');
        ie_close('a');
        itext('.');
      ie_close('h6');
      ie_open('figure');
        ie_open('img', null, null,
            'src', '../images/blog/post-5--1.png',
            'alt', 'Game Room Availability');
        ie_close('img');
      ie_close('figure');
      ie_open('h4');
        ie_open('a', null, null,
            'href', 'https://youtu.be/Za3nUelYPsE');
          itext('Liferay Home');
        ie_close('a');
      ie_close('h4');
      ie_open('p');
        itext('Don\'t ever come home to a freezing cold house again. Liferay home will learn your habits, track your commute, and automate pretty much anything in your house.');
      ie_close('p');
      ie_open('h6');
        itext('What they used: ');
        ie_open('a', null, null,
            'href', '/docs/hosting');
          itext('WeDeploy\u2122 Hosting');
        ie_close('a');
        itext(', ');
        ie_open('a', null, null,
            'href', '/docs/data');
          itext('WeDeploy\u2122 Data');
        ie_close('a');
        itext('.');
      ie_close('h6');
      ie_open('figure');
        ie_open('img', null, null,
            'src', '../images/blog/post-5--2.png',
            'alt', 'Liferay Home');
        ie_close('img');
      ie_close('figure');
      ie_open('h4');
        ie_open('a', null, null,
            'href', 'https://youtu.be/LfcGDiQq0zI');
          itext('Release Notes');
        ie_close('a');
      ie_close('h4');
      ie_open('p');
        itext('Annoyed by manually checking for fix pack releases for Portal 7.0? This team created an app that fetched the fix pack information and sorted them by component so you easily find what you need.');
      ie_close('p');
      ie_open('h6');
        itext('What they used: ');
        ie_open('a', null, null,
            'href', '/docs/hosting');
          itext('WeDeploy\u2122 Hosting');
        ie_close('a');
        itext('.');
      ie_close('h6');
      ie_open('figure');
        ie_open('img', null, null,
            'src', '../images/blog/post-5--3.png',
            'alt', 'Release Notes');
        ie_close('img');
      ie_close('figure');
      ie_open('h4');
        ie_open('a', null, null,
            'href', 'https://youtu.be/cYvZuL_9W4M');
          itext('Chicken Fingers');
        ie_close('a');
      ie_close('h4');
      ie_open('p');
        itext('Don\'t let the name deceive you, this project was the real deal- and the grand prize winner of the hack day. Using voice recognition, they paved the way for a stellar hands-free-recipe cooking experience.');
      ie_close('p');
      ie_open('h6');
        itext('What they used: ');
        ie_open('a', null, null,
            'href', '/docs/hosting');
          itext('WeDeploy\u2122 Hosting');
        ie_close('a');
        itext(', ');
        ie_open('a', null, null,
            'href', '/docs/data');
          itext('WeDeploy\u2122 Data');
        ie_close('a');
        itext('.');
      ie_close('h6');
      ie_open('figure');
        ie_open('img', null, null,
            'src', '../images/blog/post-5--4.png',
            'alt', 'Chicken Fingers');
        ie_close('img');
      ie_close('figure');
      ie_open('p');
        itext('We were so impressed with what the teams came up with in less than nine hours! We hope that these projects have inspired you to keep creating, to keep dreaming, and of course, to keep deploying. \uD83D\uDE80');
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
  $templateAlias1(soy.$$assignDefaults({content: param535}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'EAIyu.render';
}

exports.render.params = ["page","site"];
exports.render.types = {"page":"any","site":"any"};
templates = exports;
return exports;

});

class EAIyu extends Component {}
Soy.register(EAIyu, templates);
export { EAIyu, templates };
export default templates;
/* jshint ignore:end */
