import type { FC } from 'react';
import Image from 'next/image';

import styles from '@styles/ProfilePicture.module.scss';
import { AudioPlayerMini } from '@components/AudioPlayerMini';
import { NewsTicker } from '@components/NewsTicker';
import frog_pfp from '@public/frog.png';
import palm_tree from '@public/palm_tree.png';

export const ProfilePicture: FC = () => {
  return (
    <div className='frog-hidden tw-bg-[#333333] tw-flex tw-justify-center tw-pt-[4px] tw-pb-[10px] tw-rounded-[10px] md:tw-rounded-[20px] tw-border-[#b5e48c] tw-border-[4px_0_0_0]'>
      <div className='tw-grid tw-grid-flow-row tw-w-[100%] tw-place-items-center'>
        <NewsTicker />
        <div className='tw-grid tw-grid-cols-[max-content_auto_max-content] tw-w-[100%]'>
          <div className='tw-w-[80px] tw-h-[80px] sm:tw-w-[100px] sm:tw-h-[100px] md:tw-w-[160px] md:tw-h-[160px] lg:tw-w-[200px] lg:tw-h-[200px] xl:tw-w-[220px] xl:tw-h-[220px] tw-select-none mirror tw-mr-auto'>
            <Image src={palm_tree} className='float-animation' priority alt='' />
          </div>
          <div className='tw-flex tw-align-middle'>
            <div className='tw-w-[100%]'>
              <div className='tw-relative tw-w-[100%] tw-h-[100%] tw-flex tw-justify-center tw-align-middle'>
                <div className='tw-z-[420] tw-absolute tw-w-[100%] tw-top-[50%] tw-transform tw-translate-y-[-50%]'>
                  <div className='tw-w-[100%] tw-hidden sm:tw-block tw-h-[50px] md:tw-h-[80px] lg:tw-h-[100px] xl:tw-h-[120px] tw-border-[#b5e48c] tw-border-[4px] tw-rounded-[100px] tw-overflow-hidden'>
                    <img id='fwallpaper' src='/wallpaper.webm' className={`!tw-overflow-hidden !tw-relative tw-object-cover tw-w-[100%] tw-select-none ${styles['wallpaper-hover-effect']}`} alt='' />
                  </div>
                </div>
                <div className={`${styles['icon-rotate']} tw-z-[1123] tw-my-auto tw-w-[80px] tw-h-[80px] md:tw-w-[140px] md:tw-h-[140px] lg:tw-w-[160px] lg:tw-h-[160px] xl:tw-h-[200px] xl:tw-w-[200px] tw-select-none tw-rounded-[50%] tw-border-[#b5e48c] tw-border-[4px]`}>
                  <Image src={frog_pfp} className='tw-rounded-[50%]' alt='' />
                </div>
              </div>
            </div>
          </div>
          <div className='tw-w-[80px] tw-h-[80px] sm:tw-w-[100px] sm:tw-h-[100px] md:tw-w-[160px] md:tw-h-[160px] lg:tw-w-[200px] lg:tw-h-[200px] xl:tw-w-[220px] xl:tw-h-[220px] tw-select-none tw-mr-auto'>
            <Image src={palm_tree} className='float-animation' priority alt='' />
          </div>
        </div>
        <div className='tw-flex tw-m-auto'>
          <h1 className='gradient-text tw-text-[16px] md:tw-text-[24px] lg:tw-text-[32px]'>frogdude1123</h1>
        </div>
        <div className='tw-flex tw-m-auto'>
          <AudioPlayerMini />
        </div>
      </div>
    </div>
  );
};
