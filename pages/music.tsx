import { NextPage } from 'next';
import type { FC } from 'react';
import Head from 'next/head';

import { SongTab } from '@components/SongTab';

import frog from '@public/frog.png';

const Line: FC = () => {
  return <div className='w-[99%] h-[2px] bg-[#707070] mx-auto rounded-[10px]'></div>;
};

const Music: NextPage = () => {
  return (
    <>
      <Head>
        <meta property='og:title' content='frogdude1123' />
        <meta property='og:description' content='music i like' />
        <meta property='og:url' content='https://frogdude1123.herokuapp.com/music' />
        <meta property='og:image' content='https://frogdude1123.herokuapp.com/frog.png' />
        <meta name='description' content='music i like' />
        <meta name='keywords' content='frogdude1123, frogdude, 1123, frog, dude, frog1123' />
        <title>music 🎵</title>
      </Head>
      <div className='w-[92%] lg:w-[80%] mx-auto mt-[10px] sm:mt-[30px] md:mt-[50px] pb-[50px]'>
        <div className='bg-[#333333] flex justify-center px-[6px] pt-[15px] pb-[10px] rounded-[10px] md:rounded-[20px] border-[#b5e48c] border-[4px_0_0_0]'>
          <div className='grid grid-flow-row place-items-center w-[100%]'>
            <h1 className='gradient-text text-[24px] font-bold'>MUSIC</h1>

            <div className='w-[60%] bg-[#282828] p-[4px] rounded-[10px]'>
              <h1 className='gradient-text text-[24px] font-bold'>w</h1>
              <Line />
              <SongTab image={frog} title='w' song='w' artist={['w']} producer={['w']} />
            </div>

            <h2 className='text-white pt-[60px]'>I do not claim to own any of this music</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Music;
