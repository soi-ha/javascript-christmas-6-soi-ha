import InputView from '../view/InputView.js';
import { OrderValidator } from '../utils/validators/OrderValidator.js';
import { Console } from '@woowacourse/mission-utils';

export default async function Order() {
  try {
    const takeOrder = await InputView.readOrder();
    const order = new OrderValidator(takeOrder);
    return order.getOrder();
  } catch (error) {
    Console.print(error.message);
    return Order();
  }
}
