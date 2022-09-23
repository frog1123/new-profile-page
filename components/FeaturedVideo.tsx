import type { FC } from 'react';

export const FeaturedVideo: FC = () => {
  return (
    <div className='frog-hidden tw-bg-[#333333] tw-flex tw-justify-center md:tw-pt-[4px] tw-pb-[10px] tw-rounded-[10px] md:tw-rounded-[20px]'>
      <div className='tw-grid tw-grid-flow-row tw-place-items-center'>
        <h1 id='featured-video' className='gradient-text tw-text-[24px] tw-font-bold'>
          FEATURED VIDEO
        </h1>
        <div className='tw-aspect-video tw-w-[200px] sm:tw-w-[400px] md:tw-w-[600px] lg:tw-w-[800px]'>
          <iframe src='https://www.youtube.com/embed/G6ImwlyveCY' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen id='featured-video' className='gradient-border tw-disable-select tw-w-[100%] tw-h-[100%]'></iframe>
        </div>
      </div>
    </div>
  );
};
