---
title: "Clone sample repo"
description: "In this section, you'll learn how to deploy an application using WeDeploy Hosting."
buttonTitle: "I cloned the repo"
tutorialTitle: "Getting started with WeDeploy Hosting"
parentId: "hosting"
layout: "tutorial"
time: 10
weight: 3
---

#### Clone sample repo

First, you must clone the sample repo that contains the necessary files to get started. 

To do this, run the command below in your terminal: 

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

Want to know more about <a href="http://wedeploy.com/docs/intro/configuration-files.html" target="_blank">configuration files</a>?

</aside>
