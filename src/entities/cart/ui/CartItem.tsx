import { CartControls } from '@/shared/ui';
import { calcDiscountPrice } from '@/shared/lib/price';
import style from './CartItem.module.scss';
import { ICartProduct } from '../model/types';

type CartItemProps = {
  product: ICartProduct;
};

export function CartItem({ product }: CartItemProps) {
  const { title, price, discountPercentage, quantity, thumbnail } = product;

  return (
    <div className={style.cartItem}>
      <div className={style.itemLeft}>
        <img src={thumbnail} className={style.itemImg} alt="Product" />
        <div className={style.itemContent}>
          <h3 className={style.itemTitle}>{title}</h3>
          <p className={style.itemPrice}>{calcDiscountPrice(price, discountPercentage)} $</p>
        </div>
      </div>
      <div className={style.itemControl}>
        <CartControls quantity={quantity} />
        <button type="button" className={style.deleteBtn}>
          Delete
        </button>
      </div>
    </div>
  );
}
