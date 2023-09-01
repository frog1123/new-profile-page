import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect } from 'react';

import styles from '@styles/Projects.module.scss';
import { ProjectTab } from '@components/ProjectTab';
import { Gr } from '@components/Gr';
import { BottomThing } from '@components/BottomThing';

import js from '@public/progamming/langs/js.svg';
import ts from '@public/progamming/langs/ts.svg';
import next from '@public/progamming/frontend/next.svg';
import tailwind from '@public/progamming/styling/tailwindcss.svg';
import sass from '@public/progamming/planning/sass.svg';
import apollo from '@public/progamming/api/apollo.svg';
import graphql from '@public/progamming/api/graphql.svg';
import nodejs from '@public/progamming/backend/nodejs.svg';
import mongodb from '@public/progamming/backend/mongodb.png';
import prisma from '@public/progamming/backend/prisma.svg';
import heroku from '@public/progamming/deploying/heroku.svg';
import vercel from '@public/progamming/deploying/vercel.svg';
import docker from '@public/progamming/deploying/docker.svg';
import rust from '@public/progamming/planning/rust.svg';
import thing_1 from '@public/other/thing_1.png';
import thing_2 from '@public/other/thing_2.png';
import thing_3 from '@public/other/thing_3.png';
import thing_4 from '@public/other/thing_4.png';
import Link from 'next/link';

const Projects: NextPage = () => {
  const thingArray = [thing_1, thing_2, thing_3, thing_4];

  useEffect(() => {
    const hiddenElements = document.querySelectorAll('.frog-hidden');
    const randImgGenElements = document.querySelectorAll(`.${styles['rand-image-generator-img-hidden']}`);

    const randImgGenObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add(styles['rand-image-generator-img-show']);
        else entry.target.classList.remove(styles['rand-image-generator-img-show']);
      });
    });

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('frog-show');
        else entry.target.classList.remove('frog-show');
      });
    });

    randImgGenElements.forEach(el => randImgGenObserver.observe(el));
    hiddenElements.forEach(el => observer.observe(el));
  });

  return (
    <>
      <Head>
        <meta property='og:title' content='frogdude1123' />
        <meta property='og:description' content='projects' />
        <meta property='og:url' content='https://frogdude1123.vercel.app/projects' />
        <meta property='og:image' content='https://frogdude1123.vercel.app/frog.png' />
        <meta name='description' content='projects' />
        <meta name='keywords' content='frogdude1123, frogdude, 1123, frog, dude, frog1123' />
        <title>projects</title>
      </Head>
      <div className='tw-w-[92%] lg:tw-w-[80%] tw-mx-auto tw-mt-[10px] sm:tw-mt-[30px] md:tw-mt-[50px] tw-pb-[50px]'>
        <div className='frog-hidden tw-bg-[#333333] tw-flex tw-justify-center tw-px-[6px] tw-pt-[15px] tw-pb-[10px] tw-rounded-[10px] md:tw-rounded-[20px] tw-border-[#b5e48c] tw-border-[4px_0_0_0]'>
          <div className='tw-w-[95%] md:tw-w-[80%] tw-grid tw-grid-flow-row-dense tw-gap-[10px] md:tw-gap-[20px]'>
            <ProjectTab title='zwav' projectId='zwav' madeWith={[ts, next, tailwind, apollo, graphql, mongodb, nodejs]} repoLink='https://github.com/frog1123/zwav'>
              <h1>
                <Gr>fullstack</Gr> website
              </h1>
            </ProjectTab>
            <ProjectTab title='lotus-create' projectId='lotus-create' madeWith={[ts, nodejs]} repoLink='https://github.com/frog1123/lotus-create'>
              <h1>
                <Gr>cli</Gr> fro creating nodejs projects
              </h1>
            </ProjectTab>
            <ProjectTab
              title='new-profile-page'
              projectId='new-profile-page'
              madeWith={[ts, nodejs, next, tailwind, sass, heroku, vercel, docker]}
              repoLink='https://github.com/frog1123/new-profile-page'
            >
              <h1>this website</h1>
            </ProjectTab>
            <ProjectTab title='iori-bot' projectId='iori-bot' madeWith={[ts, nodejs, prisma, mongodb, heroku, docker]} repoLink='https://github.com/frog1123/iori-bot-v2'>
              <h1>
                discord <Gr>bot</Gr> with economy system
              </h1>
            </ProjectTab>
            <ProjectTab title='github-stellar-theme' projectId='github-stellar-themeav' madeWith={[ts, sass]} repoLink='https://github.com/frog1123/github-stellar-theme-v2'>
              <h1>
                chrom extension for custom <Gr>github</Gr> themes
                <Link href='/downloads'>
                  <a>
                    <Gr>/downloads</Gr>
                  </a>
                </Link>
                <br />
                <br />
                <a href='https://chrome.google.com/webstore/detail/github-stellar-theme/chkkhpmjibgmacpgidnmmdolkdbfheha' rel='noopener noreferrer'>
                  <Gr>https://chrome.google.com/webstore/detail/github-stellar-theme/chkkhpmjibgmacpgidnmmdolkdbfheha</Gr>
                </a>
              </h1>
              <div className='tw-aspect-video tw-w-[80%] tw-max-w-[600px] tw-m-auto tw-mt-[10px]'>
                <iframe
                  src='https://www.youtube.com/embed/6lCmJY-kG6g'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen
                  id='featured-video'
                  className='gradient-border disable-select tw-w-[100%] tw-h-[100%]'
                ></iframe>
              </div>
            </ProjectTab>
          </div>
        </div>
        <BottomThing />
      </div>
    </>
  );
};

export default Projects;
