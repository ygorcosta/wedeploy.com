---
title: "Include API Client"
description: "In this tutorial, you'll learn how to build and deploy a chat app with WeDeploy."
buttonTitle: "I added the API link to 3 files"
tutorialTitle: "Zero to Production: Developing with WeDeploy"
parentId: "lsna"
layout: "tutorial"
weight: 4
---

#### {$page.title}

If you started clicking around on your new site, you probably noticed that you can't login or create an account. This is because we need to add API requests to do that. In order to accomplish this, we must include the WeDeploy API client within our project.

Open up your project's source code in a code editor. Go to the following three files and include the script link below at the bottom of the `<body>` element.

<ul class="checklist">
  <li>index.html</li>
  <li>create.html</li>
  <li>chat.html</li>
</ul>

```xml
<script src="https://cdn.wedeploy.com/api/4.0.1/wedeploy.js"></script>
```
