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
	elementClasses: 'guide-topic-' + sideGuideInput.dataset.topic,
	data: function(query) {
		var docs = Launchpad.url('http://liferay.io/docs/search').path(sideGuideInput.dataset.topic);

		if (query) {
			docs.search('*', 'prefix', query).limit(3).highlight('content');
		}

		return docs.get().then(function(response) {
			return response.body().documents;
		});
	},
	format: function(item) {
		return {
			textPrimary: '<a class="autocomplete-link" href=".' + item.path + '">' +
				'<p class="autocomplete-title">' + item.title + '</p>' +
				'<p class="autocomplete-text">' + item.content.substr(0, 100) + '...</p></a>'
		};
	},
	select: function() {}
});

/* ==========================================================================
	 Feedback
	 ========================================================================== */

if (feedbackAlert) {
	feedbackAlert.dispose();
	feedbackAlert = null;
}

var feedbackAlert = new metal.Alert({
	spinner: true,
	spinnerDone: true,
	visible: false
});

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

/* ==========================================================================
	 Reading Progress
	 ========================================================================== */

if (progress) {
	progress.dispose();
	progress = null;
}

var articles = document.querySelectorAll('article');
var articlesIDs = [];

for (var i = 0; i < articles.length; i++) {
	articlesIDs.push('#' + articles[i].id);
}

var progress = new metal.ReadingProgress({
	items: articlesIDs,
	titleSelector: 'h2',
	trackerConfig: {
		activeClass: 'reading',
		completedClass: 'read'
	}
}, '#reading-container');

if (affix) {
	affix.dispose();
	affix = null;
}

var affix = new metal.Affix({
	element: '.docs-nav',
	offsetTop: 250,
	offsetBottom: 470
});

/* ==========================================================================
	 Menu links
	 ========================================================================== */

function saveLangChoice() {
	['js', 'java', 'rest'].forEach(function(lang) {
		if (window.location.href.indexOf(lang) !== -1) {
			localStorage.setItem('docsLang', lang);
		}
	});
}

function updateLangURLs() {
	var docsLang = localStorage.getItem('docsLang');

	if (docsLang) {
		var sideLinks = document.querySelectorAll('.sidebar-link');

		sideLinks.forEach(function(sideLink) {
			sideLink.href = sideLink.href.replace(/(js)|(java)|(rest)/g, docsLang);
		});
	}
}

saveLangChoice();
updateLangURLs();
