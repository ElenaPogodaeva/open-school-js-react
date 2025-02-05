import { calcDiscountPrice } from './price';

describe('calculate discount price', () => {
  it('arguments 200 and 50, discount price is 100', () => {
    const basePrice = 200;
    const discountPercentage = 50;

    const discountPrice = calcDiscountPrice(basePrice, discountPercentage);

    expect(discountPrice).toBe('100.00');
  });

  it('arguments 400 and 25, discount price is 300', () => {
    const basePrice = 400;
    const discountPercentage = 25;

    const discountPrice = calcDiscountPrice(basePrice, discountPercentage);

    expect(discountPrice).toBe('300.00');
  });

  it('arguments 50 and 10, discount price is not 10', () => {
    const basePrice = 50;
    const discountPercentage = 10;

    const discountPrice = calcDiscountPrice(basePrice, discountPercentage);

    expect(discountPrice).not.toBe('10.00');
  });

  it('function return a string', () => {
    const basePrice = 50;
    const discountPercentage = 10;

    const discountPrice = calcDiscountPrice(basePrice, discountPercentage);

    expect(typeof discountPrice).toBe('string');
  });
});
