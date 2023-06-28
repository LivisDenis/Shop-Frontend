import { AlertInfo, Button } from '@/components';

export const PaymentMethod = () => (
  <div className='pt-[32px]'>
    <h2 className='text-[20px] font-semibold'>Способ оплаты</h2>
    <AlertInfo colorBG='gray'>Банковская карта для возврата не привязана!</AlertInfo>
    <form>
      <Button type='button' className='mt-[30px]'>
        Привязать карту
      </Button>
    </form>
  </div>
);
