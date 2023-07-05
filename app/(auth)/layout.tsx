interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => (
  <section className='w-full max-w-[600px] mx-auto border border-custom-gray rounded-[10px] mt-[75px] mb-[100px]'>
    {children}
  </section>
);

export default AuthLayout;
