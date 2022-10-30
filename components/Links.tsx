import type { FC } from 'react';
import Link from 'next/link';
import { removeSmoothScroll } from '@utils/smoothScroll';

interface FrogLinkProps {
  text: string;
  url: string;
}

export const FrogLink: FC<FrogLinkProps> = ({ text, url }) => {
  return (
    <Link href={url}>
      <a className='tw-cursor-pointer' onClick={() => removeSmoothScroll()}>
        <h1 className='gradient-text tw-text-[14px] md:tw-text-[20px] tw-font-bold'>{text}</h1>
      </a>
    </Link>
  );
};

export const Links: FC = () => {
  return (
    <div className='frog-hidden tw-bg-[#333333] tw-flex tw-justify-center md:tw-pt-[4px] tw-pb-[10px] tw-rounded-[10px] md:tw-rounded-[20px]'>
      <div className='tw-grid tw-grid-flow-row tw-place-items-center'>
        <h1 id='links' className='gradient-text tw-text-[24px] tw-font-bold'>
          LINKS
        </h1>
        <div className='tw-grid tw-grid-flow-row'>
          <FrogLink text='projects' url='/projects' />
          <FrogLink text='progamming-related' url='/progamming-related' />
          <FrogLink text='music i like' url='/music' />
          <FrogLink text='downloads' url='/downloads' />
        </div>
      </div>
    </div>
  );
};
