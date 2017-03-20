---
title: "Starting an IoT platform with WeDeploy™"
description: "In this blog post I will drive you through the steps to create a multi-service project, including a Java service, a Hosting service, and a Data service, to build the foundations for a minimal IoT platform which accepts metrics from remote devices."
date: "Mar 17, 2017"
author: "Manuel de la Peña"
image: "http://wedeploy.com/images/blog/post-5--0.png"
layout: "blog"
---

<article>

{$page.description}

Therefore, I want to share with you my experiences with WeDeploy™, in a project I'm writing to finish a master degree in `Research in Software Engineering and Computer Science`, more specificly, for an `Ubiquous Computing` subject.

**IoT train is passing and if we don't get on we are out.** 

<figure>
	<img src="../images/blog/post-6--0.jpg" alt="IoT train is passing. Credits: Amos Bar-Zeev (https://unsplash.com/search/wait?photo=IjA4vTJ3PHY)">
</figure>

In this subject I've learned the basic concepts of `IoT`, starting with the intent of the Human to simulate the real world with smart devices, we have the example of [Mark Weiser](https://es.wikipedia.org/wiki/Mark_Weiser), whose ideas in 1991 about a Liveboard to represent a blackboard, and Smart Rooms can be considered the precursor of digital-interactive whiteboards, e-books, tablets and even smartphones.

> Mark Weiser's ideas about IoT began in 1991.

Besides, I've learnt about pervasive computing, which means not being intrusive with users privacy. And I've learnt too about device communication. An IoT device must communicate, locally or remotely, to send data about the surrounding environment to other devices or even directly to human senses.

In this subject, there is a practice related to create an application that sends metrics to an IoT platform, where you can use any of the following IoT platforms:

* Kaa [https://www.kaaproject.org](https://www.kaaproject.org)
* Macchina.io [https://macchina.io](https://macchina.io)
* Iotivity [https://www.iotivity.org](https://www.iotivity.org)
* SiteWhere [http://www.sitewhere.org](http://www.sitewhere.org)

Or else it is possible to use any other type of non-OpenSource platform, such as Autodesk
Fusion Connect, AWS (Amazon Web Services), Google Cloud IoT, Microsoft Azure IoT, IBM Watson IoT or
ThingWorx.

First, I decided to create a mobile application that reads some metric about the environment so, for the sending application part, I decided to write and Android application that reads the current speed of the device's GPS. Second, I had to choose an IoT platform. And last but not least, I had to write my server application and deploy it to the platform.

At that point, I realised that in the short period of time I had to accomplish that work, I had to learn how to use and configure a complete new product, i.e. `Kaa`, which in fact seems a very good project. So, thinking about it, why not using WeDeploy™ to host my application? WeDeploy™ already provides all the infrastructure for me to deploy a stack of applications in a super easy manner, so I could simulate the platform super fast, just to demonstrate the IoT concepts.

<figure>
	<img src="../images/blog/post-6--1.jpg" alt="Looking for ideas. Credits: Christopher Sardegna (https://unsplash.com/collections/172701/idea?photo=bSmKli4OTIY)">
</figure>

With WeDeploy™ you manage `git` repositories and wrap them into services that can be deployed into the platform. Besides, WeDeploy™ offers a set of useful already configured services, such as [Data](http://wedeploy.com/docs/data) service, [Users and Authentication](http://wedeploy.com/docs/auth) service, or even [E-mail](http://wedeploy.com/docs/email) service. So any developer can streamline a project with minimal infrastructure configuration, just coding the application she wants to develop.

#### The Stack

So, here are the requirements to build my project:

* An Android app that reads current speed from the GPS, and sends it each time current location is changed.
* A server that reads the metrics sent by the Android app, and stores them into persistent storage.
* A web to display the metrics stored in the storage, reading from the server.

The Android app is super easy to create, and has nothing to do with WeDeploy™, just knowing the URL of the server where to send the metrics, so I won't stop at it. **The two things that really matters** are related to the API I wanted to create to accept the metrics sent by the devices, and the visualisation of those metrics.

#### Creating an API with WeDeploy™

In order to accept metrics from remote applications, being installed on smartphones or IoT devices, I decided to create a REST API to handle the requests, and then it would store the metrics in a persistent storage. As WeDeploy™ offers a [Data](http://wedeploy.com/docs/data) service, I decided that my REST API should communicate to that [Data](http://wedeploy.com/docs/data) service to store the metrics.

Then, I chose the framework to create the API. As I am a Java developer, I chose `Spring Boot` to build it, which allows creating super tiny applications and define REST resources in an extremely easy manner.

So I created a project on the WeDeploy™ dashboard, gave it a name, and added a [WeDeploy™ Java](http://wedeploy.com/docs/other/java.html) service to start from, with name `api`. I locally cloned [the boilerplate-java project from Github](https://github.com/wedeploy/boilerplate-java), and started coding my REST API there.

Of course you can do this step with other technology you are more familiar with, and WeDeploy™ offers several server-technologies to accomplish this.

**At the moment of writing, it offers [WeDeploy™ NodeJS](http://wedeploy.com/docs/other/nodejs.html) and [WeDeploy™ Ruby](http://wedeploy.com/docs/other/ruby.html), apart from [WeDeploy™ Java](http://wedeploy.com/docs/other/java.html)**

##### Instrumenting a service

In order to instrument any WeDeploy™ service, it's mandatory to create a `container.json` file in the root of your project, where you specify the type of the service, and some other behaviors.

<figure>
	<img src="../images/blog/post-6--2.jpg" alt="Tuning the service. Credits: Clem Onojeghuo (https://unsplash.com/search/mechanic?photo=SkDvB4cRDAg)">
</figure>

In the case of the [WeDeploy™ Java](http://wedeploy.com/docs/other/java.html) service, you can set the commands to build the project once the service is created or updated.

```application/json
{
    "id": "api",
    "type": "wedeploy/java:latest",
    "hooks": {
        "before_build": "",
        "build": "gradle -Dorg.gradle.native=false clean build -x test",
        "after_build": "",
        "before_start": "",
        "start": "",
        "after_start": ""
    }
}
```

In this case, as I used a `Spring Boot` project, the build system is based on `Gradle`. So I added the Gradle commands to build the project, excluding tests.

##### Defining REST resources

The following block of code demonstrates how to handle HTTP `GET` and `POST` requests in a `Spring Boot` controller.

```text/x-java
/**
 * We'll handle all HTTP request to the path '/sensors' under application context path
 * @author Manuel de la Peña
 */
@RestController
@RequestMapping("/sensors")
public class SensorsRestController {

	/*
	* Defines the resource for an specific sensor, identified by its sensorId,
	* which is passed as input parameter to the method, using the annotation @PathVariable.
	* It allows CORS requests from any domain.
	* @return A collection of model domain objects
	*/
	@CrossOrigin(origins = "*")
	@RequestMapping(method = RequestMethod.GET, value = "/{sensorId}")
	public Collection<SensorRow> getMetrics(@PathVariable String sensorId) {...}
	...
	/*
	* Define the resource for POST verb operations over this controller's path.
	* The annotation @RequestBody indicates the type of the object that will be
	* processed in the request.
	* It allows CORS requests from any domain.
	*/
	@CrossOrigin(origins = "*")
	@RequestMapping(method = RequestMethod.POST)
	public ResponseEntity<?> addMetric(@RequestBody Metric metric) {...}
	...
}
```

##### Defining the store service

Our API service needs to store the metrics in the [WeDeploy™ Data](http://wedeploy.com/docs/data) service. So I had to add a new service to our project on the WeDeploy™ dashboard, with name `data`. Again, I cloned the [boilerplate-data Github repository](https://github.com/wedeploy/boilerplate-data) at the same level of my API service, and voilà! I have two services under my WeDeploy™ project.

Here it is the `container.json` file for this new data service:

```application/json
{
    "id": "data",
    "type": "wedeploy/data"
}
```

But this data service must be configured to create a collection of elements, the ones defined by my application. In this case, I want to store a metric sent by a sensor, storing the application name who sent the data (app-android, app-ios, app-console), a sensor unique identifier, the coordinates of the sensor (latitude and longitude), the value of the metric, the name of the metric (temperature, speed, pressure, etc.), the units to measure the metric (celsius degrees, kilometers per hour, atmospheres, etc.), and a timestamp at the moment of the request.

And I also had to define how this collection of data is accessed, and which HTTP verbs are allowed.

You can configure this in WeDeploy™ data service with the `api.json` [descriptor](http://wedeploy.com/docs/data/configuring-data.html). This block shows the three REST resources that are accepted by my data service, and their specific paths: two for retrieving data, and one for storing data.

```application/json
[
	{
		"description": "Returns all sensors that sent metrics to the platform",
		"path": "/sensors/*",
		"method": "GET",
		"data": true
	},
	{
		"description": "Returns one sensor identified by its unique sensorId",
		"path": "/sensors/:sensorId",
		"method": "GET",
		"data": true
	},
	{
		"description": "Stores one sensor's metrics",
		"path": "/sensors",
		"method": "POST",
		"data": true,
		"parameters": {
			"applicationId": {
				"type": "string"
			},
			"sensorId": {
				"type": "string"
			},
			"latitude": {
				"type": "string"
			},
			"longitude": {
				"type": "string"
			},
			"metric": {
				"type": "string"
			},
			"metricName": {
				"type": "string"
			},
			"metricUnits": {
				"type": "string"
			},
			"timestamp": {
				"type": "string"
			}
		}
	}
]
```

As you can see for the POST operation, I can validate the input parameters that are sent to the WeDeploy™ data service.

##### Storing in the WeDeploy™ Data service

Ok, once I had the data service configured, how could I communicate with it from the Java service, which represents the API? Well, the smart guys from WeDeploy™ team have provided a set of libraries to communicate with any WeDeploy™ service in an easy manner: you can consume WeDeploy™'s APIs with language-specific clients. In my case I will use a Java client, which I added to Gradle dependencies in the Java service.

```groovy
dependencies {
  ...
  compile("com.github.wedeploy.api-java:api:master-SNAPSHOT")
  compile("com.github.wedeploy.api-java:api-client:master-SNAPSHOT")
  ...
}
```

Added the dependencies, the communication with the [WeDeploy™ Data](http://wedeploy.com/docs/data) service is performed in this block of code:

```text/x-java
public class DataRepository {

    /**
    * Name of the data service to communicate with
    */
    private static final String DATA_SERVICE_PATH = "data";
    /**
    * Path of the Sensors collection
    */
    private static final String SENSORS_DATA_PATH = "/sensors";
    ...

    /**
    * We filter the collection by sensorId column. Then, we parse the JSON object
    * that represents the body of the response into a collection of model entities.
    */
    public Collection<SensorRow> findBySensorId(String sensorId) {
        WeDeploy weDeploy = new WeDeploy(DATA_SERVICE_PATH + SENSORS_DATA_PATH);

        Response response = weDeploy.filter("sensorId", sensorId).get();

		JoddJsonParser parser = new JoddJsonParser();

		return parser.parseAsList(response.body(), SensorRow.class);
	}

	/**
	* We retrieve the whole collection, without pagination. Then, we parse the JSON object
	* that represents the body of the response into a collection of model entities.
	*/
	public Collection<SensorRow> findAllSensors() {
		WeDeploy weDeploy = new WeDeploy(DATA_SERVICE_PATH + SENSORS_DATA_PATH);

		Response response = weDeploy.get();

		JoddJsonParser parser = new JoddJsonParser();

		return parser.parseAsList(response.body(), SensorRow.class);
	}
	...
}
```

Here the `weDeploy` object hides the magic of communicating with other WeDeploy™ services. As I am in the same project, it's possible to resolve the service name directly with only its name, without using its whole URI, because WeDeploy™ directly resolves service names when services run within the same project.

##### Displaying data

At that point I had built two services: a Java REST API developed with `Spring Boot`, and a [WeDeploy™ Data](http://wedeploy.com/docs/data) service for persistence. Then I wanted to display the metrics in a web interface. So, I created a third WeDeploy™ service, this time with type [WeDeploy™ Hosting](http://wedeploy.com/docs/hosting), which allows uploading static files, such as HTML, CSS and Javascript, and gave it the name `ui`. Here I share the `container.json` file that instruments the [WeDeploy™ Hosting](http://wedeploy.com/docs/hosting) service.

```application/json
{
	"id": "ui",
	"type": "wedeploy/hosting"
}
```

I know that this is not related to WeDeploy™, but I wanted to display the metrics in two different ways: a datagrid with all metrics, and a `Google Maps` interface with a pin where a metric was sent. With the following code, which **is not using the WeDeploy™ Javascript client**, I can retrieve the JSON objects returned from the `Spring Boot` API with browser's native `fetch` capability, process the response, and draw the results in the screen. 

```text/javascript
function getSensors(mode) {
	return fetch(myUrl)
		.then(function(response) {
			if(response.ok) {
				return response.json();
			}
			else if (response.status !== 200) {
				return [];
			}
		})
		.then(function(sensors) {
			if (!sensors || sensors.length === 0) {
				noResults(); // shows a not found message

				return;
			}

			if (mode == 'grid') {
				plotSensors(sensors); // draws a grid
			}
			else {
				mapSensors(sensors); // draws a google map
			}

			return this;
		});
}
```

Please remember I'm a backend developer interested in Systems, shame on me for this javascript code!

NOTE: Hey, at least I put it in a separated JS file 😂

Again, if you want to use here a client for handling WeDeploy™ operations, thanks to the WeDeploy™ team a Javascript client is available. Super cool!. You only need to add this script to your page and you`re ready to go:

```text/html
<script src="http://cdn.wedeploy.com/api/latest/wedeploy.js"></script>
```

### Summary

With WeDeploy™ I could accomplish the task of creating a very basic stack to handle requests, writing a server representing an API for accepting requests, a service to store data, and a service representing a UI for the metrics. And all of that has been accomplish just using coding + git skills, with no infrastructure knowledge needed!

</article>
