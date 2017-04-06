---
buttonTitle: "I created the container.json"
description: "In this section, you'll learn how to deploy an application using WeDeploy Hosting."
layout: "tutorial"
parentId: "hosting"
time: 30
title: "Add config file"
tutorialTitle: "Getting started with WeDeploy Hosting"
weight: 3
---

#### Create container.json

Every project folder must have a `container.json` file that configures the service. Lets add one to the repo we just cloned. 

1. Open the project folder in a text editor
2. Create a new file and name it `container.json`
3. Inside the file, paste this code

```application/json
{
	"id": "hosting",
	"type": "wedeploy/hosting:latest"
}

```

<aside>

###### <span class="icon-16-star"></span> Pro Tip

Another thing you can do in your `container.json` file is add environment variables. There are many ways to use these, one example is to serve files in a different folder.

```application/json
{
	"id": "hosting",
	"type": "wedeploy/hosting:latest",
	"env" {
		WEDEPLOY_WEB_PATH: "/dist/"
	}
}
```

See the full list of [Environment Variables for Hosting](/docs/hosting/environment-variables.html).

</aside>
