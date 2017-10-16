---
title: "Deploy Static Files"
description: "In this tutorial, you'll learn how to build and deploy a chat app with WeDeploy."
buttonTitle: "I see my site live"
tutorialTitle: "Zero to Production: Developing with WeDeploy"
parentId: "lsna"
layout: "tutorial"
weight: 3
---

#### {$page.title}

The project you just downloaded contains all the static files (HTML, CSS, and JavaScript) to build a messaging app, but we purposely left out a few things that make it work.

Let's deploy the project the way it is now, even though it's broken, so we can see the progression.

To deploy, open your terminal and change to the directory that you downloaded in the previous step. Then, run this command:

```xml
we deploy -p yourproject
```

**Note:** replace `youproject` with `<firstname><lastname>chatapp` (berniesmithchatapp)

Now you can go to `ui-yourproject.wedeploy.io` (replacing `yourproject` with the project name you used above) and see your site live. You can also login to the <a href="https://console.wedeploy.com" target="_blank">WeDeploy Console</a> and see the details of the hosting service you deployed.
