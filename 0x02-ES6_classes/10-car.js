export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  get brand() {
    return this._brand;
  }

  set brand(argVal) {
    if (typeof argVal === 'string') this._brand = argVal;
    else throw new TypeError('Brand must be a string');
  }

  get motor() {
    return this._motor;
  }

  set motor(argVal) {
    if (typeof argVal === 'string') this._motor = argVal;
    else throw new TypeError('Motor must be a string');
  }

  get color() {
    return this._color;
  }

  set color(argVal) {
    if (typeof argVal === 'string') this._color = argVal;
    else throw new TypeError('Color must be a string');
  }

  static get [Symbol.species]() {
    return this;
  }

  cloneCar() {
    const Sps = this.constructor[Symbol.species];
    const carClone = new Sps();

    return carClone;
  }
}
