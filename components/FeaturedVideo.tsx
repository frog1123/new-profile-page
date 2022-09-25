import type { FC } from 'react';

export const FeaturedVideo: FC = () => {
  return (
    <div className='frog-hidden tw-bg-[#333333] tw-flex tw-justify-center md:tw-pt-[4px] tw-pb-[10px] tw-rounded-[10px] md:tw-rounded-[20px]'>
      <div className='tw-grid tw-grid-flow-row tw-place-items-center'>
        <h1 id='featured-video' className='gradient-text tw-text-[24px] tw-font-bold'>
          FEATURED VIDEO
        </h1>
        <div className='tw-aspect-video tw-w-[200px] sm:tw-w-[400px] md:tw-w-[600px] lg:tw-w-[800px]'>
          {/* <iframe src='https://www.youtube.com/embed/G6ImwlyveCY' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen id='featured-video' className='gradient-border tw-disable-select tw-w-[100%] tw-h-[100%]'></iframe> */}
          <iframe id='featured-video' className='gradient-border tw-disable-select tw-w-[100%] tw-h-[100%]' title='featured-video' aria-hidden='true' frameBorder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowFullScreen srcDoc={`<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:#d9ed92}</style><a href=https://www.youtube.com/embed/G6ImwlyveCY/?autoplay=1><img src=https://img.youtube.com/vi/G6ImwlyveCY/hqdefault.jpg alt='featured video'><span>►</span></a> `}></iframe>
        </div>
      </div>
    </div>
  );
};
