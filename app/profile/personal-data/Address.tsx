import { AlertInfo, Button, Input } from '@/components';

export const Address = () => (
  <div className='pt-[32px]'>
    <h2 className='text-[20px] font-semibold'>Адрес доставки</h2>
    <AlertInfo colorBG='gray'>
      Храните до 3-х адресов доставки, чтобы не вводить данные при каждом заказе.
    </AlertInfo>
    <form>
      <div className='grid grid-cols-2 items-end gap-[16px] gap-y-[20px]'>
        <Input label='Город' />
        <Input label='Улица' />
        <Input label='Дом, квартира/офис' placeholder='Дом/корпус' />
        <Input placeholder='Квартира/офис' />
      </div>
      <div className='mt-[30px]'>
        <Button type='button' className='mr-[16px]'>
          Сохранить адрес
        </Button>
        <Button type='button' className=''>
          + Добавить адрес
        </Button>
      </div>
    </form>
  </div>
);
