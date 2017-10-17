---
title: "Deploy App"
description: "In this tutorial, you'll learn how to build and deploy a chat app with WeDeploy."
buttonTitle: "My app is live and working well"
tutorialTitle: "Zero to Production: Developing with WeDeploy"
parentId: "lsna"
layout: "tutorial"
weight: 11
---

#### {$page.title}

Fantastic! Your local app is working! It now enables you to create and sign in users and allows them to send messages to each other because of the WeDeploy APIs. Now let's deploy the app again so that your fully functioning app is live.

Make sure to replace `yourproject` with the name of your WeDeploy project.

```xml
we deploy -p yourproject
```

Now you can go to `ui-yourproject.wedeploy.io` (replacing `yourproject` with the project name you used above) and see your site live.
