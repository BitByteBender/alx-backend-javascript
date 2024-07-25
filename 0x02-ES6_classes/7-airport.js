export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  get name() {
    return this._name;
  }

  set name(argVal) {
    if (typeof argVal === 'string') this._name = argVal;
    else throw new TypeError('Name must be a string');
  }

  get code() {
    return this._code;
  }

  set code(argVal) {
    if (typeof argVal === 'string') this._code = argVal;
    else throw new TypeError('Code must be a string');
  }

  get [Symbol.toStringTag]() {
    return this._code;
  }
}
