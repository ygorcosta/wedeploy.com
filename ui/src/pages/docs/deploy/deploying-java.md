---
title: "Deploying Java"
description: "Launch a Java application in few seconds."
headerTitle: "Deploy"
layout: "guide"
weight: 6
---

### Java

###### {$page.description}

<article id="1">

## Introduction

[Java](https://www.oracle.com/java/) is a concurrent, class-based, object-oriented language expressly designed for use in the distributed environment of the web. It is normally compiled to the binary format defined in the JVM Specification.

</article>

<article id="2">

## Try it yourself

Want to see the process of deploying Java step by step?

<div class="guide-btn-cta">
	<a class="btn btn-accent btn-sm" href="/tutorials/java" target="_blank" data-senna-off>
		<span class="icon-16-external"></span>Try the tutorial
	</a>
</div>

<div class="guide-aux-cta">
	or see a <a href="http://boilerplate-java.wedeploy.io" target="_blank" data-senna-off>live demo</a>.
</div>

</article>

<article id="3">

## Configuring

<aside>

All WeDeploy projects use a consistant file structure and configuration files to deploy apps with the CLI or GitHub. Learn more on our <strong><a href="/docs/deploy/how-it-works.html">How It Works Page</a></strong>.

</aside>

Below is a few examples of a `wedeploy.json` for the Java container.

```gradle
{
	"id": "java",
	"image": "wedeploy/java:beta",
	"hooks": {
  	"build": "gradle -Dorg.gradle.native=false clean build -x test"
  }
}
```
```maven
{
	"id": "java",
	"image": "wedeploy/java:beta",
	"hooks": {
  	"build": "mvn package"
  }
}
```
```ant
{
	"id": "java",
	"image": "wedeploy/java:beta",
	"hooks": {
  	"build": "ant build"
  }
}
```

The `id` for your services are uniquely determined by you.

</article>

## What's next?

Now you can start building your Java based application.
