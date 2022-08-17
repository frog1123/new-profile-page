import '../styles/globals.css';
import Router from 'next/router';
import type { AppProps } from 'next/app';

import ProgressBar from '@badrap/bar-of-progress';

function MyApp({ Component, pageProps }: AppProps) {
  const { start, finish } = new ProgressBar({
    size: '2px',
    color: '#b5e48c',
    className: 'bar-of-progress',
    delay: 100
  });

  Router.events.on('routeChangeStart', start);
  Router.events.on('routeChangeComplete', finish);
  Router.events.on('routeChangeError', finish);

  return <Component {...pageProps} />;
}

export default MyApp;
