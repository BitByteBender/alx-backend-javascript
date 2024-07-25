import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(argVal) {
    if (typeof agVal === 'number') this._amount = argVal;
    else throw new TypeError('Amount must be a number');
  }

  get currency() {
    return this._currency;
  }

  set currency(argVal) {
    if (argVal instanceof Currency) this._currency = argVal;
    else throw new TypeError('Currency must be an instance of Currency');
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
      throw new TypeError('Amount and conversionRate must be numbers');
    }

    return amount * conversionRate;
  }
}
