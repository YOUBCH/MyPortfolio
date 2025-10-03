import React, { useState, ReactNode } from 'react';
import './accordion.css';

export interface AccordionItem {
  title: string;
  content: ReactNode;
}

export interface AccordionProps {
  items: AccordionItem[];
  allowMultipleOpen?: boolean;
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultipleOpen = false,
  className = '',
}) => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleIndex = (index: number) => {
    if (allowMultipleOpen) {
      setOpenIndexes((prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index)
          : [...prev, index]
      );
    } else {
      setOpenIndexes((prev) =>
        prev.includes(index) ? [] : [index]
      );
    }
  };

  return (
    <div className={`accordion ${className}`}>
      {items.map((item, idx) => (
        <div key={idx} className="accordion-item">
          <button type="button" onClick={() => toggleIndex(idx)} className='accordion-header' aria-expanded={openIndexes.includes(idx)}
            aria-controls={`accordion-content-${idx}`}
            id={`accordion-title-${idx}`}>
            <div className="accordion-title">
              {item.title}
            </div>
            <div className="accordion-icon">
              {!openIndexes.includes(idx) ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
                :
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                </svg>
              }


            </div>
          </button>
          <div className='accordion-content-wrapper'>
            <div
              id={`accordion-content-${idx}`}
              className={`accordion-panel accordion-content${openIndexes.includes(idx) ? ' open' : ''}`}
              role="region"
              aria-labelledby={`accordion-title-${idx}`}
            >
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;