---
title: "Add API Method"
description: "In this section, you'll learn how to send an email on the web using the WeDeploy API Client."
buttonTitle: "I included the API Client"
tutorialTitle: "Getting started with WeDeploy Email on the web"
parentId: "email-web"
layout: "tutorial"
time: 45
weight: 6
---

#### Add API method

Now we want to add a script that will send an email. To do this, go to `tutorial-email-web/hosting/main.js` and paste this code:

```javascript
WeDeploy
	.url(`email.<your-project-id>.wedeploy.io`)
	.auth('0000000-0000-000-0000-0000000')
	.form('from', form.from.value)
	.form('to', form.to.value)
	.form('subject', form.subject.value)
	.form('message', form.subject.value)
	.post()
	.then(function(response) {
		if (response.succeeded()) {
			form.reset();
			alert('Email sent! Wait a little bit until it arrives :)');
			console.info('Email ID:', response.body());
		}
		else {
			alert('Email was not sent');
		}
	})
	.catch(function(error) {
		alert('Oops, some error has happened.');
	});
```

**Note:** make sure to replace `<your-project-id>` with the id of your project.

#### Add master token

In order for your email request to be authorized, you must add your project's unique Master Token.

1. Go to the <a href="http://dashboard.wedeploy.com" target="_blank">WeDeploy dashboard</a>
2. Click on your project
3. Go to the _Settings_ section
4. Copy your Master Token
5. Paste it into the `.auth('')` element in the code above on `main.js`

<aside>

###### <span class="icon-16-star"></span> Pro Tip

As you can see, the input values from the form are being used as email parameters (from, to, subject, etc). We have a bunch of parameters so you can fully configure your email posts.

Want to see the full list of <a href="http://wedeploy.com/docs/email/sending-email.html" target="_blank">Email Parameters</a>?

</aside>



      
