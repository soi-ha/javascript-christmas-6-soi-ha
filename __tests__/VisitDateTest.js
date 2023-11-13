import { VisitDateValidator } from '../src/utils/validators/VisitDateValidator.js';
import ERROR from '../src/utils/constants/error.js';

describe('방문 날짜 입력 테스트', () => {
  test('올바른 값 입력 테스트', () => {
    const date = 20;
    const validator = () => new VisitDateValidator(date);
    expect(validator).not.toThrow();
  });

  test.each([[[1]], [[31]], [[2]], [[30]]])('경계값 입력 테스트', (inputs) => {
    expect(() => {
      new VisitDateValidator(inputs).not.toThrow();
    });
  });

  test.each([[[0]], [[32]], [[-10]], [[100]]])(
    '범위 내의 날짜를 입력하지 않을 때 예외처리',
    (inputs) => {
      expect(() => {
        new VisitDateValidator(inputs).toThrow(ERROR.readDate);
      });
    },
  );

  test.each([[['10일']], [['하루']], [['1day']], [['31!']]])(
    '숫자를 입력하지 않을 때 예외처리',
    (inputs) => {
      expect(() => {
        new VisitDateValidator(inputs).toThrow(ERROR.readDate);
      });
    },
  );
});
