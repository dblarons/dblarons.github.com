async function getData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    return await response.text();
  } catch (error) {
    console.error(error.message);
  }
}

async function populate() {
  const links = Array
    .from(document.getElementById('posts').getElementsByTagName('a'))
    .map(e => e.href);

  const posts = links.map(getData);

  const parser = new DOMParser();
  const contentContainer = document.getElementById('content-container');
  for (const p of posts) {
    const text = await p;
    const post = parser.parseFromString(text, 'text/html').getElementsByClassName('section-container')[0];
    contentContainer.append(post);
  }
}

function syncScrollPosition() {
  var scrollPosition = localStorage.getItem('scrollPosition');
  if (scrollPosition) {
    window.scrollTo(0, scrollPosition);
  }

  window.onbeforeunload = function(e) {
    localStorage.setItem('scrollPosition', window.scrollY);
  };
}

await populate();

// Tell Prism not to highlight as soon as it loads.
window.Prism = window.Prism || {};
window.Prism.manual = true;

await import('/public/js/prism.js');

// Highlight and then recover the scroll position.
window.Prism.highlightAll(false, () => {
  syncScrollPosition();
});