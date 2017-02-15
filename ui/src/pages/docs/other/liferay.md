---
title: "Getting Started With Liferay"
description: "Launch a Liferay application in few steps."
headerTitle: "Other"
layout: "guide"
weight: 1
---

# Liferay

###### {$page.description}

<div class="guide-btn-cta">
  <a class="btn btn-accent btn-sm" href="http://boilerplate-liferay.wedeploy.io" target="_blank">
    <span class="icon-16-external"></span>See Live Demo
  </a>
</div>

<div class="guide-aux-cta">
  or read the <a href="https://github.com/wedeploy/boilerplate-liferay/" target="_blank">source code</a>.
</div>

<article id="1">

## Install dependencies

This section assumes that you already have the **WeDeploy CLI** installed and **Docker** running. Make sure to [visit the installation guide](/docs/intro/using-the-command-line.html) if you need help setting that up.

</article>

<article id="2">

## Running locally

1. Start local infrastructure:

```xml
we run
```

2. Clone this repository:

```xml
git clone https://github.com/wedeploy/boilerplate-liferay.git
cd boilerplate-liferay
```

3. Link this container with the local infrastructure:

```xml
we link --project <projectID>
```

4. Now your container is ready to be used:

```xml
http://liferay.<projectID>.wedeploy.me
```

</article>

<article id="3">

## Deploying to the cloud

1. [Fork this repository](https://github.com/wedeploy/boilerplate-liferay/fork).

2. Go to the [Dashboard](http://dashboard.wedeploy.com).

3. [Create a project](http://dashboard.wedeploy.com/projects/create).

4. In the sidebar, click on *Deployment*.

5. Using your local machine, clone your Github fork:

```xml
git clone https://github.com/<username>/boilerplate-liferay
```

6. Get into the folder: `cd boilerplate-liferay`.

7. Using the content on *Deployment* page. Add the WeDeploy remote url:

```xml
git remote add wedeploy http://git.wedeploy.com/<projectID>.git
```

8. Push your data to wedeploy git server: `git push wedeploy master`.

9. Once you see it in the Dashboard, your container will be ready to be used.

```xml
http://liferay.<projectID>.wedeploy.io
```

</article>

## What's next?

* Now you can start building your liferay based application.
