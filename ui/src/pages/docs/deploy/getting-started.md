---
title: "Getting Started"
description: "Deploying is very easy with WeDeploy. You can start hosting your static files, building a database, or even sending an email within a couple of minutes!"
headerTitle: "Deploy"
layout: "guide"
weight: 1
---

# {$page.title}

###### {$page.description}

<article id="1">

## Introduction

There are basically two ways to deploy your project. You can use the command line for [instant deployment](/docs/deploy/instant-deployment.html) or you can integrate with GitHub for [continuous deployment](/docs/deploy/continuous-deployment.html).

Both options give you a lot of power and flexibility, but there's another important concept that needs to be explained, and that is our build step. When you send a bunch of files to WeDeploy, we scan and detect how you want us to build your source code. Maybe you want to run them with Java or maybe you just want to serve them as a static hosting. But how do we detect which build you want for your project?

</article>

<article id="2">

## Configuring

All WeDeploy services use a `wedeploy.json` file to defines the service's attributes and configurations.

Once you push your local project to WeDeploy, we scan it for `wedeploy.json` files. when we find one, we serve that whole directory as a part of the service you defined within.

For example, let's say you have a folder named `myservice` that uses our Hosting, Data, and Email services. This is what your project's file structure could look like:

```
myservice
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

WeDeploy uses this JSON file to reference a service by ID in case it's already created. If a service with a matching ID does not exist, it creates a new service for you.

**Reference:**

<div class="table-container">

| Field             | Type    | Default | Description                  |
| ----------------- | ------- | ------- | ---------------------------- |
| **id**            | String  | random  | Unique service ID            |
| **image**         | String  |         | Service image type           |
| **env**           | Object  |         | Exported variables           |
| **port**          | Number  | 80      | Exposed service port         |
| **cpu**           | Number  | 1       | Number of processing units   |
| **scale**         | Number  | 1       | Maximum number of instances  |
| **memory**        | Number  | 512     | Amount of computing memory   |
| **volume**        | String  |         | Persistant database storage  |
| **customDomains** | Array   |         | Set custom domain names      |

</div>

**Usage:**

Here are all the configuration fields in action.

```application/json
{
	"id": "myservice",
	"image": "wedeploy/example",
	"env": {
		"DB_USER": "root",
		"DB_PASSWORD": "pass123",
	},
	"port": 8080,
	"cpu": 2,
	"scale": 2,
	"memory": 2048,
	"volume": "/opt/storage",
	"customDomains": ["myservice.com", "www.myservice.com"]
}
```

</article>

<article id="3">

## Automatic Code Detection

If you are deploying a project using **Node.js**, **Java**, **Ruby**, or a **Dockerfile**, we will scan your project and build it according to your project's unique attributes. For example, if we find a `package.json`, we'll build that as a Node.js service.

In order to make sure we know where you want us to scan, we require that you place a `wedeploy.json` inside the folder of every service you want to deploy and simply declare an ID inside.

```application/json
{
	"id": "myservice"
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
* **<a data-senna-off target="_blank" href="/tutorials/liferay-dxp/">Liferay DXP</a>**: Deploy a Liferay DXP instance.
* **<a data-senna-off target="_blank" href="/tutorials/docker/">Docker</a>**: Deploy a Docker container.

</article>
