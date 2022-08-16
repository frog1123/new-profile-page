import type { FC } from 'react';
import Link from 'next/link';

export const Links: FC = () => {
  return (
    <div className='bg-[#333333] flex justify-center md:pt-[4px] pb-[10px] rounded-[10px] md:rounded-[20px]'>
      <div className='grid grid-flow-row place-items-center'>
        <h1 id='links' className='gradient-text text-[24px] font-bold'>
          LINKS
        </h1>
        <div className='grid grid-flow-row'>
          <a className='cursor-pointer'>
            <Link href='/projects'>
              <h1 className='gradient-text text-[14px] md:text-[20px] font-bold'>projects</h1>
            </Link>
          </a>
          <a className='cursor-pointer'>
            <Link href='/progamming-related'>
              <h1 className='gradient-text text-[14px] md:text-[20px] font-bold'>progamming-related</h1>
            </Link>
          </a>
        </div>
      </div>
    </div>
  );
};
