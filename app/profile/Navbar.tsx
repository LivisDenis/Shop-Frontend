'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { ROUTES } from '@/src/utils';

const navbar = [
  { value: 'Личные данные', path: ROUTES.PROFILE },
  { value: 'Заказы', path: ROUTES.ORDERS },
  { value: 'Избранное', path: ROUTES.FAVOURITE }
];

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <>
      {navbar.map((item) => (
        <li key={item.path} className='flex items-center relative whitespace-nowrap'>
          {pathname === item.path && (
            <span className='block absolute left-[-20px] w-2 h-2 rounded-[5px] bg-custom-gray' />
          )}
          <Link href={item.path}>{item.value}</Link>
        </li>
      ))}
    </>
  );
};
