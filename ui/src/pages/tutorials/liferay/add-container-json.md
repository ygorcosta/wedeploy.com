---
title: "Add container.json"
description: "In this section, you'll learn how to deploy an application using WeDeploy Liferay."
buttonTitle: "I created the container.json"
tutorialTitle: "Getting started with WeDeploy Liferay"
parentId: "liferay"
layout: "tutorial"
time: 40
weight: 4
---

#### Add container.json

Every service folder must have a `container.json` file that configures the service. Let's add one to the repo we just cloned. 

1. Open the `tutorial-liferay` folder in a code editor
2. Create a new file named `container.json` inside the `liferay` folder.
3. In that file, paste this code:

```application/json
{
	"id": "liferay",
	"type": "wedeploy/liferay"
}
```
