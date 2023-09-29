// packages
import React from 'react';

// types
import { ColumnProps } from '@/types';

const Column: React.FC<ColumnProps> = props => {
  const { title, render } = props;

  return (
    <div className='mb-16 py-4'>
      <h4 className='mb-4 text-xl font-semibold'>{title}</h4>
      <div className='flex flex-col'>{render()}</div>
    </div>
  );
};

export default Column;
