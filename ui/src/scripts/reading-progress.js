/* ==========================================================================
	 Reading Progress Resize Width
	 ========================================================================== */

document.addEventListener('DOMContentLoaded', function(event) {
	resizeReadingProgress();
});

window.addEventListener('load', function(event) {
	var app = senna.dataAttributeHandler.getApp();
	app.on('endNavigate', endNavigateReadingProgress);
});

function endNavigateReadingProgress(e) {
	resizeReadingProgress();
}

function resizeReadingProgress() {
	var readingProgressContent = document.querySelector('.docs-nav-container');

	if(readingProgressContent) {
		var docsNav = readingProgressContent.childNodes[0];
		docsNav.style.width = readingProgressContent.offsetWidth + 'px';

		//TODO : check if it's really necessary
		window.addEventListener('resize', function() {
			docsNav.style.width = readingProgressContent.offsetWidth + 'px';
		});
	}

}

