import Image from 'next/image';
import type { FC } from 'react';

interface SongTabProps {
  image: any;
  song: string;
  title: string;
  artist: string[];
  producer: string[];
}

export const SongTab: FC<SongTabProps> = ({ image, song, title, artist, producer }) => {
  return (
    <div className='bg-[#282828] hover:bg-[#212121] p-[4px] rounded-[6px] flex'>
      <div className='grid grid-flow-col place-items-center gap-[6px]'>
        <div className='w-[30px] h-[30px]'>
          <Image src={image} />
        </div>
        <h1 className='text-white'>
          {artist.map((a, index) => (
            <span key={index}>{a}</span>
          ))}{' '}
          - {title}
        </h1>
      </div>
      <div className='ml-[auto] grid place-items-center'>
        <h1>audio stuff goes here</h1>
      </div>
    </div>
  );
};
