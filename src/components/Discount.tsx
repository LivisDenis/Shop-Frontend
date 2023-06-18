interface DiscountProps {
  children: string;
}
export const Discount = ({ children }: DiscountProps) => (
  <div className='text-center py-[18px]'>{children}</div>
);
