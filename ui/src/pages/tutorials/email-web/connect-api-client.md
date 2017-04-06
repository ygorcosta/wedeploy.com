---
buttonTitle: "I included the API Client"
description: "In this section, you'll learn how to send an email on the web using the WeDeploy API Client."
layout: "tutorial"
parentId: "email-web"
time: 30
title: "Include the API Client"
tutorialTitle: "Getting started with WeDeploy Email on the web"
weight: 3
---

#### Linking the CDN

Before we can make any requests to send an email, we must connect the WeDeploy API Client.

To do this, go to `index.html` in that `hosting` directory and include this script link at the bottom of the `<body>` element:

```xml
<script src="http://cdn.wedeploy.com/api/latest/wedeploy.js"></script>
```

<aside>

###### <span class="icon-16-star"></span> Pro Tip

If you go to `main.js` in that same `hosting` directory, you can see some of the Email API logic inside. One call you will use a lot is `post()`, which send a request to the API server to send an email with the information you have chosen. 

Want to learn more about [Email Parameters](/docs/email/sending-email.html)?

</aside>



      
