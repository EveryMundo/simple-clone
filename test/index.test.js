
const { expect } = require('chai');
const { clone }  = require('../');

describe('clone', () => {
  it('should return a different obj with the same structure', () => {
    const original = {a: 1, b: 'two', c:[true], d:{e:'f'}};
    const result = clone(original);

    expect(result).to.not.equal(original);
    expect(result).to.deep.equal(original);
  });
});