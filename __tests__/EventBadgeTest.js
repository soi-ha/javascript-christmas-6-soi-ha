import EventBadge from '../src/domain/EventBadge';
import STRING from '../src/utils/constants/string';

describe('12월 이벤트 배지', () => {
  test.each([[[20000]], [[54000]]])('총혜택 금액 2만원 이상', (inputs) => {
    const EXPECT_RESULT = STRING.BADGE.level3;
    expect(EventBadge(inputs)).toEqual(EXPECT_RESULT);
  });

  test.each([[[5000]], [[9999]]])('총혜택 금액 5천원 이상', (inputs) => {
    const EXPECT_RESULT = STRING.BADGE.level1;
    expect(EventBadge(inputs)).toEqual(EXPECT_RESULT);
  });

  test.each([[[10000]], [[19999]]])('총혜택 금액 1만원 이상', (inputs) => {
    const EXPECT_RESULT = STRING.BADGE.level2;
    expect(EventBadge(inputs)).toEqual(EXPECT_RESULT);
  });

  test.each([[[4999]], [[0]]])('이벤트 배지 없음', (inputs) => {
    const EXPECT_RESULT = STRING.NONE;
    expect(EventBadge(inputs)).toEqual(EXPECT_RESULT);
  });
});
