// packages
import React from 'react';

// components
import Layout from '@/components/Layout';
import Form from './components/Form';
import Header from './components/Header';

const Booking: React.FC = () => {
  return (
    <Layout title='Little Lemon'>
      <Header />
      <Form />
    </Layout>
  );
};

export default Booking;
