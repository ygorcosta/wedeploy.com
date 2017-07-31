---
title: "Deploying Liferay DXP"
description: "Launch a Liferay DXP application in few seconds."
headerTitle: "Deploy"
layout: "guide"
weight: 7
---

### Liferay DXP

###### {$page.description}

<article id="1">

## Introduction

[Liferay DXP](https://www.liferay.com/digital-experience-platform) provides an architecture for companies to digitize business operations, deliver connected customer experiences, and gather actionable customer insight, with the ultimate goal of providing better customer experiences for their clients.

</article>

<article id="2">

## Try it yourself

Want to see the process of deploying Liferay DXP step by step?

<div class="guide-btn-cta">
	<a class="btn btn-accent btn-sm" href="/tutorials/liferay-dxp" target="_blank" data-senna-off>
		<span class="icon-16-external"></span>Try the tutorial
	</a>
</div>

<div class="guide-aux-cta">
	or see a <a href="http://boilerplate-liferay.wedeploy.io" target="_blank" data-senna-off>live demo</a>.
</div>

</article>

<article id="3">

## Configuring

<aside>

All WeDeploy projects use a consistant file structure and configuration files to deploy apps with the CLI or GitHub. Learn more on our <strong><a href="/docs/deploy/how-it-works.html">How It Works Page</a></strong>.

</aside>

Below is an example of a `wedeploy.json` for a Liferay DXP service.

```application/json
{
	"id": "liferay",
	"image": "wedeploy/liferay:beta"
}
```

The `id` for your services are uniquely determined by you.

</article>

## What's next?

Now you can start building your Liferay DXP application.
