function onLoad() {
	var snippets = document.querySelectorAll('pre code');

	for (var i = 0; i < snippets.length; i++) {
		hljs.highlightBlock(snippets[i]);
	}
}

onLoad();

/* ==========================================================================
   Sidebar Search
   ========================================================================== */

if (sideGuideAutocomplete) {
	sideGuideAutocomplete.dispose();
	sideGuideAutocomplete = null;
}

var sideGuideInput = document.querySelector('.sidebar-search .form-control');

var sideGuideAutocomplete = new metal.Autocomplete({
	inputElement: sideGuideInput,
	elementClasses: 'guide-lang-' + sideGuideInput.dataset.lang,
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

/* ==========================================================================
   Feedback
   ========================================================================== */

var noBtn  = document.querySelector('.guide-feedback-btn-no');
var yesBtn = document.querySelector('.guide-feedback-btn-yes');

noBtn.addEventListener('click', function() {
	noBtn.setAttribute('disabled', true);
	yesBtn.removeAttribute('disabled');
	sendFeedback(false);
});

yesBtn.addEventListener('click', function() {
	yesBtn.setAttribute('disabled', true);
	noBtn.removeAttribute('disabled');
	sendFeedback(true);
});

function sendFeedback(liked) {
	Launchpad
		.url('http://liferay.io/docs/feedback/records')
		.post({
			liked: liked,
			url: window.location.href,
			timestamp: new Date().toISOString()
		})
		.then(function() {
			feedbackAlert.body = 'Thanks for your feedback!';
			feedbackAlert.elementClasses = 'alert-success';
			feedbackAlert.visible = true;
		})
		.catch(function() {
			feedbackAlert.body = 'Something wrong happened! Please try again later.';
			feedbackAlert.elementClasses = 'alert-danger';
			feedbackAlert.visible = true;
		});
}

if (feedbackAlert) {
	feedbackAlert.dispose();
	feedbackAlert = null;
}

var feedbackAlert = new metal.Alert({
	visible: false,
	animClasses: {
		hide: 'hidden'
	}
}).render();