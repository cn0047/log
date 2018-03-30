/**
 * Newrelic config.
 */
exports.config = {
  app_name: [global.NEW_RELIC_APP_NAME],
  license_key: global.NEW_RELIC_LICENSE_KEY,
  logging: {
    level: global.NEW_RELIC_LOGGING_LEVEL,
  },
  allow_all_headers: true,
  attributes: {
    exclude: [
      'request.headers.cookie',
      'request.headers.authorization',
      'request.headers.proxyAuthorization',
      'request.headers.setCookie*',
      'request.headers.x*',
      'response.headers.cookie',
      'response.headers.authorization',
      'response.headers.proxyAuthorization',
      'response.headers.setCookie*',
      'response.headers.x*',
    ],
  },
};
