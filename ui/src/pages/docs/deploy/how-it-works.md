---
title: "How It Works"
description: "Deploying is very easy with WeDeploy. You can start hosting your static files, building a database, or even sending an email within a couple of minutes!"
headerTitle: "Deploy"
layout: "guide"
weight: 1
---

# {$page.title}

###### {$page.description}

<article id="1">

## Introduction

There are basically two ways to deploy an app. You can use the command line for [instant deployment](/docs/deploy/instant-deployment.html) or you can integrate with GitHub for [continuous deployment](/docs/deploy/continuous-deployment.html).

Both options give you a lot of power and flexibility, but there's another important concept that needs to be explained and that's our build step. When you send a bunch of files to WeDeploy we need to scan and detect what you would like to build. Maybe you want to run them with Java or maybe you just want to serve them as a static hosting.

</article>

<article id="2">

## Automatic build detection

The last thing any developer wants is to add a new tool that forces them to alter their workflow. This is why we've worked hard to build WeDeploy so it can fit right into your regular way of working and fill the gaps needed to take your development to the next level.

WeDeploy tries to determine what language your project uses. It then takes the matching buildpack to install dependencies, compile the code and run the application. WeDeploy comes with a number of pre-configured buildpacks for languages like Java, Ruby, Node.js and so on.

On deploy, the platform will detect the programming language and build & run the application.

</article>

<article id="3">

## Manually set a build

When you push your local repo to your WeDeploy project, we scan it for `wedeploy.json` files, which specify the ID of your services as well as which service containers you are deciding to use. When we find a `wedeploy.json`, we serve that whole directory as a part of the service you defined within.

For example, let's say you have a folder named `my-project` that uses the Hosting, Data, and Email services. This is what your project's file structure could look like:

```
my-project
├── data
│   ├── api.json
│   └── wedeploy.json
├── email
│   └── wedeploy.json
└── hosting
    ├── wedeploy.json
    ├── index.html
    └── main.css
```

The `wedeploy.json` file is a JSON file defining the service attributes and configurations. The default path for a `wedeploy.json` is `./<service_folder>/wedeploy.json`.

WeDeploy uses this json file to reference a service by ID in case it's already created. If a service with a matching ID does not exist, it creates a new service for you.

**Reference:**

| Field | Description |
| ----- | ----------- |
| id    | Unique service ID. |
| image | Service stack/image type. |
| env   | Environment variables to be exported in the service lifecycle. |

**Usage:**

```application/json
{
	"id": "conqueror",
	"image": "wedeploy/java",
	"description": "WeDeploy Service Example",
	"hooks": {
		"build": "./gradlew clean build installDist -x test"
	},
	"env": {
		"WEDEPLOY_USER": "user"
	}
}
```

</article>

<article id="4">

## Try it yourself

We have created a whole array of tutorials to teach you how to start using WeDeploy. Click on one of the links below that interests you and begin your journey towards deployment!

* **<a data-senna-off target="_blank" href="/tutorials/hosting/">Hosting</a>**: Deploy static files like HTML, CSS, and JS.
* **<a data-senna-off target="_blank" href="/tutorials/data-web/">Data</a>**: Deploy a to-do list app using our Data Service and JS.
* **<a data-senna-off target="_blank" href="/tutorials/auth-web/">Auth</a>**: Deploy an authentication app using our Auth Service and JS.
* **<a data-senna-off target="_blank" href="/tutorials/email-web/">Email</a>**: Deploy an email-sending app using our Email Service and JS.
* **<a data-senna-off target="_blank" href="/tutorials/java/">Java</a>**: Deploy an app using Java and Spring Boot.
* **<a data-senna-off target="_blank" href="/tutorials/ruby/">Ruby</a>**: Deploy an app using Ruby and Sinatra.
* **<a data-senna-off target="_blank" href="/tutorials/nodejs/">Node.js</a>**: Deploy an app using Node.js and Express.
* **<a data-senna-off target="_blank" href="/tutorials/liferay/">Liferay</a>**: Deploy a Liferay Portal instance.
* **<a data-senna-off target="_blank" href="/tutorials/docker/">Docker</a>**: Deploy a Docker container.

</article>
