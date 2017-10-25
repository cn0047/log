/** global: io */
const socket = io.connect();
const streamId = window.location.pathname.substring(1);
let autoScrool = true;

/**
 * Gets element with log message data.
 *
 * @param {String} data Log message data.
 */
function getCodeElement(data) {
  const c = document.createElement('code');
  c.className = 'code blink hljs json';
  c.innerHTML = JSON.stringify(data, null, "\t"); // eslint-disable-line
  /** global: hljs */
  hljs.highlightBlock(c);

  const pre = document.createElement('pre');
  pre.appendChild(c);

  return pre;
}

/**
 * Gets element with ip address.
 *
 * @param {String} ip Ip address.
 */
function getIpElement(ip) {
  const s = document.createElement('span');
  s.className = 'ip';
  s.innerHTML = ip;

  return s;
}

/**
 * Gets element with current date.
 */
function getDateElement() {
  const s = document.createElement('span');
  s.className = 'date';
  s.innerHTML = (new Date()).toLocaleDateString(
    'en-GB',
    { hour: '2-digit', minute: '2-digit', second: '2-digit' },
  );

  return s;
}

/**
 * Gets element with tags content.
 *
 * @param {Object} data LOG.NEW payload.
 */
function getTags(data) {
  const d = document.createElement('div');
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
  const p = document.createElement('p');
  p.appendChild(getTags(data));
  p.appendChild(getCodeElement(data.data));
  document.getElementById('root').appendChild(p);

  if (autoScrool === true) {
    window.scrollTo(0, document.body.scrollHeight);
  }
}

/**
 * Handler for menu "news" link, which is open menu block.
 */
document.getElementById('menuNews').addEventListener('click', () => {
  document.getElementById('news').style.display = 'block';
});

/**
 * Handler for close image, which is close (hide) parent element.
 */
document.getElementById('close').addEventListener('click', (e) => {
  e.target.parentElement.style.display = 'none';
});

/**
 * Auto-scrolling to latest data.
 */
window.addEventListener('onscroll', () => {
  autoScrool = (
    (window.innerHeight + window.scrollY) >= document.body.offsetHeight
  );
});

/**
 * Handler for WebSocket 'connect' event.
 * Emits 'join' event which is intended to join WebSocket room for current streamId.
 */
socket.on('connect', () => {
  socket.emit('join', streamId);
});

/**
 * Handler for new data.
 * Renders data on web page (add to the bottom).
 *
 * @event LOG.NEW
 */
socket.on('log', (data) => {
  // It is only way to render proper data because socket.io rooms disabled here
  // @see https://github.com/cn007b/log/blob/master/src/routes/index.js#L49
  if (data.streamId !== streamId) {
    return;
  }
  if (data.format === 'json') {
    renderJson(data);
  }
});
