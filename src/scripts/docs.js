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