import { FC } from 'react';
import styles from 'styles/Contributions.module.scss';

export const Contributions: FC = () => {
  return (
    <div className='frog-hidden tw-bg-[#333333] tw-flex tw-justify-center md:tw-pt-[4px] tw-pb-[10px] tw-rounded-[10px] md:tw-rounded-[20px]'>
      <div className={styles['iframe-container']}>
        <iframe src='https://ghchart.rshah.org/frog1123' className={`tw-box-border ${styles['iframe']}`} frameBorder='0'></iframe>
      </div>
    </div>
  );
};
