// packages below
import React, { memo } from 'react';

// types below
import { NavMenuProps } from '@/types';

const NavMenu: React.FC<NavMenuProps> = memo(props => {
  const { toggle, render } = props;

  const isToggle = toggle ? '-z-50 opacity-0' : 'z-50 opacity-100';

  return (
    <div
      className={`absolute top-8 right-1 lg:static flex flex-col lg:flex-row gap-4 w-[200px] lg:w-fit p-5 transition-opacity ease-in-out delay-100 bg-secondary-3 lg:bg-white rounded-[16px] shadow-md lg:shadow-none lg:opacity-100 ${isToggle}`}
    >
      {render()}
    </div>
  );
});

export default NavMenu;
