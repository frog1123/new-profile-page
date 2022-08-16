import type { FC } from 'react';
import Image from 'next/image';

import frog_pfp from '@public/frog.png';
import palm_tree from '@public/palm_tree.png';

export const ProfilePicture: FC = () => {
  return (
    <div className='bg-[#333333] flex justify-center pt-[15px] md:pt-[30px] pb-[10px] rounded-[10px] md:rounded-[20px]'>
      <div className='flex justify-between w-[100%] place-items-center'>
        <div className='w-[80px] h-[80px] md:w-[160px] md:h-[160px] lg:w-[240px] lg:h-[240px] disable-select mirror'>
          <Image src={palm_tree} className='float-animation' />
        </div>
        <div className='grid grid-flow-rows place-items-center'>
          <div className='w-[80px] h-[80px] md:w-[140px] md:h-[140px] lg:w-[200px] lg:h-[200px] disable-select hover:rotate-[360deg]'>
            <Image src={frog_pfp} className='rounded-[50%]' />
          </div>
          <h1 className='gradient-text text-[16px] md:text-[24px] lg:text-[32px]'>frogdude1123</h1>
        </div>
        <div className='w-[80px] h-[80px] md:w-[160px] md:h-[160px] lg:w-[240px] lg:h-[240px] disable-select'>
          <Image src={palm_tree} className='float-animation' />
        </div>
      </div>
    </div>
  );
};
