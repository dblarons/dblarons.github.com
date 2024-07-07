const parser = new DOMParser();

const title = parser.parseFromString(`
  <div class="page-title">
    Euchomai
  </div>
  <div class="title-body">
    This is the blog of Aaron Smith. You can also go to my
    <a class="link" href="/">home page</a>
    or <a class="link" href="/blog.html">blog</a>.
  </div>
`, 'text/html')

const suggestions = parser.parseFromString(`
  <div class="suggestions-container">
    <div class="suggestions-title">If you liked this post, you may also like...</div>
    <div class="suggestions-grid">
      <a class="suggestion-color-1 suggestion" href="/blog/disturbance.html">
        No Little Disturbance in Ephesus
      </a>
      <a class="suggestion-color-2 suggestion" href="/blog/torch.html">
        Olympic Torch Relay in Montpellier
      </a>
      <a class="suggestion-color-3 suggestion" href="/blog/euchomai.html">
        Euchomai
      </a>
    </div>
  </div>
`, 'text/html');

document.getElementById('title').replaceWith(title.documentElement);
document.getElementById('suggestions').replaceWith(suggestions.documentElement);