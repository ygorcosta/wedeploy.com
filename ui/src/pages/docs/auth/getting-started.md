---
title: "Getting Started"
description: "Provide authentication using email/password or popular third-party identity providers like Google, Facebook, and GitHub."
headerTitle: "Auth"
layout: "guide"
weight: 1
---

### Auth

###### {$page.description}

Our Auth service allows you to avoid the headache of operating your own user management system. Features like creating accounts, resetting passwords, and updating profiles are easily accomplished with a few lines of code using our SDKs.

<article id="1">

## Try it yourself

Want to see the process of deploying WeDeploy Auth step by step?

<div class="guide-btn-cta">
	<a class="btn btn-accent btn-sm" href="/tutorials/auth-web" target="_blank" data-senna-off>
		<span class="icon-16-external"></span>Try the tutorial
	</a>
</div>

<div class="guide-aux-cta">
	or see a <a href="http://boilerplate-auth.wedeploy.io" target="_blank" data-senna-off>live demo</a>.
</div>

</article>

<article id="2">

## Configuring

<aside>

All WeDeploy projects use a consistant file structure and configuration files to deploy apps with the CLI or GitHub. Learn more on our <strong><a href="/docs/intro/how-it-works.html">How It Works Page</a></strong>.

</aside>

Below is an example of a `wedeploy.json` for an Auth container.

```application/json
{
	"id": "users",
	"image": "wedeploy/auth:beta"
}
```

The `id` for your services are uniquely determined by you.

</article>

## What's next?

Now we're ready to [start managing users](/docs/auth/manage-users.html).
