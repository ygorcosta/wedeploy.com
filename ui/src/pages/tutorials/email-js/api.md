---
buttonTitle: "I included the API Client"
description: "In this section, you'll learn how to send an email using JavaScript and the WeDeploy Email Service."
layout: "tutorial"
parentId: "email-js"
time: 30
title: "Include the API Client"

tutorialTitle: "Getting started with WeDeploy Email using Javascript"
weight: 3
---

#### Linking the CDN

Right now, our script in `tutorial-email-js/hosting/main.js` is ready to make to the request to send an email, but there is one problem - we haven't connected the API client yet.

To do this, go to `index.html` in that `hosting` directory and include this script link at the bottom of the `<body>` element:

```html
<script src="http://cdn.wedeploy.com/api/latest/wedeploy.js"></script>
```

<aside>

###### <span class="icon-16-bullhorn"></span> Pro Tip

If you go to `main.js` in that same `hosting` directory, you can see some of the Email API logic inside. One call you will use a lot is `post()`, which send a request to the API server to send an email with the information you have chosen. 

Want to learn more about [Email Parameters](/docs/email/sending-email.html)?

</aside>



      
