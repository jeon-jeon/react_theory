export const changeWon = (price: number) => {
  return new Intl.NumberFormat().format(price); // 숫자를 단위 쉼표 원 바꿔주는
};
