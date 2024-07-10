import { useState } from 'react';
import style from './Accordion.module.scss';
import addIcon from '../../../assets/images/plus.svg';
import { AccordionItemProps } from '../types';

export function AccordionItem({ title, content }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div onClick={handleClick}>
      <div className={style.accordion}>
        <h3>{title}</h3>
        <img className={`${isOpen ? style.active : ''}`} src={addIcon} alt="Open Icon" />
      </div>
      <div className={`${style.accordionText} ${isOpen ? style.active : ''}`}>
        <p>{content}</p>
      </div>
    </div>
  );
}
