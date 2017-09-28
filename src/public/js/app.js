/** global: io */
var socket = io.connect();
var streamId = window.location.pathname.substring(1);
var autoScrool = true;

/**
 * Gets element with log message data.
 *
 * @param {String} data Log message data.
 */
function getCodeElement(data) {
  var c = document.createElement('code');
  c.className = 'code blink hljs json';
  c.innerHTML = JSON.stringify(data, null, "\t");
  /** global: hljs */
  hljs.highlightBlock(c);

  var pre = document.createElement('pre');
  pre.appendChild(c);

  return pre;
}

/**
 * Gets element with ip address.
 *
 * @param {String} ip Ip address.
 */
function getIpElement(ip) {
  var s = document.createElement('span');
  s.className = 'ip';
  s.innerHTML = ip;

  return s;
}

/**
 * Gets element with current date.
 */
function getDateElement() {
  var s = document.createElement('span');
  s.className = 'date';
  s.innerHTML = (new Date()).toLocaleDateString(
    'en-GB',
    {hour: '2-digit', minute: '2-digit', second: '2-digit'}
  );

  return s;
}

/**
 * Gets element with tags content.
 *
 * @param {Object} data LOG.NEW payload.
 */
function getTags(data) {
  var d = document.createElement('div');
  d.className = 'tags';
  d.appendChild(getDateElement());
  d.appendChild(getIpElement(data.ip));

  return d;
}

/**
 * Renders new log message.
 *
 * @param {Object} data LOG.NEW payload.
 */
function renderJson(data) {
  var p = document.createElement('p');
  p.appendChild(getTags(data));
  p.appendChild(getCodeElement(data.data));
  document.getElementById('root').appendChild(p);

  if (autoScrool === true) {
    window.scrollTo(0, document.body.scrollHeight);
  }
}

/**
 * Auto-scrolling to latest data.
 */
window.onscroll = function() {
  autoScrool = (
    (window.innerHeight + window.scrollY) >= document.body.offsetHeight
  );
};

/**
 * Handler for new data.
 * Renders data on web page (add to the bottom).
 *
 * @event LOG.NEW
 */
socket.on('log', function(data) {
  if (data.streamId !== streamId) {
    return;
  }
  if (data.format === 'json') {
    return renderJson(data);
  }
  console.error('Got unsupported format: %s', data.format);
});
