document.addEventListener('DOMContentLoaded', function() {
  var app = senna.dataAttributeHandler.getApp();

  app.on('endNavigate', function(event) {
    ga('set', 'page', event.path);
    ga('send', 'pageview');
  });
});