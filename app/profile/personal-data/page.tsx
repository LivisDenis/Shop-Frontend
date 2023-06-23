import { AlertInfo, Button, Input } from '@/components';

const InfoPage = () => (
  <div className='w-full max-w-[768px]'>
    <h2 className='text-[20px] font-semibold'>Личные данные</h2>
    <AlertInfo>Подтвердите адрес электронной почты.</AlertInfo>
    <form>
      <div className='grid gap-y-[20px]'>
        <Input label='Имя' required />
        <Input label='Фамилия' required />
        <Input label='Электронная почта' required />
        <Input label='Телефон' required />
        <Input label='Дата рождения' required />
      </div>
      <div className='grid gap-y-[15px] mt-[32px]'>
        <div className='flex items-center'>
          <input type='radio' name='radio-1' className='radio mr-[15px]' />
          <span>Я согласен с политикой обработки персональных данных</span>
        </div>
        <div className='flex items-center'>
          <input type='radio' name='radio-1' className='radio mr-[15px]' />
          <span>Получать электронные чеки при покупке в рознице</span>
        </div>
      </div>
      <Button>Сохранить изменения</Button>
    </form>
  </div>
);

export default InfoPage;
