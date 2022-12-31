import { NextPage } from 'next';
import { useEffect } from 'react';
import Head from 'next/head';
import { BottomThing } from '@components/BottomThing';
import { DownloadContainer } from '@components/DownloadContainer';

const Downloads: NextPage = () => {
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
        <meta name='description' content='downloads' />
        <meta name='keywords' content='frogdude1123, frogdude, 1123, frog, dude, frog1123' />
        <title>downloads</title>
      </Head>
      <div className='tw-w-[92%] lg:tw-w-[80%] tw-mx-auto tw-mt-[10px] sm:tw-mt-[30px] md:tw-mt-[50px]'>
        <div className='frog-hidden tw-bg-[#333333] tw-flex tw-justify-center tw-px-[6px] tw-pt-[15px] tw-pb-[10px] tw-rounded-[10px] md:tw-rounded-[20px] tw-border-[#b5e48c] tw-border-[4px_0_0_0]'>
          <div className='tw-grid tw-grid-flow-row tw-place-items-center tw-w-[100%]'>
            <h1 className='gradient-text tw-text-[24px] tw-font-bold'>DOWNLOADS</h1>
            <div className='tw-w-[100%] tw-grid tw-gap-[10px] tw-pt-[2px]'>
              <h1 className='gradient-text tw-text-[18px] tw-font-bold tw-m-auto'>github stellar theme</h1>
              <DownloadContainer name='github-stellar-theme-v2@1.0.0.zip' size='19.6KB' downloadUrl='/downloads/github-stellar-theme-v2@1.0.0.zip' />
              <DownloadContainer name='github-stellar-theme-v2@1.0.1.zip' size='20.5KB' downloadUrl='/downloads/github-stellar-theme-v2@1.0.1.zip' />
              <DownloadContainer name='github-stellar-theme-v2@1.0.2.zip' size='20.3KB' downloadUrl='/downloads/github-stellar-theme-v2@1.0.2.zip' />
              <DownloadContainer name='github-stellar-theme-v2@1.0.3.zip' size='23.8KB' downloadUrl='/downloads/github-stellar-theme-v2@1.0.3.zip' />
              <DownloadContainer name='github-stellar-theme-v2@1.0.4.zip' size='25.5KB' downloadUrl='/downloads/github-stellar-theme-v2@1.0.4.zip' />
              <h1 className='gradient-text tw-text-[18px] tw-font-bold tw-m-auto'>frogtopia x</h1>
              <DownloadContainer name='frogtopia_x_100days' size='60.89MB' text='mediafire' externalUrl='https://www.mediafire.com/file/ub54hlep9ea29rm/frogtopia_x_100days.zip/file' />
              <DownloadContainer name='frogtopia_x_200days' size='244.74MB' text='mediafire' externalUrl='https://www.mediafire.com/file/k18bee2ckx9y9bt/frogtopia_x_200days.zip/file' />
              <DownloadContainer name='frogtopia_x_300days' size='340.87MB' text='mediafire' externalUrl='https://www.mediafire.com/file/nu68kyfesd2csgo/frogtopia_x_300days.zip/file' />
            </div>
          </div>
        </div>
        <BottomThing />
      </div>
    </>
  );
};

export default Downloads;
