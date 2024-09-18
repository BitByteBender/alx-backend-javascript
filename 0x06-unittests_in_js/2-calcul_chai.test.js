const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('SUM op', () => {
    it('Returns the sum of rounded nums', () => {
      expect(calculateNumber('SUM', -2.4, -3.6), -6);
      expect(calculateNumber('SUM', -1.6, -4.7), -7);
      expect(calculateNumber('SUM', 3.4, 6.2), 9);
      expect(calculateNumber('SUM', -15.2, 3.9), -11);
      expect(calculateNumber('SUM', 0, 0), 0);
    });
  });

  describe('SUBTRACT op', () => {
    it('Returns the diff of rounded nums', () => {
      expect(calculateNumber('SUBTRACT', -3.4, -4.7), 2);
      expect(calculateNumber('SUBTRACT', -5.7, -7.7), 2);
      expect(calculateNumber('SUBTRACT', 1.3, 6.6), -6);
      expect(calculateNumber('SUBTRACT', -5.7, 2.9), -9);
      expect(calculateNumber('SUBTRACT', 0, 0), 0);
    });
  });

  describe('DIV op', () => {
    it('Returns the div result of rounded nums', () => {
      expect(calculateNumber('DIVIDE', -9.4, 2.3), -4.5);
      expect(calculateNumber('DIVIDE', -5.7, -3.7), 1.5);
      expect(calculateNumber('DIVIDE', 1.3, 1.6), 0.5);
      expect(calculateNumber('DIVIDE', -5.7, 0.9), -6);
      expect(calculateNumber('DIVIDE', 0, 2.6), 0);
    });
  });

  describe('DIV By 0 op', () => {
    it('Throws an Error when dividing by 0', () => {
      expect(calculateNumber('DIVIDE', -3.4, 0), 'Error');
      expect(calculateNumber('DIVIDE', -5.3, 0), 'Error');
      expect(calculateNumber('DIVIDE', 0, 0), 'Error');
    });
  });

  describe('Invalid op', () => {
    it('Throws an Error for invalid op types', () => {
      expect(() => calculateNumber('MULTI', 3.2, 0)).to.throw(Error);
      expect(() => calculateNumber('ADD', -2.3, 2)).to.throw(Error);
      expect(() => calculateNumber('REMAINDER', 1, 2.6)).to.throw(Error);
      expect(() => calculateNumber('SQRT', 25, 2)).to.throw(Error);
    });
  });
});
