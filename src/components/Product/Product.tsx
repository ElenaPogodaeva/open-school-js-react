import { useState } from 'react';
import { IProduct } from '../../types/types';
import style from './Product.module.scss';
import productImg from '../../assets/image.png';
import cartIcon from '../../assets/cart-icon.svg';
import { useNavigate } from 'react-router-dom';

type ProductProps = {
  product: IProduct;
};

export function Product({ product }: ProductProps) {
  const [isHover, setIsHover] = useState(false);

  const { id, title, price } = product;

  const navigate = useNavigate();

  const handleProductClick = () => {
    navigate(`/product/${id}`);
  };

  const stopPropagation = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
  };

  const handleCartClick = (e: React.MouseEvent<HTMLElement>) => {
    stopPropagation(e);
    navigate('cart');
  };

  return (
    <div
      className={style.product}
      onMouseOver={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}
      onClick={handleProductClick}
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
        <button type="button" className="button add-button" onMouseOver={stopPropagation}
          onClick={handleCartClick}>
          <img src={cartIcon} alt="Cart Icon" />
        </button>
      </div>
    </div>
  );
}

export default Product;
