/*
 * Stubs the calcNum func to always return 10
 * Spys on console.log
 * Restores both stub n' spy
 * Verifies the stub with expected args
 * Verifies if logged msg is called with the correct msg
 */
const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  let spy, stub;

  beforeEach(() => {
    stub = sinon.stub(Utils, 'calculateNumber').returns(10);
    spy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    stub.restore();
    spy.restore();
  });

  it('Validating the usage of the Utils function', () => {
    const totalAmount = 100, totalShipping = 20;

    sendPaymentRequestToApi(totalAmount, totalShipping);
    expect(stub.calledOnce).to.be.true;
    expect(stub.calledWith('SUM', totalAmount, totalShipping)).to.be.true;
    expect(spy.calledOnce).to.be.true;
    expect(spy.calledWith('The total is: 10')).to.be.true;
  });
});
