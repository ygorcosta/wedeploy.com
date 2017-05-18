---
title: "Announcing new SDK's for Mobile Development"
description: "Are you an Android or iOS developer? Do you need to deploy services quickly and easily to the cloud and focus on your mobile apps? Did you wish you could use WeDeploy on you mobile apps? Well today is a big day for you!"
date: "May 10, 2017"
author: "Jose M. Navarro"
image: "http://wedeploy.com/images/blog/post-11--0.gif"
layout: "blog"
---

<article>

{$page.description}

Nowadays, we live in a world full of devices. From watching movies on your Apple TV, Receiving notifications on your smart watch, or reading books on your Kindle, we rarely go anywhere without our devices. It doesn't seem to be slowing down either; more and more devices are being built and more and more services are being created for them. 

> Now mobile and web development just isn't enough, we are entering an age of multi-device development.

That's why WeDeploy was born with more than web development in mind. We understood that as more and more devices consumed API's, this would be the future of development. 

We didn't want to just use raw HTTP requests, so we built API clients that could be called easily and safely. You already know about our [Javascript client](/docs/intro/using-the-api-client.html#1), but starting today, there are two new kids on the block.

**Introducing the new WeDeploy <a target="_blank" href="/docs/intro/using-the-api-client.html#2">iOS (Swift)</a> and <a target="_blank" href="/docs/intro/using-the-api-client.html#3">Andriod (Java)</a> API Client.**

With them, you will be able to build apps for the following platforms:

* **Apple**: iOS (iPhone, iPad, iPod Touch), watchOS (AppleWatch), tvOS (AppleTV), macOS (CarPlay and Desktop apps).
* **Google**: Android phones and tablets, Android Wear, Android TV, Android Auto and... any platform that supports Java!

<figure>
	<img src="../images/blog/post-11--0.gif" alt="Realtime communication across devices">
</figure>


#### What can you do on those mobile platforms?

Whatever you want! Mainly, the clients provides you access to:

- **<a target="_blank" href="/docs/data/getting-started.html">Data service</a>**: Search inside your schema-less database or communicate in realtime with other apps, not matter the platform, using WebSockets under the hood. 
- **<a target="_blank" href="/docs/auth/getting-started.html">Auth service</a>**: Create or authenticate users, reset passwords or sign-in using Google, Facebook or Github's OAuth2.
- **<a target="_blank" href="/docs/email/getting-started.html">Email service</a>**: Send emails directly from your app and check their delivery status.
- **<a target="_blank" href="/docs/hosting/getting-started.html">Raw HTTP Requests</a>**: and if you would like to build your own HTTP requests, you can using our fluent API.


#### How do I start

Just use the regular package managers for each platform.

```Podfile
target 'MyApp' do
  use_frameworks!

  ... rest of your dependencies ...
  pod 'WeDeploy'
end
```
```build.gradle
dependencies {
	... rest of your dependencies ...
    compile 'com.wedeploy:com.wedeploy.android:beta-20170505'
}
```

#### It's that easy!

So, the only thing left to do is to go to the [documentation](/docs/) and start deploying your mobile apps!

Don't forget to let us know how it goes! You can connect with us on [Twitter](https://twitter.com/wedeploy) or join our community on [Slack](http://chat.wedeploy.com).

</article>
