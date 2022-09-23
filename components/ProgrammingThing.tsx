import type { FC } from 'react';
import Image, { StaticImageData } from 'next/image';

interface ProgammingThingProps {
  name: string;
  items: StaticImageData[];
}

export const ProgammingThing: FC<ProgammingThingProps> = ({ name, items }) => {
  return (
    <div className='tw-grid tw-grid-cols-2 tw-place-items-center'>
      <h1 className='gradient-text tw-font-bold tw-mr-auto'>{name}</h1>
      <div className='tw-grid tw-grid-flow-col tw-ml-auto'>
        {items.map((icon, index) => (
          <Image src={icon} key={index} width={25} height={25} alt='' />
        ))}
      </div>
    </div>
  );
};
