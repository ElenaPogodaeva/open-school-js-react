import { Link } from 'react-router-dom';
import { useAppSelector } from '@/shared/lib/hooks';
import { CartControls } from '@/shared/ui';
import { calcDiscountPrice } from '@/shared/lib/price';
import { IProduct } from '../model/types';
import style from './Product.module.scss';
import cartIcon from '../../../shared/assets/images/cart-icon.svg';

type ProductProps = {
  product: IProduct;
};

export function Product({ product }: ProductProps) {
  const { id, title, price, discountPercentage } = product;

  const { cart } = useAppSelector((state) => state.cart);

  const discountPrice = calcDiscountPrice(price, discountPercentage);

  const handleCartClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
  };

  const productInCart = cart?.products.find((item) => item.id === id);

  return (
    <Link to={`/product/${id}`} className={style.product} aria-label="Product card">
      <div className={style.imgWrapper}>
        <img src={product.thumbnail} className={style.productImg} alt="Product" />
        <div className={style.overlay}>
          <div className={style.overlayText}>Show details</div>
        </div>
      </div>
      <div className={style.productContent}>
        <div className={style.productText}>
          <p className={style.productTitle}>{title}</p>
          <p className={style.productPrice}>{discountPrice} $</p>
        </div>
        {productInCart ? (
          <CartControls quantity={productInCart.quantity} />
        ) : (
          <button
            type="button"
            className="button add-button"
            onClick={handleCartClick}
            aria-label="Add product to card"
          >
            <img src={cartIcon} alt="Cart Icon" />
          </button>
        )}
      </div>
    </Link>
  );
}
