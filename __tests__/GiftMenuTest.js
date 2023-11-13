import GiftMenu from '../src/domain/GiftMenu';

describe('증정메뉴 테스트', () => {
  test.each([[[8500]], [[99000]], [[119999]], [[0]]])(
    '증정메뉴가 없을 때 테스트',
    (inputs) => {
      const EXPECT_RESULT = '없음';
      expect(GiftMenu(inputs)).toEqual(EXPECT_RESULT);
    },
  );

  test.each([[[120000]], [[120001]], [[243000]]])(
    '증정메뉴가 있을 때 테스트',
    (inputs) => {
      const EXPECT_RESULT = '샴페인 1개';
      expect(GiftMenu(inputs)).toEqual(EXPECT_RESULT);
    },
  );
});
