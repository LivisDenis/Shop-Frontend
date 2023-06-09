import Link from 'next/link';

import { Discount } from '@/components/Discount';
import { Favourite, User, Search, Bag, Location } from '@/components/svg';
import { ROUTES } from '@/src/utils';

const icons = [
  { path: ROUTES.SEARCH, element: <Search /> },
  { path: ROUTES.PROFILE, element: <User /> },
  { path: ROUTES.FAVOURITE, element: <Favourite /> },
  { path: ROUTES.BASKET, element: <Bag /> }
];
const genders = [
  { path: ROUTES.WOMAN, element: 'Женщинам' },
  { path: ROUTES.MAN, element: 'Мужчинам' },
  { path: ROUTES.CHILD, element: 'детям' }
];

export const Header = () => {
  const auth = false;

  const changeAuthPath = (path: string) =>
    !auth && (path === ROUTES.PROFILE || path === ROUTES.FAVOURITE) ? ROUTES.LOGIN : path;

  return (
    <header className='text-[14px]'>
      <Discount>Lorem ipsum is placeholder text commonly used -20%</Discount>
      <div className='bg-custom-black'>
        <div className='container flex justify-between items-center mx-auto'>
          <div className='flex items-center text-white'>
            <Link href='/' className='btn btn-ghost normal-case text-xl mr-[30px]'>
              LivisShop
            </Link>
            <div className='flex uppercase'>
              <Location className='mr-3' />
              москва
            </div>
          </div>
          <div className='grid grid-flow-col items-center uppercase [&_a:not(:first-child)]:py-[29px] [&_a:not(:first-child)]:px-[34px] [&_a:not(:first-child):hover]:bg-neutral-800 text-white'>
            <Link
              href={ROUTES.SALE}
              className='py-[13px] px-[27px] rounded-3xl bg-custom-red hover:bg-red-700 mr-[30px]'
            >
              Sale
            </Link>
            {genders.map((gender, i) => (
              <Link key={i} href={gender.path}>
                {gender.element}
              </Link>
            ))}
          </div>
          <div className='grid grid-flow-col items-center [&_a]:py-[17px] [&_a]:px-[10px] [&_a]:stroke-white [&_a:hover]:stroke-custom-red'>
            {icons.map((icon) => (
              <Link
                key={icon.path}
                href={changeAuthPath(icon.path)}
                className='stroke-white hover:stroke-custom-red'
              >
                {icon.element}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};
