const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('Return value should be 6', () => {
    assert.equal(calculateNumber(1.6, 3.6), 6);
  });

  it('Return value should be 0', () => {
    assert.equal(calculateNumber(0.4, 0.2), 0);
  });

  it('Return value should be 4', () => {
    assert.equal(calculateNumber(2, 2), 4);
  });

  it('Return value should be 5', () => {
    assert.equal(calculateNumber(2.5, 2.4), 5);
  });

  it('Checking negative numbers', () => {
    assert.equal(calculateNumber(6, -11), -5);
    assert.equal(calculateNumber(-3, 10), 7);
    assert.equal(calculateNumber(-8, -11), -19);
  });

  it('Checking positive numbers', () => {
    assert.equal(calculateNumber(6, 11), 17);
    assert.equal(calculateNumber(3, 10), 13);
    assert.equal(calculateNumber(8, 2), 10);
  });

  it('Checking negative float numbers', () => {
    assert.equal(calculateNumber(6.2, -11.3), -5);
    assert.equal(calculateNumber(-3.6, 9.2), 5);
    assert.equal(calculateNumber(-7.4, -11.6), -19);
  });

  it('Checking large numbers', () => {
    assert.equal(calculateNumber(6750, 250), 7000);
    assert.equal(calculateNumber(-3350, 12250), 8900);  
    assert.equal(calculateNumber(-29285.4, -52714.6), -82000);
  });
});
