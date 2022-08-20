import type { NextPage } from 'next';
import { Html, Head, Main, NextScript } from 'next/document';

const Document: NextPage = () => {
  return (
    <Html lang='en'>
      <Head>
        <link rel='icon' type='image' href='f.ico' />
      </Head>
      <body dir='ltr' className='bg-[#1e1e1e]'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
