const config = require('./configs/main');
require('../s/main.css');

// Disable Google Analytics tracking function for DEV environment.
// With the purpose don't break other places - here just define mock.
/** global: gtag */
if (typeof gtag === 'undefined') {
  window.gtag = () => {};
}

module.exports = {
  config,

  /**
   * Gets current Stream Id from current URL.
   *
   * @returns {string} Current Stream Id.
   */
  getStreamId: () => window.location.pathname.substring(1),

  /**
   * Gets auto-scrolling value, by default true.
   *
   * @returns {boolean}
   */
  getAutoScroll: () => config.autoScroll,

  /**
   * Sets auto-scrolling value.
   *
   * @param {boolean} value Auto-scrolling value.
   */
  setAutoScroll: (value) => {
    config.autoScroll = value;
  },
};
