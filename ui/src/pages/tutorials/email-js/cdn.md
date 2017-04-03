---
buttonTitle: "I added the WeDeploy CDN"
description: "In this section, you'll learn how to send an email using JavaScript and the WeDeploy Email Service."
layout: "tutorial"
parentId: "email-js"
time: 30
title: "Linking the CDN"
serviceName: "Email"
directory: "tutorial-email-js"
tutorialTitle: "Getting started with WeDeploy Email using Javascript"
weight: 3
---

#### Linking the CDN

Right now, our script in `main.js` is ready to make to the request to send an email, but there is one problem - we haven't connected the API client yet.

To do this, go to `{$page.directory}/hosting/index.html` and include this script link at the bottom of the `<body>` element:

```html
<script src="http://cdn.wedeploy.com/api/latest/wedeploy.js"></script>
```

<aside>

###### Something to notice

If you go to `main.js` in that same `hosting` directory, you will see some of the Email API logic inside. One call you will use a lot is `post()`, which send a request to the API server to send an email with the information you have chosen.

</aside>



      
