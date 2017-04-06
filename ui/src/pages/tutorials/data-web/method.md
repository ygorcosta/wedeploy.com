---
buttonTitle: "I added the API methods"
description: "In this section, you'll learn how to save and get data on the web using the WeDeploy API Client."
layout: "tutorial"
parentId: "data-web"
time: 60
title: "Add API Methods"
tutorialTitle: "Getting started with WeDeploy Data on the web"
weight: 4
---

#### Add API Methods

###### Save Data

Now we want to add a script that will save data to a collection. 

To do this, go to `tutorial-data-web/hosting/index.js` and paste this code:

```javascript
WeDeploy
	.data(`data.${DOMAIN}`)
	.create('tasks', {name: form.item.value })
		.then(function(response) {
			form.reset();
			form.item.focus();
			console.info('Saved:', response);
		})
		.catch(function(error) {
			console.error(error);
		});
```

###### Fetch Data

Next, we want to add a script that will fetch data from the collection. 

To do this, go to `list.js` inside of the same folder and paste this code:

```javascript
WeDeploy
	.data(`ata.${DOMAIN}`)
	.orderBy('id', 'desc')
	.limit(5)
	.get('tasks')
		.then(function(response) {
			appendTasks(response);
		})
		.catch(function(error) {
			console.error(error);
		});
```

<aside>

###### <span class="icon-16-star"></span> Pro Tip

Bellow the code you added to `list.js`, there is another API method with a `watch()` task. This sends a request to the server to immediately fetch any new data that is added to the specific collection, creating a real-time feed. 

Learn more about <a href="http://wedeploy.com/docs/data/real-time-feeds.html" target="_blank">Real-Time Feeds</a>.

</aside>



      
