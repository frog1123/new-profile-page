import { FC, useEffect } from 'react';

const AudioButton: FC<{ icon?: string; action: () => void }> = ({ icon, action }) => {
  if (icon === 'play') return <button id='play' className={`w-[20px] h-[20px] md:w-[30px] md:h-[30px] bg-[url('/ui/play.svg')] bg-[length:100%_100%] bg-transparent border-none outline-none bg-no-repeat`} onClick={() => action()}></button>;
  if (icon === 'pause') return <button id='pause' className={`hidden w-[20px] h-[20px] md:w-[30px] md:h-[30px] bg-[url('/ui/pause.svg')] bg-[length:100%_100%] bg-transparent border-none outline-none bg-no-repeat`} onClick={() => action()}></button>;
  if (icon === 'back') return <button id='back' className={`w-[20px] h-[20px] md:w-[30px] md:h-[30px] bg-[url('/ui/skip.svg')] bg-[length:100%_100%] bg-transparent border-none outline-none bg-no-repeat`} onClick={() => action()}></button>;
  if (icon === 'forward') return <button id='forward' className={`w-[20px] h-[20px] md:w-[30px] md:h-[30px] bg-[url('/ui/skip.svg')] bg-[length:100%_100%] bg-transparent border-none outline-none bg-no-repeat mirror`} onClick={() => action()}></button>;
  if (icon === 'mute') return <button id='mute' className={`hidden w-[20px] h-[20px] md:w-[30px] md:h-[30px] bg-[url('/ui/mute.svg')] bg-[length:100%_100%] bg-transparent border-none outline-none bg-no-repeat`} onClick={() => action()}></button>;
  return <button id='sound' className={`w-[20px] h-[20px] md:w-[30px] md:h-[30px] bg-[url('/ui/sound.svg')] bg-[length:100%_100%] bg-transparent border-none outline-none bg-no-repeat`} onClick={() => action()}></button>;
};

export const AudioPlayerMini: FC = () => {
  let audioVolume: number;

  useEffect(() => {
    let volume = document.getElementById('volume-slider') as any;
    const audio = document.getElementById('audio') as any;

    volume.oninput = function () {
      audioVolume = this.value / 100;
      audio.volume = this.value / 100;
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
    console.log('mute');

    const audio = document.getElementById('audio') as any;
    document.getElementById('sound')?.classList.add('hidden');
    document.getElementById('mute')?.classList.remove('hidden');
    document.getElementById('mute')?.classList.add('block');

    audio.volume = 0;
  };

  const unmuteAudio = () => {
    const audio = document.getElementById('audio') as any;
    document.getElementById('mute')?.classList.add('hidden');
    document.getElementById('sound')?.classList.remove('hidden');
    document.getElementById('sound')?.classList.add('block');

    audio.volume = audioVolume;
  };

  return (
    <div className='bg-[#282828] py-[4px] px-[10px] rounded-[10px]'>
      <audio id='audio' loop>
        <source src='/audio/time_files.mp3' type='audio/mp3' />
      </audio>
      <div className='grid grid-cols-1 md:grid-cols-3 md:gap-[100px]'>
        <div className='flex'>
          <span className='gradient-text h-[max-content] my-auto'>🎵 jhove - time flies</span>
        </div>
        <div className='grid grid-flow-col place-items-center'>
          <AudioButton icon='back' action={() => skipAudio('back')} />
          <div className='grid place-items-center'>
            <AudioButton icon='play' action={playAudio} />
            <AudioButton icon='pause' action={pauseAudio} />
          </div>
          <AudioButton icon='forward' action={() => skipAudio('forward')} />
        </div>
        <div className='hidden md:grid grid-cols-[max-content_auto] place-items-center gap-[10px]'>
          <div className='grid place-items-center'>
            <AudioButton icon='sound' action={muteAudio} />
            <AudioButton icon='mute' action={unmuteAudio} />
          </div>
          <input id='volume-slider' type='range' className='max-w-[120px] lg:max-w-[140px]' />
        </div>
      </div>
    </div>
  );
};
