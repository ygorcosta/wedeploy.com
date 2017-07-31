---
title: "Deploying Node.js"
description: "Launch a Node.js application in few seconds."
headerTitle: "Deploy"
layout: "guide"
weight: 4
---

### Node.js

###### {$page.description}

<article id="1">

## Introduction

[Node.js](https://nodejs.org) is an open-source, cross-platform runtime for developing server-side web applications using JavaScript. It has an event-driven architecture capable of asynchronous I/O.

</article>

<article id="2">

## Try it yourself

Want to see the process of deploying Node.js step by step?

<div class="guide-btn-cta">
	<a class="btn btn-accent btn-sm" href="/tutorials/nodejs" target="_blank" data-senna-off>
		<span class="icon-16-external"></span>Try the tutorial
	</a>
</div>

<div class="guide-aux-cta">
	or see a <a href="http://boilerplate-nodejs.wedeploy.io" target="_blank" data-senna-off>live demo</a>.
</div>

</article>

<article id="3">

## Configuring

<aside>

All WeDeploy projects use a consistant file structure and configuration files to deploy apps with the CLI or GitHub. Learn more on our <strong><a href="/docs/deploy/how-it-works.html">How It Works Page</a></strong>.

</aside>

Below is an example of a `wedeploy.json` for a Node.js container.

```application/json
{
	"id": "nodejs"
}
```

The `id` for your services are uniquely determined by you.

</article>

## What's next?

Now you can start building your Node.js based application.
