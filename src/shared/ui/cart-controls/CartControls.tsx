import addIcon from '@/shared/assets/images/plus.svg';
import minusIcon from '@/shared/assets/images/minus.svg';
import style from './CartControls.module.scss';

export type CartControlsProps = {
  quantity: number;
};

export function CartControls({ quantity }: CartControlsProps) {
  return (
    <div className={style.addControl}>
      <button type="button" className="button add-button">
        <img src={addIcon} alt="Add" />
      </button>
      <p>{quantity} items</p>
      <button type="button" className="button add-button">
        <img src={minusIcon} alt="Minus" />
      </button>
    </div>
  );
}
