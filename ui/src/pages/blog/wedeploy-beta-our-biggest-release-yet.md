---
title: "WeDeploy Beta: Our Biggest Release Yet"
description: "We have been working tirelessly the last months on some huge changes to WeDeploy, and today is the day we can finally tell you all about them."
date: "August 1, 2017"
author: "Eduardo Lundgren"
image: "http://wedeploy.com/images/blog/post-12--0.jpg"
layout: "blog"
---

<article>

<a href="https://console.wedeploy.com" target="_blank">
	<figure style="margin-top: -1.5rem">
		<img src="/images/blog/post-12--0.jpg" alt="Introducing WeDeploy Beta">
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

##### 1. Completely New Infrastructure

One of the biggest changes was moving the WeDeploy infrastructure from our servers in the Liferay Headquarters to AWS. We knew that in order to continue to grow and expand globally, we had to start preparing now.

This move has greatly impacted the stability of WeDeploy and even though we don't support multi-region deployments yet, we are excited that this change will make that possible in the near future.

##### 2. Rewritten CLI, API, and Dashboard

One of our goals the past nine months was not to just build on top of what we had, but to also rethink the way we built WeDeploy and be willing to rebuilt parts of it from the ground up if needed.

We've spent weeks refactoring the CLI, API, and Dashboard (which is now known as [Console](https://console.wedeploy.com)) and I can confidently say, it was worth it! By refactoring, we gave ourselves the opportunity to not only clean up the code, but to also improve performance, usability, and overall design.

##### 3. HTTPS Out of the Box

Yes, now every project you deploy and every service you install will automatically be given an HTTPS certificate. This means your app will safely communicate with your users without you having to configure anything.

We also make sure that those HTTPS certificates are valid by renewing them from time to time. That way you can always trust that your application will be secured.

##### 4. Custom Docker Services

The container ecosystem has grown a lot in the past years and [Docker](https://www.docker.com/) is largely responsible for this success.

Today we want to bring the benefits of this technology to you and facilitate the Docker-based development workflow. That's why we're introducing `Dockerfile` support.

Back on alpha you were limited by the services we provided, now your imagination is the limit. This opens up the possibility to deploy pretty much anything and we look forward to see what you're going to create.

*Read more on the [documentation](/docs/deploy/deploying-docker.html) or follow our [step-by-step tutorial](/tutorials/docker/get-started.html).*

##### 5. Volume Support

With the addition of custom Docker services, new challenges arrive. For example, let's say you deploy an app with PHP and MySQL, then you start adding entries to your database. What happens when you restart that project without a proper setup? Well, you're going to lose all the data that was saved.

In order to be able to persist and share data between services, we're introducing the concept of volumes. Quite simply, volumes are specially-designated directories that live outside of the file system where your code runs. This way, even if your application becomes unavailable due to a failure or other causes, your data still persists.

##### 6. Instant Deployment

Before you had two ways of deploying code, you could either connect with GitHub or create a remote pointing to our Git server. We noticed that people loved the convenience of integrating with GitHub so [we're keeping that](/docs/deploy/continuous-deployment.html), but when using our Git server the experience was not as fluid, specially the authentication step on every push.

Because of that, we decided to rethink our CLI and introduce a new deploy command. Now you don't need to rely on Git for every deploy. All you need to do is type `we login` to authenticate only once and then run `we deploy` on your project folder.

*Read more on the [documentation](/docs/deploy/instant-deployment.html).*

##### 7. Automatic Code Detection

If you used WeDeploy before, you probably remember this `container.json` file (now renamed to `wedeploy.json`). This file describes what is the name of the service, what are the environment variables needed, and most importantly what kind of project is this.

WeDeploy needs to know if what you're deploying is a Ruby, Java, or Node.js project in order to download dependencies, compile, and build it in the right way.

From now on, we'll try to determine what language your project uses, so you can deploy any folder containing static files, a Node.js app, or a Dockerfile and we will take it from there.

That doesn't mean you don't need the `wedeploy.json` file anymore. That is still valid and important for us to determine what directory to scan.

##### 8. Liferay DXP

We're very excited about [Liferay Digital Experience Platform](https://www.liferay.com/digital-experience-platform). There are so many cool capabilities and we want to give WeDeploy users the opportunity to try them out in seconds.

Today, we're introducing Liferay DXP with a 15-day trial license.

Besides that, we're adding support for [hot deployment](https://dev.liferay.com/discover/portal/-/knowledge_base/7-0/installing-apps-manually). That means you can now create a `deploy` folder, then add themes, portlets, OSGi modules, or a license by using WAR, JAR, and XML files.

What about [Liferay Portal Community Edition](https://web.liferay.com/community/liferay-projects/liferay-portal/overview)? Since we have Docker support now, you can setup your own Dockerfile or grab an image from [Docker Hub](https://hub.docker.com/r/liferay/portal/) and deploy it here.

*Read more on the [documentation](/docs/deploy/deploying-liferay-dxp.html) or follow our [step-by-step tutorial](/tutorials/liferay-dxp/get-started.html).*

##### 9. Zero Downtime Deployments

During alpha, whenever a new deployment was triggered, your app would go offline for couple seconds until the new version was 100% ready. We knew that was not ideal, so we sat down to build a much better experience that minimizes downtime and user interruption.

Now, you don't have to worry about your app being taken down during deployment of the new code. Push updates and restart your services with zero downtime.

##### 10. Global DNS

We know how tedious it is to setup your domains. That's why we're introducing a new reliable and scalable DNS solution.

From now on, you can point your domains directly to our nameservers and we will automatically configure everything for you.

We provide our DNS service across 7 different countries, including Australia, Germany, France, Netherlands, Singapore, United Kingdom, United States. Our goal is to ensure that you always have high availability and low latency resulting in a great experience for your users and your business.

*Read more on the [documentation](/docs/intro/custom-domains.html#2).*

---

#### What's next?

Because of the new URL format and other changes described here, we weren't able to migrate your projects for you. That would be a risky thing to do and we don't want your users to have any problems.

All the projects you created on alpha still exist, however on August 31st they will be **unavailable**, along with the previous Dashboard. But don't worry, we already have a **[Migration Guide](/docs/deploy/migrating-to-beta.html)** ready so you can get started right away.

We're very excited to be able to share this new release with you! Make sure to **[try it out for yourself](https://console.wedeploy.com)** and [join our community on Slack](https://chat.wedeploy.com) to ask questions or let us know what you are building!

</article>
