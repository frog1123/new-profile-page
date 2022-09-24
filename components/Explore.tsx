import type { FC } from 'react';

import styles from '@styles/Explore.module.scss';

const FrogButton: FC<{ text: string; location: string }> = ({ text, location }) => {
  return (
    <a href={`#${location}`}>
      <button className={`dag-gradient tw-rounded-[10px] ${styles['button-hover-effect']} tw-px-[4px] tw-py-[2px] tw-w-[100%] sm:tw-w-[max-content]`}>
        <h2 className='tw-text-white md:tw-text-[18px]'>{text}</h2>
      </button>
    </a>
  );
};

export const Explore: FC = () => {
  return (
    <div className='frog-hidden tw-bg-[#333333] tw-flex tw-justify-center md:tw-pt-[4px] tw-pb-[10px] tw-rounded-[10px] md:tw-rounded-[20px]'>
      <div className='tw-grid tw-grid-flow-row tw-place-items-center tw-w-[100%] tw-px-[10px]'>
        <h1 className='gradient-text tw-text-[24px] tw-font-bold'>EXPLORE</h1>
        <div className='tw-mt-[4px] tw-grid tw-grid-flow-row sm:tw-grid-flow-col tw-gap-[6px] tw-w-[100%] sm:tw-w-[max-content]'>
          <FrogButton text='about me' location='about-me' />
          <FrogButton text='socials' location='socials' />
          <FrogButton text='featured video' location='featured-video' />
          <FrogButton text='links' location='links' />
        </div>
      </div>
    </div>
  );
};
