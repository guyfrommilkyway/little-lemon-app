// packages
import React from 'react';
import { useForm } from 'react-hook-form';

// components
import Layout from '@/components/Layout';
import Form from './components/Form';
import Header from './components/Header';

// types
import { BookingForm } from '@/types';

const Booking: React.FC = () => {
  // hook form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BookingForm>();

  return (
    <Layout title='Little Lemon'>
      <Header />
      <Form handleSubmit={handleSubmit} register={register} errors={errors} reset={reset} />
    </Layout>
  );
};

export default Booking;
