import { NavList } from '@/components/NavList';
import { MasterCard, Mir, Visa } from '@/components/svg';

const navHelp = [
  { path: '', value: 'Мой аккаунт' },
  { path: '', value: 'Где мой магазин' },
  { path: '', value: 'Доставка и Оплата' },
  { path: '', value: 'правила возврата' },
  { path: '', value: 'найти магазин' },
  { path: '', value: 'подобрать размер' }
];
const navCatalog = [
  { path: '', value: 'Мой' },
  { path: '', value: 'новинки' },
  { path: '', value: 'одежда' },
  { path: '', value: 'Обувь' },
  { path: '', value: 'аксессуары' },
  { path: '', value: 'Любимые бренды' },
  { path: '', value: 'sALE%' }
];
const navCompany = [
  { path: '', value: 'О нас' },
  { path: '', value: 'Философия бренда' },
  { path: '', value: 'Блог' },
  { path: '', value: 'контакты' },
  { path: '', value: 'Faq' }
];

export const Footer = () => (
  <footer className='bg-custom-gray bg-opacity-5 mt-[75px]'>
    <div className='max-w-[1010px] mx-auto grid grid-flow-col gap-[20px] pt-[80px] pb-[60px]'>
      <NavList title='Помощь' list={navHelp} />
      <NavList title='Каталог' list={navCatalog} />
      <NavList title='Компания' list={navCompany} />
    </div>
    <div className='max-w-[130px] mb-[30px] mx-auto grid grid-flow-col gap-[15px] items-center'>
      <Visa />
      <MasterCard />
      <Mir />
    </div>
    <div className='text-center text-custom-gray py-[20px] py-[15px] border-t border-gray-400'>
      © Copyright 2022 4:20 shop. All Rights reserved. Условия пользования сайтом
    </div>
  </footer>
);
