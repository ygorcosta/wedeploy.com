---
buttonTitle: "I deployed my project"
description: "In this section, you'll learn how to send an email using JavaScript and the WeDeploy Email Service."
layout: "tutorial"
parentId: "email-js"
time: 30
title: "Deploying your project"
tutorialTitle: "Getting started with WeDeploy Email using Javascript"
weight: 4
---

#### Deploying your project

With the API request ready and the CDN linked, we now just need to deploy the project so we can send an email.

Within `tutorial-email-js` on your command line, add a git remote by running `git remote add wedeploy http://git.wedeploy.com/<your-project-name>.git`.

Then make a first commit. 
1. `git add .`
2. `git commit -m "Awesome commit"`
3. `git push wedeploy master`

Once you push, WeDeploy will immediately start building and deploying your project.


