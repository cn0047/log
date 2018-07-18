const config = require('./../configs/main');

/**
 * Tracks into GoogleAnalytics events about click on "codeExample" block.
 */
const trackClickCodeExample = () => {
  if (config.googleAnalyticsEnabled === false) {
    return;
  }

  window.gtag('event', 'click.codeExample', { event_category: 'click', event_label: 'Help', value: 1 });
};

module.exports = { trackClickCodeExample };
