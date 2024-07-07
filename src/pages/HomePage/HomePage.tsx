import Accordion from '../../components/Accordion/Accordion';
import ProductList from '../../components/ProductList/ProductList';
import { productData, questionsData } from '../../mocks/mock';
import style from './HomePage.module.scss';

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
          <button type="button" className={`button ${style.catalogBtn}`}>
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
