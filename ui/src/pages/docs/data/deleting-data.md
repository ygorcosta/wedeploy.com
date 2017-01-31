---
description: "The delete() function destroys an existing field, document or collection in the database."
headerTitle: "Data"
layout: "guide"
title: "Deleting Data"
weight: 5
---

# Deleting Data

###### The delete() function destroys an existing field, document or collection in the database.

<article id="article_1">

## Deleting existing data

> By default, all the operation access to your database are restricted so only authenticated users can manipulate data. To get started without setting up Authentication, you can configure your rules for public access. To learn more about rules, see [configuring rules](/docs/data/configuring-rules.html) section.

To delete a field, document, or the entire collection, we use the DELETE method:

```javascript
var data = WeDeploy.data('http://datademo.wedeploy.io');

data.delete('movies/star_wars_v/title');

data.delete('movies/star_wars_v');

data.delete('movies');

```

</article>

## What's next?

Now that you have learned how to update data, you can interact [retrieving data](/docs/data/js/retrieving-data.html).
