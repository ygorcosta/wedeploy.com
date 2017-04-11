---
title: "Add container.json"
description: "In this section, you'll learn how to deploy an application using WeDeploy Hosting."
buttonTitle: "I created the container.json"
tutorialTitle: "Getting started with WeDeploy Hosting"
parentId: "hosting"
layout: "tutorial"
time: 40
weight: 4
---

#### Add container.json

Every service folder must have a `container.json` file that configures the service. Lets add one to the repo we just cloned. 

1. Open the `tutorial-hosting/hosting` folder in a code editor
2. Create a new file inside and name it `container.json`
3. Paste this code into it

```application/json
{
	"id": "hosting",
	"type": "wedeploy/hosting:latest"
}
```

<aside>

###### <span class="icon-16-star"></span> Pro Tip

Another thing you can do in your `container.json` file is add environment variables. There are many ways to use these; one example is to serve files in a different folder.

```application/json
{
	"id": "hosting",
	"type": "wedeploy/hosting:latest",
	"env" {
		WEDEPLOY_WEB_PATH: "/dist/"
	}
}
```

See the full list of <a href="http://wedeploy.com/docs/hosting/environment-variables.html" target="_blank">Environment Variables for Hosting</a>.

</aside>
