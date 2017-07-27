// This file was automatically generated from landing.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace landing.
 */

if (typeof landing == 'undefined') { var landing = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
landing.render = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div class="' + soy.$$escapeHtmlAttribute(opt_data.elementClasses != null ? opt_data.elementClasses : 'main') + '"><main class="content">' + landing.topbar(opt_data, null, opt_ijData) + soy.$$escapeHtml(opt_data.content) + landing.footer(opt_data, null, opt_ijData) + landing.modal(opt_data, null, opt_ijData) + '</main></div>');
};
if (goog.DEBUG) {
  landing.render.soyTemplateName = 'landing.render';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
landing.topbar = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div id="topbar"><div class="col-xs-16 col-lg-14 col-lg-offset-1"><div class="row"><nav class="topbar topbar-large topbar-light">' + landing.topbarLeftContent(opt_data, null, opt_ijData) + landing.topbarRightContent(opt_data, null, opt_ijData) + '</nav></div></div></div>');
};
if (goog.DEBUG) {
  landing.topbar.soyTemplateName = 'landing.topbar';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
landing.topbarLeftContent = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div class="topbar-logo"><a class="topbar-logo-link" href="/"><span class="wedeploy-logo"><span class="we-circle"><span class="we">We</span></span><span class="deploy">Deploy\u2122</span><span class="liferay">by Liferay</span><span class="alpha-container"><span class="arrow-up"></span><span class="alpha">alpha</span></span></span></a></div>');
};
if (goog.DEBUG) {
  landing.topbarLeftContent.soyTemplateName = 'landing.topbarLeftContent';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
landing.topbarRightContent = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(Topbar.render({section: opt_data.site.index}, null, opt_ijData));
};
if (goog.DEBUG) {
  landing.topbarRightContent.soyTemplateName = 'landing.topbarRightContent';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
landing.footer = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div id="footer"><div class="container-wedeploy flex-left-center"><div class="col-xs-16 col-sm-8 info-container col-md-10 col-lg-10 col-lg-offset-1"><div class="footer__logo info"><span>WeDeploy\u2122</span></div><div class="footer__copy info"><span>Copyright \u00A9 2017<br />Liferay, Inc.</span></div><div class="footer__link info"><a href="http://status.wedeploy.com/" target="_blank"><span>Uptime status</span></a></div></div><div class="footer__media-kit col-xs-16 col-sm-8 col-md-6 col-lg-4"><a data-senna-off href="images/WeDeploy-Media-Kit.zip" class="btn btn-inverse-accent btn-s" download>Media Kit</a><a class="ic-github" href="http://github.com/wedeploy" target="_blank"><span class="icon-16-github"></span></a><a class="ic-twitter" href="http://twitter.com/wedeploy" target="_blank"><span class="icon-16-twitter"></span></a></div></div></div>');
};
if (goog.DEBUG) {
  landing.footer.soyTemplateName = 'landing.footer';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
landing.modal = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div class="modal"><div class="modal-container"><a class="modal__close flex-center-center" href="javascript:void(0);"><span class="close__icon icon-16-cancel"></span></a><div id="modal__form-container"><div class="form flex-center-top"><div class="logo flex-center-center"><span>We</span></div><h2>Request an Invite for WeDeploy\u2122</h2><p>We can\'t wait to see what you\'re going to build.</p><form id="form-modal" class="flex-center-top column form-signup"><div class="form-group"><label>Email</label><input type="text" class="form-control" name="email" placeholder="Enter your email address"></div><p id="form-modal__validation" class="form-validation"></p><button id="form-modal__submit" class="btn btn-accent"><span>Get Started \u2013 It\u2019s FREE</span></button><div class="small-container flex-center-top"><small>By entering your email you agree to receive information about WeDeploy\u2122.</small></div></form></div><div class="copy"><p>Copyright \u00A9 2017 Liferay, Inc.</p></div></div><div id="modal__response-container" class="flex-center-top"><div class="logo flex-center-center"><span>We</span></div><h2>Thanks for requesting an invite!</h2><p>We\'ll drop you an email when WeDeploy\u2122 is ready. Stay tuned.</p></div></div></div>');
};
if (goog.DEBUG) {
  landing.modal.soyTemplateName = 'landing.modal';
}
