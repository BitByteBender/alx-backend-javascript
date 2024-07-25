import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  get range() {
    return this._range;
  }

  set range(argVal) {
    if (typeof argVal === 'string') this._range = argVal;
    else throw new TypeError('Range must be a string');
  }

  cloneCar() {
    const Sps = super.constructor[Symbol.species];
    const carClone = new Sps();

    return carClone;
  }
}
