import type { FC } from 'react';

interface GrProps {
  fclass?: string;
  children: string;
}

export const Gr: FC<GrProps> = ({ fclass, children }) => {
  return <span className={`gradient-text ${fclass ? fclass : ''}`}>{children}</span>;
};
