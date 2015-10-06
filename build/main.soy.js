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
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><title>Launchpad Project (Beta)</title><meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"><link rel="shortcut icon" href="/images/favicon.ico"><!-- Fonts --><script src="https://use.typekit.net/kkw4zdf.js"><\/script><script>try{Typekit.load({ async: true });}catch(e){}<\/script><link rel="stylesheet" href="/vendor/fonts/icon-12.css"><link rel="stylesheet" href="/vendor/fonts/icon-16.css"><link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Open+Sans:700,400,300"><!-- Styles --><link rel="stylesheet" href="/styles/all.css"></head><body class="fade-out">' + soy.$$escapeHtml(opt_data.content) + '<script src="/scripts/fade.js"><\/script><!-- Intercom -->\n\t\t<script>\n\t\twindow.intercomSettings = { app_id: \'ytqx30hx\' };\n\t\t(function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic(\'reattach_activator\');ic(\'update\',intercomSettings);}else{var d=document;var i=function(){i.c(arguments)};i.q=[];i.c=function(args){i.q.push(args)};w.Intercom=i;function l(){var s=d.createElement(\'script\');s.type=\'text/javascript\';s.async=true;s.src=\'https://widget.intercom.io/widget/ytqx30hx\';var x=d.getElementsByTagName(\'script\')[0];x.parentNode.insertBefore(s,x);}if(w.attachEvent){w.attachEvent(\'onload\',l);}else{w.addEventListener(\'load\',l,false);}}})()\n\t\t<\/script>\n\t<!-- Analytics -->\n\t\t<script>\n\t\t(function(i,s,o,g,r,a,m){i[\'GoogleAnalyticsObject\']=r;i[r]=i[r]||function(){\n\t\t(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\n\t\tm=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n\t\t})(window,document,\'script\',\'//www.google-analytics.com/analytics.js\',\'ga\');\n\n\t\tga(\'create\', \'UA-37033501-2\', \'auto\');\n\t\tga(\'send\', \'pageview\');\n\t\t<\/script>\n\t<!-- Inspectlet -->\n\t\t<script id="inspectletjs">\n\t\twindow.__insp = window.__insp || [];\n\t\t__insp.push([\'wid\', 1029478452]);\n\t\t(function() {\n\t\t\tfunction ldinsp(){var insp = document.createElement(\'script\'); insp.type = \'text/javascript\'; insp.async = true; insp.id = "inspsync"; insp.src = (\'https:\' == document.location.protocol ? \'https\' : \'http\') + \'://cdn.inspectlet.com/inspectlet.js\'; var x = document.getElementsByTagName(\'script\')[0]; x.parentNode.insertBefore(insp, x); };\n\t\t\tdocument.readyState != "complete" ? (window.attachEvent ? window.attachEvent(\'onload\', ldinsp) : window.addEventListener(\'load\', ldinsp, false)) : ldinsp();\n\t\t})();\n\t\t<\/script>\n\t</body></html>');
};
if (goog.DEBUG) {
  main.layout.soyTemplateName = 'main.layout';
}
