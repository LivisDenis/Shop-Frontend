import { Address } from '@/app/profile/personal-data/Address';
import { ChangePassword } from '@/app/profile/personal-data/ChangePassword';
import { PaymentMethod } from '@/app/profile/personal-data/PaymentMethod';
import { PersonalData } from '@/app/profile/personal-data/PersonalData';

const InfoPage = () => (
  <div className='w-full grid grid-flow-row gap-y-[32px] max-w-[768px] divide-y divide-gray-400 pb-[32px] border-b border-gray-400'>
    <PersonalData />
    <Address />
    <PaymentMethod />
    <ChangePassword />
  </div>
);

export default InfoPage;
