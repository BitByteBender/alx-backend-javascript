const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('SUM op', () => {
    it('Returns the sum of rounded nums', () => {
      assert.equal(calculateNumber('SUM', -2.4, -3.6), -6);
      assert.equal(calculateNumber('SUM', -1.6, -4.7), -7);
      assert.equal(calculateNumber('SUM', 3.4, 6.2), 9);
      assert.equal(calculateNumber('SUM', -15.2, 3.9), -11);
      assert.equal(calculateNumber('SUM', 0, 0), 0);
    });
  });

  describe('SUBTRACT op', () => {
    it('Returns the diff of rounded nums', () => {
      assert.equal(calculateNumber('SUBTRACT', -3.4, -4.7), 2);
      assert.equal(calculateNumber('SUBTRACT', -5.7, -7.7), 2);
      assert.equal(calculateNumber('SUBTRACT', 1.3, 6.6), -6);
      assert.equal(calculateNumber('SUBTRACT', -5.7, 2.9), -9);
      assert.equal(calculateNumber('SUBTRACT', 0, 0), 0);
    });
  });

  describe('DIV op', () => {
    it('Returns the div result of rounded nums', () => {
      assert.equal(calculateNumber('DIVIDE', -9.4, 2.3), -4.5);
      assert.equal(calculateNumber('DIVIDE', -5.7, -3.7), 1.5);
      assert.equal(calculateNumber('DIVIDE', 1.3, 1.6), 0.5);
      assert.equal(calculateNumber('DIVIDE', -5.7, 0.9), -6);
      assert.equal(calculateNumber('DIVIDE', 0, 2.6), 0);
    });
  });

  describe('DIV By 0 op', () => {
    it('Throws an Error when dividing by 0', () => {
      assert.equal(calculateNumber('DIVIDE', -3.4, 0), 'Error');
      assert.equal(calculateNumber('DIVIDE', -5.3, 0), 'Error');
      assert.equal(calculateNumber('DIVIDE', 0, 0), 'Error');
    });
  });

  describe('Invalid op', () => {
    it('Throws an Error for invalid op types', () => {
      assert.throws(() => calculateNumber('MULTI', 3.2, 0), Error);
      assert.throws(() => calculateNumber('ADD', -2.3, 2), Error);
      assert.throws(() => calculateNumber('REMAINDER', 1, 2.6), Error);
      assert.throws(() => calculateNumber('SQRT', 25, 2), Error);
    });
  });
});
