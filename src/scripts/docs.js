document.addEventListener('DOMContentLoaded', function() {
	if (window.hljs) {
		window.hljs.initHighlightingOnLoad();
	}
});

window.toggler = new metal.Toggler({
	content: '.sidebar-list-1',
	header: '.sidebar-header'
});