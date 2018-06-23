const ssn = require('short-string-number');

const config = require('./../configs/main');

/**
 * Counter - is class which calculates count of received messages
 * and shows current count value in counter block.
 */
class Counter {
  /**
   * Counter's constructor.
   */
  constructor() {
    this.count = 0;
  }

  /**
   * Increments counter value.
   */
  inc() {
    this.count += 1;

    this.showCount();
  }

  /**
   * Renders current counter value counter block.
   */
  showCount() {
    const c = ssn(this.count);
    document.getElementById('counter').innerHTML = typeof c === 'number' ? c.toString() : c;
    document.getElementById('counterPrecise').innerHTML = this.count.toString();

    if (this.count >= config.thresholdToDisplayCounter) {
      document.getElementById('counterBlock').style.display = 'block';
    }
  }
}

module.exports = new Counter();
