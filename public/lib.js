/**
 * This variable is holder for all private functions.
 */
const lib = {};

/**
 * Gets element with log message data.
 *
 * @param {String} data Log message data.
 */
lib.getCodeElement = (data) => {
  const c = document.createElement('code');
  c.className = 'code blink hljs json';
  c.innerHTML = JSON.stringify(data, null, "\t"); // eslint-disable-line
  /** global: hljs */
  hljs.highlightBlock(c);

  const pre = document.createElement('pre');
  pre.appendChild(c);

  return pre;
};

/**
 * Gets element with ip address.
 *
 * @param {String} ip Ip address.
 */
lib.getIpElement = (ip) => {
  const s = document.createElement('span');
  s.className = 'ip';
  s.innerHTML = ip;

  return s;
};

/**
 * Gets element with current date.
 */
lib.getDateElement = () => {
  const s = document.createElement('span');
  s.className = 'date';
  s.innerHTML = (new Date()).toLocaleDateString(
    'en-GB',
    { hour: '2-digit', minute: '2-digit', second: '2-digit' },
  );

  return s;
};

/**
 * Gets element with tags content.
 *
 * @param {Object} data LOG.NEW payload.
 */
lib.getTags = (data) => {
  const d = document.createElement('div');
  d.className = 'tags';
  d.appendChild(lib.getDateElement());
  d.appendChild(lib.getIpElement(data.ip));

  return d;
};

/**
 * Renders new log message.
 *
 * @access public
 *
 * @param {Object} data LOG.NEW payload.
 * @param {Boolean} autoScrool In case of enabled autoScrool - scroll window.
 */
const renderJson = (data, autoScrool) => {
  const p = document.createElement('p');
  p.appendChild(lib.getTags(data));
  p.appendChild(lib.getCodeElement(data.data));
  document.getElementById('root').appendChild(p);

  if (autoScrool === true) {
    window.scrollTo(0, document.body.scrollHeight);
  }
}
