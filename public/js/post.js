const parser = new DOMParser();

const title = parser.parseFromString(`
  <div class="page-title">
    Euchomai
  </div>
  <div class="title-body">
    This a post by Aaron Smith. You can also go to my
    <a class="link" href="/">home page</a>
    or <a class="link" href="/blog.html">blog</a>.
  </div>
`, 'text/html')

const suggestablePosts = [
  {
    title: 'No Little Disturbance in Ephesus',
    href: '/blog/disturbance.html',
  },
  {
    title: 'Troy, circa 2024',
    href: '/blog/troy.html',
  },
  {
    title: 'Olympic Torch Relay in Montpellier',
    href: '/blog/torch.html',
  },
  {
    title: 'Euchomai',
    href: '/blog/euchomai.html',
  },
]

function createSuggestions() {
  // Suggest suggestable posts other than the current one.
  const suggestions = suggestablePosts
    .filter(p => p.href != window.location.pathname)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);
  const randomColor = Math.floor(Math.random() * 2) + 1;

  return parser.parseFromString(`
    <div class="suggestions-container">
      <div class="suggestions-title">If you liked this post, you may also like...</div>
      <div class="suggestions-grid">
        <a class="suggestion-color-${randomColor % 3 + 1} suggestion" href="${suggestions[0].href}">
          ${suggestions[0].title}
        </a>
        <a class="suggestion-color-${(randomColor + 1) % 3 + 1} suggestion" href="${suggestions[1].href}">
          ${suggestions[1].title}
        </a>
        <a class="suggestion-color-${(randomColor + 2) % 3 + 1} suggestion" href="${suggestions[2].href}">
          ${suggestions[2].title}
        </a>
      </div>
    </div>
  `, 'text/html');
}


document.getElementById('title').replaceWith(title.documentElement);
document.getElementById('suggestions').replaceWith(createSuggestions().documentElement);