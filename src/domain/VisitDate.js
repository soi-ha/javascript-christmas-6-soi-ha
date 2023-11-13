import { Console } from '@woowacourse/mission-utils';
import { VisitDateValidator } from '../utils/validators/VisitDateValidator.js';
import InputView from '../view/InputView.js';

export default async function VisitDate() {
  try {
    const date = await InputView.readDate();
    new VisitDateValidator(date);
    return date;
  } catch (error) {
    Console.print(error.message);
    return VisitDate();
  }
}
