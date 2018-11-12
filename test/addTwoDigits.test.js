const assert = require('chai').assert;
const expect = require('chai').expect;
const addTwoDigits = require('../addTwoDigits/addTwoDigits.js');

describe('Add Two Digits', () => {
  it('Should return a number', () => {
    expect(addTwoDigits(55)).to.be.an('integer');
  });

  it('Should return the sum of two digits', () => {
    assert.equal(addTwoDigits(55), 10);
  });
})