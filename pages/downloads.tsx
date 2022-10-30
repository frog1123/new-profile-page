import { NextPage } from 'next';
import { useEffect } from 'react';
import Head from 'next/head';
import { BottomThing } from '@components/BottomThing';
import { DownloadContainer } from '@components/DownloadContainer';

const Music: NextPage = () => {
  useEffect(() => {
    const hiddenElements = document.querySelectorAll('.frog-hidden');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('frog-show');
        else entry.target.classList.remove('frog-show');
      });
    });

    hiddenElements.forEach(el => observer.observe(el));
  });

  return (
    <>
      <Head>
        <meta property='og:title' content='frogdude1123' />
        <meta property='og:description' content='downloads' />
        <meta property='og:url' content='https://frogdude1123.vercel.app/downloads' />
        <meta property='og:image' content='https://frogdude1123.vercel.app/frog.png' />
        <meta name='description' content='music i like' />
        <meta name='keywords' content='frogdude1123, frogdude, 1123, frog, dude, frog1123' />
        <title>downloads</title>
      </Head>
      <div className='tw-w-[92%] lg:tw-w-[80%] tw-mx-auto tw-mt-[10px] sm:tw-mt-[30px] md:tw-mt-[50px]'>
        <div className='frog-hidden tw-bg-[#333333] tw-flex tw-justify-center tw-px-[6px] tw-pt-[15px] tw-pb-[10px] tw-rounded-[10px] md:tw-rounded-[20px] tw-border-[#b5e48c] tw-border-[4px_0_0_0]'>
          <div className='tw-grid tw-grid-flow-row tw-place-items-center tw-w-[100%]'>
            <h1 className='gradient-text tw-text-[24px] tw-font-bold'>DOWNLOADS</h1>
            <div className='tw-w-[100%]'>
              <DownloadContainer name='github-stellar-theme-v2@1.0.0.zip' size='19.6KB' downloadUrl='/downloads/github-stellar-theme-v2@1.0.0.zip' />
            </div>
          </div>
        </div>
        <BottomThing />
      </div>
    </>
  );
};

export default Music;
