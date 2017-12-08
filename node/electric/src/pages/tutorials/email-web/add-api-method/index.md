---
title: "Add API Method"
description: "In this section, you'll learn how to send an email on the web using the WeDeploy API Client."
buttonTitle: "I added the API method"
tutorialTitle: "Getting started with WeDeploy Email on the web"
parentId: "email-web"
layout: "tutorial"
time: 90
weight: 6
---

#### Add API Method

Now we want to add a script that will send an email. To do this, go to `tutorial-email-web/ui/main.js` and paste this code:

```javascript
WeDeploy
  .email('msgs-<projectID>.wedeploy.io')
  .auth('yourMasterToken')
  .from(form.from.value)
  .to(form.to.value)
  .subject(form.subject.value)
  .message(form.message.value)
  .send()
  .then(function(response) {
    form.reset();
    console.log(response);
    alert('Your email was sent successfully!');
  })
  .catch(function(error) {
    console.log(error);
    alert('Oops, something with wrong.');
  });
```

**Note:** make sure to replace `<projectID>` with the id of your project.

#### Add master token

In order for your email request to be authorized, you must add your project's unique Master Token.

1. Go to the <a href="https://console.wedeploy.com" target="_blank">WeDeploy Console</a>
2. Click on your project
3. Go to the _Settings_ section
4. Copy your Master Token
5. Paste it into the `.auth('yourMasterToken')` element in the code above on `main.js`

<aside>

###### <span class="icon-16-star"></span> Pro Tip

As you can see, the input values from the form are being used as email parameters (from, to, subject, etc). We have a bunch of parameters so you can fully configure your email posts.

Want to see the full list of <a href="/docs/email/sending-email/" target="_blank">Email Parameters</a>?

</aside>
