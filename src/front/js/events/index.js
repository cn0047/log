const app = require('./../app');
const { trackClickCodeExample } = require('./../services/googleAnalytics');

/**
 * Handler for scroll event
 * which performs auto-scrolling to latest data.
 */
const scrollHandler = () => {
  app.setAutoScroll((window.innerHeight + window.scrollY) >= document.body.offsetHeight);
};

/**
 * Event for click on block "codeExample" - just track into GoogleAnalytics.
 */
document.querySelectorAll('pre.codeExample').forEach((el) => {
  el.addEventListener('click', () => trackClickCodeExample());
});

/**
 * Auto-scrolling to latest data.
 */
window.addEventListener('onscroll', scrollHandler);

/**
 * Auto-scrolling to latest data.
 */
window.addEventListener('scroll', scrollHandler);
