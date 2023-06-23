import { type ComponentPropsWithRef } from 'react';

interface ButtonProps {
  children: string;
  props?: ComponentPropsWithRef<'button'>;
}
export const Button = ({ children, ...props }: ButtonProps) => (
  <button
    type='button'
    className='btn rounded-[50px] py-[16px] px-[24px] font-semibold bg-custom-gray text-white'
    {...props}
  >
    {children}
  </button>
);
