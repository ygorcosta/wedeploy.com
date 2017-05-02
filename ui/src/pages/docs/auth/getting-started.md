---
title: "Getting Started"
description: "Provide authentication using email/password or popular third-party identity providers like Google, Facebook, and GitHub."
headerTitle: "Auth"
layout: "guide"
weight: 1
---

### {$page.title}

###### {$page.description}

<article id="1">

## Introduction

Our Auth service allows you to avoid the headache of operating your own user management system. Features like creating accounts, resetting passwords, and updating profiles are easily accomplished with a few lines of code using our SDKs.

</article>

<article id="2">

## Try it yourself

Want to see the whole process of deploying an app with WeDeploy Auth?

<div class="guide-btn-cta">
	<a class="btn btn-accent btn-sm" href="http://wedeploy.com/tutorials/auth-web" target="_blank">
		<span class="icon-16-external"></span>Try the tutorial
	</a>
</div>

<div class="guide-aux-cta">
	or see a <a href="http://boilerplate-auth.wedeploy.io" target="_blank">live demo</a>.
</div>

</article>

<article id="3">

## Configurating Auth

<aside>
All WeDeploy projects use a consistant file structure and configuration files to deploy apps with Git or GitHub. Learn more on our <strong><a href="/docs/intro/how-it-works.html">How It Works Page</a></strong>.
</aside>

Below is an example of a `container.json` for an Auth container.

```application/json
{
	"id": "users",
	"type": "wedeploy/auth:latest"
}
```

The `id` for your services are uniquely determined by you.


</article>

## What's next?

Now you're ready to **[start managing your users](/docs/auth/manage-users.html)**.
