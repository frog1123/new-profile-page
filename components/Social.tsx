import type { FC } from 'react';
import Image from 'next/image';

interface SocialProps {
  image: string;
  url?: string;
  text: string;
}

export const Social: FC<SocialProps> = ({ image, url, text }) => {
  if (url)
    return (
      <a href={url} target='_blank' rel='noopener noreferrer' className='cursor-pointer'>
        <div className='grid grid-cols-[max-content_auto] place-items-center bg-[#282828] rounded-[10px] py-[4px] px-[4px] hover:bg-[#212121]'>
          <div className='w-[30px] h-[30px] md:w-[50px] md:h-[50px] block place-items-center'>
            <Image src={image} layout='responsive' alt='' />
          </div>
          <h1 className='mx-[2px] text-white text-[16px] md:text-[20px]'>{text}</h1>
        </div>
      </a>
    );
  else
    return (
      <div className='grid grid-cols-[max-content_auto] place-items-center bg-[#282828] rounded-[10px] py-[4px] px-[4px]'>
        <div className='w-[30px] h-[30px] md:w-[50px] md:h-[50px] block place-items-center'>
          <Image src={image} layout='responsive' alt='' />
        </div>
        <h1 className='mx-[2px] text-white text-[16px] md:text-[20px]'>{text}</h1>
      </div>
    );
};
