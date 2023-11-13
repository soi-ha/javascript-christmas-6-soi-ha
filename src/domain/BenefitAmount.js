export default function BenefitAmount(benefit) {
  let amount = 0;

  benefit.map((item) => {
    if (!isNaN(item) && item !== 0) {
      amount += item;
    }
  });
  return amount;
}
