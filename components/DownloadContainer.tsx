import type { FC } from 'react';
import styles from '@styles/DownloadContainer.module.scss';

interface DownloadContainerProps {
  name: string;
  size: string;
  downloadUrl?: string;
  text?: string;
  externalUrl?: string;
}

export const DownloadContainer: FC<DownloadContainerProps> = ({ name, size, downloadUrl, text, externalUrl }) => {
  return (
    <div className='tw-grid md:tw-grid-cols-[7fr_1fr_2fr] tw-mx-[40px] tw-place-items-center'>
      <h1 className='gradient-text md:tw-mr-auto'>{name}</h1>
      <h1 className='tw-text-white'>{size}</h1>
      <a href={externalUrl ? externalUrl : downloadUrl} download>
        <button className={`dag-gradient tw-p-[10px] tw-w-[100%] tw-cursor-pointer ${styles['download-button']}`}>
          <h1 className='tw-text-white'>{text ? text : 'download'}</h1>
        </button>
      </a>
    </div>
  );
};
