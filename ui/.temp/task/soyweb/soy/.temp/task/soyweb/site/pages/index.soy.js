// This file was automatically generated from index.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace pageIndex.
 */

if (typeof pageIndex == 'undefined') { var pageIndex = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
pageIndex.render = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(landing.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + pageIndex.view_1(opt_data, null, opt_ijData) + pageIndex.view_3_1(opt_data, null, opt_ijData) + pageIndex.view_3_2(opt_data, null, opt_ijData) + pageIndex.view_4(opt_data, null, opt_ijData) + pageIndex.view_6(opt_data, null, opt_ijData))}), null, opt_ijData));
};
if (goog.DEBUG) {
  pageIndex.render.soyTemplateName = 'pageIndex.render';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
pageIndex.view_1 = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div id="view-1"><div class="container-wedeploy"><div id="view-1__container">' + pageIndex.subscribe(opt_data, null, opt_ijData) + pageIndex.terminal(opt_data, null, opt_ijData) + '</div></div></div>');
};
if (goog.DEBUG) {
  pageIndex.view_1.soyTemplateName = 'pageIndex.view_1';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
pageIndex.view_3_1 = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div id="view-3__1"><div class="container-wedeploy"><div class="info-box"><div class="info-box__container"><p class="top-title">Microservices</p><h3>Built-in APIs that can help you create modern apps faster.</h3><p>We provide a set of ready-to-use services that enables you to store data in the cloud, search and stream content in realtime, authenticate users, send emails to your users, and so much more.</p></div></div><div class="bg-text"><div class="bg-text__solid"></div><div class="bg-text__gradient"></div></div><div class="info-img"></div></div></div>');
};
if (goog.DEBUG) {
  pageIndex.view_3_1.soyTemplateName = 'pageIndex.view_3_1';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
pageIndex.view_3_2 = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div id="view-3__2"><div class="container-wedeploy"><div class="info-box"><div class="info-box__container flex-center-top"><p class="top-title">Containers</p><h3>Your favorite stack in the cloud in just a few clicks.</h3><p>Choose between dozens of languages, frameworks, or entire application stacks. Launch production-ready environments in a matter of minutes.</p></div></div><div class="bg-text"><div class="bg-text__solid"></div><div class="bg-text__gradient"></div></div><div class="info-img"></div></div></div>');
};
if (goog.DEBUG) {
  pageIndex.view_3_2.soyTemplateName = 'pageIndex.view_3_2';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
pageIndex.view_4 = function(opt_data, opt_ignored, opt_ijData) {
  var output = '<div id="view-4"><div class="container-wedeploy"><div id="view-4__giant" class="giant"><span>We</span></div><div class="text-center"><h2>Carefully designed features</h2></div><div class="text-center"><h4>Empowering you to build amazing apps.</h4></div><ul id="features-container" class="flex-center-top">';
  var features__soy134 = [{icon: 'icon_data.svg', hasWeIcon: true, title: 'WeDeploy Data', description: 'Store data securely with a NoSQL cloud database. Make complex queries instantly and consume information in real-time.'}, {icon: 'icon_users.svg', hasWeIcon: true, title: 'WeDeploy Auth', description: 'Avoid the headache of operating your own user management system. Authenticate users in few lines of code using our SDKs.'}, {icon: 'icon_cloud.svg', hasWeIcon: true, title: 'WeDeploy Hosting', description: 'Deliver HTML, CSS, JS, or any other kind of static files using powerful static hosting. It\'s super fast and will save you a lot of time.'}, {icon: 'icon_terminal.svg', hasWeIcon: false, title: 'Command Line Tool', description: 'We designed a CLI that seamlessly integrates into your workflow. Almost everything you can do from the dashboard, can also be done from your terminal.'}, {icon: 'icon_servers.svg', hasWeIcon: false, title: 'Load Balancer', description: 'Automagically distribute incoming traffic across multiple instances without the client ever knowing about the internal separation of containers.'}, {icon: 'icon_velocimeter.svg', hasWeIcon: false, title: 'High Availability', description: 'Don\'t worry about your app being taken offline during deployment of the new code. Push updates or restart your containers with zero downtime.'}, {icon: 'icon_file.svg', hasWeIcon: false, title: 'Log Management', description: 'Detect and diagnose an error from your terminal or from the dashboard. Watch logs in realtime and find the specific cause, fast.'}, {icon: 'icon_globe.svg', hasWeIcon: false, title: 'Custom Domains', description: 'Every project is accessible via a wedeploy.io subdomain, but we know that\'s not enough for apps in production. That\'s why you can set up your own custom domains.'}, {icon: 'icon_heart.svg', hasWeIcon: false, title: 'Health Checks', description: 'Be the first one to know when something happens. Monitor the status and control the lifecycle of your containers very easily.'}];
  var featureList135 = features__soy134;
  var featureListLen135 = featureList135.length;
  for (var featureIndex135 = 0; featureIndex135 < featureListLen135; featureIndex135++) {
    var featureData135 = featureList135[featureIndex135];
    output += pageIndex.feature({icon: featureData135.icon, hasWeIcon: featureData135.hasWeIcon, title: featureData135.title, description: featureData135.description}, null, opt_ijData);
  }
  output += '</ul></div></div>';
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  pageIndex.view_4.soyTemplateName = 'pageIndex.view_4';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
pageIndex.view_6 = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div id="view-6" class="text-center"><div id="view-6__giant" class="giant"><span id="giant__deploy">Deploy</span></div><div class="info"><div class="info__title"><h2>We can\'t wait to see what you\'re going to build.</h2></div><div class="info__button"><a href="//console.wedeploy.com/signup" class="btn btn-accent btn-block">Get Started \u2013 It\u2019s FREE</a></div><div class="info__question"><h5>Have a question? Give our team a call: <a href="tel:+1 (909) 378-5432" class="phone">+1 (909) 378-5432.</a></h5></div></div></div>');
};
if (goog.DEBUG) {
  pageIndex.view_6.soyTemplateName = 'pageIndex.view_6';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
pageIndex.feature = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<li class="feature"><div class="feature__box text-center"><div class="box__badge-container"><div id="badge-data" class="badge flex-center-center"><img src="/images/home/icons_view_2/' + soy.$$escapeHtmlAttribute(opt_data.icon) + '" /></div>' + ((opt_data.hasWeIcon) ? '<div class="we-container"><div class="we flex-center-center"><span>We</span></div></div>' : '') + '</div><div class="feature__title"><h3>' + soy.$$escapeHtml(opt_data.title) + '</h3></div><div class="feature__description"><p>' + soy.$$escapeHtml(opt_data.description) + '</p></div></div></li>');
};
if (goog.DEBUG) {
  pageIndex.feature.soyTemplateName = 'pageIndex.feature';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
pageIndex.subscribe = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div id="subscribe" class="col-xs-16 col-sm-16 col-md-16 col-lg-4 col-lg-offset-1"><div id="subscribe__container"><h1>You Build.</h1><h1>We Deploy.</h1><p>' + soy.$$escapeHtml(opt_data.page.description) + '</p><a href="//console.wedeploy.com/signup" id="subscribe__submit-small" class="open-modal btn btn-accent btn-block"><span>Get Started \u2013 It\u2019s FREE</span></a><div id="terminal-img"></div><form id="view-1__form" class="form-signup"><a href="//console.wedeploy.com/signup" type="submit" class="btn btn-accent btn-block"><span>Get Started \u2013 It\u2019s FREE</span></a></form></div></div>');
};
if (goog.DEBUG) {
  pageIndex.subscribe.soyTemplateName = 'pageIndex.subscribe';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
pageIndex.terminal = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div id="terminal" class="col-xs-16 col-sm-16 col-md-9 col-lg-9 col-lg-offset-1"><div class="terminal__content"><div class="content__wrapper">' + pageIndex.browser(null, null, opt_ijData) + pageIndex.cli(null, null, opt_ijData) + '</div></div></div>');
};
if (goog.DEBUG) {
  pageIndex.terminal.soyTemplateName = 'pageIndex.terminal';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
pageIndex.browser = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div id="browser"><div class="browser__top flex-center-center"><div class="top__bullets flex-left-center"><span class="bullet"></span><span class="bullet"></span><span class="bullet"></span></div><h3>WeDeploy\u2122 Console</h3></div><div class="browser__topbar flex-left-center"><a href="javascript:void(0);" class="topbar__logo">WeDeploy\u2122</a><a href="javascript:void(0);" class="topbar__projects btn btn-inverse btn-sm">Projects <span class="icon-12-arrow-down-short"></span></a><div class="topbar-link btn-transparent flex-left-spacebetween"><a class="avatar-round avatar-icon-12" href="#"><span class="icon-12-person"></span></a></div></div><div id="browser__content"><div id="content__scroll"><div class="flex-left-spacebetween"><div id="browser__recent" class="input-inner-addon input-inner-addon-right"><div class="btn btn-default btn-sm flex-center-center">Recent <span class="icon-12-arrow-down-short"></span></div></div><div id="browser__title">Projects</div><div id="browser__new-project"><div class="btn btn-accent btn-sm flex-center-center"><span class="icon-12-plus"></span> New Project</div></div></div><div class="content-header-menu"><span class="header__info">Project</span><span class="header__status">Status</span><span class="header__services">Service</span><span class="header__activity">Last Activity</span></div>' + pageIndex.browser_project({first: true, projectName: 'mycompany.com', status: 'up', statusLabel: 'online', services: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<span class="box box-icon flex-center-center"><span class="icon-12-database"></span></span><span class="box box-icon flex-center-center"><span class="icon-12-mail"></span></span><span class="box box-icon flex-center-center"><span class="icon-12-cloud"></span></span>'), activityIcon: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<span class="icon-12-module"></span>'), activityTimeElapsed: '7m'}, null, opt_ijData) + pageIndex.browser_project({first: false, projectName: 'intranet.wedeploy.io', status: 'up', statusLabel: 'online', services: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<span class="box box-icon flex-center-center"><span class="icon-12-folder"></span></span><span class="box box-icon flex-center-center"><span class="icon-12-mail"></span></span>'), activityIcon: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<span class="icon-12-arrow-up-rod"></span>'), activityTimeElapsed: '1d'}, null, opt_ijData) + pageIndex.browser_project({first: false, projectName: 'newproject.com', status: 'up', statusLabel: 'online', services: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<span class="box box-icon flex-center-center"><span class="icon-12-database"></span></span>'), activityIcon: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<span class="icon-12-spinner-double-arrow"></span>'), activityTimeElapsed: '30s'}, null, opt_ijData) + pageIndex.browser_project({first: false, projectName: 'mobileapp.wedeploy.io', status: 'up', statusLabel: 'online', services: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<span class="box box-icon flex-center-center"><span class="icon-12-cloud"></span></span><span class="box box-icon flex-center-center"><span class="icon-12-folder"></span></span>'), activityIcon: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<span class="icon-12-house"></span>'), activityTimeElapsed: '2h'}, null, opt_ijData) + '</div></div></div>');
};
if (goog.DEBUG) {
  pageIndex.browser.soyTemplateName = 'pageIndex.browser';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
pageIndex.browser_project = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div class="no-padding col--browser span_6 browser__project-item' + soy.$$escapeHtmlAttribute(opt_data.first ? ' first' : '') + '"><div class="project-item__content flex-left-center"><div class="project-item__info"><p class="large">' + soy.$$escapeHtml(opt_data.projectName) + '</p></div><div class="project-item__status flex-column-left-center"><span class="box box-project flex-left-center"><span class="bullet ' + soy.$$escapeHtmlAttribute(opt_data.status) + '"></span><span class="label-status">' + soy.$$escapeHtml(opt_data.statusLabel) + '</span></span></div><div class="project-item__services flex-column-left-center">' + soy.$$escapeHtml(opt_data.services) + '</div><div class="project-item__activity flex-column-left-center"><span class="box box-icon flex-center-center">' + soy.$$escapeHtml(opt_data.activityIcon) + '</span><span class="time-small">' + soy.$$escapeHtml(opt_data.activityTimeElapsed) + '</span></div><div class="project-item__settings flex-column-left-center"><span class="flex-right-center"><span class="icon-12-ellipsis"></span></span></div></div></div>');
};
if (goog.DEBUG) {
  pageIndex.browser_project.soyTemplateName = 'pageIndex.browser_project';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
pageIndex.cli = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div id="cli" class="no-padding col--terminal span_3"><div class="cli__top flex-center-center"><div class="top__bullets flex-left-center"><span class="bullet"></span><span class="bullet"></span><span class="bullet"></span></div><h3>WeDeploy\u2122 CLI</h3></div><div class="cli__terminal flex-column-left-top"><div class="terminal-content"><p>Available Commands:</p><p class="no-margin"><span class="one">log</span><span class="two">Display logs of the services</span></p><p class="no-margin"><span class="one">list</span><span class="two">Show list of projects and services</span></p><p class="no-margin"><span class="one">restart</span><span class="two">Restart project or services</span></p><p>$ <strong>we</strong> deploy |</p></div></div></div>');
};
if (goog.DEBUG) {
  pageIndex.cli.soyTemplateName = 'pageIndex.cli';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
pageIndex.soyweb = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(base.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + pageIndex.render(opt_data, null, opt_ijData))}), null, opt_ijData));
};
if (goog.DEBUG) {
  pageIndex.soyweb.soyTemplateName = 'pageIndex.soyweb';
}
