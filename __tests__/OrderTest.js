import { OrderValidator } from '../src/utils/validators/OrderValidator.js';
import ERROR from '../src/utils/constants/error.js';

describe('주문 입력 테스트', () => {
  test('올바른 입력값 ', () => {
    const order = new OrderValidator([
      '해산물파스타-1',
      '레드와인-1',
      '초코케이크-1',
    ]);
    const EXPECT_RESULT = { 해산물파스타: 1, 레드와인: 1, 초코케이크: 1 };
    expect(order.getOrder()).toEqual(EXPECT_RESULT);
  });

  test.each([
    [['해산물파스타--1']],
    [['해산물파스타-1/레드와인-1']],
    [['해산물파스타-1,초코케이크~1']],
  ])('유효하지 않는 입력값 형식에 대한 예외처리', (inputs) => {
    expect(() => {
      new OrderValidator(inputs);
    }).toThrow('[ERROR]');
  });

  test.each([
    [['오일파스타-1']],
    [['해산물파스타-1,크림수프-2']],
    [['티본스테이크-2,코카콜라-2']],
  ])('메뉴판에 없는 메뉴 주문에 대한 예외처리', (inputs) => {
    expect(() => {
      new OrderValidator(inputs);
    }).toThrow('[ERROR]');
  });

  test.each([
    [['해산물파스타-0']],
    [['해산물파스타-1,양송이수프-0']],
    [['티본스테이크-0,제로콜라-2, 레드와인-1']],
  ])('각 메뉴 수량 1개 미만 주문에 대한 예외처리', (inputs) => {
    expect(() => {
      new OrderValidator(inputs);
    }).toThrow('[ERROR]');
  });

  test.each([
    [['해산물파스타-1,해산물파스타-1']],
    [['양송이수프-1,양송이수프-2']],
    [['티본스테이크-2,티본스테이크-2,레드와인-1,제로콜라-2']],
  ])('중복 메뉴 주문에 대한 예외처리', (inputs) => {
    expect(() => {
      new OrderValidator(inputs);
    }).toThrow('[ERROR]');
  });

  test.each([
    [['제로콜라-1']],
    [['제로콜라-1,레드와인-3']],
    [['제로콜라-1,레드와인-4,샴페인-1']],
  ])('음료만 주문에 대한 예외처리', (inputs) => {
    expect(() => {
      new OrderValidator(inputs);
    }).toThrow('[ERROR]');
  });

  test.each([
    [['제로콜라-10, 해산물파스타-20']],
    [['제로콜라-1,초코케이크-20']],
    [['해산물파스타-5,레드와인-4,샴페인-1,티본스테이크-9,타파스-2']],
  ])('수량 20개 초과 주문에 대한 예외처리', (inputs) => {
    expect(() => {
      new OrderValidator(inputs);
    }).toThrow(ERROR.readOrder);
  });
});
