// Dependencies
var pages = require('./pages');
var request = require('request');

// Validate --------------------------------------------------------------------

if (!process.env.SECRET_TOKEN) {
    throw new Error('Please setup environment vars');
}

// Run -------------------------------------------------------------------------

var langs = ['js', 'java', 'curl'];

for (var i = 0; i < langs.length; i++) {
    var json = pages.read(langs[i]);
    deleteAll(langs[i], json);
}

// Delete ----------------------------------------------------------------------

function deleteAll(lang, json) {
    request({
        url: 'http://liferay.io/docs/search/' + lang + '?secretToken=' + process.env.SECRET_TOKEN,
        method: 'DELETE'
    }, function (error, response, body) {
        if (!error) {
            saveAll(lang, json);
        }
    });
}

// Save ------------------------------------------------------------------------

function saveAll(lang, json) {
    request({
        url: 'http://liferay.io/docs/search/' + lang + '?secretToken=' + process.env.SECRET_TOKEN,
        method: 'POST',
        json: json
    }, function (error, response, body) {
        if (!error) {
            console.log('Done!');
        }
    });
}