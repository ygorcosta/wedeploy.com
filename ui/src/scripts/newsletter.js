if (newsletterAlert) {
	newsletterAlert.dispose();
	newsletterAlert = null;
}

var newsletterAlert;

document.addEventListener("DOMContentLoaded", function(event) {
	newsletterAlert = new metal.Toast({
		hideDelay: 5000,
		spinner: true,
		spinnerDone: true,
		visible: false
	});

	var newsletterForm = document.querySelector('.newsletter-form');

	if(newsletterForm){

		newsletterForm.addEventListener('submit', function(e) {

			e.preventDefault();

			WeDeploy.data('docs.landing.wedeploy.me')
				.create('newsletter', {
					email: e.target.email.value,
					timestamp: new Date().toISOString()
				})
				.then(function(result) {
					newsletterAlert.body = 'Thanks for subscribing!';
					newsletterAlert.elementClasses = 'alert-success';
					newsletterAlert.visible = true;
				})
				.catch(function(error) {
					newsletterAlert.body = 'Something wrong happened! Please come back later.';
					newsletterAlert.elementClasses = 'alert-danger';
					newsletterAlert.visible = true;
				});
	});
	}
});

