import type { FC } from 'react';

export const AudioButton: FC<{ id: string; icon?: string; action: () => void }> = ({ id, icon, action }) => {
  if (icon === 'play') return <button aria-label='play music' id={id} className={`tw-w-[20px] tw-h-[20px] md:tw-w-[30px] md:tw-h-[30px] tw-bg-[url('/ui/play.svg')] tw-bg-[length:100%_100%] tw-bg-transparent tw-border-none tw-outline-none tw-bg-no-repeat`} onClick={() => action()}></button>;
  if (icon === 'pause') return <button aria-label='pause music' id={id} className={`tw-hidden tw-w-[20px] tw-h-[20px] md:tw-w-[30px] md:tw-h-[30px] tw-bg-[url('/ui/pause.svg')] tw-bg-[length:100%_100%] tw-bg-transparent tw-border-none tw-outline-none tw-bg-no-repeat`} onClick={() => action()}></button>;
  if (icon === 'back') return <button aria-label='skip back 5 seconds' id={id} className={`tw-w-[20px] tw-h-[20px] md:tw-w-[30px] md:tw-h-[30px] tw-bg-[url('/ui/skip.svg')] tw-bg-[length:100%_100%] tw-bg-transparent tw-border-none tw-outline-none tw-bg-no-repeat`} onClick={() => action()}></button>;
  if (icon === 'forward') return <button aria-label='skip forward 5 seconds' id={id} className={`tw-w-[20px] tw-h-[20px] md:tw-w-[30px] md:tw-h-[30px] tw-bg-[url('/ui/skip.svg')] tw-bg-[length:100%_100%] tw-bg-transparent tw-border-none tw-outline-none tw-bg-no-repeat mirror`} onClick={() => action()}></button>;
  if (icon === 'mute') return <button aria-label='mute music' id={id} className={`tw-hidden tw-w-[20px] tw-h-[20px] md:tw-w-[30px] md:tw-h-[30px] tw-bg-[url('/ui/mute.svg')] tw-bg-[length:100%_100%] tw-bg-transparent tw-border-none tw-outline-none tw-bg-no-repeat`} onClick={() => action()}></button>;
  return <button aria-label='ummute music' id={id} className={`tw-w-[20px] tw-h-[20px] md:tw-w-[30px] md:tw-h-[30px] tw-bg-[url('/ui/sound.svg')] tw-bg-[length:100%_100%] tw-bg-transparent tw-border-none tw-outline-none tw-bg-no-repeat`} onClick={() => action()}></button>;
};
