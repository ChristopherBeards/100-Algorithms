const assert = require('chai').assert;
const expect = require('chai').expect;
const alphabeticShift = require('../alphabeticShift/alphabeticShift.js');

describe('Alphabetic Shift', () => {
  it('Should return a string', () => {
    expect(alphabeticShift('crazy')).to.be.an('string');
  });

  it('Should return the next letter for each one provided', () => {
    expect(alphabeticShift('crazy')).to.be.eql('dsbaz');
  })
});