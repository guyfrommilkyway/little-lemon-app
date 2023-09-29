// packages
import React from 'react';
import { Link } from 'react-router-dom';

// components
import Column from './components/Column';

// data
import { NAV_DATA, CONTACT_DATA, SOCIAL_DATA } from '@/data';

// assets
import LogoSVG from '@/assets/logo.svg?react';

const Footer: React.FC = () => {
  return (
    <div className='relative flex flex-col lg:flex-row justify-between w-full min-h-[280px] p-4 md:p-8 lg:p-16 bg-secondary-3'>
      <div className='mb-16'>
        <LogoSVG width='240px' />
      </div>
      <div className='flex flex-col md:flex-row gap-2 md:gap-10 lg:gap-16 mr-16'>
        <Column
          title='Quick Links'
          render={() => {
            return NAV_DATA.map(item => {
              return (
                <Link key={item.name} to={item.to}>
                  <div className='mb-1 text-secondary-4'>{item.name}</div>
                </Link>
              );
            });
          }}
        />
        <Column
          title='Quick Links'
          render={() => {
            return CONTACT_DATA.map(item => {
              return (
                <div key={item.name} className='w-full max-w-[180px] mb-1 text-secondary-4'>
                  {item.name}
                </div>
              );
            });
          }}
        />
        <Column
          title='Social Media'
          render={() => {
            return SOCIAL_DATA.map(item => {
              return (
                <Link key={item.name} to='#'>
                  <div className='mb-1 text-secondary-4'>{item.name}</div>
                </Link>
              );
            });
          }}
        />
      </div>
      <div className='absolute left-0 bottom-0 mx-auto px-4 md:px-8 lg:px-16 py-4'>
        <span className='text-secondary-4 text-sm text-center'>
          Copyright 2023 &copy; Little Lemon. All rights reserved.
        </span>
      </div>
    </div>
  );
};

export default Footer;
