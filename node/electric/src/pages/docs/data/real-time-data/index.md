---
title: "Realtime Data"
description: "Instead of polling for changes, you can continuously get any new or updated documents in real time."
headerTitle: "Data"
layout: "guide"
weight: 5
---

### {$page.title}

###### {$page.description}

<aside>

If you are unfamiliar with our API, please visit the [API Clients](/docs/intro/api-clients/) page first to learn how to install and configure it.

</aside>

<article id="1">

## Watching data changes

To access your data in real time, all you need to do is change from the `get` method to the `watch` method and then update your response to an event-based promise.

Just like `get`, you also must pass the collection, or data path, that you want to watch (`.watch(collection)` or `.watch(collection/documentId/documentField)`).

Unlike the `get` method where you declare a promise based response, for `watch` you need to declare an event based response so that it watches for any changes in your database.

```javascript
WeDeploy
	.data('https://<serviceID>-<projectID>.wedeploy.io')
	.watch('movies')
	.on('changes', function(data) {
		console.log(data);
	})
	.on('fail', function(error) {
		console.log(error);
	});
```
```swift
// You have to hold a strong reference to the socket or it will be released
socket = WeDeploy
	.data('https://<serviceID>-<projectID>.wedeploy.io')
	.watch(resourcePath: "movies")

socket.on([.changes, .error]) { data in
	switch(data.type) {
	case .changes:
		print("changes \(data.document)")
	case .error:
		print("error \(data.document)")
	default:
		break
	}
}
```
```text/x-java
WeDeploy
	.data('https://data-datademo.wedeploy.io')
	.watch("movies")
	.on("changes", data -> System.out.println(data))
	.on("fail", error -> System.out.println(error));
```

Now every time the database detects changes that affect the query you're watching, you will receive a notification with the response body you'd receive if you had done a `get` request instead. Furthermore, every time this change leads to an error response, you'll receive the error object in a fail notification on the client.

</article>

<article id="2">

## Watching for new documents

The data service uses a query limit of `500` by default. In order to always get the latest newly created documents in your database, you would need to limit the query by `1` and sort by `id` in descending order.

```javascript
WeDeploy
	.data('https://<serviceID>-<projectID>.wedeploy.io')
	.limit(1)
	.orderBy('id', 'desc')
	.watch('movies')
	.on('changes', function(data) {
		console.log(data);
	})
	.on('fail', function(error) {
		console.log(error);
	});
```
```swift
// You have to hold a strong reference to the socket or it will be released
socket = WeDeploy
	.data('https://<serviceID>-<projectID>.wedeploy.io')
	.limit(1)
	.orderBy(field: "id", order: .DESC)
	.watch(resourcePath: "movies")

socket.on([.changes, .error]) { data in
	switch(data.type) {
	case .changes:
		print("changes \(data.document)")
	case .error:
		print("error \(data.document)")
	default:
		break
	}
}
```
```text/x-java
WeDeploy
	.data('https://data-datademo.wedeploy.io')
	.limit(1)
	.orderBy("id", SortOrder.DESCENDING)
	.watch("movies")
	.on("changes", data -> System.out.println(data))
	.on("fail", error -> System.out.println(error));
```

</article>

<article id="3">

## Watching with advanced filters

To watch for data using advanced search you just would need to keep using the `watch` method and apply any filter you desire.

```javascript
WeDeploy
  .data('https://<serviceID>-<projectID>.wedeploy.io')
  .where('category', 'cinema')
  .or('category', 'cartoon')
  .watch('movies')
  .on('changes', function(data) {
    console.log(data);
  })
  .on('fail', function(error) {
    console.log(error);
  });
```
```swift
// You have to hold a strong reference to the socket or it will be released
socket = WeDeploy
  .data('https://<serviceID>-<projectID>.wedeploy.io')
  .where(field: "category", op: "=", value: "cinema")
  .or(field: "category", op: "=", value: "cartoon")
  .watch(resourcePath: "movies")

socket.on([.changes, .error]) { data in
  switch(data.type) {
  case .changes:
    print("changes \(data.document)")
  case .error:
    print("error \(data.document)")
  default:
    break
  }
}
```
```text/x-java
WeDeploy
  .data('https://data-datademo.wedeploy.io')
  .where(equal("category", "cinema").or("category", "cartoon"))
  .watch("movies")
  .on("changes", data -> System.out.println(data))
  .on("fail", error -> System.out.println(error));
```

<aside>

For more examples of useful filters and result sorting you can use, see our **[Filtering Data page](/docs/data/filtering-data/)**.

</aside>

</article>

## What's next?

Now that you've learned how to use real-time, you can start [searching data](/docs/data/searching-data/).
