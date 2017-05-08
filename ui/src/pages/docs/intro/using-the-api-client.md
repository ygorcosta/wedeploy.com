---
title: "Using the API Client"
description: "Make requests to WeDeploy using a standardized interface."
headerTitle: "Intro"
layout: "guide"
weight: 7
---

### {$page.title}

###### {$page.description}

<article id="1">

## JavaScript API Installation

In order to send/receive requests to/from WeDeploy, we need to include the JavaScript API Client. This library provides a secure and reliable communication channel with WeDeploy. We can do that by adding a script element in a HTML file or to load the library using NPM:

#### CDN

```xml
<script src="http://cdn.wedeploy.com/api/latest/wedeploy.js"></script>
```

#### NPM
```shell
$ npm install --save wedeploy
```

After installing WeDeploy using NPM, it might be loaded like this:

```javascript
const WeDeploy = require('wedeploy');

// in React Native environment it might be loaded using 'import' statement
import WeDeploy from 'wedeploy';
```

#### Supported environments

WeDeploy has been tested on the following environments:

1. Web browser - Chrome, Firefox, Safari, Edge, IE10+
2. [Node.js](https://nodejs.org/en/)
3. [React Native](https://facebook.github.io/react-native/)

#### API nuances
In all supported environments the API calls are the same. However, depending on the environment, some features might be not available. For example, signing in with OAuth2 providers is available in browser environment only.

</article>

<article id="2">

## Swift API Installation

If you want to send/receive requests to/from WeDeploy from an iOS App, we also have a solution for that, the Swift API Client. In order to start using it you have to do:

#### Cocoapods

Add this to your Podfile:

```swift
pod 'WeDeploy'
```

#### API nuances

By default, all swift api requests returns a promise, for example:

```swift
WeDeploy
	.data("http://<serviceID>.<projectID>.wedeploy.io")
	.get(resourcePath: "movies")
	.then { movie -> Void in 
		print(movie)
	}
```

But you will be able to return a callback or even an observable! You will have this two methods available:

```swift
// The method toCallback converts a promise into a callback
WeDeploy
	.data("http://<serviceID>.<projectID>.wedeploy.io")
	.get(resourcePath: "movies")
	.toCallback { movies, error in
		// here you can check the error or the response
	}

// The method toObservable converts a promise into an observable
WeDeploy
	.data("http://<serviceID>.<projectID>.wedeploy.io")
	.get(resourcePath: "movies")
	.toObservable()
	.subscribe(
		onNext: { movies in
			// here you receive the movies
		},
		onError: { error in
			// oops something went wrong
		}
	)
```

</article>

<article id="3">

## Android API Installation

For sending/receiving requests to/from WeDeploy from an Android App, you can use the Android API Client. In order to start using it, you just need to add the following line to your build.gradle file:

```groovy
compile 'com.wedeploy:com.wedeploy.android:beta-20170505'
```

#### API nuances

Before calling any method from WeDeploy, you have to build its instance:

```text/java
WeDeploy weDeploy = new WeDeploy.Builder().build();
```

Then, you are able to synchronously fire requests to WeDeploy by calling execute():

```text/java
weDeploy
	.data("http://datademo.wedeploy.io")
	.get("movies")
	.execute();
```

You can also fire asynchronous requests by specifying a Callback to the execute() method:

```text/java
weDeploy
	.data("http://datademo.wedeploy.io")
	.get("movies")
	.execute(new Callback() {
		public void onSuccess(Response response) {
			// here you receive the movies
		}

		public void onFailure(Exception e) {
			// oops something went wrong
		}
	});
```

The Wedeploy Android API is RxJava 2 compatible. It means that you can convert the request into a Single RxJava object, which emits either a success or an error event. You must add a dependency to RxAndroid in your project build.gradle in order to use it.

```java
weDeploy
	.data("http://datademo.wedeploy.io")
	.get("movies")
	.asSingle()
	.subscribeOn(Schedulers.io())
	.observeOn(AndroidSchedulers.mainThread())
	.subscribe(
		response -> {

		},
		throwable -> {

		});
```

</article>

## What's next?

* Learn more about using [Environment Variables](/docs/intro/environment-variables.html).
