import { useState } from 'react';
import addIcon from '@/shared/assets/images/plus.svg';
import style from './Accordion.module.scss';
import { AccordionItemProps } from '../types';

export function AccordionItem({ title, content }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div onClick={handleClick}>
      <div
        className={style.accordion}
        aria-label={isOpen ? 'Open accordion' : 'Close accordion'}
        aria-expanded={isOpen}
      >
        <h3>{title}</h3>
        <img
          className={`${isOpen ? style.active : ''}`}
          src={addIcon}
          alt="Open Icon"
          aria-hidden="true"
        />
      </div>
      <div className={`${style.accordionText} ${isOpen ? style.active : ''}`}>
        <p>{content}</p>
      </div>
    </div>
  );
}
