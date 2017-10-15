---
title: "Install Auth Service"
description: "In this tutorial, you'll learn how to build and deploy a chat app with WeDeploy."
buttonTitle: "I installed an Auth service"
tutorialTitle: "Zero to Production: Developing with WeDeploy"
parentId: "lsna"
layout: "tutorial"
weight: 5
---

#### {$page.title}

There are many ways to use WeDeploy. You can either deploy your source code via our CLI tool or GitHub integration, or you can install services like Auth, Data and Email on our Console.

When you deployed your source code before, you may have noticed that WeDeploy created a Hosting service to serve those files. Now we want to install a WeDeploy Auth service so that we can start creating users and signing them into the app.

To do this, go back to the <a href="https://console.wedeploy.com" target="_blank">WeDeploy Console</a> and select your project. Then, click on the _Install Service_ button and select the _WeDeploy Auth_ service. Name your Auth service `auth` and then click _Install Auth_.

<ul class="checklist">
  <li>Go to the WeDeploy Console</li>
  <li>Select your app's project</li>
  <li>Click on the <em>Install Service</em></li>
  <li>Select the <em>WeDeploy Auth</em> service</li>
  <li>Name your Auth service <code>auth</code></li>
  <li>Click <em>Install Auth</em></li>
</ul>

Now your auth service will initiate for a few seconds and then it will be ready to use.
