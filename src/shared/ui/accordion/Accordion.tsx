import { AccordionItem } from './accordion-item';
import { AccordionProps } from './types';

export function Accordion({ items }: AccordionProps) {
  return (
    <>
      {items.map((item, index) => (
        <AccordionItem key={index} {...item} />
      ))}
    </>
  );
}
