import Order from './domain/Order.js';
import VisitDate from './domain/VisitDate.js';
import OutputView from './view/OutputView.js';

class App {
  async run() {
    OutputView.writeEventStart();
    const date = await VisitDate();
    const order = await Order();
    OutputView.writeEventResult(date);

    OutputView.writeOrderMenu(order);
    OutputView.writeBeforeDiscount(-10000000);
  }
}

export default App;
