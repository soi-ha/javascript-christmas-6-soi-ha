import STRING from '../utils/constants/string.js';

export default function EventBadge(benefitAmount) {
  if (benefitAmount >= 20000) {
    return STRING.BADGE.level3;
  } else if (benefitAmount >= 10000) {
    return STRING.BADGE.level2;
  } else if (benefitAmount >= 5000) {
    return STRING.BADGE.level1;
  }
  return STRING.NONE;
}
