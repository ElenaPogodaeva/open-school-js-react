import { CartControls } from '@/shared/ui';
import { calcDiscountPrice } from '@/shared/lib/price';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks';
import { useAuth } from '@/shared/lib/useAuth';
import style from './CartItem.module.scss';
import { ICartProduct } from '../model/types';
import { deleteProduct } from '../model/cartSlice';
import { updateUserCard } from '../model/cartThunk';
import cartIcon from '../../../shared/assets/images/cart-icon.svg';

type CartItemProps = {
  product: ICartProduct;
};

export function CartItem({ product }: CartItemProps) {
  const { id, title, price, discountPercentage, thumbnail } = product;

  const { cart } = useAppSelector((state) => state.cart);
  const token = useAuth().token as string;

  const dispatch = useAppDispatch();
  const handleDeleteClick = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    dispatch(deleteProduct(id));
  };

  const addProduct = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    const products = [
      {
        id,
        quantity: 1,
      },
    ];
    await dispatch(updateUserCard({ id: cart!.id, products, token }));
  };

  const productInCart = cart?.products.find((item) => item.id === id);

  return (
    <Link to={`/product/${id}`} className={style.cartItem}>
      <div className={`${style.itemLeft} ${!productInCart ? style.disabled : ''}`}>
        <img src={thumbnail} className={style.itemImg} alt="Product" />
        <div>
          <h3 className={style.itemTitle}>{title}</h3>
          <p className={style.itemPrice}>{calcDiscountPrice(price, discountPercentage)} $</p>
        </div>
      </div>
      <div className={style.itemControl}>
        {productInCart ? (
          <>
            <CartControls product={product} />
            <button type="button" className={style.deleteBtn} onClick={handleDeleteClick}>
              Delete
            </button>
          </>
        ) : (
          <button
            type="button"
            className="button add-button"
            onClick={addProduct}
            aria-label="Add product to card"
          >
            <img src={cartIcon} alt="Cart Icon" />
          </button>
        )}
      </div>
    </Link>
  );
}
