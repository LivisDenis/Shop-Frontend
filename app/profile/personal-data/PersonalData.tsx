import { AlertInfo, Button, Input } from '@/components';

export const PersonalData = () => (
  <div>
    <h2 className='text-[20px] font-semibold'>Личные данные</h2>
    <AlertInfo colorBG='blue'>Подтвердите адрес электронной почты.</AlertInfo>
    <form>
      <div className='grid gap-y-[20px]'>
        <Input label='Имя' required />
        <Input label='Фамилия' required />
        <Input label='Электронная почта' required />
        <Input label='Телефон' required />
        <Input label='Дата рождения' required />
      </div>
      <div className='grid gap-y-[15px] mt-[32px]'>
        <label className='flex items-center'>
          <input type='checkbox' className='checkbox mr-[15px]' />
          <span>Я согласен с политикой обработки персональных данных</span>
        </label>
        <label className='flex items-center'>
          <input type='checkbox' className='checkbox mr-[15px]' />
          <span>Получать электронные чеки при покупке в рознице</span>
        </label>
      </div>
      <Button type='button' className='mt-[30px]'>
        Сохранить изменения
      </Button>
    </form>
  </div>
);
