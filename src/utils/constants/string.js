const MENU = Object.freeze({
  양송이수프: [6000, '애피타이저'],
  타파스: [5500, '애피타이저'],
  시저샐러드: [8000, '애피타이저'],
  티본스테이크: [55000, '메인'],
  바비큐립: [54000, '메인'],
  해산물파스타: [35000, '메인'],
  크리스마스파스타: [25000, '메인'],
  초코케이크: [15000, '디저트'],
  아이스크림: [5000, '디저트'],
  제로콜라: [3000, '음료'],
  레드와인: [60000, '음료'],
  샴페인: [25000, '음료'],
});

const NONE = '없음';
const GIFT = '샴페인 1개';
const BADGE = Object.freeze({
  level1: '별',
  level2: '트리',
  level3: '산타',
});

const STRING = Object.freeze({
  MENU,
  NONE,
  GIFT,
  BADGE,
});

export default STRING;
