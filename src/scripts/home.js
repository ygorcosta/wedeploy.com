document.addEventListener('DOMContentLoaded', function() {
	var alert = new metal.Alert({
		visible: false,
		animClasses: {
			hide: 'hidden'
		}
	}).render();

	var url = window.location.search;

	if (url === '?invited=success') {
		alert.body = 'Great! Soon you\'ll receive an email to get early access.';
		alert.elementClasses = 'alert-success';
		alert.visible = true;
	}
	else if (url === '?invited=error') {
		alert.body = 'Something wrong happened! Please come back later.';
		alert.elementClasses = 'alert-danger';
		alert.visible = true;
	}
});
