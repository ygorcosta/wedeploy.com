/* ==========================================================================
	 Reading Progress Affix
	 ========================================================================== */
if (affix) {
	affix.dispose();
	affix = null;
}

var topicsElement = document.querySelector('.guide-topics');
if(topicsElement) {
	var docsNavOffsetTop = topicsElement ? 450 : 330;
	var docsNavOffsetBottom = 60;

	var affix = new metal.Affix({
		element: '.docs-nav',
		offsetTop: docsNavOffsetTop,
		offsetBottom: docsNavOffsetBottom
	});
}

/* ==========================================================================
	 Reading Progress Resize Width
	 ========================================================================== */

document.addEventListener("DOMContentLoaded", function(event) {
	resizeReadingProgress();

	// TODO : check why senna.dataAttributeHandler.getApp() is starting null
	var timeoutId = setTimeout(() => {
		var app = senna.dataAttributeHandler.getApp();
		if(app) {
			clearTimeout(timeoutId);
			app.on('endNavigate', endNavigate);
		}
	}, 500);
});

function endNavigate(e) {
	resizeReadingProgress();
}

function resizeReadingProgress() {
	var readingProgressContent = document.querySelector('.docs-nav-container');
	var docsNav = readingProgressContent.childNodes[0];
	docsNav.style.width = readingProgressContent.offsetWidth + "px";

	window.addEventListener('resize', function() {
		docsNav.style.width = readingProgressContent.offsetWidth + "px";
	});
}

