// packages
import React from 'react';

// components
import Navbar from './components/Navbar';

// helpers
import useToggle from '@/hooks/useToggle';

// data
import { NAV_DATA } from '@/data';

// assets
import LogoSVG from '@/assets/logo.svg?react';

const Topbar: React.FC = () => {
  const { toggle, handleToggle } = useToggle();

  console.log(toggle);

  return (
    <header className='flex justify-between items-center w-full h-[100px] py-4'>
      <LogoSVG width='180px' />
      <Navbar data={NAV_DATA} toggle={toggle} onToggle={handleToggle} />
    </header>
  );
};

export default Topbar;
