import * as React from 'react';

export const Mir = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={33} height={9} fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M3.72.193C4.003.191 4.844.114 5.2 1.34c.24.825.622 2.176 1.147 4.054h.214c.562-1.98.949-3.33 1.159-4.054C8.08.102 8.98.193 9.34.193h2.777v8.8h-2.83V3.807h-.19L7.519 8.993h-2.13L3.81 3.803h-.19v5.19H.79v-8.8h2.93zm12.463 0v5.19h.226l1.92-4.268a1.518 1.518 0 011.166-.922h2.74v8.8h-2.89v-5.19h-.226l-1.883 4.268a1.562 1.562 0 01-1.204.922h-2.74v-8.8h2.89zm16.04 4.182c-.403 1.164-1.669 1.997-3.07 1.997h-3.031v2.621h-2.748V4.375h8.85z'
      fill='#0F754E'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M29.285.193H23.23c.144 1.96 1.8 3.636 3.515 3.636h5.67c.326-1.628-.8-3.636-3.13-3.636z'
      fill='url(#prefix__paint0_linear_3074_2396)'
    />
    <defs>
      <linearGradient
        id='prefix__paint0_linear_3074_2396'
        x1={32.47}
        y1={2.481}
        x2={23.23}
        y2={2.481}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#1F5CD7' />
        <stop offset={1} stopColor='#02AEFF' />
      </linearGradient>
    </defs>
  </svg>
);
