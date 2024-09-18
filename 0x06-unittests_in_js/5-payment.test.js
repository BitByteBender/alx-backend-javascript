/*
 * Spys on console.log
 * Restores spy
 * Verifies if logged msg is called with the correct msg
 */
const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  let spy;

  beforeEach(() => {
    spy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    spy.restore();
  });

  it('Validates the total sum', () => {
    const totalAmount = 100, totalShipping = 20;

    sendPaymentRequestToApi(totalAmount, totalShipping);
    expect(spy.calledOnce).to.be.true;
    expect(spy.calledWith('The total is: 120')).to.be.true;
  });

  it('Validates the total sum', () => {
    const totalAmount = 10, totalShipping = 10;

    sendPaymentRequestToApi(totalAmount, totalShipping);
    expect(spy.calledOnce).to.be.true;
    expect(spy.calledWith('The total is: 20')).to.be.true;
  });
});
