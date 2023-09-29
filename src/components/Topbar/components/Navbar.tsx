// packages
import React from 'react';

// components
import MenuButton from './MenuButton';
import NavMenu from './NavMenu';
import NavItem from './NavItem';

// types
import { NavbarProps } from '@/types';

const Navbar: React.FC<NavbarProps> = props => {
  const { data, toggle, onToggle } = props;

  return (
    <nav className='flex'>
      <div className='relative flex-col'>
        <MenuButton onToggle={() => onToggle()} />
        <NavMenu
          toggle={toggle}
          render={() => {
            return data.map(item => {
              return <NavItem key={item.name} {...item} />;
            });
          }}
        />
      </div>
    </nav>
  );
};

export default Navbar;
