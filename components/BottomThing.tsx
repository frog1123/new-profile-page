import type { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Gr } from './Gr';

import umbrella from '@public/umbrella.svg';

export const BottomThing: FC = () => {
  return (
    <div className='m-auto w-[max-content] pt-[20px]'>
      <div className='w-[50px] h-[50px] md:w-[80px] md:h-[80px] float-animation'>
        <Image src={umbrella} layout='responsive' priority alt='' />
      </div>
      <h1 className='text-white mt-[15px]'>
        return{' '}
        <Link href='/'>
          <a>
            <Gr>home</Gr>
          </a>
        </Link>
      </h1>
    </div>
  );
};
