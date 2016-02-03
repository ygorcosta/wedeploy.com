/* ==========================================================================
   Newsletter
   ========================================================================== */

if (docsAlert) {
	docsAlert.dispose();
	docsAlert = null;
}

var docsAlert = new metal.Alert({
	visible: false,
	animClasses: {
		hide: 'hidden'
	}
}).render();

var form = document.querySelector('.docs-home-newsletter-form');

form.addEventListener('submit', function(e) {
	e.preventDefault();

	Launchpad.url('http://liferay.io/newsletter/subscribers')
		.post({
			email: e.target.email.value,
			timestamp: new Date().toISOString()
		})
		.then(function(result) {
			docsAlert.body = 'Thanks for subscribing!';
			docsAlert.elementClasses = 'alert-success';
			docsAlert.visible = true;
		})
		.catch(function(error) {
			docsAlert.body = 'Something wrong happened! Please come back later.';
			docsAlert.elementClasses = 'alert-danger';
			docsAlert.visible = true;
		});
});

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
			textPrimary: metal.SoyRenderer.sanitizeHtml('<a class="autocomplete-link" href="/docs' + item.path + '">' +
				'<p class="autocomplete-title">' + item.title + '</p>' +
				'<p class="autocomplete-text">' + item.content.substr(0, 100) + '...</p></a>')
		};
	},
	select: function() {}
}).render();

/* ==========================================================================
   Sidebar Search
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
			textPrimary: metal.SoyRenderer.sanitizeHtml('<a class="autocomplete-link" href="/docs' + item.path + '">' +
				'<p class="autocomplete-title">' + item.title + '</p>' +
				'<p class="autocomplete-text">' + item.content.substr(0, 100) + '...</p></a>')
		};
	},
	select: function() {}
}).render();