import { Button, Input } from '@/components';

export const ChangePasswordModal = () => (
  <div>
    <h2 className='text-center text-[32px] font-semibold'>Сменить пароль</h2>
    <form>
      <Input label='Новый пароль' required />
      <Input label='Пароль еще раз' required />
      <Button type='button'>Сменить пароль</Button>
    </form>
  </div>
);
