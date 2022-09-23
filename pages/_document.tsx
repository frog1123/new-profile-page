import type { NextPage } from 'next';
import { Html, Head, Main, NextScript } from 'next/document';

type FrogHtml = (props: React.DetailedHTMLProps<any, HTMLHtmlElement>) => JSX.Element;
const FrogHtml: FrogHtml = Html;

const Document: NextPage = () => {
  return (
    <FrogHtml lang='en' frogdude='' was='' here=''>
      <Head>
        <link rel='icon' type='image' href='f.ico' />
      </Head>
      <body dir='ltr' className='tw-bg-[#1e1e1e]'>
        <Main />
        <NextScript />
      </body>
    </FrogHtml>
  );
};

export default Document;
