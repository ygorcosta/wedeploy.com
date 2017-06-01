---
title: "How It Works"
description: "Deploying is very easy with WeDeploy. You can start hosting your static files, buildling a database, or even sending an email within a couple of minutes!"
headerTitle: "Intro"
layout: "guide"
weight: 3
---

# {$page.title}

###### {$page.description}

<article id="1">

## Local file structure

When you push your local repo to your WeDeploy project, we scan it for `project.json` and `container.json` files, which specify the ID of your project and services as well as which service containers you are deciding to use. When we find a `container.json`, we serve that whole directory as a part of the service you defined within.

For example, let's say you have a project named `my-project` that uses the Hosting, Data, and Email services. This is what your project's file structure could look like:

```sh
my-project
├── data
│   ├── api.json
│   └── container.json
├── email
│   └── container.json
├── hosting
│   ├── container.json
│   ├── index.html
│   └── main.css
└── project.json
```

<aside>

To learn more about how these JSON files work and what parameters you can use, read through our documentation on **[configuration files](/docs/intro/configuration-files.html)**.

</aside>

</article>

<article id="2">

## Try it yourself

We have created a whole array of tutorials to teach you how to start using WeDeploy. Click on one of the links bellow that interests you and begin your journey towards deployment!

* **<a data-senna-off target="_blank" href="http://wedeploy.com/tutorials/hosting/">Hosting</a>**: Deploy static files like HTML, CSS, and JS.
* **<a data-senna-off target="_blank" href="http://wedeploy.com/tutorials/data-web/">Data</a>**: Deploy a to-do list app using our Data Service and JS.
* **<a data-senna-off target="_blank" href="http://wedeploy.com/tutorials/auth-web/">Auth</a>**: Deploy an authentication app using our Auth Service and JS.
* **<a data-senna-off target="_blank" href="http://wedeploy.com/tutorials/email-web/">Email</a>**: Deploy an email-sending app using our Email Service and JS.
* **<a data-senna-off target="_blank" href="http://wedeploy.com/tutorials/java/">Java</a>**: Deploy an app using Java and Spring Boot.
* **<a data-senna-off target="_blank" href="http://wedeploy.com/tutorials/ruby/">Ruby</a>**: Deploy an app using Ruby and Sinatra.
* **<a data-senna-off target="_blank" href="http://wedeploy.com/tutorials/nodejs/">Node.js</a>**: Deploy an app using Node.js and Express.
* **<a data-senna-off target="_blank" href="http://wedeploy.com/tutorials/liferay/">Liferay</a>**: Deploy a Liferay Portal instance.

</article>
