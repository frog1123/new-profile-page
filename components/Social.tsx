import type { FC } from 'react';
import Image from 'next/image';

import styles from '@styles/Social.module.scss';

interface SocialProps {
  image: string;
  url?: string;
  text: string;
}

export const Social: FC<SocialProps> = ({ image, url, text }) => {
  if (url)
    return (
      <a href={url} target='_blank' rel='noopener noreferrer' className='tw-cursor-pointer'>
        <div className={`tw-grid tw-grid-cols-[max-content_auto] tw-place-items-center tw-rounded-[10px] tw-py-[4px] tw-px-[4px] ${styles['social']}`}>
          <div className='tw-w-[30px] tw-h-[30px] md:tw-w-[50px] md:tw-h-[50px] tw-block tw-place-items-center'>
            <Image src={image} layout='responsive' alt='' />
          </div>
          <h1 className='tw-mx-[2px] tw-text-white tw-text-[16px] md:tw-text-[20px]'>{text}</h1>
        </div>
      </a>
    );
  else
    return (
      <div className='tw-grid tw-grid-cols-[max-content_auto] tw-place-items-center tw-bg-[#282828] tw-rounded-[10px] tw-py-[4px] tw-px-[4px]'>
        <div className='tw-w-[30px] tw-h-[30px] md:tw-w-[50px] md:tw-h-[50px] tw-block tw-place-items-center'>
          <Image src={image} layout='responsive' alt='' />
        </div>
        <h1 className='tw-mx-[2px] tw-text-white tw-text-[16px] md:tw-text-[20px]'>{text}</h1>
      </div>
    );
};
