import STRING from '../utils/constants/string.js';

export default function GiftMenu(beforeDiscountAmount) {
  if (beforeDiscountAmount >= 120000) {
    return STRING.GIFT;
  }
  return STRING.NONE;
}
