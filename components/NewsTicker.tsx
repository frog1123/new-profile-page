import { FC, useEffect, useState } from 'react';

import styles from '@styles/NewsTicker.module.scss';
import { Gr } from '@components/Gr';

export const NewsTicker: FC = () => {
  const [currentDate, setCurrentDate] = useState<Date | null>(null);

  useEffect(() => {
    setCurrentDate(new Date());
  }, []);

  const newsTickerMessages = ['frog', 'dude', '1123', 'can you get the same message twice?', 'can you get the same message twice?'];

  return (
    <div className={styles['news-ticker-container']}>
      <div className={styles['news-ticker-move']}>
        {newsTickerMessages.map((msg, index) => (
          <Gr fclass={styles['nt-item']} key={index}>
            {msg}
          </Gr>
        ))}
      </div>
    </div>
  );
};
