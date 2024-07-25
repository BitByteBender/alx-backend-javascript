export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(argVal) {
    if (typeof argVal === 'string') this._code = argVal;
    else throw new TypeError('Code must be a string');
  }

  get name() {
    return this._name;
  }

  set name(argVal) {
    if (typeof argVal === 'string') this._name = argVal;
    else throw new TypeError('Name must be a string');
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
