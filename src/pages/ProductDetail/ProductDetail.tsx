import style from './ProductDetail.module.scss';
import productImg from '../../assets/product-detail.png';
import Star from '../../components/Star/Star';
import { useParams } from 'react-router-dom';

const ITEMS_COUNT_OF_COLUMN_DATA = 12;
const productData = new Array(ITEMS_COUNT_OF_COLUMN_DATA).fill({}).map((_, index) => ({
  id: `${index}`,
  title: `Essence Mascara Lash Princess`,
  description: '',
  price: 110,
  rating: 4,
}));

const MAX_RATING = 5;
const stars = new Array(MAX_RATING).fill(0);
const colors = {
  red: '#F14F4F',
  grey: '#D5D5D5',
};

export function ProductDetail() {
  const { id } = useParams();
  const product = productData[Number(id)];
  const {title, description, rating} = product;
  
  return (
    <section className="section">
      <div className="container">
        <div className={style.content}>
          <div className={style.imgWrapper}>
            <img src={productImg} className={style.productImg} />
            <div className={style.thumbnailWrapper}>
              {new Array(6).fill(0).map((_, index) => (
                <img key={index} src={productImg} className={style.thumbnailImg} />
              ))}
            </div>
          </div>
          <div className={style.info}>
            <h2 className={`section-title ${style.productTitle}`}>{title}</h2>
            <div className={style.meta}>
              <div className={style.rating}>
                {stars.map((_, index) => (
                  <Star key={index} fillColor={rating > index ? colors.red : colors.grey} />
                ))}
              </div>
              <span>electronics, selfie accessories</span>
            </div>
            <p className={style.stock}>In Stock - Only 5 left!</p>
            <p className={style.description}>
              {description}
            </p>
            <div className={style.other}>
              <p>1 month warranty</p>
              <p>Ships in 1 month</p>
            </div>
            <div className={style.buy}>
              <div className={style.priceWrapper}>
                <div className={style.price}>
                  7.17$<span>9.99$</span>
                </div>
                <div className={style.discount}>
                  Your discount: <span>14.5%</span>
                </div>
              </div>
              <button type="button" className="button">
                Show more
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetail;
