// packages
import React from 'react';

// types
import { MenuProps } from '@/types';

const Menu: React.FC<MenuProps> = props => {
  const { render } = props;

  return (
    <div className='w-full my-10 lg:my-[280px]'>
      <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8'>
        <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-0' data-testid='menu-heading'>
          This weeks specials!
        </h1>
        <button className='px-4 py-2 font-bold bg-primary-2 rounded-[16px]' data-testid='menu-button'>
          Online Menu
        </button>
      </div>
      <div className='flex flex-col items-stretch md:flex-row gap-8 w-full' data-testid='menu-items'>
        {render()}
      </div>
    </div>
  );
};

export default Menu;
