const app = {
  autoScrool: true,
};

/**
 * Init sentry, for capturing frontend errors.
 */
/** global: Raven */
/** global: sentryDSN */
Raven.config(sentryDSN).install();

// Enable autoScrool by default.
// This code redundant, but it necessary for code quality checkers...
// Now app variable doesn't looks like never used 🤓🙈😁
app.autoScrool = true;

// Disable Google Analytics tracking function for DEV environment.
// With the purpose don't break other places - here just define mock.
if (typeof gtag === 'undefined') {
  window.gtag = () => {};
}
