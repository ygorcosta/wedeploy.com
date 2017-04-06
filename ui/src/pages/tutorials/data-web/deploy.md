---
buttonTitle: "I deployed the project"
description: "In this section, you'll learn how to save and get data on the web using the WeDeploy API Client."
layout: "tutorial"
parentId: "data-web"
time: 30
title: "Deploy the project"
tutorialTitle: "Getting started with WeDeploy Data on the web"
weight: 5
---

#### Deploy your project

With the API Client connected and our methods added, we now just need to deploy the project so we can start saving and fetching data.

Within `tutorial-data-web` on your command line, add a git remote by running `git remote add wedeploy http://git.wedeploy.com/<your-project-name>.git`.

Then make a first commit. 
1. `git add .`
2. `git commit -m "Awesome commit"`
3. `git push wedeploy master`

Once pushed, WeDeploy will immediately start building and deploying your project.


