import type { FC } from 'react';

const FrogButton: FC<{ text: string; location: string }> = ({ text, location }) => {
  return (
    <a href={`#${location}`}>
      <button className='dag-gradient rounded-[10px] sm:hover:translate-y-[-8px] px-[4px] py-[2px] w-[100%] sm:w-[max-content]'>
        <h2 className='text-white md:text-[18px]'>{text}</h2>
      </button>
    </a>
  );
};

export const Explore: FC = () => {
  return (
    <div className='frog-hidden bg-[#333333] flex justify-center md:pt-[4px] pb-[10px] rounded-[10px] md:rounded-[20px]'>
      <div className='grid grid-flow-row place-items-center w-[100%] px-[10px]'>
        <h1 className='gradient-text text-[24px] font-bold'>EXPLORE</h1>
        <div className='mt-[4px] grid grid-flow-row sm:grid-flow-col gap-[6px] w-[100%] sm:w-[max-content]'>
          <FrogButton text='about me' location='about-me' />
          <FrogButton text='socials' location='socials' />
          <FrogButton text='featured video' location='featured-video' />
          <FrogButton text='links' location='links' />
        </div>
      </div>
    </div>
  );
};
