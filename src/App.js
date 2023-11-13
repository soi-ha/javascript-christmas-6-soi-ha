import Order from './domain/Order.js';
import VisitDate from './domain/VisitDate.js';

class App {
  async run() {
    const order = await Order();
    const test = await VisitDate();
  }
}

export default App;
