import Accordion from '../../components/Accordion/Accordion';
import ProductList from '../../components/ProductList/ProductList';
import ProductDetail from '../ProductDetail/ProductDetail';
import style from './HomePage.module.scss';

// const questionsData = [
//   {
//     title: 'How can I track the status of my order?',
//     content: `After placing your order, you will receive a confirmation email containing your order
//               number and a tracking link. You can also log in to your account on our website and go
//               to the &quot;My Orders&ldquo; section to track your delivery status.`,
//   },
//   {
//     title: 'What payment methods do you accept?',
//     content: `After placing your order, you will receive a confirmation email containing your order
//               number and a tracking link. You can also log in to your account on our website and go
//               to the &quot;My Orders&ldquo; section to track your delivery status.`,
//   },
//   {
//     title: 'How can I return or exchange an item?',
//     content: `After placing your order, you will receive a confirmation email containing your order
//                 number and a tracking link. You can also log in to your account on our website and go
//                 to the &quot;My Orders&ldquo; section to track your delivery status.`,
//   },
// ];

const PRODUCT_COUNT = 12;

const productData = new Array(PRODUCT_COUNT).fill({}).map((_, index) => ({
  id: index,
  title: `Essence Mascara Lash Princess`,
  description: '',
  price: 110,
  rating: 4,
}));

const questions = [
  'How can I track the status of my order?',
  'What payment methods do you accept?',
  'How can I return or exchange an item?',
];

const questionsData = questions.map((item) => ({
  title: item,
  content: `After placing your order, you will receive a confirmation email containing your order
              number and a tracking link. You can also log in to your account on our website and go
              to the "My Orders" section to track your delivery status.`,
}));

export function HomePage() {
  return (
    <>
      <ProductDetail />
      <section className={`dark-section ${style.heroSection}`}>
        <div className="container">
          <div className={style.heroContent}>
            <h1 className={style.heroTitle}>
              Any products from famous brands with worldwide delivery
            </h1>
            <p className={style.heroText}>
              We sell smartphones, laptops, clothes, shoes <br /> and many other products at low
              prices
            </p>
            <button type="button" className="button">
              Go to shopping
            </button>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h2 className={`section-title ${style.catalogTitle}`} id="catalog">
            Catalog
          </h2>
          <input type="text" className={style.catalogInput} placeholder="Search by title" />
          <ProductList products={productData} />
          <button type="button" className="button">
            Show more
          </button>
        </div>
      </section>
      <section className={`dark-section ${style.faqSection}`}>
        <div className={style.faqContainer}>
          <h2 className={`section-title ${style.faqTitle}`}>FAQ</h2>
          {questionsData.map((item, index) => (
            <Accordion key={index} title={item.title} content={item.content} />
          ))}
        </div>
      </section>
    </>
  );
}

export default HomePage;
