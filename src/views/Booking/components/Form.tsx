// packages
import React from 'react';
import { useForm } from 'react-hook-form';

// components
import Input from './Input';

// utils
import { toastSuccess, toastError } from '@/utils/notifications';

// types
import { BookingForm } from '@/types';

const Form: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<BookingForm>();

  const onSubmit = (data: BookingForm) => {
    console.log(data);

    reset();
    toastSuccess('Success! Your booking is confirmed.');
  };

  return (
    <div className='p-4 md:p-8 lg:p-16'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <h5 className='mb-2 text-2xl'>Personal Details</h5>
          <Input
            register={{ ...register('firstName', { required: true }) }}
            id='firstName'
            label='First Name'
            type='text'
            isInvalid={!!errors.firstName}
            errorMessage='Please enter a first name'
          />
          <Input
            register={{ ...register('lastName', { required: true }) }}
            id='lastName'
            label='Last Name'
            type='text'
            isInvalid={!!errors.lastName}
            errorMessage='Please enter a last name'
          />
          <Input
            register={{ ...register('mobile', { required: true }) }}
            id='mobile'
            label='Mobile No.'
            type='number'
            isInvalid={!!errors.mobile}
            errorMessage='Please enter a mobile no.'
          />
        </div>
        <div>
          <h5 className='mb-2 text-2xl'>Booking</h5>
          <Input
            register={{ ...register('guests', { required: true }) }}
            id='guests'
            label='No. of Guests'
            type='number'
            isInvalid={!!errors.guests}
            errorMessage='Please enter no. of guests'
          />
          <Input
            register={{ ...register('date', { required: true }) }}
            id='date'
            label='Date'
            type='date'
            isInvalid={!!errors.date}
            errorMessage='Please enter a date'
          />
          <Input
            register={{ ...register('time', { required: true }) }}
            id='time'
            label='Time'
            type='time'
            isInvalid={!!errors.time}
            errorMessage='Please enter a time'
          />
        </div>
        <div className='mt-10'>
          <button className='px-4 py-2 font-semibold bg-primary-2 rounded-[16px]' type='submit'>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
