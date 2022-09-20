import { FC, useEffect, useState } from 'react';

import styles from '@styles/NewsTicker.module.scss';
import { Gr } from '@components/Gr';

export const NewsTicker: FC = () => {
  const [currentDate, setCurrentDate] = useState<Date | null>(null);

  useEffect(() => {
    setCurrentDate(new Date());
  }, []);

  // prettier-ignore
  const newsTickerMessages = [
    'hello i am frog dude',
    'froggie',
    'if it works it works',
    `it is ${currentDate?.getDay() === 3 ? '' : 'not'} wednesday my dudes ${currentDate?.getDay() === 3 ? ':)' : ':('}`,
    'boj doog siht daer uoy fi',
    'can you get the same message twice?',
    'can you get the same message twice?',
    'i like frogs',
    'was thinking about putting the whole bee movie script here',
    'dudefrog3211',
    'no one:         people on yt: use this bad template',
    '(ノ°Д°）ノ︵ ┻━┻',
    'first',
    'if u r reading this u r very cool',
    'vibes',
    'certified frog moment'
  ]

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
