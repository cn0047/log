/**
 * Deletes "X-Powered-By" header from HTTP response.
 *
 * @param {Object} req HTTP request.
 * @param {Object} res HTTP response.
 * @param {Function} next Callback to the middleware function.
 */
module.exports = (req, res, next) => {
  res.removeHeader('X-Powered-By');
  next();
};
