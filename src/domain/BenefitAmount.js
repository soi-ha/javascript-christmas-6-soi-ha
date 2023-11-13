import STRING from '../utils/constants/string.js';

export default function BenefitAmount(benefit) {
  if (benefit === STRING.NONE) {
    return 0;
  }
  return calculateBenefit(benefit);
}

const calculateBenefit = function TotalBenefitAmount(benefit) {
  let amount = 0;

  benefit.map((item) => {
    if (item !== undefined && item !== 0) {
      amount += item;
    }
  });
  return amount;
};
