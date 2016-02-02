window.hljs.initHighlightingOnLoad();

if (sideGuideAutocomplete) {
	sideGuideAutocomplete.dispose();
	sideGuideAutocomplete = null;
}

/* ==========================================================================
   Main Search
   ========================================================================== */

var sideGuideInput = document.querySelector('.sidebar-search .form-control');

var sideGuideAutocomplete = new metal.Autocomplete({
	inputElement: sideGuideInput,
	data: function(query) {
		var docs = Launchpad.url('http://liferay.io/docs/search').path(sideGuideInput.dataset.lang);

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