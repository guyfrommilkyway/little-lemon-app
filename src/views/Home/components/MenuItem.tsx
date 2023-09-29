// packages below
import React from 'react';

// data below
import { MenuItemProps } from '@/types';

const MenuItem: React.FC<MenuItemProps> = props => {
  const { name, price, description, imageURL } = props;

  return (
    <div className='flex-1 relative w-full rounded-tl-3xl rounded-tr-3xl overflow-hidden bg-secondary-3'>
      <div className='w-full aspect-auto'>
        <img className='w-full' src={imageURL} alt={name} />
      </div>
      <div className='p-4'>
        <div className='flex justify-between items-center mb-4'>
          <span className='text-xl lg:text-2xl font-bold'>{name}</span>
          <span className='text-lg lg:text-xl text-secondary-1 whitespace-nowrap font-semibold'>$ {price}</span>
        </div>
        <p className='mb-16 text-base lg:text-lg tracking-wide leading-relaxed'>{description}</p>
      </div>
      <button className='absolute bottom-0 block mt-auto mb-4 mx-4 font-semibold'>Order a delivery</button>
    </div>
  );
};

export default MenuItem;
