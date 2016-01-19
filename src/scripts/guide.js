document.addEventListener('DOMContentLoaded', function() {
	window.hljs.initHighlightingOnLoad();

	var input = document.querySelector('.docs-search-form .form-control');

	new metal.Autocomplete({
		inputElement: input,
		data: function(query) {
			var docs = Launchpad.url('http://liferay.io/docs/search').path(input.dataset.lang);

			if (query) {
				docs.search('*', 'prefix', query).limit(3).highlight('content');
			}

			return docs.get().then(function(response) {
				return response.body().documents;
			});
		},
		format: function(item) {
			console.log(item);
			return {
				textPrimary: metal.SoyRenderer.sanitizeHtml('<a class="autocomplete-link" href=".' + item.path + '">' +
					'<p class="autocomplete-title">' + item.title + '</p>' +
					'<p class="autocomplete-text">' + item.content.substr(0, 100) + '...</p></a>')
			};
		},
		select: function() {}
	}).render();
});