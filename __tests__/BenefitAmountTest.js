import BenefitAmount from '../src/domain/BenefitAmount.js';

describe('총혜택 금액 테스트', () => {
  test('주어진 사용예시 결과와 동일한지 확인', () => {
    const BENEFIT = [1200, 4046, undefined, 1000, 25000];
    const EXPECT_RESULT = 31246;

    expect(BenefitAmount(BENEFIT)).toEqual(EXPECT_RESULT);
  });

  test('혜택내역이 없을 때', () => {
    const BENEFIT = '없음';
    const EXPECT_RESULT = 0;

    expect(BenefitAmount(BENEFIT)).toEqual(EXPECT_RESULT);
  });
});
