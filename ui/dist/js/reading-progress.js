/* ==========================================================================
	 Reading Progress Affix
	 ========================================================================== */

window.addEventListener('load', function(event) {
	handleAffix();
	var app = senna.dataAttributeHandler.getApp();
	app.on('endNavigate', endNavigateReadingProgress);
});

function endNavigateReadingProgress(e) {
	handleAffix();
}

function handleAffix() {
	if (affix) {
		affix.dispose();
		affix = null;
	}

	var topicsElement = document.querySelector('.docs-nav-container');

	if(topicsElement) {
		var docsNavOffsetTop = topicsElement ? 450 : 330;
		var docsNavOffsetBottom = 200;

		var affix = new metal.Affix({
			element: '.docs-nav',
			offsetTop: docsNavOffsetTop,
			offsetBottom: docsNavOffsetBottom
		});
	}
}
