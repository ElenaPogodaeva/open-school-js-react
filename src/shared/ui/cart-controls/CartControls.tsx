import addIcon from '@/shared/assets/images/plus.svg';
import minusIcon from '@/shared/assets/images/minus.svg';
import { ICartProduct } from '@/entities/cart';
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks';
import { useAuth } from '@/shared/lib/useAuth';
import { updateUserCard } from '@/entities/cart/model/cartThunk';
import { deleteProduct } from '@/entities/cart/model/cartSlice';
import style from './CartControls.module.scss';

export type CartControlsProps = {
  product: ICartProduct;
  stock?: number;
};

export function CartControls({ product, stock }: CartControlsProps) {
  const { cart } = useAppSelector((state) => state.cart);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
  };

  const dispatch = useAppDispatch();
  const token = useAuth().token as string;

  const increaseQuantity = async () => {
    const products = [
      {
        id: product.id,
        quantity: product.quantity + 1,
      },
    ];
    await dispatch(updateUserCard({ id: cart!.id, products, token }));
  };

  const decreaseQuantity = async () => {
    if (product.quantity === 1) {
      dispatch(deleteProduct(product.id));
    } else {
      const products = [
        {
          id: product.id,
          quantity: product.quantity - 1,
        },
      ];
      await dispatch(updateUserCard({ id: cart!.id, products, token }));
    }
  };

  // const findProduct = products.find((item) => item.id === product.id);
  return (
    <div className={style.addControl} onClick={handleClick}>
      <button
        type="button"
        className="button add-button"
        onClick={decreaseQuantity}
        aria-label="Decrease product count"
      >
        <img src={minusIcon} alt="Minus" />
      </button>
      <p>{product.quantity} items</p>
      <button
        type="button"
        className="button add-button"
        onClick={increaseQuantity}
        disabled={product.quantity === stock}
        aria-label="Increase product count"
      >
        <img src={addIcon} alt="Add" />
      </button>
    </div>
  );
}
