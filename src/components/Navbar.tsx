import Link from 'next/link';

import { Heart, User, Search, Bag, Location } from '@/components/svg';
import {Discount} from "@/components/Discount";

const icons = [
  { path: '/search', element: <Search /> },
  { path: '/profile', element: <User /> },
  { path: '/favourite', element: <Heart /> },
  { path: '/basket', element: <Bag /> }
];
const genders = [
  { path: '/sale', element: 'Sale' },
  { path: '/woman', element: 'Женщинам' },
  { path: '/man', element: 'Мужчинам' },
  { path: '/child', element: 'детям' }
];

export const Navbar = () => (
  <header>
    <Discount>Lorem ipsum is placeholder text commonly used -20%</Discount>
    <div className='bg-black'>
      <div className='container mx-auto px-[15px] flex justify-between items-center mx-auto'>
        <div className='flex items-center text-white'>
          <Link href='' className='btn btn-ghost normal-case text-xl mr-[30px]'>
            LivisShop
          </Link>
          <div className='flex uppercase'>
            <Location className='mr-3' />
            москва
          </div>
        </div>
        <div className='grid grid-flow-col uppercase [&_a]:py-[29px] [&_a]:px-[34px] [&_a:hover]:bg-gray-600 text-white'>
          {genders.map((gender) => (
            <Link href={gender.path}>{gender.element}</Link>
          ))}
        </div>
        <div className='grid grid-flow-col items-center [&_a]:py-[17px] [&_a]:px-[10px]'>
          {icons.map((icon) => (
            <Link key={icon.path} href={icon.path} className='stroke-white hover:stroke-blue-400'>
              {icon.element}
            </Link>
          ))}
        </div>
      </div>
    </div>
  </header>
);
