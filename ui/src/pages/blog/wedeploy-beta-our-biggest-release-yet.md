---
title: "WeDeploy Beta: Our Biggest Release Yet"
description: "We have been working tirelessly the last months on some huge changes to WeDeploy, and today is the day we can finally tell you all about them."
date: "July 30, 2017"
author: "Eduardo Lundgren"
image: "http://wedeploy.com/images/blog/post-12--0.png"
layout: "blog"
---

<article>

<a href="https://console.wedeploy.com" target="_blank">
	<figure style="margin-top: -1.5rem">
		<img src="../images/blog/post-12--0.png" alt="Introducing WeDeploy Beta">
	</figure>
</a>

{$page.description}

But first, a little backstory.

#### Where we've come

314 days ago, we launched the first app on WeDeploy. It was such an exhilarating time but we had our eyes set on the future.

The thing is, WeDeploy didn't start as "WeDeploy". Almost two years ago, me and a few others spent our spare time working on this project called Launchpad. It was just a shadow of what WeDeploy is today, but it was a start. It was **our** start.

After that first app was deployed, we got right back to work. Yes, we had achieved something, but it still had much room to grow. We needed to challenge our own mindset and imagination in order to create a platform that could change the way people develop software. We believe that this release puts us much closer to that goal.

---

#### What changed?

##### 1. New Infrastructure on AWS

One of the biggest changes was moving the WeDeploy infrastructure from our servers in the Liferay Headquarters to AWS. We knew that in order to continue to grow and expand globally, we had to start preparing now. This move has greatly impacted the stability of WeDeploy and even though we don't support multi-region deployments yet, we are excited that this change will make that possible in the near future.

##### 2. Rewritten CLI, API, and Dashboard

One of our goals the past nine months was not to just build on top of what we had, but to also rethink the way we built WeDeploy and be willing to rebuilt parts of it from the ground up if needed. We've spent hours and days refactoring the CLI, API, and Dashboard (which is now known as Console) and I can confidently say, it was worth it!

By refactoring, we gave ourselves the opportunity to not only clean up the code, but to also improve performance, usability, and the overall design. We can't wait for you to try them out!

##### 3. HTTPS Out of the Box

Yes, now every project you deploy and every service you install will automatically be given an HTTPS certificate. This means your app will safely communicate with your users without you having to configure anything.

We also make sure that those HTTPS certificates are valid by renewing them from time to time. That way you can always trust that your application will be secured.

##### 4. Auto Scaling

Description of the feature and how it will change your life!

##### 5. Storage

Description of the feature and how it will change your life!

##### 6. Custom Docker Services

Description of the feature and how it will change your life!

##### 7. Instant Deployment

Deploying should be the least of your worries, which is why we created a new [Instant Deployment](/docs/deploy/instant-deployment.html) option! Using our simple [CLI](/docs/intro/using-the-command-line.html) and our code-recipe detector, you can type `we deploy` in any folder containing static files, a Node.js app, or a Dockerfile and we will take it from there.

---

#### What's next?

Some of these changes have implications on the way your current apps will deploy on the new infrastructure. But don't worry, we already have a **[Migration Guide](/blog/how-to-migrate-your-project-to-beta.html)** ready for you so you can get started right away.

We are so excited to be able to share this new release with you! Make sure to **[try it out for yourself](https://console.wedeploy.com)** and [join our community](https://chat.wedeploy.com) to ask questions or let us know what you are building!

</article>
