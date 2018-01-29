const app = require('./../app');

/**
 * Handler for menu "news" link, which is open menu block.
 */
document.getElementById('menuNews').addEventListener('click', () => {
  document.getElementById('news').style.display = 'block';
});

/**
 * Handler for close image, which is close (hide) parent element.
 */
document.getElementById('close').addEventListener('click', (e) => {
  e.target.parentElement.style.display = 'none';
});

/**
 * Auto-scrolling to latest data.
 */
window.addEventListener('onscroll', () => {
  app.setAutoScroll((window.innerHeight + window.scrollY) >= document.body.offsetHeight);
});
