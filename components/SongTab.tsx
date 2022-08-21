import Image from 'next/image';
import { FC, useEffect, useContext } from 'react';
import { UserContext } from '../UserContext';

import { AudioButton } from '@components/AudioButton';
import alt from '@public/audio_images/alt.jpg';

interface SongTabProps {
  image?: any;
  song: string;
  title: string;
  artist: string[];
  producer: string[];
}

export const SongTab: FC<SongTabProps> = ({ image, song, title, artist, producer }) => {
  const { value, setValue } = useContext(UserContext);

  let audioVolume: number = 50;

  useEffect(() => {
    let volume = document.getElementById(`volume-slider-${song}`) as any;
    const audio = document.getElementById(`audio-${song}`) as any;
    audio.volume = 0.5;

    volume.oninput = function () {
      audioVolume = this.value / 100;
      audio.volume = this.value / 100;

      document.getElementById(`mute-${song}`)?.classList.add('hidden');
      document.getElementById(`sound-${song}`)?.classList.remove('hidden');
      document.getElementById(`sound-${song}`)?.classList.add('block');
    };
  });

  const playAudio = () => {
    const audio = document.getElementById(`audio-${song}`) as any;
    document.getElementById(`play-${song}`)?.classList.add('hidden');
    document.getElementById(`pause-${song}`)?.classList.remove('hidden');
    document.getElementById(`pause-${song}`)?.classList.add('block');
    setValue({ currentlyPlaying: song, stopPlayingAudio: true });

    audio.play();
  };

  const pauseAudio = async () => {
    const audio = document.getElementById(`audio-${song}`) as any;
    document.getElementById(`pause-${song}`)?.classList.add('hidden');
    document.getElementById(`play-${song}`)?.classList.remove('hidden');
    document.getElementById(`play-${song}`)?.classList.add('block');

    audio.pause();
  };

  const skipAudio = (mode: string) => {
    const audio = document.getElementById(`audio-${song}`) as any;

    if (mode === 'forward') audio.currentTime += 10;
    if (mode === 'back') audio.currentTime -= 10;
  };

  const muteAudio = () => {
    const volume = document.getElementById(`volume-slider-${song}`) as any;
    const audio = document.getElementById(`audio-${song}`) as any;
    document.getElementById(`sound-${song}`)?.classList.add('hidden');
    document.getElementById(`mute-${song}`)?.classList.remove('hidden');
    document.getElementById(`mute-${song}`)?.classList.add('block');

    audio.volume = 0;
    volume.value = 0;
  };

  const unmuteAudio = () => {
    const volume = document.getElementById(`volume-slider-${song}`) as any;
    const audio = document.getElementById(`audio-${song}`) as any;
    document.getElementById(`mute-${song}`)?.classList.add('hidden');
    document.getElementById(`sound-${song}`)?.classList.remove('hidden');
    document.getElementById(`sound-${song}`)?.classList.add('block');

    volume.value = audioVolume * 100;
    audio.volume = audioVolume;
  };

  if (value.stopPlayingAudio) {
    if (value.currentlyPlaying !== song) pauseAudio().then(() => setValue({ stopPlayingAudio: false }));
  }

  return (
    <div className='bg-[#282828] hover:bg-[#212121] p-[4px] rounded-[6px] flex'>
      <div className='grid grid-flow-col place-items-center gap-[6px]'>
        <div className='w-[30px] h-[30px] md:w-[40px] md:h-[40px]'>
          <Image src={typeof image === 'undefined' ? alt : image} alt='' />
        </div>
        <div className='grid grid-flow-row'>
          <h1 className='text-white text-[12px] md:text-[14px]'>
            {artist.map((a, index) => (
              <span key={index}>{a}</span>
            ))}{' '}
            - {title}
          </h1>
          <h2 className='text-[#707070] text-[10px] md:text-[12px]'>
            (prod.{' '}
            {producer.map((p, index) => (
              <span key={index}>{p}</span>
            ))}
            )
          </h2>
        </div>
      </div>
      <div className='ml-[auto] grid grid-cols-[max-content_auto] place-items-center'>
        <audio id={`audio-${song}`} loop>
          <source src={`/audio/${song}.mp3`} type='audio/mp3' />
        </audio>
        <div className='grid grid-flow-col place-items-center gap-[4px] md:gap-0'>
          <AudioButton id={`back-${song}`} icon='back' action={() => skipAudio('back')} />
          <div className='grid place-items-center'>
            <AudioButton id={`play-${song}`} icon='play' action={playAudio} />
            <AudioButton id={`pause-${song}`} icon='pause' action={pauseAudio} />
          </div>
          <AudioButton id={`forward-${song}`} icon='forward' action={() => skipAudio('forward')} />
        </div>
        <div className='hidden md:grid grid-cols-[max-content_auto] place-items-center gap-[10px]'>
          <div className='grid place-items-center'>
            <AudioButton id={`sound-${song}`} icon='sound' action={muteAudio} />
            <AudioButton id={`mute-${song}`} icon='mute' action={unmuteAudio} />
          </div>
          <input id={`volume-slider-${song}`} type='range' className='max-w-[120px] lg:max-w-[140px] volume-slider' />
        </div>
      </div>
    </div>
  );
};
