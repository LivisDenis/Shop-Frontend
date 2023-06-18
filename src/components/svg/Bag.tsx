export const Bag = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M20.25 6.75H3.75A.75.75 0 003 7.5v12c0 .414.336.75.75.75h16.5a.75.75 0 00.75-.75v-12a.75.75 0 00-.75-.75z'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M8.25 9.75v-3a3.75 3.75 0 017.5 0v3'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
