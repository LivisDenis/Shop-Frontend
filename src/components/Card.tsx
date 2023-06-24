import Image from 'next/image';

import { Bag, Favourite } from '@/components/svg';

interface CardProps {
  type: boolean;
  price: string;
  image: string;
  brand: string;
  about: string;
}
export const Card = (props: CardProps) => {
  const { type, brand, about, price, image } = props;
  return (
    <div className='max-w-[300px]'>
      <div className='relative'>
        <Image width={300} height={460} className='w-[300px]' src={image} alt={about} />
        {type && (
          <span className='absolute bottom-0 left-0 font-semibold text-white px-[10px] py-[5px] bg-custom-green'>
            New
          </span>
        )}
        <button type='button' className='absolute top-[20px] right-[5px]'>
          <Favourite className='stroke-custom-red hover:fill-custom-red' />
        </button>
      </div>
      <div className='flex flex-col mt-[20px] text-custom-gray'>
        <div className='flex justify-between items-end'>
          <span className='text-[20px] text-custom-black font-semibold'>{price}</span>
          <Bag className='stroke-black' />
        </div>
        <span className='mt-[20px]'>{brand}</span>
        <span className='mt-[10px]'>{about}</span>
      </div>
    </div>
  );
};
