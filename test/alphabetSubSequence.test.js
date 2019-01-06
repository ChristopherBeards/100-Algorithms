const expect = require('chai').expect;
const alphabetSubSequence = require('../alphabetSubSequence/alphabetSubSequence');

describe('alphabetSubSequence', () => {
  it('is a function', () => {
    expect(alphabetSubSequence).to.be.an('function');
  });

  it('returns a boolean', () => {
    expect(alphabetSubSequence('a')).to.be.an('boolean');
  });

  it('checks if the given string is a subsequence of the plaintext alphabet', () => {
    expect(alphabetSubSequence('effg')).to.equal(false);
    expect(alphabetSubSequence('cdce')).to.equal(false);
    expect(alphabetSubSequence('ace')).to.equal(true);
    expect(alphabetSubSequence('bxz')).to.equal(true);
  });
});
