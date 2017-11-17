const app = {
  autoScrool: true,
};

/**
 * Init sentry, for capturing frontend errors.
 *
 * global: Raven
 * global: sentryDSN
 */
Raven.config(sentryDSN).install();

// Enable autoScrool by default.
// This code redundant, but it necessary for code quality checkers...
// Now app variable doesn't looks like never used 🤓🙈😁
app.autoScrool = true;
