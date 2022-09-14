import { NextPage } from 'next';
import { FC, useContext, useEffect } from 'react';
import Head from 'next/head';
import { UserContext } from 'UserContext';

import { SongTab } from '@components/SongTab';

import six_dogs from '@public/audio_images/6_dogs.jpg';
import purple_sky from '@public/audio_images/purple_sky.webp';
import dark_sky from '@public/audio_images/dark_sky.jpg';
import dark_sky_2 from '@public/audio_images/dark_sky_2.jpg';
import anime_tree from '@public/audio_images/anime_tree.jpg';
import { BottomThing } from '@components/BottomThing';

const Line: FC = () => {
  return <div className='w-[100%] h-[2px] bg-[#707070] mx-auto rounded-[10px]'></div>;
};

const Music: NextPage = () => {
  const { value, setValue } = useContext(UserContext);

  useEffect(() => {
    if (value.pauseCurrentlyPlaying) {
      setValue({ ...value, pauseCurrentlyPlaying: false, currentlyPlaying: value.currentlyPlaying.slice(1) });
      if (value.currentlyPlaying[0] === value.currentlyPlaying[1]) return;

      if (value.currentlyPlaying[0] !== '') {
        const audio = document.getElementById(`audio-${value.currentlyPlaying[0]}`) as any;
        document.getElementById(`pause-${value.currentlyPlaying[0]}`)?.classList.add('hidden');
        document.getElementById(`play-${value.currentlyPlaying[0]}`)?.classList.remove('hidden');
        document.getElementById(`play-${value.currentlyPlaying[0]}`)?.classList.add('block');
        audio.pause();
        audio.currentTime = 0;
      }
    }

    const hiddenElements = document.querySelectorAll('.frog-hidden');
    console.log(hiddenElements);

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('frog-show');
        else entry.target.classList.remove('frog-show');
      });
    });

    hiddenElements.forEach(el => observer.observe(el));
  });

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
      <div className='w-[92%] lg:w-[80%] mx-auto mt-[10px] sm:mt-[30px] md:mt-[50px]'>
        <div className='frog-hidden bg-[#333333] flex justify-center px-[6px] pt-[15px] pb-[10px] rounded-[10px] md:rounded-[20px] border-[#b5e48c] border-[4px_0_0_0]'>
          <div className='grid grid-flow-row place-items-center w-[100%]'>
            <h1 className='gradient-text text-[24px] font-bold'>MUSIC</h1>

            <div className='grid grid-flow-row gap-[20px] w-[100%] place-items-center'>
              <div className='frog-hidden w-[100%] sm:w-[95%] md:w-[90%] bg-[#282828] p-[4px] rounded-[10px]'>
                <h1 className='gradient-text text-[24px] font-bold'>cool</h1>
                <Line />
                <div className='pt-[4px]'>
                  <SongTab image={six_dogs} title='Someone' song='Someone' artist={['6 dogs']} producer={['captaincrunch', 'nebarb']} />
                  <SongTab image={six_dogs} title='No Savage' song='No_Savage' artist={['6 dogs']} producer={['Pretty Pacc']} />
                  <SongTab title='MIA' song='MIA' artist={['shrimp']} producer={['MineSweepa']} />
                  <SongTab image={purple_sky} title='painless' song='painless' artist={['keyblayde808', 'emotionals3k']} producer={['keyblayde808']} />
                  <SongTab image={dark_sky} title='tanlines' song='tanlines' artist={['shrimp']} producer={['shrimp']} />
                  <SongTab image={dark_sky_2} title='Head Straight' song='Head_Straight' artist={['Shakewell']} producer={['MTM', 'Flexatelli']} />
                </div>
              </div>

              <div className='frog-hidden w-[100%] sm:w-[95%] md:w-[90%] bg-[#282828] p-[4px] rounded-[10px]'>
                <h1 className='gradient-text text-[24px] font-bold'>instrumentals</h1>
                <Line />
                <div className='pt-[4px]'>
                  <SongTab title='time flies' song='time_flies' artist={['jhove']} producer={['idk']} />
                  <SongTab title='Somewhere Away' song='Somewhere_Away' artist={['Goosetaf']} producer={['idk']} />
                  <SongTab image={anime_tree} title='Flossing (Instrumental)' song='Flossing_Instrumental' artist={['6 dogs']} producer={['yungjugg']} />
                  <SongTab title='Decay' song='Decay' artist={['HOME']} producer={['HOME']} />
                </div>
              </div>
            </div>

            <div className='text-center'>
              <h2 className='text-white pt-[60px]'>I do not claim to own any of the music being used here</h2>
            </div>
          </div>
        </div>
        <BottomThing />
      </div>
    </>
  );
};

export default Music;
