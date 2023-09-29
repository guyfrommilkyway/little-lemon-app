// packages
import React from 'react';

const Header: React.FC = () => {
  return (
    <div className='p-4 md:p-8 lg:p-16 bg-primary-1'>
      <h1 className='text-3xl md:text-4xl lg:text-6xl font-bold text-primary-2'>Booking</h1>
      <h2 className='text-white text-2xl md:text-3xl lg:text-5xl font-bold'>Reserve a Table</h2>
      <p className='w-full max-w-[420px] mb-8 text-white text-base md:text-lg lg:text-xl'>Please fill up all fields.</p>
    </div>
  );
};

export default Header;
