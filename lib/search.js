// Dependencies
var pages = require('./pages');
var request = require('request');

// Validate --------------------------------------------------------------------

if (!process.env.SECRET_TOKEN) {
    throw new Error('Please setup environment vars');
}

// Run -------------------------------------------------------------------------

Promise.all([
    deleteAll(), saveAll()
])
.then(function(res) {
    console.log('Done!');
}).catch(function(err) {
    console.log(err);
})

// Delete ----------------------------------------------------------------------

function deleteAll() {
    return new Promise(function(resolve, reject) {
        request({
            url: 'http://liferay.io/docs/pages?secretToken=' + process.env.SECRET_TOKEN,
            method: 'DELETE'
        }, function (error, response, body) {
            if (error) {
                reject(error);
            }

            resolve(body);
        });
    });
}

// Save ------------------------------------------------------------------------

function saveAll() {
    return new Promise(function(resolve, reject) {
        request({
            url: 'http://liferay.io/docs/pages?secretToken=' + process.env.SECRET_TOKEN,
            method: 'POST',
            json: pages
        }, function (error, response, body) {
            if (error) {
                reject(error);
            }

            resolve(body);
        });
    });
}