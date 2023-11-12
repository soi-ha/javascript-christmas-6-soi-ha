import MENU from '../constants/string.js';

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
      throw new Error('[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.');
    }
  }

  #validateOverlapping(newFormatOrder, food) {
    if (Object.keys(newFormatOrder).includes(food)) {
      throw new Error('[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.');
    }
  }

  #validateCheckQuantity(quantity) {
    if (quantity < 1) {
      throw new Error('[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.');
    }
  }

  #validateExistMenu(food) {
    if (!Object.keys(MENU).includes(food)) {
      throw new Error('[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.');
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
    return newFormatOrder;
  }

  getOrder() {
    return this.#validateChangeFormat(this.#order);
  }
}
