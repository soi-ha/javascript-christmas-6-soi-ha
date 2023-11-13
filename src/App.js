import Order from './domain/Order.js';
import VisitDate from './domain/VisitDate.js';
import OutputView from './view/OutputView.js';
import BeforeDiscount from './domain/BeforeDiscount.js';
import GiftMenu from './domain/GiftMenu.js';
import { BenefitDetail } from './domain/BenefitDetail.js';
import BenefitAmount from './domain/BenefitAmount.js';

class App {
  async run() {
    OutputView.writeEventStart();
    const date = await VisitDate();
    const order = await Order();
    OutputView.writeEventResult(date);

    OutputView.writeOrderMenu(order);

    const beforeDiscountAmount = BeforeDiscount(order);
    const gift = GiftMenu(beforeDiscountAmount);

    const benefit = new BenefitDetail(date, order, beforeDiscountAmount, gift);
    OutputView.writeBenefitDetail(benefit.getBenfit());

    const benefitAmount = BenefitAmount(benefit.getBenfit());
    OutputView.writeBenefitAmount(benefitAmount);
  }
}

export default App;
