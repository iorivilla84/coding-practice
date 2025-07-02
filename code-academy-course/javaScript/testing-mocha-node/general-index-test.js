const assert = require('assert');
const Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.sum',() => {
    it('returns the sum of an array of numbers', () => {
      const inputArray = [1,2,3]
      const calcArray = Calculate.sum(inputArray);
      const expectedRestul = 6;
      assert.strictEqual(calcArray, expectedRestul);
    });
  });
});
