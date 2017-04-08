---
buttonTitle: "I deployed the app"
description: "In this section, you'll learn how to deploy an application using WeDeploy Hosting."
layout: "tutorial"
parentId: "hosting"
time: 40
title: "Deploy your app"
tutorialTitle: "Getting started with WeDeploy Hosting"
weight: 5
---

#### Deploy your app

Now the moment you have be waiting for - deployment! 🚀

###### Add remote

Open up your terminal and go the `tutorial-hosting` folder. Then, add a git remote by running:

```xml
git remote add wedeploy http://git.wedeploy.com/<your-project-id>.git
```

###### Push first commit

Our remote is now set and we are ready to make our first commit! 
1. `git add .`
2. `git commit -m "Awesome commit"`
3. `git push wedeploy master`

If it is your first time pushing to WeDeploy's git, you will need to enter the email and password for your WeDeploy account.


###### See it live
Once you push, WeDeploy will immediately start deploying your project.

Give it a few moments and then go to `hosting.<your-project-id>.wedeploy.io` to see what you deployed! Pretty cool, right? 😎

<aside>

###### <span class="icon-16-star"></span> Pro Tip

You can always check the status of your deployment by going to the _overview_ section of your project's <a href="http://dashboard.wedeploy.com" target="_blank">dashboard</a>.

</aside>
