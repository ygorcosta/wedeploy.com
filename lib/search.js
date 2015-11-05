// Dependencies
var fs = require('fs');
var path = require('path');
var request = require('request');
var strip = require('remove-markdown');

// Validate
if (!process.env.SECRET_TOKEN) {
    throw new Error('Please setup environment vars');
}

// Fetch
var pages = [
    {
        path: '/',
        location: path.join(__dirname, '../bower_components/docs/index.md')
    },
    {
        path: '/building-apis.html',
        location: path.join(__dirname, '../bower_components/docs/building-apis.md')
    },
    {
        path: '/understanding-data.html',
        location: path.join(__dirname, '../bower_components/docs/understanding-data.md')
    }
];

// Save
for (var i = 0; i < pages.length; i++) {
    request({
        url: 'http://liferay.io/docs/pages?secretToken=' + process.env.SECRET_TOKEN,
        method: 'POST',
        json: {
            path: pages[i].path,
            content: strip(fs.readFileSync(pages[i].location, 'utf-8'))
        }
    }, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body);
        }
    });
};