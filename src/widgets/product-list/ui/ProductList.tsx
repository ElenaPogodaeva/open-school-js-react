import { Product } from '@/entities/product';
import { IProduct } from '@/entities/product/model/types';
import style from './ProductList.module.scss';

type ProductListProps = {
  products: IProduct[];
};

export function ProductList({ products }: ProductListProps) {
  return (
    <div className={style.products}>
      {Boolean(products.length) &&
        products.map((product) => <Product key={product.id} product={product} />)}
    </div>
  );
}
