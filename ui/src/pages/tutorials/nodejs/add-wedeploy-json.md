---
title: "Add wedeploy.json"
description: "In this section, you'll learn how to deploy an application using WeDeploy Node.js."
buttonTitle: "I created the wedeploy.json"
tutorialTitle: "Getting started with WeDeploy Node.js"
parentId: "nodejs"
layout: "tutorial"
time: 40
weight: 3
---

#### Add wedeploy.json

Since every service folder must have a `wedeploy.json` file that configures the service, let's add one to the repo we just cloned.

1. Open the `tutorial-nodejs` folder in a code editor
2. Create a new file named `wedeploy.json` inside the `nodejs` folder.
3. In that file, paste this code:

```application/json
{
	"id": "app"
}

```

<aside>

###### <span class="icon-16-star"></span> Pro Tip

One of the awesome things you can do in your `wedeploy.json` file is add environment variables. There are many ways to use these; one example is to provide credentials for a external database.

```application/json
{
	"id": "app",
	"env": {
		"DB_USER": "us3rname",
		"DB_PASSWORD": "passw0rd",
	}
}
```

See the full list of <a href="/docs/auth/environment-variables.html" target="_blank">Environment Variables for Auth</a>.

</aside>
