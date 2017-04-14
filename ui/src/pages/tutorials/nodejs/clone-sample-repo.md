---
title: "Clone sample repo"
description: "In this section, you'll learn how to deploy an application using WeDeploy Node.js."
buttonTitle: "I cloned the repo"
tutorialTitle: "Getting started with WeDeploy Node.js"
parentId: "nodejs"
layout: "tutorial"
time: 20
weight: 3
---

#### Clone sample repo

First, you'll clone a sample repo that contains the necessary files and directories for deploying a site with Node.js. 

To do this, run the command below in your terminal: 

```xml
git clone https://github.com/wedeploy/tutorial-nodejs.git
```

<aside>

###### <span class="icon-16-star"></span> Pro Tip

Every WeDeploy project follows a similar file structure by using JSON files to manage your project and service-level configurations.

```xml
your-project
├── email
│   └── container.json
├── nodejs
│   ├── container.json
│   └── index.js
└── project.json
```

Want to know more about <a href="http://wedeploy.com/docs/intro/configuration-files.html" target="_blank">configuration files</a>?

</aside>
