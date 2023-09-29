// packages below
import React, { memo } from 'react';
import { Link } from 'react-router-dom';

// types below
import { NavItemProps } from '@/types';

const NavItem: React.FC<NavItemProps> = memo(props => {
  const { name, to } = props;

  return (
    <Link className='w-full font-semibold whitespace-nowrap' to={to}>
      <span className='text-secondary-4'>{name}</span>
    </Link>
  );
});

export default NavItem;
