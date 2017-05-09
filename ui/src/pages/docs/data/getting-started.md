---
title: "Getting Started"
description: "Leverage a NoSQL database with the power of our intuitive API."
headerTitle: "Data"
layout: "guide"
weight: 1
---

### Data

###### {$page.description}

<article id="1">

## Introduction

Our Data service enables you to store data securely to a cloud database, make complex queries instantly, and consume information in real-time.

</article>

<article id="2">

## Try it yourself

Want to see the whole process of deploying an app with WeDeploy Data?

<div class="guide-btn-cta">
	<a class="btn btn-accent btn-sm" href="http://wedeploy.com/tutorials/data-web" target="_blank">
		<span class="icon-16-external"></span>Try the tutorial
	</a>
</div>

<div class="guide-aux-cta">
	or see a <a href="http://boilerplate-data.wedeploy.io" target="_blank">live demo</a>.
</div>

</article>

<article id="3">

## Configurating Data

<aside>
All WeDeploy projects use a consistant file structure and configuration files to deploy apps with Git or GitHub. Learn more on our <strong><a href="/docs/intro/how-it-works.html">How It Works Page</a></strong>.
</aside>

Below is an example of a `container.json` for a Data container.

```application/json
{
	"id": "database",
	"type": "wedeploy/data:latest"
}
```

The `id` for your services are uniquely determined by you.


</article>

## What's next?

Now you can learn more about **[configuring your data service](/docs/data/configuring-data.html)**.
