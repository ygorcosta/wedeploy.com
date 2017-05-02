---
title: "Getting Started"
description: "Serve static files easily using WeDeploy Hosting."
headerTitle: "Hosting"
layout: "guide"
weight: 1
---

### {$page.title}

###### {$page.description}

<article id="1">

## Introduction

Our Hosting Service allows you to deliver HTML, CSS, JavaScript, or any other static files using powerful static hosting. It's super fast and will save you a lot of time.

</article>

<article id="2">

## Try it yourself

Want to see the whole process of deploying an app with WeDeploy Hosting?

<div class="guide-btn-cta">
	<a class="btn btn-accent btn-sm" href="http://wedeploy.com/tutorials/hosting" target="_blank">
		<span class="icon-16-external"></span>Try the tutorial
	</a>
</div>

<div class="guide-aux-cta">
	or see a <a href="http://boilerplate-hosting.wedeploy.io" target="_blank">live demo</a>.
</div>

</article>

<article id="3">

## Configurating Hosting

<aside>
All WeDeploy projects use a consistant file structure and configuration files to deploy apps with Git or GitHub. Learn more on our <strong><a href="/docs/intro/how-it-works.html">How It Works Page</a></strong>.
</aside>

Below is an example of a `container.json` for a Hosting container.

```application/json
{
	"id": "ui",
	"type": "wedeploy/hosting:latest"
}
```

The `id` for your services are uniquely determined by you.


</article>

## What's next?

Now you can learn more about **[custom error pages](/docs/hosting/custom-error-pages.html)**.
