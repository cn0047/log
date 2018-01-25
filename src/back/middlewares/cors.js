/**
 * Adds CORS headers to HTTP response.
 *
 * @param {Object} req HTTP request.
 * @param {Object} res HTTP response.
 * @param {Function} next Callback to the middleware function.
 */
module.exports = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
};
