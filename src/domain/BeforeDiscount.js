import STRING from '../utils/constants/string.js';

export default function BeforeDiscount(order) {
  let total = 0;
  Object.keys(order).map((menu) => {
    if (Object.keys(STRING.MENU).includes(menu)) {
      total += STRING.MENU[menu][0] * order[menu];
    }
  });
  return total;
}
