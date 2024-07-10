const PRODUCT_COUNT = 12;

export const productData = new Array(PRODUCT_COUNT).fill({}).map((_, index) => ({
  id: index,
  title: `Essence Mascara Lash Princess`,
  description: `The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.`,
  price: 110,
  rating: 4,
  count: 1,
}));

export const cartData = productData.slice(0, 3);
cartData[2].count = 5;

const questions = [
  'How can I track the status of my order?',
  'What payment methods do you accept?',
  'How can I return or exchange an item?',
];

export const questionsData = questions.map((item) => ({
  title: item,
  content: `After placing your order, you will receive a confirmation email containing your order
              number and a tracking link. You can also log in to your account on our website and go
              to the "My Orders" section to track your delivery status.`,
}));
