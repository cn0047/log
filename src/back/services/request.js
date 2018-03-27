/**
 * Request service.
 *
 * Here you can find helpful methods to interact with request object.
 */
const request = {};

/**
 * Gets ip address from request object.
 *
 * @param {Object} req HTTP request.
 */
request.getIp = req => req.headers['x-forwarded-for']
  || req.connection.remoteAddress
  || req.socket.remoteAddress
  || req.connection.socket.remoteAddress;

module.exports = request;
