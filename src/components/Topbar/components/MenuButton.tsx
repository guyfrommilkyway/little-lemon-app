// packages
import React, { memo } from 'react';

// types
import { MenuButtonProps } from '@/types';

// assets
import HamburgerSVG from '@/assets/hamburger.svg?react';

const MenuButton: React.FC<MenuButtonProps> = memo(props => {
  const { onToggle } = props;

  return (
    <button className='block lg:hidden w-fit' onClick={onToggle}>
      <HamburgerSVG width='24px' />
    </button>
  );
});

export default MenuButton;
