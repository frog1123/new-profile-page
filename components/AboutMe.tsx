import type { FC } from 'react';

import { ShowHideText } from '@components/ShowHideText';

export const AboutMe: FC = () => {
  return (
    <div className='bg-[#333333] flex justify-center pt-[15px] md:pt-[30px] pb-[10px] rounded-[10px] md:rounded-[20px]'>
      <div className='grid grid-flow-row place-items-center w-[100%]'>
        <h1 className='gradient-text text-[24px] font-bold'>ABOUT ME</h1>
        <p className='text-white text-center whitespace-pre-wrap px-[2px]'>
          hello im <span className='gradient-text'>frogdude1123</span> idk what else to add here lmao
          <br />
          ok <span className='gradient-text'>bye</span>
        </p>
        <br />
        <div>
          <ShowHideText title='stuff' content='TODO: add stuff later' centerTitle />
        </div>
      </div>
    </div>
  );
};
