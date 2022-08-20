import type { FC } from 'react';

export const AudioButton: FC<{ id: string; icon?: string; action: () => void }> = ({ id, icon, action }) => {
  if (icon === 'play') return <button id={id} className={`w-[20px] h-[20px] md:w-[30px] md:h-[30px] bg-[url('/ui/play.svg')] bg-[length:100%_100%] bg-transparent border-none outline-none bg-no-repeat`} onClick={() => action()}></button>;
  if (icon === 'pause') return <button id={id} className={`hidden w-[20px] h-[20px] md:w-[30px] md:h-[30px] bg-[url('/ui/pause.svg')] bg-[length:100%_100%] bg-transparent border-none outline-none bg-no-repeat`} onClick={() => action()}></button>;
  if (icon === 'back') return <button id={id} className={`w-[20px] h-[20px] md:w-[30px] md:h-[30px] bg-[url('/ui/skip.svg')] bg-[length:100%_100%] bg-transparent border-none outline-none bg-no-repeat`} onClick={() => action()}></button>;
  if (icon === 'forward') return <button id={id} className={`w-[20px] h-[20px] md:w-[30px] md:h-[30px] bg-[url('/ui/skip.svg')] bg-[length:100%_100%] bg-transparent border-none outline-none bg-no-repeat mirror`} onClick={() => action()}></button>;
  if (icon === 'mute') return <button id={id} className={`hidden w-[20px] h-[20px] md:w-[30px] md:h-[30px] bg-[url('/ui/mute.svg')] bg-[length:100%_100%] bg-transparent border-none outline-none bg-no-repeat`} onClick={() => action()}></button>;
  return <button id={id} className={`w-[20px] h-[20px] md:w-[30px] md:h-[30px] bg-[url('/ui/sound.svg')] bg-[length:100%_100%] bg-transparent border-none outline-none bg-no-repeat`} onClick={() => action()}></button>;
};
