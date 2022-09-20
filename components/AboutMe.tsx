import type { FC } from 'react';

import styles from '@styles/AboutMe.module.scss';
import { ShowHideText } from '@components/ShowHideText';

export const AboutMe: FC = () => {
  return (
    <div className='frog-hidden bg-[#333333] flex justify-center pt-[5px] pb-[10px] rounded-[10px] md:rounded-[20px]'>
      <div className='grid grid-flow-row place-items-center w-[100%]'>
        <h1 id='about-me' className='gradient-text text-[24px] font-bold'>
          ABOUT ME
        </h1>
        <p className='text-white text-center whitespace-pre-wrap px-[2px]'>
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
