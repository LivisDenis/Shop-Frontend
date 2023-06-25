import Image, { type StaticImageData } from 'next/image';

import { Button } from '@/components/ui';

interface TableItemProps {
  img: string | StaticImageData;
  color: string;
  size: number;
  count: number;
  price: string;
}

export const TableItem = (props: TableItemProps) => {
  const { img, price, size, count, color } = props;
  return (
    <tr className='[&_th]:px-0'>
      <th>
        <Image src={img} width={78} height={96} alt='' />
      </th>
      <td>{color}</td>
      <td>{size}</td>
      <td>{price} ₽</td>
      <td>{count}</td>
      <td className='flex flex-col items-center'>
        <span>3 999 ₽</span>
        <Button type='button' className='mt-[33px]'>
          В корзину
        </Button>
      </td>
    </tr>
  );
};
