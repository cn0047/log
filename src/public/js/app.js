const app = {
  autoScrool: true,
};

// Init sentry, for capturing frontend errors.
Raven.config(sentryDSN).install();
