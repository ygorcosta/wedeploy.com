---
buttonTitle: "I deployed my project"
description: "In this section, you'll learn how to send an email using JavaScript and the WeDeploy Email Service."
layout: "tutorial"
parentId: "email-js"
time: 30
title: "Deploying your project"
serviceName: "Email"
directory: "tutorial-email-js"
tutorialTitle: "Getting started with WeDeploy Email using Javascript"
weight: 4
---

#### Deploying your project

With our API request ready and our CDN linked, we now just need to deploy our project so we can send an email.

Within `{$page.directory}` on your command line, add a git remote by running `git remote add wedeploy http://git.wedeploy.com/<your-project-name>.git`.

Then make a first commit. 
1. `git add .`
2. `git commit -m "Awesome commit"`
3. `git push wedeploy master`

Go to the WeDeploy dashboard and select your project. On the right you should see the build log of your recent commit. 

Once it says "Deploy was successful" go to `<project-name>.wedeploy.io`.

Voilà! Your page is live!


