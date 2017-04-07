---
buttonTitle: "I cloned the repo"
description: "In this section, you'll learn how to deploy an application using WeDeploy Hosting."
layout: "tutorial"
parentId: "hosting"
time: 10
title: "Clone sample repo"
tutorialTitle: "Getting started with WeDeploy Hosting"
weight: 3
---

#### Clone sample repo

First, you must clone the sample repo that contains the necessary files to get started. 

To do this, run the bellow command in your terminal: 

```xml
git clone https://github.com/wedeploy/tutorial-hosting.git
```

<aside>

###### <span class="icon-16-star"></span> Pro Tip

Every WeDeploy project follows a similar file structure by using JSON files to manage your project and service-level configurations.

```xml
your-project
├── email
│   └── container.json
├── hosting
│   ├── container.json
│   └── index.html
└── project.json
```

If you are interested in adding more services to your project once you are done, learn more about <a href="http://wedeploy.com/docs/intro/configuration-files.html" target="_blank">configuration files</a>.

</aside>
