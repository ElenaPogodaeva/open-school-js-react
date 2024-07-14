import { CartItem } from '@/entities/cart';
import { useAppSelector } from '@/shared/lib/hooks';
import { Loader } from '@/shared/ui';
import style from './CartPage.module.scss';

export function CartPage() {
  const { cart, isLoading, error } = useAppSelector((state) => state.cart);

  if (isLoading) return <Loader />;
  if (error) return <p>Error occured</p>;

  const cartNotEmpty = cart && cart.totalQuantity > 0;

  return (
    <section className="section">
      <div className="container">
        <h2 className={`section-title ${style.cartTitle}`}>My cart</h2>
        {!cartNotEmpty ? (
          <div className={style.empty}>No items</div>
        ) : (
          <div className={style.content}>
            <div className={style.cartWrapper}>
              {Boolean(cart.products.length) &&
                cart.products.map((product) => <CartItem key={product.id} product={product} />)}
            </div>
            <div className={style.total}>
              <div className={`${style.totalItem} ${style.totalCount}`}>
                Total count
                <span>{cart.totalProducts} items</span>
              </div>
              <div className={`${style.totalItem} ${style.totalDiscount}`}>
                Price without discount
                <span>{cart.total}$</span>
              </div>
              <div className={`${style.totalItem} ${style.totalPrice}`}>
                Total price
                <span>{cart.discountedTotal}$</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
