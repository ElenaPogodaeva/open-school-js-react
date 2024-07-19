import { CartControls } from '@/shared/ui';
import { calcDiscountPrice } from '@/shared/lib/price';
import { Link } from 'react-router-dom';
import style from './CartItem.module.scss';
import { ICartProduct } from '../model/types';

type CartItemProps = {
  product: ICartProduct;
};

export function CartItem({ product }: CartItemProps) {
  const { id, title, price, discountPercentage, quantity, thumbnail } = product;

  const handleDeleteClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
  };

  return (
    <Link to={`/product/${id}`} className={style.cartItem}>
      <div className={style.itemLeft}>
        <img src={thumbnail} className={style.itemImg} alt="Product" />
        <div className={style.itemContent}>
          <h3 className={style.itemTitle}>{title}</h3>
          <p className={style.itemPrice}>{calcDiscountPrice(price, discountPercentage)} $</p>
        </div>
      </div>
      <div className={style.itemControl}>
        <CartControls quantity={quantity} />
        <button type="button" className={style.deleteBtn} onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </Link>
  );
}
