---
title: "Deploying Docker"
description: "Launch a Docker application in few seconds."
headerTitle: "Deploy"
layout: "guide"
weight: 9
---

### Docker

###### {$page.description}

<article id="1">

## Introduction

[Docker](https://www.docker.com) is the world’s leading software container platform. Developers use Docker to eliminate “works on my machine” problems when collaborating on code with co-workers. Enterprises use Docker to build agile software and ship new features faster.

</article>

<article id="2">

## Try it yourself

Want to see the process of deploying Docker step by step?

<div class="guide-btn-cta">
	<a class="btn btn-accent btn-sm" href="/tutorials/docker" target="_blank" data-senna-off>
		<span class="icon-16-external"></span>Try the tutorial
	</a>
</div>

<div class="guide-aux-cta">
	or see a <a href="http://boilerplate-docker.wedeploy.io" target="_blank" data-senna-off>live demo</a>.
</div>

</article>

<article id="3">

## Configuring

<aside>

All WeDeploy projects use a consistant file structure and configuration files to deploy apps with the CLI or GitHub. Learn more on our <strong><a href="/docs/deploy/how-it-works.html">How It Works Page</a></strong>.

</aside>

Below is an example of a `wedeploy.json` for a Docker container.

```application/json
{
	"id": "docker",
	"image": "wedeploy/docker:beta",
	"hooks": {
		"build": "bundle install"
	}
}
```

The `id` for your services are uniquely determined by you.

</article>

## What's next?

Now you can start building your docker based application.
