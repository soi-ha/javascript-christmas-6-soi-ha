import Order from './domain/Order.js';
import VisitDate from './domain/VisitDate.js';
import OutputView from './view/OutputView.js';
import BeforeDiscount from './domain/BeforeDiscount.js';
import GiftMenu from './domain/GiftMenu.js';

class App {
  async run() {
    OutputView.writeEventStart();
    // const date = await VisitDate();
    const order = await Order();
    // OutputView.writeEventResult(date);

    // OutputView.writeOrderMenu(order);
    // OutputView.writeBeforeDiscount(-10000000);
    const beforeDiscountAmount = BeforeDiscount(order);
    const gift = GiftMenu(beforeDiscountAmount);
    console.log(gift);
  }
}

export default App;
