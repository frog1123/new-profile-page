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
      <div className='h-[100vh] flex justify-center'>
        <div className='flex my-auto'>
          <div className='grid grid-flow-row gap-[10px] place-items-center'>
            <div className='w-[50px] h-[50px] md:w-[80px] md:h-[80px] float-animation'>
              <Image src={campsite} layout='responsive' />
            </div>
            <div className='grid grid-flow-row place-items-center'>
              <h1 className='text-white'>{`${error ? `${error} | ` : ''} ${message}`}</h1>
              <h1 className='text-white'>
                return{' '}
                <a className='cursor-pointer'>
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
