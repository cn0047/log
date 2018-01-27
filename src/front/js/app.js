require('../s/main.css');

// Disable Google Analytics tracking function for DEV environment.
// With the purpose don't break other places - here just define mock.
/** global: gtag */
if (typeof gtag === 'undefined') {
  window.gtag = () => {};
}
