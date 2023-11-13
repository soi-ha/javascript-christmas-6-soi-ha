import BeforeDiscount from '../src/domain/BeforeDiscount';

describe('할인 전 총 주문금액 테스트', () => {
  test('총 수량이 1개일 때 결과확인', () => {
    const INPUT = { 양송이수프: 1 };
    const EXPECT_RESULT = 6000;
    expect(BeforeDiscount(INPUT)).toEqual(EXPECT_RESULT);
  });

  test('총 수량이 1개 이상일 때 결과확인', () => {
    const INPUT = { 양송이수프: 1, 타파스: 2, 제로콜라: 3 };
    const EXPECT_RESULT = 26000;
    expect(BeforeDiscount(INPUT)).toEqual(EXPECT_RESULT);
  });

  test('주어진 사용예시 값과 동일한지 결과확인', () => {
    const INPUT = { 티본스테이크: 1, 바비큐립: 1, 초코케이크: 2, 제로콜라: 1 };
    const EXPECT_RESULT = 142000;
    expect(BeforeDiscount(INPUT)).toEqual(EXPECT_RESULT);
  });
});
