const assert = require('chai').assert;
const expect = require('chai').expect;
const almostIncreasingSequence = require('../almostIncreasingSequence/almostIncreasingSequence.js');

describe('Almost Increasing Sequence', () => {
  it('Should return a boolean', () => {
    expect(almostIncreasingSequence([1, 3, 2, 1])).to.be.an('boolean');
  });

  it('Should return whether or not it\'s possible to obtain a strictly increasing sequence by removing no more than one element', () => {
    assert.equal(almostIncreasingSequence([1, 3, 2, 1]), false);
    assert.equal(almostIncreasingSequence([1, 3, 2]), true);
  })
})