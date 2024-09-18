const calculateNumber = (type, a, b) => {
  const val1 = Math.round(a);
  const val2 = Math.round(b);

  switch (type) {
    case 'SUM':
      return val1 + val2;
    case 'SUBTRACT':
      return val1 - val2;
    case 'DIVIDE':
      return val2 === 0 ? 'Error' : val1 / val2;
    default:
      throw new Error('Invalid type');
  }
};

module.exports = calculateNumber;
