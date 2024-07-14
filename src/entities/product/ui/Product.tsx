import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
  const [isHover, setIsHover] = useState(false);

  const { id, title, price, discountPercentage } = product;

  const { cart } = useAppSelector((state) => state.cart);

  const discountPrice = calcDiscountPrice(price, discountPercentage);

  const navigate = useNavigate();

  const handleProductClick = () => {
    navigate(`/product/${id}`);
  };

  const stopPropagation = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
  };

  const handleCartClick = (e: React.MouseEvent<HTMLElement>) => {
    stopPropagation(e);
    //
  };

  const productInCart = cart?.products.find((item) => item.id === id);

  return (
    <div
      className={style.product}
      onMouseOver={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}
      onClick={handleProductClick}
    >
      <div className={style.imgWrapper}>
        <img src={product.thumbnail} className={style.productImg} alt="Product" />
        <div className={`${style.overlay} ${isHover ? style.active : ''}`}>
          <div className={style.overlayText}>Show details</div>
        </div>
      </div>
      <div className={style.productContent}>
        <div className={style.productText}>
          <p className={`${style.productTitle} ${isHover ? style.active : ''}`}>{title}</p>
          <p className={style.productPrice}>{discountPrice} $</p>
        </div>
        {productInCart ? (
          <CartControls quantity={productInCart.quantity} />
        ) : (
          <button
            type="button"
            className="button add-button"
            onMouseOver={stopPropagation}
            onClick={handleCartClick}
          >
            <img src={cartIcon} alt="Cart Icon" />
          </button>
        )}
      </div>
    </div>
  );
}
