import type { FC } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import campsite from '@public/campsite.svg';

interface ErrorPageProps {
  error?: number;
  message: string;
  title: string;
}

export const ErrorPage: FC<ErrorPageProps> = ({ error, message, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className='tw-h-[100vh] tw-flex tw-justify-center'>
        <div className='tw-flex tw-my-auto'>
          <div className='tw-grid tw-grid-flow-row tw-gap-[10px] tw-place-items-center'>
            <div className='tw-w-[50px] tw-h-[50px] md:tw-w-[80px] md:tw-h-[80px] float-animation'>
              <Image src={campsite} layout='responsive' alt='' />
            </div>
            <div className='tw-grid tw-grid-flow-row tw-place-items-center'>
              <h1 className='tw-text-white'>{`${error ? `${error} | ` : ''} ${message}`}</h1>
              <h1 className='tw-text-white'>
                return{' '}
                <a className='tw-cursor-pointer'>
                  <Link href='/'>
                    <span className='gradient-text'>home</span>
                  </Link>
                </a>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
