---
title: "Getting Started With Node.js"
description: "Launch a Node.js application in few steps."
headerTitle: "Other"
layout: "guide"
weight: 2
---

# Node.js

###### {$page.description}

<div class="guide-btn-cta">
  <a class="btn btn-accent btn-sm" href="http://boilerplate-nodejs.wedeploy.io" target="_blank">
    <span class="icon-16-external"></span>See Live Demo
  </a>
</div>

<div class="guide-aux-cta">
  or read the <a href="https://github.com/wedeploy/boilerplate-nodejs/" target="_blank">source code</a>.
</div>

<article id="1">

## Install dependencies

This section assumes that you already have the **WeDeploy CLI** installed and **Docker** running. Make sure to [visit the installation guide](/docs/intro/using-the-command-line.html) if you need help setting that up.

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
git clone https://github.com/wedeploy/boilerplate-nodejs.git
cd boilerplate-nodejs
```

<li>Build the container:</li>

```xml
we build
```

<li>Link this container with the local infrastructure:</li>

```xml
we link --project <projectID>
```

<li>Now your container is ready to be used:</li>

```xml
http://nodejs.<projectID>.wedeploy.me
```

</ol>

</article>

<article id="3">

## Deploying to the cloud

<ol>

<li><a href="https://github.com/wedeploy/boilerplate-nodejs/fork">Fork this repository</a>.</li>

<li>Go to the <a href="http://dashboard.wedeploy.com">Dashboard</a>.</li>

<li><a href="http://dashboard.wedeploy.com/projects/create">Create a project</a>.</li>

<li>In the sidebar, click on <strong>Deployment</strong>.</li>

<li>Using your local machine, clone your Github fork:</li>

```xml
git clone https://github.com/<username>/boilerplate-nodejs
```

<li>Get into the folder: <code>cd boilerplate-nodejs</code>.</li>

<li>Using the content on <strong>Deployment</strong> page. Add the WeDeploy remote url:</li>

```xml
git remote add wedeploy http://git.wedeploy.com/<projectID>.git
```

<li>Push your data to wedeploy git server: <code>git push wedeploy master</code>.</li>

<li>Once you see it in the Dashboard, your container will be ready to be used.</li>

```xml
http://nodejs.<projectID>.wedeploy.io
```

</ol>

</article>

<article id="4">

## Additional Notes

As of right now, node.js servers running on WeDeploy only accept connections through port 80.

</article>

## What's next?

* Now you can start building your Node.js based application.
