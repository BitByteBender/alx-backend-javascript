const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  let spy;

  beforeEach(() => {
    spy = sinon.spy(Utils, 'calculateNumber');
    sinon.stub(console, 'log');
  });

  afterEach(() => {
    spy.restore();
    console.log.restore();
  });

  it('Validating the usage of the Utils function', () => {
    const totalAmount = 100, totalShipping = 20;

    sendPaymentRequestToApi(totalAmount, totalShipping);
    expect(spy.calledOnce).to.be.true;
    expect(spy.calledWith('SUM', totalAmount, totalShipping)).to.be.true;
  });
});
