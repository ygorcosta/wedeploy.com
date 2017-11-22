---
title: "Test Auth Service"
description: "In this tutorial, you'll learn how to build and deploy a chat app with WeDeploy."
buttonTitle: "I successfully created a user"
tutorialTitle: "Zero to Production: Developing with WeDeploy"
parentId: "workshop"
layout: "tutorial"
weight: 7
---

#### {$page.title}

Great! Now you have added all the code you need to start creating new users and allowing them to login to your chat app. Lets try your app out locally so you can see the Auth service in action.

#### Test locally

Go to Chrome (or your preferred web browser) and open the `index.html` file of your project folder.

Try going to the _Create Account_ page and creating a new user. Then, once you enter the chat page, you can logout with the arrow button in the top left of the chat screen and then try signing in with that user again.

#### Check database

Whenever you create a new user, it will be added to your user database, and can be on the WeDeploy Console. Let's see check the database to see if we can see the user we just created.

<ul class="checklist">
  <li>Go to the WeDeploy Console</li>
  <li>Select your app's project</li>
  <li>Click on the <em>auth</em> service</li>
  <li>Go to the <em>database</em> tab</li>
  <li>On the collection menu, select <em>users</em></li>
  <li>Now you should see the information of the user you created</li>
</ul>
