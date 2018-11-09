const assert = require('chai').assert;
const absoluteValuesSumMinization = require('../absoluteValuesSumMinization/absoluteValuesSumMinization.js');

describe('Absolute Values Sum Minization', () => {
  it('Should return expected result', () => {
    assert.equal(absoluteValuesSumMinization([2, 4, 7]), 4);
  });
});
