import { type ComponentPropsWithRef, useId } from 'react';

interface InputProps extends ComponentPropsWithRef<'input'> {
  label?: string;
  required?: boolean;
}

export const Input = ({ label, required, ...props }: InputProps) => {
  const id = useId();

  return (
    <div className='form-control w-full'>
      {label && (
        <label className='label uppercase text-[14px]' htmlFor={id}>
          <span>
            {label}
            {required && <span className='text-custom-red'>*</span>}
          </span>
        </label>
      )}
      <input
        type='text'
        id={id}
        {...props}
        className='input input-bordered border-custom-gray text-[18px] w-full rounded-[50px]'
      />
    </div>
  );
};
