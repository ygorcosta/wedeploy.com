---
title: "Add API Methods"
description: "In this section, you'll learn how to authenticate users on the web using the WeDeploy API Client."
buttonTitle: "I added the API methods"
tutorialTitle: "Getting started with WeDeploy Auth on the web"
parentId: "auth-web"
layout: "tutorial"
time: 90
weight: 6
---

#### Add API Methods

###### Sign-up

First, let's add add a script that will allow users to create an account. 

To do this, go to `tutorial-auth-web/hosting/singup.js` inside of the same folder and paste this code:

```javascript
var auth = WeDeploy.auth('auth.<your-project-id>.wedeploy.io');

function submitForm() {
		auth.createUser({
			email: signUp.email.value,
			name: signUp.name.value,
			password: signUp.password.value
		}).then(function() {
			auth.signInWithEmailAndPassword(signUp.email.value, signUp.password.value)
				.then(function(user) {
					alert('Sign-in successfully.');
					signUp.reset();
					document.location.href = '/welcome.html';
				})
				.catch(function() {
					alert('Sign-up failed. Try another email.');
					signUp.reset();
				});
		})
}
```

###### Sign-in

Next, let's add a script that will allow users to sign-in. 

To do this, go to `index.js` in the same folder and paste this code:

```javascript
var auth = WeDeploy.auth('auth.<your-project-id>.wedeploy.io');

function signInWithEmailAndPassword() {
	auth.signInWithEmailAndPassword(signIn.email.value, signIn.password.value)
	.then(function() {
		alert('Sign-in successfully.');
		signIn.reset();
	})
	.catch(function() {
		alert('Sign-in failed.');
		signIn.reset();
	});
}

auth.onSignIn(function(user) {
	location.href = '/welcome.html';
});
```

**Note:** make sure to replace `<your-project-id>` with the id of your project.


###### Sing-out

Lastly, let's add a script that will allow users to sign-out of their account. 

To do this, go to `welcome.js` inside of the same folder and paste this code:

```javascript
var auth = WeDeploy.auth('auth.<your-project-id>.wedeploy.io');

if (auth.currentUser == null) {
  location.href = '/';
}

document.querySelector('.username').innerHTML = auth.currentUser.name;

function out() {
  auth
  	.signOut()
    .then(() => {
      location.href = '/';
    });
}
```

**Note:** make sure to replace `<your-project-id>` with the id of your project.



      
