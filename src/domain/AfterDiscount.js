import STRING from '../utils/constants/string.js';

export default function AfterDiscount(
  beforeDiscountAmount,
  benefitAmount,
  gift,
) {
  if (gift !== STRING.NONE) {
    return beforeDiscountAmount + benefitAmount + 25000;
  }
  return beforeDiscountAmount + benefitAmount;
}
