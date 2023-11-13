import { Console } from '@woowacourse/mission-utils';
import STRING from '../utils/constants/string.js';

const OutputView = {
  writeEventStart() {
    Console.print('안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.');
  },

  writeEventResult(date) {
    Console.print(
      `12월 ${date}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!`,
    );
  },

  writeOrderMenu(order) {
    Console.print('\n<주문 메뉴>');
    Object.entries(order).map((dish) =>
      Console.print(`${dish[0]} ${dish[1]}개`),
    );
  },

  writeBeforeDiscount(before) {
    Console.print('\n<할인 전 총주문 금액>');
    Console.print(`${currencyUnit(before)}원`);
  },

  writeGiftMenu(gift) {
    Console.print('\n<증정 메뉴>');
    Console.print(`${gift}`);
  },

  // [christmas, weekday, weekend, starday, present]
  writeBenefitDetail(benefit) {
    Console.print('\n<혜택 내역>');
    if (benefit === STRING.NONE) {
      Console.print(benefit);
    } else {
      benefit.forEach((item, index) => {
        if (item !== undefined && item !== 0) {
          Console.print(
            `${STRING.BENEFIT_LIST[index]}: -${currencyUnit(item)}원`,
          );
        }
      });
    }
  },

  writeBenefitAmount(benefitAmount) {
    Console.print('\n<총혜택 금액>');
    Console.print(`-${currencyUnit(benefitAmount)}원`);
  },

  writeAfterDiscount(after) {
    Console.print('\n<할인 후 예상 결제 금액>');
    Console.print(`${currencyUnit(after)}원`);
  },

  writeEventBadge(badge) {
    Console.print('\n<12월 이벤트 배지>');
    Console.print(`${badge}`);
  },
};

const currencyUnit = function addCommasToNumber(money) {
  return money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export default OutputView;
