import AfterDiscount from '../src/domain/AfterDiscount.js';

describe('할인 후 예상 결제금액 테스트', () => {
  test('주어진 사용예시 결과와 동일한지 확인', () => {
    const BEFORE_DISCOUNT = 142000;
    const BENEFIT_AMOUNT = -31246;
    const GIFT = '샴페인 1개';
    const EXPECT_RESULT = 135754;

    expect(AfterDiscount(BEFORE_DISCOUNT, BENEFIT_AMOUNT, GIFT)).toEqual(
      EXPECT_RESULT,
    );
  });

  test('증정 이벤트가 없을 때 ', () => {
    const BEFORE_DISCOUNT = 100000;
    const BENEFIT_AMOUNT = -4046;
    const GIFT = '없음';
    const EXPECT_RESULT = 95954;

    expect(AfterDiscount(BEFORE_DISCOUNT, BENEFIT_AMOUNT, GIFT)).toEqual(
      EXPECT_RESULT,
    );
  });

  test('혜택내역 없을때 ', () => {
    const BEFORE_DISCOUNT = 54000;
    const BENEFIT_AMOUNT = 0;
    const GIFT = '없음';
    const EXPECT_RESULT = 54000;

    expect(AfterDiscount(BEFORE_DISCOUNT, BENEFIT_AMOUNT, GIFT)).toEqual(
      EXPECT_RESULT,
    );
  });
});
