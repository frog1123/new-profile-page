import type { FC } from 'react';

interface ShowHideTextProps {
  title: string;
  centerTitle?: boolean;
  children: JSX.Element[] | JSX.Element;
}

export const ShowHideText: FC<ShowHideTextProps> = ({ title, centerTitle = false, children }) => {
  return (
    <div>
      <label className={`show-more tw-flex ${centerTitle ? 'tw-justify-center' : ''}`} htmlFor={`${title}-content`}>
        <span className='gradient-text tw-select-none'>{title}</span>
      </label>
      <input id={`${title}-content`} type='checkbox' defaultChecked={true}></input>
      <div className='no-scrollbar tw-text-white'>{children}</div>
    </div>
  );
};
