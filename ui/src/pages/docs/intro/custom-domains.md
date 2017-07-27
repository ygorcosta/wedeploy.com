---
title: "Custom Domains"
description: "This is an overview of how WeDeploy manages custom domains for your projects."
headerTitle: "Intro"
layout: "guide"
weight: 6
---

### {$page.title}

###### {$page.description}

<article id="1">

## Introduction

To make your app live right away, WeDeploy makes every service accessible via its service domain, but when you want to make your project accessible by a non-WeDeploy domain name, you will need to connect a custom domain from a third-party DNS provider.

</article>

<article id="2">

## Configuring custom domains

When you configure a custom domain on your service, WeDeploy will check to see if that domain name is pointing to that service. This means you must always configure with your domain provider before adding the domain to your project.

1. Go to your domain provider and configure the DNS to point to your WeDeploy service URL.
2. After you create a project on the [Console](https://console.wedeploy.com), go to the WeDeploy service you would like to add the domain to and select _"Custom Domains"_.
3. Now type the domain(s) you would like to add.
4. Click on _"Update Custom Domains"_.

![settings](/images/docs/intro/custom-domains--settings.png)

</article>

<article id="3">

## DNS for root domains

A root domain is the highest level of hierarchy for the website you control. When you register a domain name, you are registering a root domain which allows you to have the access to create subdomains and file structures all branching from that root domain.

If your domain provider allows you to either use CNAME or ALIAS records for root domains, you just need to point the CNAME/ALIAS entry for your root domain as described below:

<div class="table-container">

| Record            | Name             | Project Target Domain |
| ----------------- | ---------------- | --------------------- |
| ALIAS or CNAME    | '@' or empty     | ui-myapp.wedeploy.io. |

</div>

In many DNS Providers, you are only allowed to use Address Records (A) for your root domain. In that case, you can use the static IP provided by WeDeploy as the target for the Address Record (A):

<div class="table-container">

| Record            | Name             | Project Target Domain |
| ----------------- | ---------------- | --------------------- |
| A                 | '@' or empty     | 173.196.61.238        |

</div>

</article>

<article id="4">

## DNS for subdomains

You can configure your subdomain as a new CNAME record with your DNS provider. If you're not sure about how to configure CNAME records for subdomains, visit your DNS provider's documentation page.

<div class="table-container">

| Record            | Subdomain            | Project Target Domain    |
| ----------------- | -------------------- | ------------------------ |
| CNAME             | www.mydomain.com     | ui-myapp.wedeploy.io.    |
| CNAME             | ui.mydomain.com      | ui-myapp.wedeploy.io.    |

</div>

</article>

## What's next?

* Learn more about using [environment variables](/docs/intro/environment-variables.html).
