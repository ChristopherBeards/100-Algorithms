const alternatingSums = require('../alternatingSums/alternatingSums');
const assert = require('chai').assert;
const expect = require('chai').expect;

describe('Alternating Sums', () => {
  it('Should return an array of values', () => {
    expect(alternatingSums([50, 60, 60, 45, 70])).to.be.an('array');
  });

  it('Should return an array of two values; correctly totaling the values', () => {
    assert.deepEqual(alternatingSums([50, 60, 60, 45, 70]), [180, 105]);
  });
});
