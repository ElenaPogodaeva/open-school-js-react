import { IProduct } from '../../types/types';
import style from './CartItem.module.scss';
import productImg from '../../assets/product-detail.png';
import addIcon from '../../assets/plus.svg';
import minusIcon from '../../assets/minus.svg';

type ProductProps = {
  product: IProduct;
};

export function CartItem({ product }: ProductProps) {
  const { title, price, count } = product;

  return (
    <div className={style.cartItem}>
      <div className={style.itemLeft}>
        <img src={productImg} className={style.itemImg} alt="Product" />
        <div className={style.itemContent}>
          <h3 className={style.itemTitle}>{title}</h3>
          <p className={style.itemPrice}>{price} $</p>
        </div>
      </div>
      <div className={style.itemControl}>
        <div className={style.addControl}>
          <button type="button" className="button add-button">
            <img src={addIcon} alt="Add" />
          </button>
          <p>{count} item</p>
          <button type="button" className="button add-button">
            <img src={minusIcon} alt="Minus" />
          </button>
        </div>
        <button type="button" className={style.deleteBtn}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default CartItem;
