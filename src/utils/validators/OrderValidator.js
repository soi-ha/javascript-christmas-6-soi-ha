import STRING from '../constants/string.js';
import ERROR from '../constants/error.js';
import CalculateApplicableType from '../../domain/CalculateApplicableType.js';

export class OrderValidator {
  #order;

  constructor(order) {
    this.#validateInputFormat(order);
    this.#validateChangeFormat(order);
    this.#order = order;
  }

  #validateInputFormat(order) {
    const REGEX = /^[가-힣]+-\d+$/;
    const filterOrder = order.filter((menu) => REGEX.test(menu));
    if (filterOrder.length !== order.length) {
      throw new Error(ERROR.readOrder);
    }
  }

  #validateOverlapping(newFormatOrder, food) {
    if (Object.keys(newFormatOrder).includes(food)) {
      throw new Error(ERROR.readOrder);
    }
  }

  #validateCheckQuantity(quantity) {
    if (quantity < 1) {
      throw new Error(ERROR.readOrder);
    }
  }

  #validateExistMenu(food) {
    if (!Object.keys(STRING.MENU).includes(food)) {
      throw new Error(ERROR.readOrder);
    }
  }

  #validateQuantityExceed(newFormatOrder) {
    let totalQuantity = 0;
    const arrayOrder = Object.entries(newFormatOrder);
    for (let i = 0; i < arrayOrder.length; i++) {
      totalQuantity += arrayOrder[i][1];
    }
    if (totalQuantity > 20) {
      throw new Error(ERROR.readOrder);
    }
  }

  #validateOnlyBeverage(newFormatOrder) {
    const beverageCount = CalculateApplicableType('음료', newFormatOrder);

    if (beverageCount === Object.keys(newFormatOrder).length) {
      throw new Error(ERROR.readOrder);
    }
  }

  #validateChangeFormat(order) {
    const newFormatOrder = {};
    order.forEach((dish) => {
      const [food, quantity] = dish.split('-');
      this.#validateOverlapping(newFormatOrder, food);
      this.#validateCheckQuantity(quantity);
      this.#validateExistMenu(food);
      newFormatOrder[food] = parseInt(quantity);
    });
    this.#validateOnlyBeverage(newFormatOrder);
    this.#validateQuantityExceed(newFormatOrder);
    return newFormatOrder;
  }

  getOrder() {
    return this.#validateChangeFormat(this.#order);
  }
}
