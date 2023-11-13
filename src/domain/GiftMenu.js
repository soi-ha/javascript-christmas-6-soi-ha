export default function GiftMenu(beforeDiscountAmount) {
  if (beforeDiscountAmount >= 120000) {
    return '샴페인 1개';
  }
  return '없음';
}
