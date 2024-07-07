function findAncestor(element, cls) {
  while ((element = element.parentElement) && !element.classList.contains(cls));
  return element;
}

function copyLink() {
  const sectionContainer = findAncestor(event.target, 'section-container');
  navigator.clipboard.writeText(window.location.origin + '/blog/' + sectionContainer.id + '.html');
  event.target.classList.remove('section-link');
  event.target.classList.add('section-check');

  const revert = function () {
    this.target.classList.remove('section-check');
    this.target.classList.add('section-link');
  }.bind(event);

  setTimeout(function () {
      revert();
  }, 2500);
}