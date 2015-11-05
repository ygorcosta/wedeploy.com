// Dependencies
var strip = require('remove-markdown');
var path = require('path');
var request = require('request');
var fs = require('fs');

// Validate
if (!process.env.SECRET_TOKEN) {
    throw new Error('Please setup environment vars');
}

// Fetch
var location = path.join(__dirname, '../bower_components/docs/index.md');
var file = fs.readFileSync(location, 'utf8');

// Save
request({
    url: 'http://liferay.io/docs/pages?secretToken=' + process.env.SECRET_TOKEN,
    method: 'POST',
    json: {
        path: '/',
        content: strip(file)
    }
}, function (error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
    }
});