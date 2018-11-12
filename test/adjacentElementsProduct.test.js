const assert = require('chai').assert;
const expect = require('chai').expect;
const adjacentElementsProduct = require('../adjacentElementsProduct/adjacentElementsProduct.js');

describe('Adjacent Element Product', () => {
  it('Should return an integer', () => {
    expect(adjacentElementsProduct([3, 6, -2, -5, 7, 3])).to.be.an('number');
  });

  it('Should return the pair of adjacent elements that have the largest product', () => {
    assert.equal(adjacentElementsProduct([3, 6, -2, -5, 7, 3]), 21);
  });
});