const app = require('./../app');
const { trackClickCodeExample } = require('./../services/googleAnalytics');

/**
 * Event for click on block "codeExample" - just track into GoogleAnalytics.
 */
document.querySelectorAll('pre.codeExample').forEach((el) => {
  el.addEventListener('click', () => trackClickCodeExample());
});

/**
 * Auto-scrolling to latest data.
 */
window.addEventListener('onscroll', () => {
  app.setAutoScroll((window.innerHeight + window.scrollY) >= document.body.offsetHeight);
});
