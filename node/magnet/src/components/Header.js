document.addEventListener('click', (event) => {
  const $target = event.target.closest('[aria-controls]');

  if ($target) {
    const $content = document.getElementById($target.getAttribute('aria-controls'));

    if ($content) {
      const isExpanding = $content.getAttribute('aria-expanded') !== 'true';

      $target.setAttribute('aria-expanded', isExpanding);
      $content.setAttribute('aria-expanded', isExpanding);

      if ($target.hasAttribute('aria-haspopup')) {
        document.documentElement.setAttribute('data-expanded', isExpanding);

        if (isExpanding) {
          $target.parentNode.setAttribute('inert', '');
        } else {
          $target.parentNode.removeAttribute('inert');
        }
      }
    }
  }
});
