---
title: "Test Data Service"
description: "In this tutorial, you'll learn how to build and deploy a chat app with WeDeploy."
buttonTitle: "I sent a message in real time"
tutorialTitle: "Zero to Production: Developing with WeDeploy"
parentId: "workshop"
layout: "tutorial"
weight: 10
---

#### {$page.title}

Great! Now you have added all the code you need to start sending and retrieving new messages in real time on your chat app. Lets try your app out locally so you can see the Data service in action.

#### Test locally

Go to Chrome (or your preferred web browser) and open the `index.html` file in your project folder.

Make sure to sign in with the user you created before and send a message. Now resize that window so it fills have of your screen and open a new incognito window that fills the other half of the screen. Create another user for your app and try sending messages between your users to see your app stream the messages in real time. You can also access your app from a browser on your phone or tablet.

#### Check database

Whenever you send a message, it will be added to your database, and can be viewed on the WeDeploy Console. Let's see check the database to see if we can see the message we just sent.

<ul class="checklist">
  <li>Go to the WeDeploy Console</li>
  <li>Select your app's project</li>
  <li>Click on the <em>db</em> service</li>
  <li>Go to the <em>database</em> tab</li>
  <li>Now you should see the message you sent</li>
</ul>
