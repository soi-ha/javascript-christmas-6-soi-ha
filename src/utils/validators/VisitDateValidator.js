import ERROR from '../constants/error.js';

export class VisitDateValidator {
  #date;

  constructor(date) {
    this.#date = date;
    this.#validate(date);
  }

  #validate(date) {
    const REGEX = /^(0?[1-9]|[1-2][0-9]|3[0-1])$/;
    if (!REGEX.test(date)) {
      throw new Error(ERROR.readDate);
    }
  }
}
