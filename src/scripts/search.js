var searchTerm  = document.querySelector('#search-term');
var searchTotal = document.querySelector('#search-total');
var searchInput = document.querySelector('#search-input');

searchInput.addEventListener('input', function(e) {
	search(e.currentTarget.value);
});

function search(term) {
	searchInput.value = term;
	searchTerm.textContent = term;

	Launchpad.url('http://liferay.io/docs/pages')
		.search('*', 'prefix', term)
		.limit(3)
		.highlight('content')
		.get()
		.then(function(result) {
			searchTotal.textContent = result.body().total;
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

onLoad();