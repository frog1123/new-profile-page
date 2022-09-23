import type { FC } from 'react';

import styles from '@styles/AboutMe.module.scss';
import { ShowHideText } from '@components/ShowHideText';

export const AboutMe: FC = () => {
  return (
    <div className='frog-hidden tw-bg-[#333333] tw-flex tw-justify-center tw-pt-[5px] tw-pb-[10px] tw-rounded-[10px] md:tw-rounded-[20px]'>
      <div className='tw-grid tw-grid-flow-row tw-place-items-center tw-w-[100%]'>
        <h1 id='about-me' className='gradient-text tw-text-[24px] tw-font-bold'>
          ABOUT ME
        </h1>
        <p className='tw-text-white tw-text-center tw-whitespace-pre-wrap tw-px-[2px]'>
          <span className={styles.wave}>👋</span> hello im <span className='gradient-text'>frogdude1123</span> idk what else to add here lmao
          <br />
          ok <span className='gradient-text'>bye</span>
        </p>
        <br />
        <div>
          <ShowHideText title='stuff' centerTitle>
            <h1>TODO: add stuff later</h1>
          </ShowHideText>
        </div>
      </div>
    </div>
  );
};
