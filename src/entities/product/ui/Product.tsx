import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks';
import { CartControls } from '@/shared/ui';
import { calcDiscountPrice } from '@/shared/lib/price';
import { useAuth } from '@/shared/lib/useAuth';
import { updateUserCard } from '@/entities/cart/model/cartThunk';
import { IProduct } from '../model/types';
import style from './Product.module.scss';
import cartIcon from '../../../shared/assets/images/cart-icon.svg';

type ProductProps = {
  product: IProduct;
};

export function Product({ product }: ProductProps) {
  const { id, title, price, discountPercentage, stock } = product;

  const { cart } = useAppSelector((state) => state.cart);

  const discountPrice = calcDiscountPrice(price, discountPercentage);

  const dispatch = useAppDispatch();
  const token = useAuth().token as string;

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
    <Link to={`/product/${id}`} className={style.product} aria-label="Product card">
      <div className={style.imgWrapper}>
        <img src={product.thumbnail} className={style.productImg} alt="Product" />
        <div className={style.overlay}>
          <div className={style.overlayText}>Show details</div>
        </div>
      </div>
      <div className={style.productContent}>
        <div className={style.productText}>
          <p className={style.productTitle}>{title}</p>
          <p className={style.productPrice}>{discountPrice} $</p>
        </div>

        {productInCart ? (
          <CartControls product={productInCart} stock={stock} />
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
