import type { FC } from 'react';

interface ShowHideTextProps {
  title: string;
  centerTitle?: boolean;
  children: any;
}

export const ShowHideText: FC<ShowHideTextProps> = ({ title, centerTitle = false, children }) => {
  return (
    <div>
      <label className={`show-more flex ${centerTitle ? 'justify-center' : ''}`} htmlFor={`${title}-content`}>
        <span className='gradient-text select-none'>{title}</span>
      </label>
      <input id={`${title}-content`} type='checkbox' defaultChecked={true}></input>
      <div className='no-scrollbar text-white'>{children}</div>
    </div>
  );
};
