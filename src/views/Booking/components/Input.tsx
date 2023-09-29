// packages
import React from 'react';

// types
import { InputProps } from '@/types';

// assets
import { MdError } from 'react-icons/md';

const Input: React.FC<InputProps> = props => {
  const { register, id, type, label, isInvalid, errorMessage } = props;

  return (
    <div className='flex flex-col gap-2 mb-3'>
      <label className='font-medium tracking-tight' htmlFor={id}>
        {label}
      </label>
      <input
        className={`px-4 py-2 text-base bg-secondary-3 rounded-[16px] shadow-md focus:outline-none ${
          isInvalid ? 'border border-red-500' : 'border-none'
        }`}
        id={id}
        type={type}
        {...register}
      />
      {isInvalid && (
        <div className='flex flex-wrap gap-2'>
          <MdError className='text-red-600' />
          <p className='text-sm text-red-600'>{errorMessage}</p>
        </div>
      )}
    </div>
  );
};

export default Input;
