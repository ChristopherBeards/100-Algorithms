const assert = require('chai').assert;
const add = require('../add/add.js');

describe('Add', () => {
  it('Should return 4', () => {
    assert.equal(add(2, 2), 4);
  });

  it('Should return 10', () => {
    assert.equal(add(5, 5), 10);
  });
});
