export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(argVal) {
    if (typeof argVal === 'string') this._name = argVal;
    else throw new TypeError('Name must be a string');
  }

  get length() {
    return this._length;
  }

  set length(argVal) {
    if (typeof argVal === 'number') this._length = argVal;
    else throw new TypeError('Length must be a number');
  }

  get students() {
    return this._students;
  }

  set students(argVal) {
    if ((argVal instanceof Array) && argVal.every((student) => typeof student === 'string')) {
      this._students = argVal;
    } else {
      throw new TypeError('Students must be an array of strings');
    }
  }
}
