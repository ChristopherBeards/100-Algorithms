const assert = require('chai').assert;
const expect = require('chai').expect;
const allLongestStrings = require('../allLongestStrings/allLongestStrings.js');

describe('All Longest Strings', () => {
  it('Should return an array', () => {
    expect(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"])).to.be.an('array');
  });
})