import type { FC } from 'react';
import Link from 'next/link';

interface FrogLinkProps {
  text: string;
  url: string;
}

export const FrogLink: FC<FrogLinkProps> = ({ text, url }) => {
  return (
    <Link href={url}>
      <a className='cursor-pointer'>
        <h1 className='gradient-text text-[14px] md:text-[20px] font-bold'>{text}</h1>
      </a>
    </Link>
  );
};

export const Links: FC = () => {
  return (
    <div className='frog-hidden bg-[#333333] flex justify-center md:pt-[4px] pb-[10px] rounded-[10px] md:rounded-[20px]'>
      <div className='grid grid-flow-row place-items-center'>
        <h1 id='links' className='gradient-text text-[24px] font-bold'>
          LINKS
        </h1>
        <div className='grid grid-flow-row'>
          <FrogLink text='projects' url='/projects' />
          <FrogLink text='progamming-related' url='/progamming-related' />
          <FrogLink text='music i like' url='/music' />
        </div>
      </div>
    </div>
  );
};
