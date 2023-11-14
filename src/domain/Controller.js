import Order from './Order.js';
import VisitDate from './VisitDate.js';
import OutputView from '../view/OutputView.js';
import BeforeDiscount from './BeforeDiscount.js';
import GiftMenu from './GiftMenu.js';
import { BenefitDetail } from './BenefitDetail.js';
import BenefitAmount from './BenefitAmount.js';
import AfterDiscount from './AfterDiscount.js';
import EventBadge from './EventBadge.js';

export class Controller {
  async openRestaurant() {
    // 입력
    OutputView.writeEventStart();
    const date = await VisitDate();
    const order = await Order();
    OutputView.writeEventResult(date);

    // 혜택 미리보기
    this.previewBenefits(date, order);
  }

  previewBenefits(date, order) {
    // 주문메뉴
    OutputView.writeOrderMenu(order);

    //할인 전 총주문 금액
    const beforeDiscountAmount = BeforeDiscount(order);
    OutputView.writeBeforeDiscount(beforeDiscountAmount);

    // 증정메뉴
    const gift = GiftMenu(beforeDiscountAmount);
    OutputView.writeGiftMenu(gift);

    // 혜택 내역
    const benefit = new BenefitDetail(date, order, beforeDiscountAmount, gift);
    OutputView.writeBenefitDetail(benefit.getBenfit());

    // 총혜택 금액
    const benefitAmount = BenefitAmount(benefit.getBenfit());
    OutputView.writeBenefitAmount(benefitAmount);

    // 할인 후 예상 결제 금액
    const afterDiscountAmount = AfterDiscount(
      beforeDiscountAmount,
      benefitAmount,
      gift,
    );
    OutputView.writeAfterDiscount(afterDiscountAmount);

    // 12월 이벤트 배지
    const badge = EventBadge(benefitAmount);
    OutputView.writeEventBadge(badge);
  }
}
