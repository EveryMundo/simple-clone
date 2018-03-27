
const { expect } = require('chai');
const { clone, realClone }  = require('../');

describe('clone', () => {
  it('should return a different obj with the same structure', () => {
    const original = {a: 1, b: 'two', c:[true], d:{e:'f'}};
    const result = clone(original);

    expect(result).to.not.equal(original);
    expect(result).to.deep.equal(original);
  });
});

describe('realClone', () => {
  it('should return a different obj with the same structure', () => {
    const original = {a: 1, b: 'two', c:[true], d:{e:'f'}};
    const result = realClone(original);

    expect(result).to.not.equal(original);
    expect(result).to.deep.equal(original);
  });

  it('should return a different Array with the copy of the values', () => {
    const original = [{a: 1}, {b: 'two'}, [true], {d:{e:'f'}}];
    const result = realClone(original);

    expect(result).to.not.equal(original);
    expect(result).to.deep.equal(original);
  });

  it('should return a clone of the input signalizing the Circular ref', () => {
    const someObject = { a: 1, original: '[Circular]' };
    const original = [someObject, {b: 'two'}, [true], {d:{e:'f'}}];

    // cloning original before adding Circular ref
    const expected = clone(original);

    // adds circular ref
    someObject.original = original;

    const result = realClone(original);

    expect(result).to.not.equal(original);
    expect(result).to.deep.equal(expected);
  });
});