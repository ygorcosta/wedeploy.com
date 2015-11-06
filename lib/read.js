var fs = require('fs');
var path = require('path');
var strip = require('remove-markdown');

module.exports = [
    {
        path: '/',
        title: 'Quickstart',
        location: strip(fs.readFileSync(path.join(__dirname, '../bower_components/docs/index.md'), 'utf-8'))
    },
    {
        path: '/building-apis.html',
        title: 'Building APIs',
        location: strip(fs.readFileSync(path.join(__dirname, '../bower_components/docs/building-apis.md'), 'utf-8'))
    },
    {
        path: '/understanding-data.html',
        title: 'Understanding Data',
        location: strip(fs.readFileSync(path.join(__dirname, '../bower_components/docs/understanding-data.md'), 'utf-8'))
    }
];