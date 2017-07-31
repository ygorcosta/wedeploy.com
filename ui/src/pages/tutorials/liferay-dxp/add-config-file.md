---
title: "Add Config File"
description: "In this section, you'll learn how to deploy an application using Liferay DXP."
buttonTitle: "I created the wedeploy.json"
tutorialTitle: "Getting started with Liferay DXP"
parentId: "liferay-dxp"
layout: "tutorial"
time: 40
weight: 4
---

#### Add wedeploy.json

Since every service folder must have a `wedeploy.json` file that configures the service, let's add one to the repo we just cloned.

1. Open the `tutorial-liferay-dxp` folder in a code editor
2. Create a new file named `wedeploy.json` inside the `liferay` folder.
3. In that file, paste this code:

```application/json
{
	"id": "liferay-dxp",
	"image": "wedeploy/liferay"
}
```
