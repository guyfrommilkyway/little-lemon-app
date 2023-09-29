// packages below
import React, { memo } from 'react';
import { Link } from 'react-router-dom';

// types below
import { NavItemProps } from '@/types';

const NavItem: React.FC<NavItemProps> = memo(props => {
  const { name, to } = props;

  return (
    <Link to={to}>
      <div className='w-full font-semibold whitespace-nowrap'>
        <span className='text-secondary-4'>{name}</span>
      </div>
    </Link>
  );
});

export default NavItem;
