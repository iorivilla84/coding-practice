// test needs mocha and node installed to call default functions
// THIS AUTOMATED TEST IS TESTING FOR ERROR FROM ./ROOSTER-APP.JS.

const assert = require('assert');
const Rooster = require('../index');
const fs = require('fs');

describe('tells the time for rooster wakeup', () => {
  describe('wake up time', () => {
    it('returns a rooster call', () => {
      // Define expected output
      const expected = 'cock-a-doodle-doo!';

      // Call Rooster.announceDawn and store result in variable
      const result = Rooster.announceDawn;

      // Use an assert method to compare actual and expected result
      assert.ok(result, expected)
    })
  })
})

describe('timeAtDawn', () => {
  it('throws an error if passed a number less than 0', () => {
    // Setup
    const invalidHour = -1;

    // Exercise and Verify
    assert.throws(
      () => {
        Rooster.timeAtDawn(invalidHour);
      },
      RangeError
    );
  });

  it('throws an error if passed a number greater than 23', () => {
    // Setup
    const invalidHour = 24;

    // Exercise and Verify
    assert.throws(
      () => {
        Rooster.timeAtDawn(invalidHour);
      },
      RangeError
    );
  });
});
