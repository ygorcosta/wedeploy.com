// This file was automatically generated from main.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace main.
 */

if (typeof main == 'undefined') { var main = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
main.layout = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><title>Launchpad Project</title><meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"><link rel="shortcut icon" href="/images/favicon.ico"><!-- Fonts --><script src="https://use.typekit.net/kkw4zdf.js"><\/script><script>try{Typekit.load({ async: true });}catch(e){}<\/script><link rel="stylesheet" href="/vendor/steel-bootstrap/build/fonts/icon-12.css"><link rel="stylesheet" href="/vendor/steel-bootstrap/build/fonts/icon-16.css"><link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Open+Sans:700,400,300"><!-- Styles --><link rel="stylesheet" href="/build/styles/all.css"></head><body class="fade-out">' + soy.$$escapeHtml(opt_data.content) + '<script src="/scripts/fade.js"><\/script></body></html>');
};
if (goog.DEBUG) {
  main.layout.soyTemplateName = 'main.layout';
}
