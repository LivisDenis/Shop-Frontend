import Link from 'next/link';

import { Button, Input } from '@/components';
import { ROUTES } from '@/src/utils';

const SignIn = () => (
  <div className='p-[40px]'>
    <h2 className='text-center mb-[30px]  text-[32px] font-semibold'>Вход</h2>
    <form>
      <div className='grid gap-y-[20px]'>
        <Input label='Введите ваш e-mail или номер телефона' />
        <Input label='введите ваш пароль' />
      </div>
      <Button className='mt-[30px] w-full' type='button'>
        Войти
      </Button>
      <Link
        href={ROUTES.REGISTER}
        className='block mt-[30px] w-full font-semibold text-center uppercase text-blue-600 hover:text-custom-blue'
      >
        Зарегистрироваться
      </Link>
    </form>
  </div>
);

export default SignIn;
