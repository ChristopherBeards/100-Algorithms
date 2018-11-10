const assert = require('chai').assert;
const absoluteValuesSumMinization = require('../absoluteValuesSumMinization/absoluteValuesSumMinization.js');

describe('Absolute Values Sum Minization', () => {
  it('Should return 4', () => {
    assert.equal(absoluteValuesSumMinization([2, 4, 7]), 4);
  });

  it('Should return 4', () => {
    assert.equal(absoluteValuesSumMinization([2, 4, 7, 6]), 4);
  });

  it('Should return 7', () => {
    assert.equal(absoluteValuesSumMinization([2, 4, 7, 6, 6]), 7);
  });

  it('Should return 7', () => {
    assert.equal(absoluteValuesSumMinization([2, 4, 7, 6, 6, 8]), 7);
  });
});
