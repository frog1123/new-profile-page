import '../styles/globals.scss';
import Router from 'next/router';
import type { AppProps } from 'next/app';
import { useState } from 'react';

import { UserContext } from '../UserContext';
import ProgressBar from '@badrap/bar-of-progress';

const App = ({ Component, pageProps }: AppProps) => {
  const { start, finish } = new ProgressBar({
    size: '2px',
    color: '#b5e48c',
    className: 'bar-of-progress',
    delay: 100
  });

  const [value, setValue] = useState({
    pauseCurrentlyPlaying: false,
    currentlyPlaying: [''],
    currentlyPlayingPaused: false
  });

  Router.events.on('routeChangeStart', start);
  Router.events.on('routeChangeComplete', finish);
  Router.events.on('routeChangeError', finish);

  return (
    <UserContext.Provider value={{ value, setValue }}>
      <Component {...pageProps} />
    </UserContext.Provider>
  );
};

export default App;
