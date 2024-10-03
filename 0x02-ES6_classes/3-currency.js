export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  get name() {
    return this._name;
  }

  set name(val) {
    if (typeof (val) === 'string') {
      this._name = val;
    }
  }

  get code() {
    return this._code;
  }

  set code(val) {
    if (typeof (val) === 'string') {
      this._code = val;
    }
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
