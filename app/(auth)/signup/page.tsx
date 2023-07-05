'use client';

import { PatternFormat } from 'react-number-format';

import Link from 'next/link';

import { Button, Input } from '@/components';
import { ROUTES } from '@/src/utils';

interface SignUpProps {}

const SignUp = ({}: SignUpProps) => (
  <div className='p-[40px]'>
    <h2 className='text-center mb-[30px] text-[32px] font-semibold'>Регистрация</h2>
    <form>
      <div className='grid gap-y-[20px]'>
        <Input label='Введите ваш e-mail' />
        <PatternFormat
          format='+380 (##) ### ###'
          customInput={Input}
          allowEmptyFormatting
          mask='_'
        />
        <Input label='Введите ваш номер телефона' />
        <Input label='введите ваш пароль' />
      </div>
      <Button className='mt-[30px] w-full' type='button'>
        Зарегистрироваться
      </Button>
      <Link
        href={ROUTES.LOGIN}
        className='block mt-[30px] w-full font-semibold text-center uppercase text-blue-600 hover:text-custom-blue'
      >
        Я уже зарегистрирован
      </Link>
    </form>
  </div>
);

export default SignUp;
