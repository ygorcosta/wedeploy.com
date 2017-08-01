---
title: "Migrating to Beta"
description: "We have made some fundamental changes to the way you setup your project source code and simplified the way you deploy your apps. Walk through these easy steps and your project will be ready for deployment."
headerTitle: "Deploying"
layout: "guide"
weight: 10
---

### {$page.title}

###### {$page.description}

![beta migration](/images/docs/deploy/migration--beta-migration.png)

<article id="1">

## Introduction

On August 1st, we announced [our new Beta version of WeDeploy](/blog/wedeploy-beta-our-biggest-release-yet.html). With that release we launched the new infrastructure that can be accessed by our [Console](https://console.wedeploy.com).

Along with that big infrastructure change, we also introduced other things like custom Docker images and HTTPS, which lead to a big question that you might be asking yourself: "will the projects I built on Alpha work on Beta?" The answer is "yes", but there are a few easy changes that need to be made to your projects first. Below is a guide on how to seamlessly do that!

If you have any trouble, feel free to tap on the green button in the bottom corner to talk to a WeDeploy human, **we'd love to help**.

<aside>

###### <span class="icon-16-alert"></span> Attention

All Alpha projects, including the previous Dashboard, will be unavailable on **September 1st**. Make sure to migrate your projects to Beta before then.

</aside>

</article>

<article id="2">

## Configuration files

1. Delete _project.json_. We no longer support this file.

2. Rename all _container.json_ files to _wedeploy.json_.

3. In _wedeploy.json_, change _type_ to _image_ and add the _:beta_ tag.

![wedeploy.json](/images/docs/deploy/migration--wedeploy-json.png)

</article>

<article id="3">

## Java, Node.js, and Ruby

We no longer support the **Node.js**, **Java**, and **Ruby** WeDeploy images. Instead, we are releasing something called [Automatic Code Detection](/docs/deploy/gettings-started.html#3).

Basically, we'll try to determine what language your project uses, so you can push any project using Node.js, Java, and Ruby, and we will build it from there.

For example, if we find a `package.json`, we'll build that as a Node.js service. In order to make sure we know where you want us to scan, we require that you place a `wedeploy.json` inside the folder of every service you want to deploy and simply declare an ID inside.

```application/json
{
	"id": "myservice"
}
```

</article>

<article id="4">

## API client

**CDN Links**

1. Update your CDN API links to _https_ (yes, just simply add the 's').

2. Update the version to _:beta_

	![CDN HTTPS](/images/docs/deploy/migration--cdn-https.png)

**API Endpoints**

1. Remove hardcoded protocals (_http://_) on API URL's.

	![API URL HTTP](/images/docs/deploy/migration--api-url-http.png)

2. Each service now has its own domain instead of being a subdomain of your project. This means you must update your API endpoints (_serviceID-projectID.wedeploy.io_).

	![API URL Service](/images/docs/deploy/migration--api-url-service.png)

</article>

<article id="5">

## Data

**Migrating Database**

If you want to migrate your data collections, you can do this manually by sending GET requests from Alpha and POST requests to Beta. If you are not familiar with that process, feel free to <a href="javascript:Intercom('show');">reach out to us</a> and we can migrate them over for you.

</article>

<article id="6">

## Auth

**OAuth Redirect**

Since your new app will have a new URL, you must update your Auth redirect URL's for your registered apps if you use OAuth providers like Google, Facebook, or Github.

**Migrating Userbase**

There is no way to manually migrate your previous users. To do so, <a href="javascript:Intercom('show');">reach out to us</a> and we can help you migrate your userbase.

</article>

<article id="7">

## Email

**JavaScript API**

We made some syntax updates on the Email API to make it even more intuitive. This means that now all services follow the same syntax flow for JavaScript.

1. Instead of declaring your email endpoint with _.url()_, you now use _.email()_.
2. You now no longer need to add _/emails_ to the end of your URL.
3. You must add an _.auth('masterToken or userCredentials')_ after the URL.

###### Sending email

1. Change syntax from _.form('from', 'to@mail.com')_ to _.from('to@mail.com')_ for all email variables.
2. Change _.post()_ to _.send()_.

![Send Email](/images/docs/deploy/migration--send-email.png)

###### Checking status

1. Instead of including the _ID_ of the email in the URL, add it like this _.status('00000000')_
2. You no longer need to use _.get_ because the _.status_ will make the request.

![Check Status](/images/docs/deploy/migration--check-email-status.png)

</article>

<article id="8">

## Deployment

**New Deployment Flows**

Before you had two ways of deploying code, you could either connect with GitHub or create a remote pointing to our Git server. We noticed that people loved the convenience of integrating with GitHub so [we're keeping that](/docs/deploy/continuous-deployment.html), but when using our Git server the experience was not as fluid, specially the authentication step on every push.

There are now two ways to deploy your project: _[Instant Deployment](/docs/deploy/instant-deployment.html)_ and _[Continuous Deployment](/docs/deploy/constant-deployment.html)_.

This means we no longer allow deployments with Git.

</article>

<article id="9">

## Custom domains

Because of the new service domain changes, you can only add a custom domain on the service level instead of the project level.

We have also created [a new way to add Custom Domains](/docs/intro/custom-domains.html#2). Instead of using an alias, you can now configure your root domain with our regional server names or using a your service URL as a CNAME.

![Custom Domains](/images/docs/deploy/migration--custom-domains.png)

We also do not support _Home Services_ anymore. If you want to beautify your service URL, you can add a _*.wedeploy.io_ domain as a custom domain on your service for free. For example, if you had _ui-myservice.wedeploy.io_ as your service URL, you could add _myservice.wedeploy.io_ as a custom domain on that service.

</article>

<article id="10">

## Local Deployment

In order to focus our efforts towards a seamless cloud-based experience, we are currently not supporting local development in Beta.

</article>

## What's Next?

You're all set! Start having fun deploying projects on [WeDeploy Beta](https://console.wedeploy.com) and let us know if we can help you in any way.
