import { useParams } from 'react-router-dom';
import { Star } from '@/shared/ui';
import { useGetProductByIdQuery } from '@/entities/product/api';
import { useState } from 'react';
import { calcDiscountPrice } from '@/shared/lib/price';
import style from './ProductDetail.module.scss';

const MAX_RATING = 5;
const stars = new Array(MAX_RATING).fill(0);
const colors = {
  red: '#F14F4F',
  grey: '#D5D5D5',
};

export function ProductDetail() {
  const { id } = useParams();

  const { data: product, isLoading, isError } = useGetProductByIdQuery(id as string);

  const [currImgIndex, setCurrImgIndex] = useState(0);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <p>Error occured</p>;
  if (!product) return <div>Missing product!</div>;

  const { price, discountPercentage, rating } = product;

  const discountPrice = calcDiscountPrice(price, discountPercentage);

  const roundRating = Math.round(rating);

  return (
    <section className="section">
      <div className="container">
        <div className={style.content}>
          <div className={style.gallery}>
            <div className={style.mainImg}>
              <img src={product.images[currImgIndex]} alt="Product" />
            </div>
            <div className={style.thumbnailWrapper}>
              {product.images.length > 1 &&
                product.images.map((item, index) => (
                  <div
                    className={`${style.thumbnail} ${index === currImgIndex ? style.active : ''}`}
                  >
                    <img
                      key={index}
                      src={item}
                      alt="Product thumbnail"
                      onClick={() => setCurrImgIndex(index)}
                    />
                  </div>
                ))}
            </div>
          </div>
          <div className={style.info}>
            <h2 className={`section-title ${style.productTitle}`}>{product.title}</h2>
            <div className={style.meta}>
              <div className={style.rating}>
                {stars.map((_, index) => (
                  <Star key={index} fillColor={roundRating > index ? colors.red : colors.grey} />
                ))}
              </div>
              <span>{product.tags.join(', ')}</span>
            </div>
            <p className={style.stock}>In Stock - Only {product.stock} left!</p>
            <p className={style.description}>{product.description}</p>
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
              <button type="button" className="button">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
