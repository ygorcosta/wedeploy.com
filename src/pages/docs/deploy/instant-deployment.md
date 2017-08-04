---
title: "Instant Deployment"
description: "Deploying your app shouldn't be a slow process of configuration and setup. In fact, it shouldn't even be quick, it should be instant."
headerTitle: "Deploy"
layout: "guide"
weight: 2
---

### {$page.title}

###### {$page.description}

<article id="1">

## Download the CLI

In your terminal, run this command:

```
curl https://cdn.wedeploy.com/cli/latest/wedeploy.sh -sL | bash
```

This will install our command-line interface which is a tool that will help you use the WeDeploy platform.

<aside>

The command above will only work for Unix-like systems such as macOS or Linux. If you use Windows, you should download the [Windows amd64 installer](https://bin.equinox.io/c/8WGbGy94JXa/cli-stable-windows-amd64.msi).

</aside>

</article>

<article id="2">

## Deploy instantly

Assuming you already have a project locally, now you just need to run:

```
we deploy
```

This will immediately start uploading your files. Once that's finished, WeDeploy will start building and deploying your application. In the end, you'll be able to see it online in any browser.

<aside>

If you don't have a project ready to deploy, you can download this [simple project](https://github.com/wedeploy/boilerplate-hosting/archive/master.zip) and run the `we deploy` command inside that folder.

</aside>

Notice that this command will create a random name for your project. If you want to specify a new name or choose an existing project, you just need to run:

```
we deploy -p myproject
```

</article>

## What's next?

Being able to deploy instantaneously is great, but sometimes you want to trigger a deploy every time a push is made to GitHub. If that's your case, check the [Continuous Deployment](/docs/deploy/continuous-deployment.html) section.
