/* ==========================================================================
   Main Search
   ========================================================================== */

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

/* ==========================================================================
   Sidebar Search
   ========================================================================== */

if (autocomplete) {
	autocomplete.dispose();
	autocomplete = null;
}

var input = document.querySelector('.sidebar-search .form-control');

var autocomplete = new metal.Autocomplete({
	inputElement: input,
	data: function(query) {
		var docs = Launchpad.url('http://liferay.io/docs/search/all');

		if (query) {
			docs.search('*', 'prefix', query).limit(3).highlight('content');
		}

		return docs.get().then(function(response) {
			return response.body().documents;
		});
	},
	format: function(item) {
		return {
			textPrimary: metal.SoyRenderer.sanitizeHtml('<a class="autocomplete-link" href=".' + item.path + '">' +
				'<p class="autocomplete-title">' + item.title + '</p>' +
				'<p class="autocomplete-text">' + item.content.substr(0, 100) + '...</p></a>')
		};
	},
	select: function() {}
}).render();