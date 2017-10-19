---
title: "Connect Data Service"
description: "In this tutorial, you'll learn how to build and deploy a chat app with WeDeploy."
buttonTitle: "I added the Data code"
tutorialTitle: "Zero to Production: Developing with WeDeploy"
parentId: "lsna"
layout: "tutorial"
weight: 9
---

#### {$page.title}

Again, just like Auth, we need to add the code into our project's source code that will make API requests to the data service we just installed.

Go back to your source code in the code editor and go to `assets/scripts/`.

##### Data API Endpoint

Go to the `endpoints.js` file and past this code under the _Data Endpoints_ section:

```javascript
"data": "db-yourproject.wedeploy.io"
```

**Note**: Replace `yourproject` with the project ID that you chose when you deployed in the previous step.

Now we have the API endpoints to your Data service saved as variables that we can use throughout your code.

##### Get Old Messages

Go to the `chat.js` file and past this code under the Get old Messages_ section:

```javascript
WeDeploy
  .data(address.data)
  .auth(WeDeploy.auth(address.auth).currentUser)
  .orderBy('id', 'asc')
  .limit(100)
  .get('messages')
  .then(function(result) {

    var messages = result;
    for (var i = 0; i < messages.length; i++) {
      appendMessage(messages[i]);
    }
  });
```

This snippet will pull the last 100 messages that have been sent when the page is loaded.

##### Save New Messages

In the same file, paste this code under the _Save New Message_ section:

```javascript
WeDeploy
  .data(address.data)
  .auth(WeDeploy.auth(address.auth).currentUser)
  .create('messages', data)
  .then(function(response) {
    input.value = '';
    conversation.scrollTop = conversation.scrollHeight;
    appendMessage(data);
  });
```

This snippet will save the messages of your users into the database.

##### Watch New Messages

In the same file, paste this code under the _Watch New Messages_ section:

```javascript
WeDeploy
  .data(address.data)
  .auth(WeDeploy.auth(address.auth).currentUser)
  .orderBy('id', 'desc')
  .limit(1)
  .watch('messages')
  .on('changes', function(result) {
    var data = result.pop();
    var element = document.getElementById(data.id);
    if (element) {
      animateMessage(element);
    } else {
      appendMessage(data);
    }
  });
```

This snippet will stream all new messages so your users can chat in real time.
