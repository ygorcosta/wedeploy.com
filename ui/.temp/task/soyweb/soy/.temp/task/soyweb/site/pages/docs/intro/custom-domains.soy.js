// This file was automatically generated from custom-domains.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace HAIvD.
 */

if (typeof HAIvD == 'undefined') { var HAIvD = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
HAIvD.render = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(guide.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<h3>' + soy.$$escapeHtml(opt_data.page.title) + '</h3><h6>' + soy.$$escapeHtml(opt_data.page.description) + '</h6><article id="1"><h2>Introduction</h2><p>To make your app live right away, WeDeploy makes every service accessible via its service domain, but when your app moves towards production, you will most likely want to add a custom domain to beautify your websites URL. Configuring custom domains can be a tricky and complicated process, which is why we wanted to make it simple and straightforward for you.</p></article><article id="2"><h2>Simple Setup</h2><p>The easiest way to configure your custom domain, is to add one of our WeDeploy name servers. Once you point to our name server from your domain provider, you can simply add the custom domain to your service and we will do all the configuration work for you.</p><ol><li>Go to your domain provider and find where you can set a custom name server.</li><li>Enter one of the regional WeDeploy name servers from below.</li><li>Go to the service of your project, click on <em>&quot;Custom Domains&quot;</em>, and add the new domain.</li></ol><p><img src="/images/docs/intro/custom-domains--settings.png" alt="Custom Domains"></p><div class="table-container"><table><thead><tr><th>Country</th><th>Name Server</th></tr></thead><tbody><tr><td>Australia</td><td><strong>sydney</strong>.wedeploy.domains</td></tr><tr><td>Germany</td><td><strong>frankfurt</strong>.wedeploy.domains</td></tr><tr><td>France</td><td><strong>paris</strong>.wedeploy.domains</td></tr><tr><td>Netherlands</td><td><strong>amsterdam</strong>.wedeploy.domains</td></tr><tr><td>Singapore</td><td><strong>singapore</strong>.wedeploy.domains</td></tr><tr><td>United Kingdom</td><td><strong>london</strong>.wedeploy.domains</td></tr><tr><td>United States</td><td><strong>california</strong>.wedeploy.domains</td></tr><tr><td>United States</td><td><strong>iowa</strong>.wedeploy.domains</td></tr><tr><td>United States</td><td><strong>newyork</strong>.wedeploy.domains</td></tr></tbody></table></div></article><article id="3"><h2>Adding Subdomains</h2><p>Now that you have your root domain setup, you may want to add a subdomain like <em>www.myapp.com</em>. This is very simple and can by done by configuring the CNAME on your domain provider.</p><div class="table-container"><table><thead><tr><th>Record</th><th>Subdomain</th><th>Project Target Domain</th></tr></thead><tbody><tr><td>CNAME</td><td>www.mydomain.com</td><td>ui-myapp.wedeploy.io.</td></tr><tr><td>CNAME</td><td>api.mydomain.com</td><td>db-myapp.wedeploy.io.</td></tr></tbody></table></div></article><article id="4"><h2>Advanced Configuration</h2><p>What if you want to configure the DNS yourself? No problem, that is a simple process as well. Instead of using a name server to route your project, you can simply add an apex domain as an CNAME.</p><div class="table-container"><table><thead><tr><th>NAME</th><th>TYPE</th><th>DATA</th></tr></thead><tbody><tr><td>empty</td><td>CNAME</td><td>ui-myapp.wedeploy.io.</td></tr></tbody></table></div><aside><h6><span class="icon-16-alert"></span> Attention</h6><p>This method is only available for domain providers that allow CNAME configuration for root domains.</p></aside></article><h2>What\'s next?</h2><ul><li>Learn more about using <a href="/docs/intro/environment-variables.html">environment variables</a>.</li></ul><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.page.title) + '"><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.site.title) + '">')}), null, opt_ijData));
};
if (goog.DEBUG) {
  HAIvD.render.soyTemplateName = 'HAIvD.render';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
HAIvD.soyweb = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(base.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + HAIvD.render(opt_data, null, opt_ijData))}), null, opt_ijData));
};
if (goog.DEBUG) {
  HAIvD.soyweb.soyTemplateName = 'HAIvD.soyweb';
}
