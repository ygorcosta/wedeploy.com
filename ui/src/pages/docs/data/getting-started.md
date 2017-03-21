---
title: "Getting Started"
description: "Leverage a NoSQL database with search and real-time capabilities using WeDeploy™ Data."
headerTitle: "Data"
layout: "guide"
weight: 1
---

### Data

###### {$page.description}

<div class="guide-btn-cta">
	<a class="btn btn-accent btn-sm" href="http://boilerplate-data.wedeploy.io" target="_blank">
		<span class="icon-16-external"></span>See Live Demo
	</a>
</div>

<div class="guide-aux-cta">
	or read the <a href="https://github.com/wedeploy/boilerplate-data/tree/js" target="_blank">source code</a>.
</div>

<article id="1">

## Install dependencies

This section assumes you already have the **WeDeploy CLI** installed and **Docker** running. Make sure to [visit the installation guide](/docs/intro/using-the-command-line.html) if you need help setting that up.

We also feature code snippets using the API Client, [visit this guide](/docs/intro/using-the-api-client.html) in order to start using it.

</article>

<article id="2">

## Running locally

<ol>

<li>Start local infrastructure:</li>

```xml
we run
```

<li>Clone this repository:</li>

```xml
git clone -b js https://github.com/wedeploy/boilerplate-data.git boilerplate-data-js
cd boilerplate-data-js
```

<li>Link this container with the local infrastructure:</li>

```xml
we link
```

<li>Now your container is ready to be used:</li>

```xml
http://boilerplate-data.wedeploy.me
```
</ol>

</article>

<article id="3">

## Deploying to the cloud

<ol>

<li><a href="https://github.com/wedeploy/boilerplate-data/fork">Fork this repository</a>.</li>
<li>Go to the <a href="http://dashboard.wedeploy.com">Dashboard</a>.</li>
<li><a href="http://dashboard.wedeploy.com/projects/create">Create a project</a>.</li>
<li>In the sidebar, click on <strong>Deployment</strong>.</li>
<li>Using your local machine, clone your Github fork:</li>

```xml
git clone -b js https://github.com/<username>/boilerplate-data
```

<li>Get into the folder: <code>cd boilerplate-data</code>.</li>
<li>Using the content on <strong>Deployment</strong> page. Add the WeDeploy remote url:</li>

```xml
git remote add wedeploy http://git.wedeploy.com/<projectID>.git
```
<li>Push your data to wedeploy git server: <code>git push wedeploy js:master</code>.</li>
<li>Once you see it in the Dashboard, your container will be ready to be used.</li>

```xml
http://boilerplate-data.wedeploy.io
```

</ol>

</article>

## What's next?

Now that you have *WeDeploy Data* API settled up, you can interact [configuring the data service](/docs/data/configuring-data.html).
