---
title: "WeDeploy for Android and iOS development"
description: "Are you an Android or iOS developer? Do you need to deploy services quickly and easily to the cloud and focus on your mobile apps? Did you miss mobile platforms in WeDeploy? Yes, today is a big date for you!"
date: "May 10, 2017"
author: "Jose M. Navarro"
image: "http://wedeploy.com/images/blog/post-10--0.gif"
layout: "blog"
---

<article>

{$page.description}

Nowadays, we live in a world full of devices: you mobile phone is *always* with you, probably you watch movies in your Apple TV, Android TV or Chromecast, maybe you receive notifications in your smart watch or you read books or articles in your tablet, or likely you have a GPS device embedded in your card dashboard. More and more devices are appearing, and more and more services are being accesible from those "mobile" platforms. Because it's not "mobile development", anymore but multi-screen, multi-device and multi-channel development.

That's why WeDeploy was born with more than web development in mind. APIs are conquering the world, as devices consuming those APIs.

But instead of using raw HTTP requests, we provide clients to call easily and safely those APIs. You already know the [Javascript client](/docs/intro/using-the-api-client.html#1), but starting from today, we have new kids in town:

- **<a target="_blank" href="/docs/intro/using-the-api-client.html#2">iOS (Swift) client</a>**
- **<a target="_blank" href="/docs/intro/using-the-api-client.html#3">Android (Java) client</a>**

With them, you will be able to build apps for the following platforms:

- **Apple**: iPhone, iPad, iPod Touch (iOS), AppleWatch (watchOS), AppleTV (tvOS), CarPlay and Desktop apps (macOS).
- **Google**: Android phones and tablets, Android Wear, Android TV, Android Auto and... any platform that supports Java!

Not to bad!

<figure>
	<img src="../images/blog/post-10--0.gif" alt="Realtime communication across devices">
</figure>


#### What can I do from those mobile platforms?

Whatever you want! Mainly, the clients provides you straight access to:

- **<a target="_blank" href="/docs/data/getting-started.html">Data service</a>**: search inside your schema-less database or communicate in realtime with other apps, not matter the platform, using WebSockets under the hood. Are you still tied to request/response cycle?
- **<a target="_blank" href="/docs/auth/getting-started.html">Auth service</a>**: create or authenticate users, reset passwords or sign-in using Google, Facebook or Github's OAuth2.
- **<a target="_blank" href="/docs/email/getting-started.html">Email service</a>**: send emails directly from your app or check their delivery status.
- **<a target="_blank" href="/docs/hosting/getting-started.html">Raw HTTP Requests</a>**: and if you have [any](/docs/other/nodejs.html) [other](/docs/other/ruby.html) [webapp](/docs/other/java.html) [deployed](/docs/hosting/getting-started.html), you can build your own HTTP requests from the same client, using our nice fluent api.


#### How do I start

Quite easy! Just using the regular package managers for each platform: Cocoapods (for Apple/iOS) and Gradle (for Java/Android).

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

#### How do I call the API?

Super simple! The methods are quite similar to the Javascript client. You can check [documentation](/docs/) for more details, but as a snack preview, here are a couple of typical use cases:

##### Creating users

```swift
WeDeploy
	.auth("http://<serviceID>.<projectID>.wedeploy.io")
	.createUser(email: "user@domain.com", password: "abc", name: "somename")
	.then { user -> Void in
		// Successfully created.
	}
	.catch { err in
		// Not created.
	}
```
```java
new WeDeploy.Builder().build()
    .auth("http://<serviceID>.<projectID>.wedeploy.io")
    .createUser("user@domain.com", "password", "somename")
    .execute(new Callback() {
        public void onSuccess(Response response) {
            // here you receive the response
        }

        public void onFailure(Exception e) {
            // oops something went wrong
        }
    });
```

##### Sending emails

```swift
WeDeploy
	.email("http://<serviceID>.<projectID>.wedeploy.io")
	.from("from@domain.com")
	.to("to@domain.com")
	.subject("Hi there!")
	.message("The body.")
	.send()
	.then { id in
		// here you receive the email id
	}
	.catch { error in
		// Some error has happened
	}
```
```java
new WeDeploy.Builder().build()
    .email("http://<serviceID>.<projectID>.wedeploy.io/emails")
    .from("from@domain.com")
    .to("to@domain.com")
    .subject("Hi there!")
    .message("The body.")
    .send()
    .execute(new Callback() {
        public void onSuccess(Response response) {
            // here you receive the response
        }

        public void onFailure(Exception e) {
            // oops something went wrong
        }
    });
```

##### Saving data

```swift
WeDeploy
    .data("http://<serviceID>.<projectID>.wedeploy.io")
    .create(resource: "movies", object: [
        "title" : "Star Wars IV",
        "year" : 1977,
        "ratings" : 8.7
    ])
    .then { movie in
        // here you receive the movie created
    }
```
```java
JSONObject movieJsonObject = new JSONObject()
    .put("title", "Star Wars IV")
    .put("year", 1977)
    .put("rating", 8.7);

new WeDeploy.Builder().build()
    .data("http://datademo.wedeploy.io")
    .create("movies", movieJsonObject)
    .execute(new Callback() {
        public void onSuccess(Response response) {
            // here you receive the movie created
        }

        public void onFailure(Exception e) {
            // oops something went wrong
        }
    });
```

#### Reactive Programming FTW!

Yes, we know that you're a cool guy, so you *have to* use cool things. Like Rx. In fact in provide three diferent flavours of APIs, depending on your platform. You can use the typical Promise pattern, good and old callbacks, or even receive a Rx's Observable object.
Check the [documentation](/docs/intro/using-the-api-client.html) for more details on this.

---

So, the only thing left is to go to the [documentation](/docs/), and start deploying (your mobile app)!

Don't forget to let us know how it goes! You can connect with us on [Twitter](https://twitter.com/wedeploy) or join our community on [Slack](http://chat.wedeploy.com).

</article>
