var fs = require('fs');
var path = require('path');
var strip = require('remove-markdown');

exports.read = function(lang) {
    return [
        {
            path: '/',
            title: 'Quickstart',
            content: read('index.md', 'Quickstart', lang)
        },
        {
            path: '/building-apis.html',
            title: 'Building APIs',
            content: read('building-apis.md', 'Building APIs', lang)
        },
        {
            path: '/understanding-data.html',
            title: 'Understanding Data',
            content: read('understanding-data.md', 'Understanding Data', lang)
        }
    ];
}

function read(filename, title, lang) {
    var location = path.join(__dirname, '../bower_components/docs', lang, filename);
    var file = fs.readFileSync(location, 'utf-8');
    var content = strip(file);

    return content.substr(title.length);
}