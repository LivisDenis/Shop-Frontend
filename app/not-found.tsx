import Link from 'next/link';

import { ROUTES } from '@/src/utils';

const NotFound = () => (
  <div className='mt-[75px] text-center'>
    <h1 className='text-[32px] font-semibold'>Страница не найдена</h1>
    <p className='mt-[40px] text-[25px] text-blue-600 hover:text-custom-blue'>
      <Link href={ROUTES.MAIN}>Вернуться на главную страницу</Link>
    </p>
  </div>
);

export default NotFound;
