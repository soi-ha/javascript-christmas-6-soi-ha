import STRING from '../utils/constants/string.js';

export default function CalculateApplicableType(type, order) {
  const typeKeys = Object.keys(STRING.MENU).filter(
    (key) => STRING.MENU[key][1] === type,
  );

  let typeCount = 0;
  typeKeys.map((dish) => {
    if (Object.keys(order).includes(dish)) {
      typeCount += order[dish];
    }
  });

  return typeCount;
}
