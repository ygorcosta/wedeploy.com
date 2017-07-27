// This file was automatically generated from starting-an-iot-platform-with-wedeploy.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace FhLmV.
 * @public
 */

goog.module('FhLmV.incrementaldom');

/** @suppress {extraRequire} */
goog.require('soy');
/** @suppress {extraRequire} */
goog.require('soydata');
/** @suppress {extraRequire} */
goog.require('goog.i18n.bidi');
/** @suppress {extraRequire} */
goog.require('goog.asserts');
/** @suppress {extraRequire} */
goog.require('goog.string');
var IncrementalDom = goog.require('incrementaldom');
var ie_open = IncrementalDom.elementOpen;
var ie_close = IncrementalDom.elementClose;
var ie_void = IncrementalDom.elementVoid;
var ie_open_start = IncrementalDom.elementOpenStart;
var ie_open_end = IncrementalDom.elementOpenEnd;
var itext = IncrementalDom.text;
var iattr = IncrementalDom.attr;
var $import1 = goog.require('ElectricCode.incrementaldom');
var $templateAlias2 = $import1.render;
var $import2 = goog.require('blog.incrementaldom');
var $templateAlias1 = $import2.render;


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ignored, opt_ijData) {
  var param557 = function() {
    ie_open('article');
      ie_open('p');
        var dyn38 = opt_data.page.description;
        if (typeof dyn38 == 'function') dyn38(); else if (dyn38 != null) itext(dyn38);
      ie_close('p');
      ie_open('p');
        itext('I\'m currently studying ');
        ie_open('em');
          itext('Research in Software Engineering and Computer Science');
        ie_close('em');
        itext(' for my master\'s degree and decided to build this platform to complete some requirements for a class about ');
        ie_open('em');
          itext('Ubiquitous Computing');
        ie_close('em');
        itext('.');
      ie_close('p');
      ie_open('p');
        itext('In this class I\'ve learned the basic concepts of ');
        ie_open('a', null, null,
            'href', 'https://en.wikipedia.org/wiki/Internet_of_things');
          itext('IoT');
        ie_close('a');
        itext(', starting with the initial intent to simulate the real world with smart devices. I believe the IoT train is passing and if we don\'t get on, we will miss out. That\'s why I decided to explore more.');
      ie_close('p');
      ie_open('figure');
        ie_open('img', null, null,
            'src', '../images/blog/post-6--0.jpg',
            'alt', 'IoT train is passing. Credits: Amos Bar-Zeev (https://unsplash.com/search/wait?photo=IjA4vTJ3PHY)');
        ie_close('img');
      ie_close('figure');
      ie_open('p');
        itext('I realized that in the short period of time I had to accomplish this, I would need to learn how to use and configure a complete new tool like ');
        ie_open('a', null, null,
            'href', 'https://www.kaaproject.org');
          itext('Kaa');
        ie_close('a');
        itext(' or ');
        ie_open('a', null, null,
            'href', 'https://macchina.io');
          itext('Machina.io');
        ie_close('a');
        itext('. But I just wanted a place to simulate an IoT platform super fast. Then a thought occured to me:');
      ie_close('p');
      ie_open('blockquote');
        ie_open('p');
          itext('Why not use WeDeploy to host my app? It already provides all the infrastructure I need.');
        ie_close('p');
      ie_close('blockquote');
      ie_open('p');
        itext('With WeDeploy, you manage ');
        ie_open('code');
          itext('git');
        ie_close('code');
        itext(' repositories and wrap them into services that can be deployed into the platform. It also offers a set of useful, already-configured services such as ');
        ie_open('a', null, null,
            'href', '/docs/data');
          itext('Data');
        ie_close('a');
        itext(', ');
        ie_open('a', null, null,
            'href', '/docs/auth');
          itext('Users and Auth');
        ie_close('a');
        itext(', or even a ');
        ie_open('a', null, null,
            'href', '/docs/email');
          itext('E-mail');
        ie_close('a');
        itext('. This allows any developer to streamline a project with minimal infrastructure configuration so they can just focus on coding the application they want to develop.');
      ie_close('p');
      ie_open('h4');
        itext('The Stack');
      ie_close('h4');
      ie_open('p');
        itext('So, here are the requirements for my project:');
      ie_close('p');
      ie_open('ul');
        ie_open('li');
          itext('An Android app that reads current speeds from a GPS and sends it each time the current location is changed.');
        ie_close('li');
        ie_open('li');
          itext('A server that reads the metrics sent by the Android app and stores them into persistent storage.');
        ie_close('li');
        ie_open('li');
          itext('A web interface to display the metrics stored in the database, reading from the server.');
        ie_close('li');
      ie_close('ul');
      ie_open('p');
        itext('The Android app is super easy to create, and has nothing to do with WeDeploy, just knowing the URL of the server where to send the metrics, so I won\'t go anymore into it. ');
        ie_open('strong');
          itext('The two things that really matter');
        ie_close('strong');
        itext(' are related to the API I wanted to create to accept the metrics sent by the devices and the visualisation of those metrics.');
      ie_close('p');
      ie_open('h4');
        itext('Creating an API with WeDeploy');
      ie_close('h4');
      ie_open('p');
        itext('In order to accept metrics from remote applications, I decided to create a REST API to handle the requests, and then it would store the metrics in a persistent storage. As WeDeploy offers a ');
        ie_open('a', null, null,
            'href', '/docs/data');
          itext('Data');
        ie_close('a');
        itext(' service, I decided that my REST API should communicate to that service to store the metrics.');
      ie_close('p');
      ie_open('p');
        itext('Then, I chose the framework to create the API. As I\'m a Java developer, I chose ');
        ie_open('a', null, null,
            'href', 'https://projects.spring.io/spring-boot/');
          itext('Spring Boot');
        ie_close('a');
        itext(' to build it, which lets you create tiny applications and define REST resources in an extremely easy manner.');
      ie_close('p');
      ie_open('p');
        itext('So I created a project on the WeDeploy dashboard, and added a ');
        ie_open('a', null, null,
            'href', '/docs/other/java.html');
          itext('WeDeploy Java');
        ie_close('a');
        itext(' service named "api". I locally cloned ');
        ie_open('a', null, null,
            'href', 'https://github.com/wedeploy/boilerplate-java');
          itext('the boilerplate-java project from Github');
        ie_close('a');
        itext(', and started coding my REST API\'s there.');
      ie_close('p');
      ie_open('p');
        itext('Of course you can do this step with other technology you are more familiar with, and WeDeploy offers several server-side technologies to accomplish this including ');
        ie_open('a', null, null,
            'href', '/docs/other/nodejs.html');
          itext('NodeJS');
        ie_close('a');
        itext(' and ');
        ie_open('a', null, null,
            'href', '/docs/other/ruby.html');
          itext('Ruby');
        ie_close('a');
        itext('.');
      ie_close('p');
      ie_open('h5');
        itext('Implementing a service');
      ie_close('h5');
      ie_open('p');
        itext('In order to implement a WeDeploy service, it\'s mandatory to create a ');
        ie_open('code');
          itext('container.json');
        ie_close('code');
        itext(' file in the root of your folder, where you specify the type of the service you would like to use and some other behaviors.');
      ie_close('p');
      ie_open('p');
        itext('In the case of the ');
        ie_open('a', null, null,
            'href', '/docs/other/java.html');
          itext('WeDeploy Java');
        ie_close('a');
        itext(' service, you can set hooks to build the project once the service is created or updated.');
      ie_close('p');
      $templateAlias2({code: '{\n    "id": "api",\n    "type": "wedeploy/java:latest",\n    "hooks": {\n        "build": "gradle -Dorg.gradle.native=false clean build -x test"\n    }\n}', mode: 'application/json'}, null, opt_ijData);
      ie_open('p');
        itext('In this case, because I used a ');
        ie_open('a', null, null,
            'href', 'https://projects.spring.io/spring-boot/');
          itext('Spring Boot');
        ie_close('a');
        itext(' project, the build system is based on ');
        ie_open('a', null, null,
            'href', 'https://gradle.org/');
          itext('Gradle');
        ie_close('a');
        itext(', so I added the commands to build the project, excluding tests.');
      ie_close('p');
      ie_open('h5');
        itext('Defining REST resources');
      ie_close('h5');
      ie_open('p');
        itext('The following block of code demonstrates how to handle HTTP ');
        ie_open('code');
          itext('GET');
        ie_close('code');
        itext(' and ');
        ie_open('code');
          itext('POST');
        ie_close('code');
        itext(' requests in a ');
        ie_open('code');
          itext('Spring Boot');
        ie_close('code');
        itext(' controller.');
      ie_close('p');
      $templateAlias2({code: '/**\n * We\'ll handle all HTTP request to the path \'/sensors\' under application context path\n * @author Manuel de la Pe\u00F1a\n */\n@RestController\n@RequestMapping("/sensors")\npublic class SensorsRestController {\n\n    /*\n    * Defines the resource for an specific sensor, identified by its sensorId,\n    * which is passed as input parameter to the method, using the annotation @PathVariable.\n    * It allows CORS requests from any domain.\n    * @return A collection of model domain objects\n    */\n    @CrossOrigin(origins = "*")\n    @RequestMapping(method = RequestMethod.GET, value = "/{sensorId}")\n    public Collection<SensorRow> getMetrics(@PathVariable String sensorId) {...}\n    ...\n    /*\n    * Define the resource for POST verb operations over this controller\'s path.\n    * The annotation @RequestBody indicates the type of the object that will be\n    * processed in the request.\n    * It allows CORS requests from any domain.\n    */\n    @CrossOrigin(origins = "*")\n    @RequestMapping(method = RequestMethod.POST)\n    public ResponseEntity<?> addMetric(@RequestBody Metric metric) {...}\n    ...\n}', mode: 'text/x-java'}, null, opt_ijData);
      ie_open('h5');
        itext('Defining the save service');
      ie_close('h5');
      ie_open('p');
        itext('Our API service needs to store the metrics in the ');
        ie_open('a', null, null,
            'href', '/docs/data');
          itext('WeDeploy Data');
        ie_close('a');
        itext(' service so I added a new service to the project on the WeDeploy dashboard, naming it ');
        ie_open('code');
          itext('data');
        ie_close('code');
        itext('. Again, I cloned the ');
        ie_open('a', null, null,
            'href', 'https://github.com/wedeploy/boilerplate-data');
          itext('boilerplate-data Github repository');
        ie_close('a');
        itext(' at the same level of my API service, and voil\u00E0! I have two services under my WeDeploy project.');
      ie_close('p');
      ie_open('p');
        itext('Here it is the ');
        ie_open('code');
          itext('container.json');
        ie_close('code');
        itext(' file for this new data service:');
      ie_close('p');
      $templateAlias2({code: '{\n    "id": "data",\n    "type": "wedeploy/data"\n}', mode: 'application/json'}, null, opt_ijData);
      ie_open('p');
        itext('But this data service must be configured to create a collection of elements. These are the pieces of data I wanted to gather about the sensor:');
      ie_close('p');
      ie_open('ul');
        ie_open('li');
          ie_open('strong');
            itext('Platform');
          ie_close('strong');
          itext(' (app-android, app-ios, app-console),');
        ie_close('li');
        ie_open('li');
          ie_open('strong');
            itext('Unique identifier');
          ie_close('strong');
        ie_close('li');
        ie_open('li');
          ie_open('strong');
            itext('Coordinates');
          ie_close('strong');
          itext(' (longitude, latitude)');
        ie_close('li');
        ie_open('li');
          ie_open('strong');
            itext('Value');
          ie_close('strong');
        ie_close('li');
        ie_open('li');
          ie_open('strong');
            itext('Name');
          ie_close('strong');
          itext(' (temperature, speed, pressure, etc.)');
        ie_close('li');
        ie_open('li');
          ie_open('strong');
            itext('Unit of measure');
          ie_close('strong');
          itext(' (celsius degrees, kilometers per hour, atmospheres, etc.)');
        ie_close('li');
        ie_open('li');
          ie_open('strong');
            itext('Timestamp');
          ie_close('strong');
          itext(' (the moment of request)');
        ie_close('li');
      ie_close('ul');
      ie_open('p');
        itext('And I also had to define how this collection of data is accessed, and which HTTP verbs are allowed.');
      ie_close('p');
      ie_open('p');
        itext('You can configure this in WeDeploy data service with the ');
        ie_open('code');
          itext('api.json');
        ie_close('code');
        itext(' ');
        ie_open('a', null, null,
            'href', '/docs/data/configuring-data.html');
          itext('descriptor');
        ie_close('a');
        itext('. This block shows the three REST resources that are accepted by my data service, and their specific paths: two for retrieving data, and one for storing data.');
      ie_close('p');
      $templateAlias2({code: '[\n    {\n        "description": "Returns all sensors that sent metrics to the platform",\n        "path": "/sensors/*",\n        "method": "GET",\n        "data": true\n    },\n    {\n        "description": "Returns one sensor identified by its unique sensorId",\n        "path": "/sensors/:sensorId",\n        "method": "GET",\n        "data": true\n    },\n    {\n        "description": "Stores one sensor\'s metrics",\n        "path": "/sensors",\n        "method": "POST",\n        "data": true,\n        "parameters": {\n            "applicationId": {\n                "type": "string"\n            },\n            "sensorId": {\n                "type": "string"\n            },\n            "latitude": {\n                "type": "string"\n            },\n            "longitude": {\n                "type": "string"\n            },\n            "metric": {\n                "type": "string"\n            },\n            "metricName": {\n                "type": "string"\n            },\n            "metricUnits": {\n                "type": "string"\n            },\n            "timestamp": {\n                "type": "string"\n            }\n        }\n    }\n]', mode: 'application/json'}, null, opt_ijData);
      ie_open('p');
        itext('As you can see for the POST operation, I can validate the input parameters that are sent to the WeDeploy data service.');
      ie_close('p');
      ie_open('h5');
        itext('Storing in the WeDeploy Data service');
      ie_close('h5');
      ie_open('p');
        itext('Ok, once I had the data service configured, how could I communicate with it from the Java service, which represents the API? Well, the smart guys from WeDeploy team have provided a set of libraries to communicate with any WeDeploy service in an easy manner: you can consume WeDeploy\'s APIs with language-specific clients. In my case I will use a Java client, which I added to Gradle dependencies in the Java service.');
      ie_close('p');
      $templateAlias2({code: 'dependencies {\n  compile("com.github.wedeploy.api-java:api:master-SNAPSHOT")\n  compile("com.github.wedeploy.api-java:api-client:master-SNAPSHOT")\n  ...\n}', mode: 'text/x-groovy'}, null, opt_ijData);
      ie_open('p');
        itext('Added the dependencies, the communication with the ');
        ie_open('a', null, null,
            'href', '/docs/data');
          itext('WeDeploy Data service');
        ie_close('a');
        itext(' is performed in this block of code:');
      ie_close('p');
      $templateAlias2({code: 'public class DataRepository {\n\n    /**\n    * Name of the data service to communicate with\n    */\n    private static final String DATA_SERVICE_PATH = "data";\n    /**\n    * Path of the Sensors collection\n    */\n    private static final String SENSORS_DATA_PATH = "/sensors";\n    ...\n\n    /**\n    * We filter the collection by sensorId column. Then, we parse the JSON object\n    * that represents the body of the response into a collection of model entities.\n    */\n    public Collection<SensorRow> findBySensorId(String sensorId) {\n        WeDeploy weDeploy = new WeDeploy(DATA_SERVICE_PATH + SENSORS_DATA_PATH);\n\n        Response response = weDeploy.filter("sensorId", sensorId).get();\n\n        JoddJsonParser parser = new JoddJsonParser();\n\n        return parser.parseAsList(response.body(), SensorRow.class);\n    }\n\n    /**\n    * We retrieve the whole collection, without pagination. Then, we parse the JSON object\n    * that represents the body of the response into a collection of model entities.\n    */\n    public Collection<SensorRow> findAllSensors() {\n        WeDeploy weDeploy = new WeDeploy(DATA_SERVICE_PATH + SENSORS_DATA_PATH);\n\n        Response response = weDeploy.get();\n\n        JoddJsonParser parser = new JoddJsonParser();\n\n        return parser.parseAsList(response.body(), SensorRow.class);\n    }\n    ...\n}', mode: 'text/x-java'}, null, opt_ijData);
      ie_open('p');
        itext('Here the ');
        ie_open('code');
          itext('WeDeploy');
        ie_close('code');
        itext(' object hides the magic of communicating with other WeDeploy services. As I\'m in the same project, it\'s possible to resolve the service name directly with only its name, without using its whole URL, because WeDeploy directly resolves service names when services run within the same project.');
      ie_close('p');
      ie_open('h5');
        itext('Displaying data');
      ie_close('h5');
      ie_open('p');
        itext('At that point I had built two services: a Java REST API developed with ');
        ie_open('code');
          itext('Spring Boot');
        ie_close('code');
        itext(', and a ');
        ie_open('a', null, null,
            'href', '/docs/data');
          itext('WeDeploy Data service');
        ie_close('a');
        itext(' for persistence. Then I wanted to display the metrics in a web interface. So, I created a third WeDeploy service, ');
        ie_open('a', null, null,
            'href', '/docs/hosting');
          itext('Hosting');
        ie_close('a');
        itext(', which allows uploading static files, such as HTML, CSS and JavaScript, and gave it the name ');
        ie_open('code');
          itext('ui');
        ie_close('code');
        itext('. Bellow is the ');
        ie_open('code');
          itext('container.json');
        ie_close('code');
        itext(' file that I made to impliment the ');
        ie_open('a', null, null,
            'href', '/docs/hosting');
          itext('Hosting Service');
        ie_close('a');
        itext('.');
      ie_close('p');
      $templateAlias2({code: '{\n    "id": "ui",\n    "type": "wedeploy/hosting"\n}', mode: 'application/json'}, null, opt_ijData);
      ie_open('p');
        itext('I know that this is not related to WeDeploy, but I wanted to display the metrics in two different ways: a datagrid with all metrics, and a ');
        ie_open('code');
          itext('Google Maps');
        ie_close('code');
        itext(' interface with a pin where a metric was sent. With the following code, which ');
        ie_open('strong');
          itext('is not the WeDeploy JavaScript client');
        ie_close('strong');
        itext(', I can retrieve the JSON objects returned from the ');
        ie_open('code');
          itext('Spring Boot');
        ie_close('code');
        itext(' API with browser\'s native ');
        ie_open('code');
          itext('fetch');
        ie_close('code');
        itext(' capability, process the response, and draw the results in the screen.');
      ie_close('p');
      $templateAlias2({code: 'function getSensors(mode) {\n    return fetch(myUrl)\n        .then(function(response) {\n            if(response.ok) {\n                return response.json();\n            }\n            else if (response.status !== 200) {\n                return [];\n            }\n        })\n        .then(function(sensors) {\n            if (!sensors || sensors.length === 0) {\n                noResults(); // shows a not found message\n\n                return;\n            }\n\n            if (mode == \'grid\') {\n                plotSensors(sensors); // draws a grid\n            }\n            else {\n                mapSensors(sensors); // draws a google map\n            }\n\n            return this;\n        });\n}', mode: 'text/javascript'}, null, opt_ijData);
      ie_open('p');
        itext('Please remember I\'m a backend developer interested in Systems, so shame on me for this JavaScript code! Hey, at least I put it in a separate JavaScript file. \uD83D\uDE02');
      ie_close('p');
      ie_open('p');
        itext('Thanks to the WeDeploy team, a JS client is also available. Super cool! You only need to add this script to your page and you\'re ready to go:');
      ie_close('p');
      $templateAlias2({code: '<script src="https://cdn.wedeploy.com/api/latest/wedeploy.js"><\/script>', mode: 'text/html'}, null, opt_ijData);
      ie_open('h4');
        itext('Summary');
      ie_close('h4');
      ie_open('p');
        itext('With WeDeploy I could accomplish the task of creating a very basic stack to handle requests. I wrote a a service representing an API for accepting requests, a service to store data, and a service representing a UI for the metrics. And all of that has been accomplish just using a couple lines of code + git skills, with no infrastructure knowledge needed!');
      ie_close('p');
      ie_open('p');
        itext('If you\'re curious about the end result, see:');
      ie_close('p');
      ie_open('ul');
        ie_open('li');
          ie_open('a', null, null,
              'href', 'http://ui.mdelapenya-sensors.wedeploy.io');
            ie_open('strong');
              itext('ui');
            ie_close('strong');
            itext('.mdelapenya-sensors.wedeploy.io');
          ie_close('a');
        ie_close('li');
        ie_open('li');
          ie_open('a', null, null,
              'href', 'http://api.mdelapenya-sensors.wedeploy.io/sensors');
            ie_open('strong');
              itext('api');
            ie_close('strong');
            itext('.mdelapenya-sensors.wedeploy.io');
          ie_close('a');
        ie_close('li');
      ie_close('ul');
    ie_close('article');
    ie_open('input', null, null,
        'type', 'hidden',
        'value', opt_data.page.title);
    ie_close('input');
    ie_open('input', null, null,
        'type', 'hidden',
        'value', opt_data.site.title);
    ie_close('input');
  };
  $templateAlias1(soy.$$assignDefaults({content: param557}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'FhLmV.render';
}
