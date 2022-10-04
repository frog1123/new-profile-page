import type { FC } from 'react';
import Image, { StaticImageData } from 'next/image';

interface ProjectTabProps {
  projectId: string;
  title: string;
  madeWith: StaticImageData[];
  repoLink: string;
  children: string | JSX.Element[] | JSX.Element;
}

export const ProjectTab: FC<ProjectTabProps> = ({ projectId, title, madeWith, repoLink, children }) => {
  return (
    <div className='frog-hidden tw-bg-[#282828] tw-overflow-hidden tw-w-[100%] tw-rounded-[12px] tw-px-[10px]'>
      <h1 className='gradient-text tw-text-[20px] md:tw-text-[32px]' id={projectId}>
        {title}
      </h1>
      <div className='tw-grid tw-grid-flow-col tw-w-[max-content] tw-bg-[#333333] tw-p-[2px] tw-rounded-[6px]'>
        {madeWith.map((icon, index) => (
          <div className='tw-w-[18px] sm:tw-w-[22px]' key={index}>
            <Image src={icon} layout='responsive' alt='' />
          </div>
        ))}
      </div>
      <div className='tw-mt-[4px] md:tw-mt-[6px] tw-text-white tw-text-[12px] sm:tw-text-[14px] md:tw-text-[16px]'>{children}</div>
      <h1 className='tw-text-white tw-text-[12px] sm:tw-text-[14px] md:tw-text-[16px] tw-mt-[20px]'>
        repo link:{' '}
        <a href={repoLink} rel='noopener noreferrer' className='tw-cursor-pointer'>
          <span className='gradient-text'>{repoLink}</span>
        </a>
      </h1>
    </div>
  );
};
