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

On July 31st, we announced [our new Beta version of WeDeploy](/blog/wedeploy-beta-our-biggest-release-yet.html). With that release we launched the new infrastructure that can be accessed by our [Console](https://console.wedeploy.com). Along with that big infrastructure change, we also introduced other things like custom Docker images and HTTPS, which lead to a big question that you might be asking yourself: _will the projects I built on Alpha work on Beta?_ The answer is 'yes', but there are a few easy changes that need to be made to your projects first. Below is a guide on how to seamlessly do that!

If you have any trouble, feel free to tap on the green button in the bottom corner to talk to a WeDeploy human, **we'd love to help**.

<aside>

###### <span class="icon-16-alert"></span> Attention

All Alpha projects, including the entire Dashboard, will be unavailable on **August 31st**. Make sure to migrate your projects to Beta before then.

</aside>

</article>

<article id="2">

## Configuration files

1. Delete _project.json_. We no longer support these files.

2. Rename all _container.json_ files to _wedeploy.json_.

3. In _wedeploy.json_, change _type_ to _image_ and add the _:beta_ tag.

![wedeploy.json](/images/docs/deploy/migration--wedeploy-json.png)

</article>

<article id="3">

## Java, Node.js, and Ruby services

We no longer support the **Java**, **Node.js**, and **Ruby** WeDeploy images. In order to keep expanding the compatabilty of WeDeploy, we decided to rely on the ever-expanding ecosystem of Docker to provide images for whatever app you are creating.

Starting today, if you want to deploy an app with Java, Ruby, or really any other technology, you can deploy with a Dockerfile and WeDeploy will build it accordingly.

</article>

<article id="4">

## Deployment

**New Deployment Flows**

There are now two ways to deploy your project: _[Instant Deployment](/docs/deploy/instant-deployment.html)_ and _[Continuous Deployment](/docs/deploy/constant-deployment.html)_.

This means we no longer allow deployments with Git.

**Deployment Auto Detection**

But we didn't stop there. We are also releasing something called _Deployment Auto Detection_. Basically, we create recipes for certain types of projects based on their fundamental characteristics so you can simply deploy your files the way they are, and we will take care of the Docker configuration. Right now, we only have support for **Node.js**, **Dockerfile**, and **Hosting** but there will be many more recipes released in the coming weeks.

This means you could deploy a folder with a _package.json_ and we will build it as a Node.js service. One thing to note is that if you are deploying a project with **multiple services**, you must place a _wedeploy.json_ in each service folder so WeDeploy knows which directories to build as separate services. If any of them are Node.js, Dockerfile, or Static Hosting services, you can put an empty _wedeploy.json_, like below, so that we will can auto detect your service.

```application/json
{}
```

</article>

<article id="5">

## API client

1. Update your CDN API links to _https_ (yes, just simply add the 's').

	![CDN HTTPS](/images/docs/deploy/migration--cdn-https.png)

2. Each service now has its own domain instead of being a subdomain of your project. This means you must update your API endpoints (_serviceID-projectID.wedeploy.io_).

3. Remove hardcoded protocals (_http://_) on API URL's.

	![API URL](/images/docs/deploy/migration--api-url.png)

</article>

<article id="6">

## Data

**Migrating data collections**

Once you have your project redeployed on the Console, you might want to migrate your old data to your new site. Follow these instructions to do that.

1. Go to the [Dashboard](http://dashboard.wedeploy.com) of the project you are fetching the collection from and select the Data service.

2. Click the link of your data service at the top and amend the collection you are wanting to migrate to the url like this: _data-demo.wedeploy.io/todos_. If you have authentication parameters on your collection, you will need to update your _api.json_ and deploy again.

3. Now that you can see a your collection, press _cmd_ + _s_ to save as a JSON file onto your machine.

4. Now open up your terminal to the location that you saved your JSON and paste the script below. Make sure to replace your new project’s info in place of serviceID, projectID, [desired] collectionID, masterToken, and name of JSON file.

	```xml
	curl --request POST \
	  --url https://serviceID-projectID.wedeploy.sh/collectionID \
	  --header 'authorization: bearer masterToken' \
	  --header 'content-type: application/json' \
	  --data @collection.json
	```

5. Now you can run the command. If it worked, you should see a response similar to this:

	```xml
	{"hasFailures":false,"results":[{"created":true,"document":{"id":"234841345046097992"},"successful":true},{"created":true,"document":{"id":"234841345053839632"},"successful":true}]}%
	```

6. Now you can go to that data service on the [Console](https://console.wedeploy.com) and click on the _Database_ section to see your collection.

</article>

<article id="7">

## Auth

**OAuth Redirect**

Since your new app will have a new URL, you must update your Auth redirect URL's for your registered apps if you use OAuth providers like Google, Facebook, or Github.

**Migrating Userbase**

There is no way to manually migrate your previous users. To do so, reach out to us with the green circle button below and we can help you port your userbase.

</article>

<article id="8">

## Email

**JavaScript API**

We made some syntax updates on the Email API to make it even more intuitive. This means that now all services follow the same syntax flow for JavaScript (`WeDeploy.serviceType('service-project.wedeploy.io').method()`).

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

![Send Email](/images/docs/deploy/migration--check-email-status.png)

</article>

<article id="9">

## Custom domains

Because of the new service domain changes, you can only add a custom domain on the service level instead of the project level.

We have also created [a new way to add Custom Domains](/docs/intro/custom-domains.html#2). Instead of using an alias, you can now configure your root domain with our regional server names or using a your service URL as a CNAME.

</article>
