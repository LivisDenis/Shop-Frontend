import { Navbar } from '@/app/profile/Navbar';

const profileInfo = [
  { label: 'Контакты', value: '+7 (999) 999-99-99' },
  { label: 'Адрес доставки', value: 'г. Москва, ул. Революции ...' },
  { label: 'Дата рождения', value: '17.02.1990' },
  { label: 'Бонусы', value: '102' }
];

const ProfileLayout = ({ children }: { children: React.ReactNode }) => (
  <div className='container mt-[30px]'>
    <div className='pb-[44px] border-b border-gray-400'>
      <h1 className='text-center text-[32px]'>Мой профиль</h1>
      <div className='grid grid-flow-col divide-x divide-gray-400 divide-gray-950 mt-[60px] max-w-[1150px] mx-auto'>
        {profileInfo.map((info) => (
          <div key={info.label} className='flex flex-col items-center'>
            <p className='mb-[15px] text-custom-gray'>{info.label}</p>
            <p className='font-bold'>{info.value}</p>
          </div>
        ))}
      </div>
    </div>
    <div className='mt-[85px] flex'>
      <nav className='pl-[21px] mr-[165px]'>
        <ul className='grid grid-flow-rows gap-[24px] [&_li]:font-medium [&_li:hover]:text-gray-400 text-custom-gray'>
          <Navbar />
          <li>
            <button type='button'>Выйти</button>
          </li>
        </ul>
      </nav>
      {children}
    </div>
  </div>
);

export default ProfileLayout;
