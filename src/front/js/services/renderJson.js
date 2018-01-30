/**
 * Gets element with log message data.
 *
 * @param {String} data Log message data.
 */
const getCodeElement = (data) => {
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
const getIpElement = (ip) => {
  const s = document.createElement('span');
  s.className = 'ip';
  s.innerHTML = ip;

  return s;
};

/**
 * Gets element with current date.
 */
const getDateElement = () => {
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
const getTags = (data) => {
  const d = document.createElement('div');
  d.className = 'tags';
  d.appendChild(getDateElement());
  d.appendChild(getIpElement(data.ip));

  return d;
};

/**
 * Renders new log message.
 *
 * @access public
 *
 * @param {Object} data LOG.NEW payload.
 * @param {Boolean} autoScroll In case of enabled autoScrool - scroll window.
 */
const renderJson = (data, autoScroll) => {
  const p = document.createElement('p');
  p.appendChild(getTags(data));
  p.appendChild(getCodeElement(data.data));
  document.getElementById('root').appendChild(p);

  if (autoScroll === true) {
    window.scrollTo(0, document.body.scrollHeight);
  }
};

module.exports = renderJson;
