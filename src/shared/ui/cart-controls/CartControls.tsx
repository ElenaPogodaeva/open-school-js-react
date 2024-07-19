import addIcon from '@/shared/assets/images/plus.svg';
import minusIcon from '@/shared/assets/images/minus.svg';
import style from './CartControls.module.scss';

export type CartControlsProps = {
  quantity: number;
};

const handleClick = (e: React.MouseEvent<HTMLElement>) => {
  e.preventDefault();
};

export function CartControls({ quantity }: CartControlsProps) {
  return (
    <div className={style.addControl} onClick={handleClick}>
      <button type="button" className="button add-button" aria-label="Increase product count">
        <img src={addIcon} alt="Add" />
      </button>
      <p>{quantity} items</p>
      <button type="button" className="button add-button" aria-label="Decrease product count">
        <img src={minusIcon} alt="Minus" />
      </button>
    </div>
  );
}
