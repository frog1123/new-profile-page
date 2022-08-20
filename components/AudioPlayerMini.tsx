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

      document.getElementById('mute')?.classList.add('hidden');
      document.getElementById('sound')?.classList.remove('hidden');
      document.getElementById('sound')?.classList.add('block');
    };
  });

  const playAudio = () => {
    const audio = document.getElementById('audio') as any;
    document.getElementById('play')?.classList.add('hidden');
    document.getElementById('pause')?.classList.remove('hidden');
    document.getElementById('pause')?.classList.add('block');

    audio.play();
  };

  const pauseAudio = () => {
    const audio = document.getElementById('audio') as any;
    document.getElementById('pause')?.classList.add('hidden');
    document.getElementById('play')?.classList.remove('hidden');
    document.getElementById('play')?.classList.add('block');

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
    document.getElementById('sound')?.classList.add('hidden');
    document.getElementById('mute')?.classList.remove('hidden');
    document.getElementById('mute')?.classList.add('block');

    audio.volume = 0;
    volume.value = 0;
  };

  const unmuteAudio = () => {
    const volume = document.getElementById('volume-slider') as any;
    const audio = document.getElementById('audio') as any;
    document.getElementById('mute')?.classList.add('hidden');
    document.getElementById('sound')?.classList.remove('hidden');
    document.getElementById('sound')?.classList.add('block');

    volume.value = audioVolume * 100;
    audio.volume = audioVolume;
  };

  return (
    <div className='bg-[#282828] py-[4px] px-[10px] rounded-[10px]'>
      <audio id='audio' loop>
        <source src='/audio/time_flies.mp3' type='audio/mp3' />
      </audio>
      <div className='grid grid-cols-1 md:grid-cols-3 md:gap-[100px]'>
        <div className='flex'>
          <span className='hidden md:block gradient-text h-[max-content] my-auto'>🎵 jhove - time flies</span>
        </div>
        <div className='grid grid-flow-col place-items-center gap-[20px] md:gap-0'>
          <AudioButton id='back' icon='back' action={() => skipAudio('back')} />
          <div className='grid place-items-center'>
            <AudioButton id='play' icon='play' action={playAudio} />
            <AudioButton id='pause' icon='pause' action={pauseAudio} />
          </div>
          <AudioButton id='forward' icon='forward' action={() => skipAudio('forward')} />
        </div>
        <div className='hidden md:grid grid-cols-[max-content_auto] place-items-center gap-[10px]'>
          <div className='grid place-items-center'>
            <AudioButton id='sound' icon='sound' action={muteAudio} />
            <AudioButton id='mute' icon='mute' action={unmuteAudio} />
          </div>
          <input id='volume-slider' type='range' className='max-w-[120px] lg:max-w-[140px] volume-slider' />
        </div>
      </div>
    </div>
  );
};
