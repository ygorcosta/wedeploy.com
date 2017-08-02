---
title: "Using the Command-line"
description: "The WeDeploy Command-Line Interface is a tool for helping you to use the WeDeploy platform by providing support to things like creating, managing, and scaling applications."
headerTitle: "Intro"
layout: "guide"
weight: 4
---

### {$page.title}

###### {$page.description}

<article id="1">

## Install

If you use a Unix-like system such as macOS or Linux open your terminal and run:

```xml
curl https://cdn.wedeploy.com/cli/latest/wedeploy.sh -sL | bash
```

If you use Windows, check the [Windows amd64 installer](https://bin.equinox.io/c/8WGbGy94JXa/cli-stable-windows-amd64.msi). For other systems, see a list of [all builds available](https://dl.equinox.io/wedeploy/cli/stable).

</article>

<article id="2">

## Login into your account

```xml
we login
```

```xml
we login --no-browser
```

</article>

<article id="3">

## Logout from your account

```xml
we logout
```

</article>

<article id="4">

## Deploy projects or services

```xml
we deploy
```

</article>

<article id="5">

## Show logs of the services

```xml
we log
```

</article>

<article id="6">

## Show list of projects and services

```xml
we list
```

</article>

<article id="7">

## Delete project or services

```xml
we delete
```

</article>

<article id="8">

## Open the [console](https://console.wedeploy.com) on your browser

```xml
we console
```

</article>

<article id="9">

## Show CLI version

```xml
we version
```

</article>

<article id="10">

## Update CLI to the latest version

```xml
we update
```

</article>

## What's next?

* Learn more about using [the WeDeploy API Client](/docs/intro/api-clients.html).
