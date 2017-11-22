---
title: "Connect Auth Service"
description: "In this tutorial, you'll learn how to build and deploy a chat app with WeDeploy."
buttonTitle: "I added the Auth code"
tutorialTitle: "Zero to Production: Developing with WeDeploy"
parentId: "workshop"
layout: "tutorial"
weight: 6
---

#### {$page.title}

In order to use a WeDeploy service, like Auth, we provide you with straightforward APIs so you can send requests to your services. Let's add some requests to our Auth service in our chat app source code.

Go back to your source code in the code editor and go to `assets/scripts/`.

##### Auth API Endpoint

Go to the `endpoints.js` file and past this code under the _Auth Endpoints_ section:

```javascript
"auth": "auth-yourproject.wedeploy.io",
```

**Note**: Replace `yourproject` with the project ID that you chose when you deployed in the previous step.

Now we have the API endpoints to your Auth service saved as variables that we can use throughout your code.

##### Sign In

Go the `sign-in.js` file and paste this code under the _Sign In_ section:

```javascript
function signIn() {
  WeDeploy
    .auth(address.auth)
    .signInWithEmailAndPassword(login.email.value, login.password.value)
    .then(function() {
      login.submit.disabled = true;
      login.submit.innerText = 'Loading...';
      document.location.href = './chat.html';
    })
    .catch(function() {
      login.submit.disabled = false;
      login.submit.innerText = 'Sign In';
      alert('Sign-in failed.');
    });
}
```

This snippet will enable your users to sign in to your app with their email and password, but we need to provide a way for them to create an account.

##### Create Account

Go the `create.js` file and paste this code under the _Sign In_ section:

```javascript
function userCreate() {
  WeDeploy
    .auth(address.auth)
    .createUser({
      name: create.name.value,
      email: create.email.value,
      password: create.password.value,
      color: 'color-' + Math.floor(Math.random() * 19)
    })
    .then(function() {
      create.submit.disabled = true;
      create.submit.innerText = 'Loading...';

      WeDeploy
        .auth(address.auth)
        .signInWithEmailAndPassword(create.email.value, create.password.value)
        .then(function() {
          document.location.href = './chat.html';
        })
        .catch(function() {
          alert('Sign-in failed.');
        });
    })
    .catch(function() {
      create.submit.disabled = false;
      create.submit.innerText = 'Create Account';
      alert('Sign-up failed.');
    })
};
```

This snippet will allow your users to create a new account.

##### Page Redirect

Go the `chat.js` file and paste this code under the _Redirect_ section:

```javascript
if (WeDeploy.auth(address.auth).currentUser == null) {document.location.href = './index.html';}
```

Now if an unauthorized user tries to access the `chat.index` page and chat with other users, they will be redirected back to the sign in page.
