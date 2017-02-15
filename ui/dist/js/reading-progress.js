/* ==========================================================================
	 Reading Progress Affix
	 ========================================================================== */

if (affix) {
	affix.dispose();
	affix = null;
}

var topicsElement = document.querySelector('.docs-nav-container');
if(topicsElement) {
	console.log('topicsElement');
	var docsNavOffsetTop = topicsElement ? 450 : 330;
	var docsNavOffsetBottom = 60;

	var affix = new metal.Affix({
		element: '.docs-nav',
		offsetTop: docsNavOffsetTop,
		offsetBottom: docsNavOffsetBottom
	});
}
