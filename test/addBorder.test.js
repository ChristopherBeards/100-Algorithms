const expect = require('chai').expect;
const addBorder = require('../addBorder/addBorder.js');

describe('Add Border', () => {
  it('Should return an array', () => {
    expect(addBorder(['abc', 'ded'])).to.be.an('array');
  });

  it('Should return an array properly framed', () => {
    // expect().to.eql checks for deep equality or sameness
    expect(addBorder(['abc', 'ded'])).to.eql([
      '*****',
      '*abc*',
      '*ded*',
      '*****',
    ]);
  });
});
