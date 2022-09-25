import { FC, useEffect } from 'react';

import { AudioButton } from '@components/AudioButton';

export const AudioPlayerMini: FC = () => {
  let audioVolume: number;

  useEffect(() => {
    let volume = document.getElementById('volume-slider') as any;
    const audio = document.getElementById('audio') as any;

    volume.oninput = function () {
      audioVolume = this.value / 100;
      audio.volume = this.value / 100;

      document.getElementById('mute')?.classList.add('tw-hidden');
      document.getElementById('sound')?.classList.remove('tw-hidden');
      document.getElementById('sound')?.classList.add('tw-block');
    };
  });

  const playAudio = () => {
    const audio = document.getElementById('audio') as any;
    document.getElementById('play')?.classList.add('tw-hidden');
    document.getElementById('pause')?.classList.remove('tw-hidden');
    document.getElementById('pause')?.classList.add('tw-block');

    audio.play();
  };

  const pauseAudio = () => {
    const audio = document.getElementById('audio') as any;
    document.getElementById('pause')?.classList.add('tw-hidden');
    document.getElementById('play')?.classList.remove('tw-hidden');
    document.getElementById('play')?.classList.add('tw-block');

    audio.pause();
  };

  const skipAudio = (mode: string) => {
    const audio = document.getElementById('audio') as any;

    if (mode === 'forward') audio.currentTime += 10;
    if (mode === 'back') audio.currentTime -= 10;
  };

  const muteAudio = () => {
    const volume = document.getElementById('volume-slider') as any;
    const audio = document.getElementById('audio') as any;
    document.getElementById('sound')?.classList.add('tw-hidden');
    document.getElementById('mute')?.classList.remove('tw-hidden');
    document.getElementById('mute')?.classList.add('tw-block');

    audio.volume = 0;
    volume.value = 0;
  };

  const unmuteAudio = () => {
    const volume = document.getElementById('volume-slider') as any;
    const audio = document.getElementById('audio') as any;
    document.getElementById('mute')?.classList.add('tw-hidden');
    document.getElementById('sound')?.classList.remove('tw-hidden');
    document.getElementById('sound')?.classList.add('tw-block');

    volume.value = audioVolume * 100;
    audio.volume = audioVolume;
  };

  return (
    <div className='tw-bg-[#282828] tw-py-[4px] tw-px-[10px] tw-rounded-[10px]'>
      <audio id='audio' loop>
        <source src='/audio/time_flies.mp3' type='audio/mp3' />
      </audio>
      <div className='tw-grid tw-grid-cols-1 md:tw-grid-cols-3 md:tw-gap-[100px]'>
        <div className='tw-flex'>
          <span className='tw-hidden md:tw-block gradient-text tw-h-[max-content] tw-my-auto'>🎵 jhove - time flies</span>
        </div>
        <div className='tw-grid tw-grid-flow-col tw-place-items-center tw-gap-[20px] md:tw-gap-0'>
          <AudioButton id='back' icon='back' action={() => skipAudio('back')} />
          <div className='tw-grid tw-place-items-center'>
            <AudioButton id='play' icon='play' action={playAudio} />
            <AudioButton id='pause' icon='pause' action={pauseAudio} />
          </div>
          <AudioButton id='forward' icon='forward' action={() => skipAudio('forward')} />
        </div>
        <div className='tw-hidden md:tw-grid tw-grid-cols-[max-content_auto] tw-place-items-center tw-gap-[10px]'>
          <div className='tw-grid tw-place-items-center'>
            <AudioButton id='sound' icon='sound' action={muteAudio} />
            <AudioButton id='mute' icon='mute' action={unmuteAudio} />
          </div>
          <input aria-label='music volume slider' id='volume-slider' type='range' className='tw-max-w-[120px] lg:tw-max-w-[140px] volume-slider' />
        </div>
      </div>
    </div>
  );
};
