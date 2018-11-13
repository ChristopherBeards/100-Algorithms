const assert = require('chai').assert;
const expect = require('chai').expect;
const allLongestStrings = require('../allLongestStrings/allLongestStrings.js');

const testArray = ['aba', 'aa', 'ad', 'vcd', 'aba'];

describe('All Longest Strings', () => {
  it('Should return an array', () => {
    expect(allLongestStrings(testArray)).to.be.an('array');
  });

  it('Should return all the longest strings', () => {
    expect(allLongestStrings(testArray)).to.be.eql(['aba', 'vcd', 'aba']);
  })
});
