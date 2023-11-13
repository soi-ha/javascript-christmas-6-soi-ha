import { BenefitDetail } from '../src/domain/BenefitDetail.js';

describe('혜택내역 테스트', () => {
  test('주어진 사용예시 결과와 동일한지 확인', () => {
    const DATE = 3;
    const ORDER = { 티본스테이크: 1, 바비큐립: 1, 초코케이크: 2, 제로콜라: 1 };
    const BEFORE_DISCOUNT = 142000;
    const GIFT = '샴페인 1개';
    const EXPECT_RESULT = [-1200, -4046, NaN, -1000, -25000];

    const benefit = new BenefitDetail(DATE, ORDER, BEFORE_DISCOUNT, GIFT);
    expect(benefit.getBenfit()).toEqual(EXPECT_RESULT);
  });

  test('혜택 내역이 없을때', () => {
    const DATE = 26;
    const ORDER = { 양송이수프: 1 };
    const BEFORE_DISCOUNT = 6000;
    const GIFT = '없음';
    const EXPECT_RESULT = '없음';

    const benefit = new BenefitDetail(DATE, ORDER, BEFORE_DISCOUNT, GIFT);
    expect(benefit.getBenfit()).toEqual(EXPECT_RESULT);
  });

  test('크리스마스 디데이 할인만 있을 때', () => {
    const DATE = 13;
    const ORDER = { 해산물파스타: 1, 제로콜라: 1 };
    const BEFORE_DISCOUNT = 38000;
    const GIFT = '없음';
    const EXPECT_RESULT = [-2200, -0, NaN, NaN, NaN];

    const benefit = new BenefitDetail(DATE, ORDER, BEFORE_DISCOUNT, GIFT);
    expect(benefit.getBenfit()).toEqual(EXPECT_RESULT);
  });

  test('평일 할인만 있을 때', () => {
    const DATE = 27;
    const ORDER = { 해산물파스타: 1, 초코케이크: 2, 샴페인: 1 };
    const BEFORE_DISCOUNT = 75000;
    const GIFT = '없음';
    const EXPECT_RESULT = [NaN, -4046, NaN, NaN, NaN];

    const benefit = new BenefitDetail(DATE, ORDER, BEFORE_DISCOUNT, GIFT);
    expect(benefit.getBenfit()).toEqual(EXPECT_RESULT);
  });

  test('주말 할인만 있을 때', () => {
    const DATE = 29;
    const ORDER = {
      크리스마스파스타: 1,
      해산물파스타: 1,
      아이스크림: 2,
      샴페인: 1,
    };
    const BEFORE_DISCOUNT = 95000;
    const GIFT = '없음';
    const EXPECT_RESULT = [NaN, NaN, -4046, NaN, NaN];

    const benefit = new BenefitDetail(DATE, ORDER, BEFORE_DISCOUNT, GIFT);
    expect(benefit.getBenfit()).toEqual(EXPECT_RESULT);
  });

  test('특별 할인이 있을 때', () => {
    const DATE = 25;
    const ORDER = { 해산물파스타: 1, 제로콜라: 1 };
    const BEFORE_DISCOUNT = 38000;
    const GIFT = '없음';
    const EXPECT_RESULT = [-3400, -0, NaN, -1000, NaN];

    const benefit = new BenefitDetail(DATE, ORDER, BEFORE_DISCOUNT, GIFT);
    expect(benefit.getBenfit()).toEqual(EXPECT_RESULT);
  });

  test('증정 이벤트가 있을 때', () => {
    const DATE = 28;
    const ORDER = {
      해산물파스타: 2,
      티본스테이크: 1,
      시저샐러드: 1,
      레드와인: 1,
    };
    const BEFORE_DISCOUNT = 193000;
    const GIFT = '샴페인 1개';
    const EXPECT_RESULT = [NaN, -0, NaN, NaN, -25000];

    const benefit = new BenefitDetail(DATE, ORDER, BEFORE_DISCOUNT, GIFT);
    expect(benefit.getBenfit()).toEqual(EXPECT_RESULT);
  });
});
