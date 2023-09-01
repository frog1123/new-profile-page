import { NextPage } from 'next';
import Head from 'next/head';
import { useEffect } from 'react';

import { ShowHideText } from '@components/ShowHideText';
import { ProgammingThing } from '@components/ProgrammingThing';
import { BottomThing } from '@components/BottomThing';

// langs
import js from '@public/progamming/langs/js.svg';
import ts from '@public/progamming/langs/ts.svg';

// frontend
import react from '@public/progamming/frontend/react.svg';
import next from '@public/progamming/frontend/next.svg';
import html from '@public/progamming/frontend/html.svg';

// styling
import tailwind from '@public/progamming/styling/tailwindcss.svg';
import css from '@public/progamming/styling/css.svg';

// api
import apollo from '@public/progamming/api/apollo.svg';
import graphql from '@public/progamming/api/graphql.svg';

// backend
import nodejs from '@public/progamming/backend/nodejs.svg';
import prisma from '@public/progamming/backend/prisma.svg';
import mongodb from '@public/progamming/backend/mongodb.png';

// deploying
import docker from '@public/progamming/deploying/docker.svg';
import heroku from '@public/progamming/deploying/heroku.svg';
import vercel from '@public/progamming/deploying/vercel.svg';

// package managers
import pnpm from '@public/progamming/package-managers/pnpm.svg';
import yarn from '@public/progamming/package-managers/yarn.svg';
import npm from '@public/progamming/package-managers/npm.svg';

// dev tools
import git from '@public/progamming/dev/git.svg';

// quit
import go from '@public/progamming/quit/go.svg';
import nest from '@public/progamming/quit/nest.svg';

// planning
import netlify from '@public/progamming/planning/netlify.svg';
import sass from '@public/progamming/planning/sass.svg';
import rust from '@public/progamming/planning/rust.svg';
import qwik from '@public/progamming/planning/qwik.svg';
import { Gr } from '@components/Gr';

const langs = [js, ts];
const frontend = [react, next, html];
const styling = [tailwind, css];
const api = [apollo, graphql];
const backend = [nodejs, prisma, mongodb];
const deploying = [heroku, vercel, docker];
const packageManagers = [pnpm, yarn, npm];
const devTools = [git];
const quit = [go, nest];
const planning = [netlify, sass, rust, qwik];

const ProgammingRelated: NextPage = () => {
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
        <meta property='og:description' content='progamming related' />
        <meta property='og:url' content='https://frogdude1123.vercel.app/progamming-related' />
        <meta property='og:image' content='https://frogdude1123.vercel.app/frog.png' />
        <meta name='description' content='progamming related' />
        <meta name='keywords' content='frogdude1123, frogdude, 1123, frog, dude, frog1123' />
        <title>progamming-related 🖥️</title>
      </Head>
      <div className='tw-grid tw-grid-flow-row tw-gap-[10px] md:tw-gap-[15px] tw-w-[92%] lg:tw-w-[80%] tw-mx-auto tw-mt-[10px] sm:tw-mt-[30px] md:tw-mt-[50px] tw-pb-[50px]'>
        <div className='frog-hidden tw-bg-[#333333] tw-flex tw-justify-center tw-px-[6px] tw-pt-[15px] tw-pb-[10px] tw-rounded-[10px] md:tw-rounded-[20px] tw-border-[#b5e48c] tw-border-[4px_0_0_0]'>
          <div className='tw-grid tw-grid-flow-row'>
            <h1 className='gradient-text tw-text-[24px] tw-font-bold'>PROGAMMING RELATED</h1>
            <div className='tw-text-[12px] sm:tw-text-[14px] md:tw-text-[16px]'>
              <ShowHideText title='start'>
                <h1>
                  <Gr>TODO: </Gr> <br />
                  add stuff here Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                  sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </h1>
              </ShowHideText>
            </div>
            <div>
              <h1 className='gradient-text tw-text-[24px] tw-font-bold tw-m-auto tw-w-[max-content] tw-pt-[20px]'>TOOLS</h1>
              <div className='tw-flex tw-justify-center'>
                <div className='tw-grid tw-grid-flow-row'>
                  <ProgammingThing name='langs' items={langs} />
                  <ProgammingThing name='frontend' items={frontend} />
                  <ProgammingThing name='styling' items={styling} />
                  <ProgammingThing name='api' items={api} />
                  <ProgammingThing name='backend' items={backend} />
                  <ProgammingThing name='deploying' items={deploying} />
                  <ProgammingThing name='package managers' items={packageManagers} />
                  <ProgammingThing name='dev tools' items={devTools} />
                  <ProgammingThing name='quit' items={quit} />
                  <ProgammingThing name='planning to learn' items={planning} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <BottomThing />
      </div>
    </>
  );
};

export default ProgammingRelated;
