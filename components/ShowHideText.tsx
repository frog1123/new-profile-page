import type { FC } from 'react';

interface ShowHideTextProps {
  title: string;
  content: string;
  centerTitle: boolean;
}

export const ShowHideText: FC<ShowHideTextProps> = ({ title, content, centerTitle }) => {
  return (
    <div>
      <label className={`show-more flex ${centerTitle ? 'justify-center' : ''}`} htmlFor={`${title}-content`}>
        <span className='gradient-text select-none'>{title}</span>
      </label>
      <input id={`${title}-content`} type='checkbox' defaultChecked={true}></input>
      <h1 className='no-scrollbar text-white'>{content}</h1>
    </div>
  );
};
