import { Montserrat } from 'next/font/google';

import { Navbar } from '@/components';

import './globals.css';

const inter = Montserrat({ subsets: ['latin'] });

export const metadata = {
  title: 'LivisShop',
  description: 'Generated by create next app'
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang='en' data-theme='light'>
    <body className={`${inter.className}`}>
      <Navbar />
      {children}
    </body>
  </html>
);

export default RootLayout;
