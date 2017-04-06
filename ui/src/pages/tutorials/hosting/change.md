---
description: "In this section, you'll learn how to deploy an application using WeDeploy Hosting."
layout: "tutorial"
parentId: "hosting"
time: 40
title: "Make a change"
tutorialTitle: "Getting started with WeDeploy Hosting"
weight: 5
---

#### Make a change

Our project is now live, but what's next? Lets try deploying a new change to our app!

###### Develop

Go back to your project in your text editor and open up the `index.html`. Change the text in the `<h1>` element (try putting "You Rock!").

###### Push

Now make another commit and push your changes to the WeDeploy remote!

1. `git add index.html`
2. `git commit -m "update header"`
3. `git push wedeploy master`

###### See it live

Go check your project's URL again and you should see the text change to "You Rock!" because let's be honest, you do!

<aside>

###### <span class="icon-16-star"></span> Pro Tip

Want to make your Hosting Service the primary service so that it is served to your project's root url (`<your-project.wedeploy.io`)? Perfect, that is extremely easy to do by going to the settings tab of your project's dashboard and selecting a _Home Service_.

</aside>
