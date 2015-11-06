var fs = require('fs');
var path = require('path');
var strip = require('remove-markdown');

module.exports = [
    {
        path: '/',
        title: 'Quickstart',
        content: read('index.md', 'Quickstart')
    },
    {
        path: '/building-apis.html',
        title: 'Building APIs',
        content: read('building-apis.md', 'Building APIs')
    },
    {
        path: '/understanding-data.html',
        title: 'Understanding Data',
        content: read('understanding-data.md', 'Understanding Data')
    }
];

function read(filename, title) {
    var location = path.join(__dirname, '../bower_components/docs', filename);
    var file = fs.readFileSync(location, 'utf-8');
    var content = strip(file);

    return content.substr(title.length, 300) + '...';
}