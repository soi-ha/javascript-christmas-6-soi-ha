import CALENDAR from '../utils/constants/number.js';
import STRING from '../utils/constants/string.js';
import CalculateApplicableType from './CalculateApplicableType.js';

export class BenefitDetail {
  #date;
  #order;
  #beforeDiscountAmount;
  #gift;

  constructor(date, order, beforeDiscountAmount, gift) {
    this.#date = date;
    this.#order = order;
    this.#beforeDiscountAmount = beforeDiscountAmount;
    this.#gift = gift;
    this.isWeekendValid = CALENDAR.WEEKEND.includes(date);
    this.isStartDayValid = CALENDAR.STARDAY.includes(date);
    this.isWeekendValid = CALENDAR.WEEKEND.includes(date);
  }

  #benefitChristmas(date) {
    if (date <= 25) {
      return 1000 + 100 * (date - 1);
    }
  }

  #benefitWeekday(order) {
    if (!this.isWeekendValid) {
      const dessertCount = CalculateApplicableType('디저트', order);
      return 2023 * dessertCount;
    }
  }

  #benefitWeekend(order) {
    if (this.isWeekendValid) {
      const mainCount = CalculateApplicableType('메인', order);
      return 2023 * mainCount;
    }
  }
  #benefitSpecial() {
    if (this.isStartDayValid) {
      return 1000;
    }
  }

  #benefitGift(gift) {
    if (gift.includes('샴페인')) {
      return 25000;
    }
  }

  getBenfit() {
    if (this.#beforeDiscountAmount >= 10000) {
      const christmas = this.#benefitChristmas(this.#date);
      const weekday = this.#benefitWeekday(this.#order);
      const weekend = this.#benefitWeekend(this.#order);
      const starday = this.#benefitSpecial();
      const present = this.#benefitGift(this.#gift);
      return [-christmas, -weekday, -weekend, -starday, -present];
    }
    return STRING.NONE;
  }
}
