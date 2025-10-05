import React from 'react';
import './Chips.css';

export interface ChipProps {
  label: string;
  color?: string;
}

export interface ChipsProps {
  chips: ChipProps[];
}

export const Chips: React.FC<ChipsProps> = ({ chips }) => {
  return (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      {chips.map((chip, idx) => (
        <span
          key={idx}
          className='chip'
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            borderRadius: '16px',
            padding: '4px 12px',
            fontSize: '14px',
          }}
        >
          {chip.label}
        </span>
      ))}
    </div>
  );
};