import { useState } from 'react';
import { IProduct } from '../../types/types';
import style from './Product.module.scss';
import productImg from '../../assets/image.png';
import cartIcon from '../../assets/cart-icon.svg';

type ProductProps = {
  product: IProduct;
};

export function Product({ product }: ProductProps) {
  const [isHover, setIsHover] = useState(false);

  const { title, price } = product;

  const stopPropagation = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
  };

  return (
    <div
      className={style.product}
      onMouseOver={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}
    >
      <div className={style.imgWrapper}>
        <img src={productImg} className={style.productImg} alt="Product Image" />
        <div className={`${style.overlay} ${isHover ? style.active : ''}`}>
          <div className={style.overlayText}>Show details</div>
        </div>
      </div>
      <div className={style.productContent}>
        <div className={style.productText}>
          <p className={`${style.productTitle} ${isHover ? style.active : ''}`}>{title}</p>
          <p className={style.productPrice}>{price} $</p>
        </div>
        <button type="button" className="button add-button" onMouseOver={stopPropagation}>
          <img src={cartIcon} alt="Cart Icon" />
        </button>
      </div>
    </div>
  );
}

export default Product;
