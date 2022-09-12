import type { FC } from 'react';
import Image, { StaticImageData } from 'next/image';

interface ProjectTabProps {
  projectId: string;
  title: string;
  madeWith: StaticImageData[];
  repoLink: string;
  children: JSX.Element[] | JSX.Element;
}

export const ProjectTab: FC<ProjectTabProps> = ({ projectId, title, madeWith, repoLink, children }) => {
  return (
    <div className='bg-[#1e1e1e] overflow-hidden w-[100%] rounded-[12px] px-[10px]'>
      <h1 className='gradient-text text-[20px] md:text-[32px]' id={projectId}>
        {title}
      </h1>
      <div className='grid grid-flow-col w-[max-content] bg-[#333333] p-[2px] rounded-[6px]'>
        {madeWith.map((icon, index) => (
          <div className='w-[18px] sm:w-[22px]' key={index}>
            <Image src={icon} layout='responsive' alt='' />
          </div>
        ))}
      </div>
      <div className='mt-[4px] md:mt-[6px] text-white text-[12px] sm:text-[14px] md:text-[16px]'>{children}</div>
      <h1 className='text-white text-[12px] sm:text-[14px] md:text-[16px] mt-[20px]'>
        repo link: <span className='gradient-text'>{repoLink}</span>
      </h1>
    </div>
  );
};
