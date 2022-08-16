import type { FC } from 'react';

export const FeaturedVideo: FC = () => {
  return (
    <div className='bg-[#333333] flex justify-center md:pt-[4px] pb-[10px] rounded-[10px] md:rounded-[20px]'>
      <div className='grid grid-flow-row place-items-center'>
        <h1 id='featured-video' className='gradient-text text-[24px] font-bold'>
          FEATURED VIDEO
        </h1>
        <div className='aspect-video w-[200px] sm:w-[400px] md:w-[600px] lg:w-[800px]'>
          <iframe src='https://www.youtube.com/embed/G6ImwlyveCY' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen id='featured-video' className='gradient-border disable-select w-[100%] h-[100%]'></iframe>
        </div>
      </div>
    </div>
  );
};
