import { TableItem } from '@/components';

import imgs from '../../../assets/clothes.png';

const OrdersPage = () => (
  <div className='overflow-x-auto w-full'>
    <table className='table [&_th:not(:first-child)]:text-center [&_td:not(:first-child)]:text-center'>
      {/* head */}
      <thead>
        <tr className='uppercase [&_th]:px-0'>
          <th>Фото</th>
          <th>Цвет</th>
          <th>Размер</th>
          <th>Цена</th>
          <th>Количество</th>
          <th>Сумма</th>
        </tr>
      </thead>
      <tbody>
        {/* row 1 */}
        <TableItem price='3 999' count={1} color='Белый' img={imgs} size={44} />
        {/* row 2 */}
        <TableItem price='3 999' count={1} color='Белый' img={imgs} size={44} />
        {/* row 3 */}
        <TableItem price='3 999' count={1} color='Белый' img={imgs} size={44} />
      </tbody>
    </table>
  </div>
);

export default OrdersPage;
