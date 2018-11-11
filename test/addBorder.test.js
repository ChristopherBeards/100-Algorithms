const assert = require('chai').assert;
const addBorder = require('../addBorder/addBorder.js');

describe('Add Border', () => {
  it('Should return an array properly framed', () => {
    assert.equal(addBorder(['abc', 'ded']), [
      '*****',
      '*abc*',
      '*ded*',
      '*****',
    ]);
  });
});
