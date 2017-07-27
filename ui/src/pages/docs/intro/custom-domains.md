---
title: "Custom Domains"
description: "Often times in production apps, you will want to point your service URL's to a custom domain so its easier for users to find your site and more consistant with your message and branding. This process can be confusion and difficult, but we beleive it doesn't have to be."
headerTitle: "Intro"
layout: "guide"
weight: 6
---

### {$page.title}

###### {$page.description}

<article id="1">

## Introduction

To make your app live right away, WeDeploy makes every service accessible via its service domain, but when your app moves towards production, you will most likely want to add a custom domain to beautify your websites URL. Configuring custom domains can be a tricky and complicated process, which is why we wanted to make it simple and straitforward for you.

</article>

<article id="2">

## Simple Setup

The easiest way to configure your custom domain, is to add one of our WeDeploy name servers. Once you point to our name server from your domain provider, you can simply add the custom domain to your service and we will do all the configuration work for you.

1. Go to your domain provider and find where you can set a custom name server.
2. Enter one of the regional WeDeploy name servers from below.
3. Go to the service of your project, click on _"Custom Domains"_, and add the new domain.

![Custom Domains](/images/docs/intro/custom-domains--settings.png)

<div class="table-container">

| Name Server                     | Region            |
| ------------------------------- | ----------------- |
| **sydney**.wedeploy.domains     | Syndey, AT        |
| **frankfurt**.wedeploy.domains  | Frankfurt, DE     |
| **paris**.wedeploy.domains      | Paris, FR         |
| **amsterdam**.wedeploy.domains  | Amsterdam, NL     |
| **signapore**.wedeploy.domains  | Signapore, SG     |
| **london**.wedeploy.domains     | London, UK        |
| **california**.wedeploy.domains | California, US    |
| **iowa**.wedeploy.domains       | Iowa, US          |
| **newyork**.wedeploy.domains    | New York, US      |
| **texas**.wedeploy.domains      | Texas, US         |

</div>

</article>

<article id="3">

## Adding Subdomains

Now that you have your root domain setup, you may want to add a subdomain like _www.myapp.com_. This is very simple and can by done by configuring the CNAME on your domain provider.

<div class="table-container">

| Record            | Subdomain            | Project Target Domain    |
| ----------------- | -------------------- | ------------------------ |
| CNAME             | www.mydomain.com     | ui-myapp.wedeploy.io.    |
| CNAME             | ui.mydomain.com      | ui-myapp.wedeploy.io.    |

</div>

</article>

<article id="4">

## Advanced Configuration

What if you want to configure the DNS yourself? No problem, that is a simple process as well. Instead of using a name server to route your project, you can simply add an apex domain as an CNAME.

<div class="table-container">

| NAME              | TYPE        | DATA                    |
| ----------------- | ----------- | ----------------------- |
| empty             | CNAME       | ui-myapp.wedeploy.io.   |

</div>

<aside>

###### <span class="icon-16-alert"></span> Attention

This method is only available for domain providers that allow CNAME configuration for root domains.

</aside>

</article>

## What's next?

* Learn more about using [environment variables](/docs/intro/environment-variables.html).
