import ProductList from '../../components/ProductList/ProductList';
import style from './HomePage.module.scss';

const PRODUCT_COUNT = 12;
const productData = new Array(PRODUCT_COUNT).fill({}).map((_, index) => ({
  id: `${index}`,
  title: `Essence Mascara Lash Princess`,
  description: '',
  price: 110,
  rating: 4,
}));

export function HomePage() {
  return (
    <>
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
          <button type="button" className={style.accordion}>How can I track the status of my order?</button>
          <div className={style.accordionText}>
            <p>
              After placing your order, you will receive a confirmation email containing your order
              number and a tracking link. You can also log in to your account on our website and go
              to the &quot;My Orders&ldquo; section to track your delivery status.
            </p>
          </div>

          <button type="button" className={style.accordion}>Section 2</button>
          <div className={style.accordionText}>
            <p>
              After placing your order, you will receive a confirmation email containing your order
              number and a tracking link. You can also log in to your account on our website and go
              to the &quot;My Orders&ldquo; section to track your delivery status.
            </p>
          </div>

          <button type="button" className={style.accordion}>Section 3</button>
          <div className={style.accordionText}>
            <p>
              After placing your order, you will receive a confirmation email containing your order
              number and a tracking link. You can also log in to your account on our website and go
              to the &quot;My Orders&ldquo; section to track your delivery status.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
