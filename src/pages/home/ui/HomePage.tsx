import { Accordion } from '@/shared/ui';
import { questionsData } from '@/shared/mocks/mock';
import { Catalog } from '@/widgets/catalog';
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
      <Catalog />
      <section className={`dark-section ${style.faqSection}`}>
        <div className={style.faqContainer}>
          <h2 className={`section-title ${style.faqTitle}`}>FAQ</h2>
          <Accordion items={questionsData} />
        </div>
      </section>
    </>
  );
}

export default HomePage;
