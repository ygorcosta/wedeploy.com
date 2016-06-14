/* ==========================================================================
   Sidebar Search
   ========================================================================== */

if (sideDocsAutocomplete) {
	sideDocsAutocomplete.dispose();
	sideDocsAutocomplete = null;
}

var sideDocsInput = document.querySelector('.sidebar-search .form-control');

var sideDocsAutocomplete = new metal.Autocomplete({
	inputElement: sideDocsInput,
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
			textPrimary: '<a class="autocomplete-link" href="/docs' + item.path + '">' +
				'<p class="autocomplete-title">' + item.title + '</p>' +
				'<p class="autocomplete-text">' + item.content.substr(0, 100) + '...</p></a>'
		};
	},
	select: function() {}
});

/* ==========================================================================
   Main Search
   ========================================================================== */

if (mainAutocomplete) {
	mainAutocomplete.dispose();
	mainAutocomplete = null;
}

var mainInput = document.querySelector('.docs-home-top .form-control');

var mainAutocomplete = new metal.Autocomplete({
	inputElement: mainInput,
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
			textPrimary: '<a class="autocomplete-link" href="/docs' + item.path + '">' +
				'<p class="autocomplete-title">' + item.title + '</p>' +
				'<p class="autocomplete-text">' + item.content.substr(0, 100) + '...</p></a>'
		};
	},
	select: function() {}
});