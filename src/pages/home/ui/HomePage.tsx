import { ProductList } from '@/widgets/product-list';
import { Accordion } from '@/shared/ui';
import { useMemo, useRef, useState } from 'react';
import { useGetProductsQuery } from '@/entities/product/api/product';
import { questionsData } from '@/shared/mocks/mock';
import debounce from 'lodash.debounce';
import style from './HomePage.module.scss';

export function HomePage() {
  const [searchValue, setSearchValue] = useState('');

  const [currentPage, setCurrentPage] = useState(0);

  const queryParams = {
    search: searchValue,
    page: currentPage,
  };

  const { data, isLoading, isError } = useGetProductsQuery(queryParams);

  const products = data?.products ?? [];
  const total = data?.total ?? 0;

  const hasMore = products.length < total;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchValue(value);
    setCurrentPage(0);
  };

  const debouncedChange = debounce(handleChange, 1000);

  const handleLoadMore = () => {
    if (isLoading) return;
    setCurrentPage((prev) => prev + 1);
  };

  if (isError) {
    return <div>An error has occurred</div>;
  }

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
          <input
            type="text"
            className={style.catalogInput}
            onChange={debouncedChange}
            placeholder="Search by title"
          />
          <ProductList products={products} />
          {hasMore && (
            <button onClick={handleLoadMore} type="button" className={`button ${style.catalogBtn}`}>
              {isLoading ? 'Loading...' : 'Show more'}
            </button>
          )}
        </div>
      </section>
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
