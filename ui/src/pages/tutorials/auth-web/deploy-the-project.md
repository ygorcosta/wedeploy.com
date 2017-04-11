---
title: "Deploy the project"
description: "In this section, you'll learn how to authenticate users on the web using the WeDeploy API Client."
buttonTitle: "I deployed the project"
tutorialTitle: "Getting started with WeDeploy Auth on the web"
parentId: "auth-web"
layout: "tutorial"
time: 60
weight: 7
---

#### Deploy the project

With the API Client connected and our methods added, we now just need to deploy the project so we can start authenticating.

Within `tutorial-auth-web` on your command line, add a git remote by running:

```xml
git remote add wedeploy http://git.wedeploy.com/<your-project-id>.git
```

Then make a first commit. 
1. `git add .`
2. `git commit -m "Awesome commit"`
3. `git push wedeploy master`

Once pushed, WeDeploy will immediately start building and deploying your project. 

Give it a few moments and then go to `hosting.<your-project-id>.wedeploy.io` to see what you deployed! Pretty cool, right?

<figure>
	<img src="/images/tutorials/sign-in.png" alt="Sign-in!">
</figure>

<aside>

###### <span class="icon-16-star"></span> Pro Tip

You can always check the status of your deployment by going to the _overview_ section of your project's <a href="http://dashboard.wedeploy.com" target="_blank">dashboard</a>.

</aside>


