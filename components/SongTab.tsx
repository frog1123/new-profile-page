import Image from 'next/image';
import { FC, useEffect, useContext } from 'react';
import { UserContext } from '../UserContext';

import { AudioButton } from '@components/AudioButton';
import alt from '@public/audio_images/alt.jpg';
import styles from '@styles/SongTab.module.scss';

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
    if (typeof document === 'undefined') return;
    const audio = document.getElementById(`audio-${song}`) as any;
    const duration = document.getElementById(`duration-total-${song}`) as any;

    audio.onloadedmetadata = () => {
      const time = new Date(Math.floor(audio.duration) * 1000).toISOString().substring(14, 19);
      duration.innerHTML = time;
    };

    // for refresh
    let executed = false;
    while (!isNaN(audio.duration) && !executed) {
      executed = true;
      const time = new Date(Math.floor(audio.duration) * 1000).toISOString().substring(14, 19);
      duration.innerHTML = time;
    }
  });

  useEffect(() => {
    let volume = document.getElementById(`volume-slider-${song}`) as any;
    const audio = document.getElementById(`audio-${song}`) as any;
    audio.volume = 0.5;

    volume.oninput = function () {
      audioVolume = this.value / 100;
      audio.volume = this.value / 100;

      document.getElementById(`mute-${song}`)?.classList.add('tw-hidden');
      document.getElementById(`sound-${song}`)?.classList.remove('tw-hidden');
      document.getElementById(`sound-${song}`)?.classList.add('tw-block');
    };

    if (!audio.paused)
      setInterval(() => {
        const duration = document.getElementById(`duration-current-${song}`) as any;
        const time = new Date(Math.floor(audio.currentTime) * 1000).toISOString().substring(14, 19);
        if (duration !== null) duration.innerHTML = time;
      }, 1000);
  });

  const playAudio = () => {
    const audio = document.getElementById(`audio-${song}`) as any;
    document.getElementById(`play-${song}`)?.classList.add('tw-hidden');
    document.getElementById(`pause-${song}`)?.classList.remove('tw-hidden');
    document.getElementById(`pause-${song}`)?.classList.add('tw-block');
    setValue({ ...value, pauseCurrentlyPlaying: true, currentlyPlaying: [...value.currentlyPlaying, song] });

    audio.play();
  };

  const pauseAudio = async () => {
    const audio = document.getElementById(`audio-${song}`) as any;
    document.getElementById(`pause-${song}`)?.classList.add('tw-hidden');
    document.getElementById(`play-${song}`)?.classList.remove('tw-hidden');
    document.getElementById(`play-${song}`)?.classList.add('tw-block');

    audio.pause();
  };

  const skipAudio = (mode: string) => {
    const audio = document.getElementById(`audio-${song}`) as any;
    const duration = document.getElementById(`duration-current-${song}`) as any;
    const time = new Date(Math.floor(audio.currentTime) * 1000).toISOString().substring(14, 19);
    duration.innerHTML = time;

    if (mode === 'forward') audio.currentTime += 10;
    if (mode === 'back') audio.currentTime -= 10;
  };

  const muteAudio = () => {
    const volume = document.getElementById(`volume-slider-${song}`) as any;
    const audio = document.getElementById(`audio-${song}`) as any;
    document.getElementById(`sound-${song}`)?.classList.add('tw-hidden');
    document.getElementById(`mute-${song}`)?.classList.remove('tw-hidden');
    document.getElementById(`mute-${song}`)?.classList.add('tw-block');

    audio.volume = 0;
    volume.value = 0;
  };

  const unmuteAudio = () => {
    const volume = document.getElementById(`volume-slider-${song}`) as any;
    const audio = document.getElementById(`audio-${song}`) as any;
    document.getElementById(`mute-${song}`)?.classList.add('tw-hidden');
    document.getElementById(`sound-${song}`)?.classList.remove('tw-hidden');
    document.getElementById(`sound-${song}`)?.classList.add('tw-block');

    volume.value = audioVolume * 100;
    audio.volume = audioVolume;
  };

  return (
    <div className={`${styles['song-tab']} tw-p-[4px] tw-rounded-[6px] tw-flex`}>
      <div className='tw-grid tw-grid-flow-col tw-place-items-center tw-gap-[6px]'>
        <div className='tw-w-[30px] tw-h-[30px] md:tw-w-[40px] md:tw-h-[40px]'>
          <Image src={typeof image === 'undefined' ? alt : image} className='tw-rounded-[4px]' alt='' />
        </div>
        <div className='tw-grid tw-grid-flow-row'>
          <h1 className='tw-text-white tw-text-[10px] sm:tw-text-[12px] md:tw-text-[14px]'>
            {artist.map((a, index) => (
              <span key={index}>{(index ? ', ' : '') + a}</span>
            ))}{' '}
            - {title}{' '}
            <span className='tw-text-[#707070] tw-text-[8px] sm:tw-text-[10px] md:tw-text-[12px] tw-align-middle' id={`duration-current-${song}`}>
              00:00
            </span>
            <span className='tw-text-[#707070] tw-text-[8px] sm:tw-text-[10px] md:tw-text-[12px] tw-align-middle'> / </span>
            <span className='tw-text-[#707070] tw-text-[8px] sm:tw-text-[10px] md:tw-text-[12px] tw-align-middle' id={`duration-total-${song}`}>
              00:00
            </span>
          </h1>
          <h2 className='tw-text-[#707070] tw-text-[10px] md:tw-text-[12px]'>
            (prod.{' '}
            {producer.map((p, index) => (
              <span key={index}>{(index ? ', ' : '') + p}</span>
            ))}
            )
          </h2>
        </div>
      </div>
      <div className='tw-ml-[auto] tw-grid tw-grid-cols-[max-content_auto] tw-place-items-center'>
        <audio id={`audio-${song}`} preload='metadata' loop>
          <source src={`/audio/${song}.mp3`} type='audio/mp3' />
        </audio>
        <div className='tw-grid tw-grid-flow-col tw-place-items-center tw-gap-[4px] md:tw-gap-0'>
          <AudioButton id={`back-${song}`} icon='back' action={() => skipAudio('back')} />
          <div className='tw-grid tw-place-items-center'>
            <AudioButton id={`play-${song}`} icon='play' action={playAudio} />
            <AudioButton id={`pause-${song}`} icon='pause' action={pauseAudio} />
          </div>
          <AudioButton id={`forward-${song}`} icon='forward' action={() => skipAudio('forward')} />
        </div>
        <div className='tw-hidden md:tw-grid tw-grid-cols-[max-content_auto] tw-place-items-center tw-gap-[10px]'>
          <div className='tw-grid tw-place-items-center'>
            <AudioButton id={`sound-${song}`} icon='sound' action={muteAudio} />
            <AudioButton id={`mute-${song}`} icon='mute' action={unmuteAudio} />
          </div>
          <input aria-label='music volume slider' id={`volume-slider-${song}`} type='range' className='tw-max-w-[120px] lg:tw-max-w-[140px] volume-slider' />
        </div>
      </div>
    </div>
  );
};
