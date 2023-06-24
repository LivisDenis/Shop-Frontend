import Link from 'next/link';

interface List {
  path: string;
  value: string;
}
interface NavListProps {
  title: string;
  list: List[];
}

export const NavList = ({ list, title }: NavListProps) => (
  <div className='text-center'>
    <h3 className='text-custom-black font-semibold uppercase'>{title}</h3>
    <ul className='mt-[30px] grid grid-flow-row gap-y-[20px] uppercase text-custom-gray'>
      {list.map((item, i) => (
        <li key={i} className='link link-hover'>
          <Link href={item.path}>{item.value}</Link>
        </li>
      ))}
    </ul>
  </div>
);
