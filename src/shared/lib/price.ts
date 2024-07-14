export const calcDiscountPrice = (price: number, discountPercentage: number) => {
  const discountPrice = (price * (1 - discountPercentage / 100)).toFixed(2);
  return discountPrice;
};
