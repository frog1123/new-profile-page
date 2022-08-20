import { NextPage } from 'next';
import type { FC } from 'react';
import Head from 'next/head';
import Image from 'next/image';

import { SongTab } from '@components/SongTab';

import six_dogs from '@public/audio_images/6_dogs.jpg';
import umbrella from '@public/umbrella.svg';

const Line: FC = () => {
  return <div className='w-[100%] h-[2px] bg-[#707070] mx-auto rounded-[10px]'></div>;
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

            <div className='grid grid-flow-row gap-[20px] w-[100%] place-items-center'>
              <div className='w-[98%] sm:w-[90%] md:w-[70%] bg-[#282828] p-[4px] rounded-[10px]'>
                <h1 className='gradient-text text-[24px] font-bold'>cool</h1>
                <Line />
                <div className='pt-[4px]'>
                  <SongTab image={six_dogs} title='Someone' song='Someone' artist={['6 dogs']} producer={['captaincrunch, nebarb']} />
                  <SongTab image={six_dogs} title='No Savage' song='No_Savage' artist={['6 dogs']} producer={['Pretty Pacc']} />
                  <SongTab title='MIA' song='MIA' artist={['shrimp']} producer={['MineSweepa']} />
                </div>
              </div>

              <div className='w-[98%] sm:w-[90%] md:w-[70%] bg-[#282828] p-[4px] rounded-[10px]'>
                <h1 className='gradient-text text-[24px] font-bold'>instrumentals</h1>
                <Line />
                <div className='pt-[4px]'>
                  <SongTab title='time flies' song='time_flies' artist={['jhove']} producer={['idk']} />
                  <SongTab title='Somewhere Away' song='Somewhere_Away' artist={['Goosetaf']} producer={['idk']} />
                </div>
              </div>
            </div>

            <div className='text-center'>
              <h2 className='text-white pt-[60px]'>I do not claim to own any of the music being used here</h2>
            </div>
          </div>
        </div>

        <div className='m-auto w-[max-content] pt-[50px]'>
          <div className='w-[50px] h-[50px] md:w-[80px] md:h-[80px] float-animation'>
            <Image src={umbrella} layout='responsive' alt='' />
          </div>
        </div>
      </div>
    </>
  );
};

export default Music;
