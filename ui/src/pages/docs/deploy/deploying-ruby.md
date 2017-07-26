---
title: "Deploying Ruby"
description: "Launch a Ruby application in few seconds."
headerTitle: "Deploy"
layout: "guide"
weight: 5
---

### Ruby

###### {$page.description}

<article id="1">

## Introduction

[Ruby](https://www.ruby-lang.org) is a dynamic, open source programming language with a focus on simplicity and productivity. It has an elegant syntax that is natural to read and easy to write.

We currently support Ruby X.

</article>

<article id="2">

## Try it yourself

Want to see the process of deploying Ruby step by step?

<div class="guide-btn-cta">
	<a class="btn btn-accent btn-sm" href="/tutorials/ruby" target="_blank" data-senna-off>
		<span class="icon-16-external"></span>Try the tutorial
	</a>
</div>

<div class="guide-aux-cta">
	or see a <a href="http://boilerplate-ruby.wedeploy.io" target="_blank" data-senna-off>live demo</a>.
</div>

</article>

<article id="3">

## Configuring

<aside>

All WeDeploy projects use a consistant file structure and configuration files to deploy apps with the CLI or GitHub. Learn more on our <strong><a href="/docs/deploy/how-it-works.html">How It Works Page</a></strong>.

</aside>

Below is an example of a `wedeploy.json` for a Ruby container.

```application/json
{
	"id": "ruby",
	"image": "wedeploy/ruby:beta",
	"hooks": {
		"build": "bundle install"
	}
}
```

The `id` for your services are uniquely determined by you.

</article>

## What's next?

Now you can start building your ruby based application.
