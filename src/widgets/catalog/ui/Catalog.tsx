import { useGetProductsQuery } from '@/entities/product';
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks';
import { resetPage, setCurrentPage, setSearchValue } from '@/entities/product/model/productsSlice';
import debounce from 'lodash.debounce';
import { ProductList } from '@/widgets/product-list';
import { Loader } from '@/shared/ui';
import style from './Catalog.module.scss';

export function Catalog() {
  const { searchValue, currentPage } = useAppSelector((state) => state.products);

  const dispatch = useAppDispatch();

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
    dispatch(setSearchValue(value));
    dispatch(resetPage());
  };

  const debouncedChange = debounce(handleChange, 1000);

  const handleLoadMore = () => {
    if (isLoading) return;
    dispatch(setCurrentPage());
  };

  if (isLoading) return <Loader />;
  if (isError) {
    return <p>An error has occurred</p>;
  }

  return (
    <section className="section">
      <div className="container">
        <h2 className={`section-title ${style.catalogTitle}`} id="catalog">
          Catalog
        </h2>
        <input
          type="text"
          className={`input ${style.catalogInput}`}
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
  );
}
