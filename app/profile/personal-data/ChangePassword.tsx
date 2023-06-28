import { Button, Input } from '@/components';

export const ChangePassword = () => (
  <div className='pt-[32px]'>
    <h2 className='text-[20px] font-semibold'>Смена пароля</h2>
    <form className='mt-[26px]'>
      <Input label='Ваш текущий пароль' />
      <Button type='button' className='mt-[30px]'>
        Сменить пароль
      </Button>
    </form>
  </div>
);
