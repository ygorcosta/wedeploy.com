var resultContainer = document.querySelector('#search-result-container');
var searchInput = document.querySelector('#search-input');
var template = document.querySelector('#search-result-template');

var request;

searchInput.addEventListener('input', function(e) {
	if (request) {
		request.cancel();
	}

	if (e.currentTarget.value === '') {
		resultContainer.innerHTML = '';
	}
	else {
		request = search(e.currentTarget.value);
	}
});

function search(term) {
	searchInput.value = term;

	return Launchpad.url('http://liferay.io/docs/search/all')
		.search('*', 'prefix', term)
		.highlight('content')
		.get()
		.then(function(result) {
			var data = result.body();

			data.term = term;

			var compiled = Handlebars.compile(template.innerHTML);
			var rendered = compiled(data);

			resultContainer.innerHTML = rendered;
		});
}

function onLoad() {
	var query = window.location.search;
	var queryIndex = query.indexOf('q=');

	if (queryIndex === -1) {
		window.location.href = '/docs';
	}
	else {
		queryString = query.substr(queryIndex + 2);

		search(queryString);
	}
}

Handlebars.registerHelper('trimString', function(passedString) {
    return passedString.substring(0, 300) + '...';
});

onLoad();