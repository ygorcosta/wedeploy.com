if (homeAlert) {
	homeAlert.dispose();
	homeAlert = null;
}

var homeAlert = new metal.Alert({
	visible: false,
	animClasses: {
		hide: 'hidden'
	}
}).render();

var url = window.location.search;

if (url === '?invited=success') {
	homeAlert.body = 'Great! Soon you\'ll receive an email to get early access.';
	homeAlert.elementClasses = 'alert-success';
	homeAlert.visible = true;
}
else if (url === '?invited=error') {
	homeAlert.body = 'Something wrong happened! Please come back later.';
	homeAlert.elementClasses = 'alert-danger';
	homeAlert.visible = true;
}