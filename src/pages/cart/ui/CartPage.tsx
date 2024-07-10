import style from './CartPage.module.scss';
import productImg from '../../../shared/assets/images/product-detail.png';
import cartIcon from '../../../shared/assets/images/cart-icon.svg';
import { CartItem } from '../../../entities/cart';
import { cartData } from '../../../shared/mocks/mock';

export function CartPage() {
  return (
    <section className="section">
      <div className="container">
        <h2 className={`section-title ${style.cartTitle}`}>My cart</h2>
        <div className={style.content}>
          <div className={style.cartWrapper}>
            {Boolean(cartData.length) &&
              cartData.map((product) => <CartItem key={product.id} product={product} />)}
            <div className={style.cartItem}>
              <div className={style.itemLeft}>
                <img src={productImg} className={style.itemImg} alt="Product" />
                <div className={style.itemContent}>
                  <h3 className={style.itemTitle}>Essence Mascara Lash Princess</h3>
                  <p className={style.itemPrice}>110 $</p>
                </div>
              </div>
              <button type="button" className="button add-button">
                <img src={cartIcon} alt="Cart Icon" />
              </button>
            </div>
          </div>
          <div className={style.total}>
            <div className={`${style.totalItem} ${style.totalCount}`}>
              Total count
              <span>{cartData.length} items</span>
            </div>
            <div className={`${style.totalItem} ${style.totalDiscount}`}>
              Price without discount
              <span>700$</span>
            </div>
            <div className={`${style.totalItem} ${style.totalPrice}`}>
              Total price
              <span>590$</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
