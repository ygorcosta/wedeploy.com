var fs = require('fs');
var path = require('path');
var strip = require('remove-markdown');

exports.read = function(lang) {
    var icon;
    var iconBackground;

    if (lang === 'js') {
        icon = 'icon-16-globe';
        iconBackground = '#ffb700';
    } else if (lang === 'java') {
        icon = 'icon-16-cup';
        iconBackground = '#ff536b';
    } else if (lang === 'curl') {
        icon = 'icon-16-command-line';
        iconBackground = '#00a4ff';
    }

    return [
        {
            path: '/',
            title: 'Quickstart',
            content: read('index.md', 'Quickstart', lang),
            iconBackground: iconBackground,
            icon: icon
        },
        {
            path: '/building-apis.html',
            title: 'Building APIs',
            content: read('building-apis.md', 'Building APIs', lang),
            iconBackground: iconBackground,
            icon: icon
        },
        {
            path: '/understanding-data.html',
            title: 'Understanding Data',
            content: read('understanding-data.md', 'Understanding Data', lang),
            iconBackground: iconBackground,
            icon: icon
        }
    ];
}

function read(filename, title, lang) {
    var location = path.join(__dirname, '../bower_components/docs', lang, filename);
    var file = fs.readFileSync(location, 'utf-8');
    var content = strip(file);

    return content.substr(title.length);
}