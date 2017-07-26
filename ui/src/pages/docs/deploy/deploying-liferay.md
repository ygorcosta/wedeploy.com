---
title: "Deploying Liferay"
description: "Launch a Liferay application in few seconds."
headerTitle: "Deploy"
layout: "guide"
weight: 7
---

### Liferay

###### {$page.description}

<article id="1">

## Introduction

[Liferay](https://www.liferay.com) is a portal, web content management and collaboration software package. It includes social collaboration features such as a doc library, off-line document sync, internal messaging, online presence, and more.

We currently support Liferay X.

</article>

<article id="2">

## Try it yourself

Want to see the process of deploying Liferay step by step?

<div class="guide-btn-cta">
	<a class="btn btn-accent btn-sm" href="/tutorials/liferay" target="_blank" data-senna-off>
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

Below is an example of a `wedeploy.json` for a Liferay container.

```application/json
{
	"id": "liferay",
	"image": "wedeploy/liferay:beta"
}
```

The `id` for your services are uniquely determined by you.

</article>

## What's next?

Now you can start building your liferay based application.
