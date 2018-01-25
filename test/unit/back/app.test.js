const app = require('./../../../src/back/app');

describe('App bootstrap.', () => {
  test('Main test', () => {
    // Just for the sake of testing, assert that app is object.
    expect(app instanceof Object).toBeTruthy();
  });
});
