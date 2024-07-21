import { useParams } from 'react-router-dom';
import { CartControls, Loader, Star } from '@/shared/ui';
import { useGetProductByIdQuery } from '@/entities/product/api';
import { useState } from 'react';
import { calcDiscountPrice } from '@/shared/lib/price';
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks';
import { useAuth } from '@/shared/lib/useAuth';
import { updateUserCard } from '@/entities/cart/model/cartThunk';
import style from './ProductDetail.module.scss';

const MAX_RATING = 5;
const stars = new Array(MAX_RATING).fill(0);
const colors = {
  red: '#F14F4F',
  grey: '#D5D5D5',
};

export function ProductDetail() {
  const { id } = useParams() as { id: string };

  const { data: product, isLoading, isError } = useGetProductByIdQuery(id);

  const [currImgIndex, setCurrImgIndex] = useState(0);

  const { cart } = useAppSelector((state) => state.cart);

  const discountPrice = calcDiscountPrice(product?.price || 0, product?.discountPercentage || 0);

  const roundRating = Math.round(product?.rating || 0);

  const productInCart = cart?.products.find((item) => item.id === +id);

  const dispatch = useAppDispatch();
  const token = useAuth().token as string;

  const addProduct = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    const products = [
      {
        id: +id,
        quantity: 1,
      },
    ];
    await dispatch(updateUserCard({ id: cart!.id, products, token }));
  };

  if (isLoading) return <Loader />;
  if (isError) return <p>Error occured</p>;
  if (!product) return <div>Missing product</div>;

  return (
    <section className="section">
      <div className="container">
        <div className={style.content}>
          <div className={style.gallery}>
            <div className={style.mainImg}>
              <img src={product.images[currImgIndex]} alt="Product" loading="lazy" />
            </div>
            <div className={style.thumbnailWrapper}>
              {product.images.length > 1 &&
                product.images.map((item, index) => (
                  <div
                    key={index}
                    className={`${style.thumbnail} ${index === currImgIndex ? style.active : ''}`}
                  >
                    <img
                      src={item}
                      alt="Product thumbnail"
                      onClick={() => setCurrImgIndex(index)}
                    />
                  </div>
                ))}
            </div>
          </div>
          <div className={style.info}>
            <h1 className={`section-title ${style.productTitle}`}>{product.title}</h1>
            <div className={style.meta}>
              <div className={style.rating}>
                {stars.map((_, index) => (
                  <Star key={index} fillColor={roundRating > index ? colors.red : colors.grey} />
                ))}
              </div>
              <span>{product.tags.join(', ')}</span>
            </div>
            <p className={style.stock}>In Stock - Only {product.stock} left!</p>
            <p className={style.description}>{product?.description}</p>
            <div className={style.other}>
              <p>{product.warrantyInformation}</p>
              <p>{product.shippingInformation}</p>
            </div>
            <div className={style.buy}>
              <div className={style.priceWrapper}>
                <div className={style.price}>
                  {discountPrice}$<span>{product.price}$</span>
                </div>
                <div className={style.discount}>
                  Your discount: <span>{product.discountPercentage}%</span>
                </div>
              </div>
              {productInCart ? (
                <CartControls product={productInCart} />
              ) : (
                <button type="button" className="button" onClick={addProduct}>
                  Add to cart
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
