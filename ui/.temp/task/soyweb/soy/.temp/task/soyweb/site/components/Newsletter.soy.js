// This file was automatically generated from Newsletter.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Newsletter.
 */

if (typeof Newsletter == 'undefined') { var Newsletter = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Newsletter.render = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div class="newsletter"><div class="container-hybrid"><div class="col-xs-14 col-xs-offset-1"><div class="row"><h2 class="newsletter-subtitle">Couldn\'t find what you want?</h2><p class="newsletter-description">Don\'t worry, we\'re constantly working on improvements. Stay tuned!</p></div></div><div class="row"><form autocomplete="off" class="row newsletter-form" data-onsubmit="subscribeToNewsletter"><div class="col-md-7 col-md-offset-3 col-xs-16"><div class="form-group"><input class="form-control" name="email" type="email" placeholder="Your email address" required=""></div></div><div class="col-md-3 col-xs-16"><input class="btn btn-accent btn-block" type="submit" value="Submit"></div></form></div></div></div>');
};
if (goog.DEBUG) {
  Newsletter.render.soyTemplateName = 'Newsletter.render';
}
