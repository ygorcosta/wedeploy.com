---
title: "Getting Started"
description: "Send emails using our simple API."
headerTitle: "Email"
layout: "guide"
weight: 1
---

### Email

###### {$page.description}

<article id="1">

## Introduction

Our email service enables you to send customized emails to your users and check on their status with just a few lines of code.

</article>

<article id="2">

## Try it yourself

Want to see the whole process of deploying an app with WeDeploy Email?

<div class="guide-btn-cta">
	<a class="btn btn-accent btn-sm" href="http://wedeploy.com/tutorials/email-web" target="_blank">
		<span class="icon-16-external"></span>Try the tutorial
	</a>
</div>

<div class="guide-aux-cta">
	or see a <a href="http://boilerplate-email.wedeploy.io" target="_blank">live demo</a>.
</div>

</article>

<article id="3">

## Configurating Email

<aside>
All WeDeploy projects use a consistant file structure and configuration files to deploy apps with Git or GitHub. Learn more on our <strong><a href="/docs/intro/how-it-works.html">How It Works Page</a></strong>.
</aside>

Below is an example of a `container.json` for an Email container.

```application/json
{
	"id": "mail",
	"type": "wedeploy/email:latest"
}
```

The `id` for your services are uniquely determined by you.

</article>

## What's next?

Now you can learn more about **[sending emails to our users](/docs/email/sending-email.html)**.
