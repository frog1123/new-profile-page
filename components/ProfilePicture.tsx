import type { FC } from 'react';
import Image from 'next/image';

import styles from '@styles/ProfilePicture.module.css';
import { AudioPlayerMini } from '@components/AudioPlayerMini';
import { NewsTicker } from '@components/NewsTicker';
import frog_pfp from '@public/frog.png';
import palm_tree from '@public/palm_tree.png';

export const ProfilePicture: FC = () => {
  return (
    <div className='frog-hidden bg-[#333333] flex justify-center pt-[4px] pb-[10px] rounded-[10px] md:rounded-[20px] border-[#b5e48c] border-[4px_0_0_0]'>
      <div className='grid grid-flow-row w-[100%] place-items-center'>
        <NewsTicker />
        <div className='grid grid-cols-[max-content_auto_max-content] w-[100%]'>
          <div className='w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[160px] md:h-[160px] lg:w-[200px] lg:h-[200px] xl:w-[220px] xl:h-[220px] disable-select mirror mr-auto'>
            <Image src={palm_tree} className='float-animation' priority alt='' />
          </div>
          <div className='flex align-middle'>
            <div className='w-[100%]'>
              <div className='relative w-[100%] h-[100%] flex justify-center align-middle'>
                <div className='z-[420] absolute w-[100%] top-[50%] transform translate-y-[-50%]'>
                  <div className='relative w-[100%] hidden sm:block h-[50px] md:h-[80px] lg:h-[100px] xl:h-[120px] rounded-[100px] overflow-hidden'>
                    <img id='fwallpaper' src='/wallpaper.gif' className={`!overflow-hidden object-cover w-[100%] ${styles['wallpaper-hover-effect']}`} alt='' />
                  </div>
                </div>
                <div className='z-[421] absolute w-[100%] top-[50%] transform translate-y-[-50%]'>
                  <div className='w-[100%] hidden sm:block h-[50px] md:h-[80px] lg:h-[100px] xl:h-[120px] border-[#b5e48c] border-[4px] rounded-[100px] overflow-hidden'></div>
                </div>
                <div className='z-[1123] my-auto w-[80px] h-[80px] md:w-[140px] md:h-[140px] lg:w-[160px] lg:h-[160px] xl:h-[200px] xl:w-[200px] disable-select hover:rotate-[360deg] rounded-[50%] border-[#b5e48c] border-[4px]'>
                  <Image src={frog_pfp} className='rounded-[50%]' alt='' />
                </div>
              </div>
            </div>
          </div>
          <div className='w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[160px] md:h-[160px] lg:w-[200px] lg:h-[200px] xl:w-[220px] xl:h-[220px] disable-select ml-auto flex align-middle'>
            <Image src={palm_tree} className='float-animation' priority alt='' />
          </div>
        </div>
        <div className='flex m-auto'>
          <h1 className='gradient-text text-[16px] md:text-[24px] lg:text-[32px]'>frogdude1123</h1>
        </div>
        <div className='flex m-auto'>
          <AudioPlayerMini />
        </div>
      </div>
    </div>
  );
};
