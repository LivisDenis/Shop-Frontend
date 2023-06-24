import { type ComponentPropsWithRef } from 'react';

interface ButtonProps extends ComponentPropsWithRef<'button'> {
  children: string;
  className?: string;
}

export const Button = ({ children, className, type = 'button', ...props }: ButtonProps) => {
  const buttonClasses = `btn btn-neutral rounded-[50px] py-[16px] px-[24px] font-semibold bg-custom-gray text-white ${
    className ?? ''
  }`;
  return (
    <button type={type} className={buttonClasses} {...props}>
      {children}
    </button>
  );
};
