---
title: "Getting Started"
description: "Send emails to your users using WeDeploy Email."
headerTitle: "Email"
layout: "guide"
weight: 1
---

### Email

###### {$page.description}

<article id="1">

## Introduction

Our Email service enables you to send customized emails to your users and check on their status with just a few lines of code.

</article>

<article id="2">

## Try it yourself

Want to see the process of deploying WeDeploy Email step by step?

<div class="guide-btn-cta">
	<a class="btn btn-accent btn-sm" href="/tutorials/email-web" target="_blank" data-senna-off>
		<span class="icon-16-external"></span>Try the tutorial
	</a>
</div>

<div class="guide-aux-cta">
	or see a <a href="https://github.com/wedeploy/boilerplate-email" target="_blank" data-senna-off>source code demo</a>.
</div>

Check also the <a href="/tutorials/email-android" target="_blank" data-senna-off>tutorial for Android</a> and the <a href="/tutorials/email-ios" target="_blank" data-senna-off>tutorial for iOS</a>.

</article>

<article id="3">

## Configuring

<aside>

All WeDeploy projects use a consistant file structure and configuration files to deploy apps with the CLI or GitHub. Learn more on our <strong><a href="/docs/intro/how-it-works/">How It Works Page</a></strong>.

</aside>

Below is an example of a `wedeploy.json` for an Email container.

```application/json
{
	"id": "mail",
	"image": "wedeploy/email:@site.version.image.email@"
}
```

The `id` for your services are uniquely determined by you.

</article>

## What's next?

Now you can learn more about [sending emails to our users](/docs/email/sending-email/).
