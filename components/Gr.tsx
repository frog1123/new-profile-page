import type { FC } from 'react';

interface GrProps {
  children: string;
}

export const Gr: FC<GrProps> = ({ children }) => {
  return <span className='gradient-text'>{children}</span>;
};
