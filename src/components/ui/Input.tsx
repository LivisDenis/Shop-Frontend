import { type ComponentPropsWithRef } from 'react';

interface InputProps {
  label?: string;
  required?: boolean;
  props?: ComponentPropsWithRef<'input'>;
}

export const Input = ({ label, required, props }: InputProps) => (
  <div className='form-control w-full'>
    {label && (
      <label className='label uppercase'>
        <span>
          {label}
          {required && <span className='text-custom-red'>*</span>}
        </span>
      </label>
    )}
    <input
      type='text'
      {...props}
      className='input input-bordered border-custom-gray w-full rounded-[50px]'
    />
  </div>
);
