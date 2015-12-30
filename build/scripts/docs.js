document.addEventListener('DOMContentLoaded', function() {
	if (window.hljs) {
		window.hljs.initHighlightingOnLoad();
	}

	var alert = new metal.Alert({
		visible: false,
		animClasses: {
			hide: 'hidden'
		}
	}).render();

	var form = document.querySelector('.newsletter-form');

	form.addEventListener('submit', function(e) {
		e.preventDefault();

		Launchpad.url('http://liferay.io/newsletter/subscribers')
			.post({
				email: e.target.email.value,
				timestamp: new Date().toISOString()
			})
			.then(function(result) {
				alert.body = 'Thanks for subscribing!';
				alert.elementClasses = 'alert-success';
				alert.visible = true;
			})
			.catch(function(error) {
				alert.body = 'Something wrong happened! Please come back later.';
				alert.elementClasses = 'alert-danger';
				alert.visible = true;
			});
	});
});

window.toggler = new metal.Toggler({
	content: '.sidebar-list-1',
	header: '.sidebar-header'
});