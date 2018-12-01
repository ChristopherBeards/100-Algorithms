const assert = require('chai').assert;
const expect = require('chai').expect;
const checkSpelling = require('../checkSpelling/checkSpelling.js');

describe('Check Spelling', () => {
  it("Returns false if the lengths don't match", () => {
    expect(checkSpelling('helo', 'hello')).to.equal(false);
  });

  it('Returns that the strings contain the same values', () => {
    expect(checkSpelling('helol', 'hello')).to.equal(true);
  });

  it('Returns false if the lengths are the same but the values differ', () => {
    expect(checkSpelling('qwert', 'hello')).to.equal(false);
  });
});
