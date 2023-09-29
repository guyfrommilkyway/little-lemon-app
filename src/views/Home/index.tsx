// packages
import React from 'react';

// components
import Layout from '@/components/Layout';
import About from './components/About';
import Menu from './components/Menu';
import MenuItem from './components/MenuItem';

// data
import { ABOUT_DATA, FOOD_DATA } from '@/data';

const Home: React.FC = () => {
  return (
    <Layout title='Little Lemon'>
      <About {...ABOUT_DATA} />
      <Menu
        render={() => {
          return FOOD_DATA.map(item => {
            return <MenuItem key={item.name} {...item} />;
          });
        }}
      />
    </Layout>
  );
};

export default Home;
