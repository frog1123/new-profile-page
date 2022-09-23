import type { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Gr } from './Gr';

import umbrella from '@public/umbrella.svg';
import { removeSmoothScroll } from '@utils/smoothScroll';

export const BottomThing: FC = () => {
  return (
    <div className='tw-m-auto tw-w-[max-content] tw-pt-[20px]'>
      <div className='tw-w-[50px] tw-h-[50px] md:tw-w-[80px] md:tw-h-[80px] float-animation tw-m-auto'>
        <Image src={umbrella} layout='responsive' priority alt='' />
      </div>
      <h1 className='tw-text-white tw-mt-[15px]'>
        return{' '}
        <Link href='/'>
          <a onClick={() => removeSmoothScroll()}>
            <Gr>home</Gr>
          </a>
        </Link>
      </h1>
    </div>
  );
};
