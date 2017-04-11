---
title: "Deploy the project"
description: "In this section, you'll learn how to send an email on the web using the WeDeploy API Client."
buttonTitle: "I deployed my project"
tutorialTitle: "Getting started with WeDeploy Email on the web"
parentId: "email-web"
layout: "tutorial"
time: 60
weight: 7
---

#### Deploy the project

With the API request ready and the CDN linked, we now just need to deploy the project so we can send an email.

Within `tutorial-email-web` on your command line, add a git remote by running:

```xml
git remote add wedeploy http://git.wedeploy.com/<your-project-id>.git
```

Then make a first commit. 
1. `git add .`
2. `git commit -m "Awesome commit"`
3. `git push wedeploy master`

Once you push, WeDeploy will immediately start building and deploying your project.

Give it a few moments and then go to `hosting.<your-project-id>.wedeploy.io` to see what you deployed! Pretty cool, right?

