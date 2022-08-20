import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import { ShowHideText } from '@components/ShowHideText';
import { ProgammingThing } from '@components/ProgrammingThing';
import umbrella from '@public/umbrella.svg';

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

const langs = [js, ts];
const frontend = [react, next, html];
const styling = [tailwind, css];
const api = [apollo, graphql];
const backend = [nodejs, prisma, mongodb];
const deploying = [heroku, docker];
const packageManagers = [pnpm, yarn, npm];
const devTools = [git];
const quit = [go, nest];
const planning = [netlify, sass, rust];

const ProgammingRelated: NextPage = () => {
  return (
    <>
      <Head>
        <title>progamming-related 🖥️</title>
      </Head>
      <div className='w-[92%] lg:w-[80%] mx-auto mt-[10px] sm:mt-[30px] md:mt-[50px] pb-[50px]'>
        <div className='bg-[#333333] flex justify-center px-[6px] pt-[15px] pb-[10px] rounded-[10px] md:rounded-[20px] border-[#b5e48c] border-[4px_0_0_0]'>
          <div className='grid grid-flow-row'>
            <h1 className='gradient-text text-[24px] font-bold'>PROGAMMING RELATED</h1>
            <div className='text-[12px] sm:text-[14px] md:text-[16px]'>
              <ShowHideText title='start'>
                <h1>no coding experience</h1>
              </ShowHideText>
              <ShowHideText title='i forgor'>
                <h1>went to a python class. didnt learn much besides for and while loops. i kinda forgot too</h1>
              </ShowHideText>
              <ShowHideText title='2021 i think'>
                <h1>
                  tried to make an incremental game in unity, followed some tutorials quit project later.
                  <br />
                  tried to make a discord bot in js, also followed a lot of tutorials, didnt rly know what i was doing <br />
                  tried making another unity incremental game and another discord bot, both turned out a lot better <br />
                  tried to use puppeteer to make a reddit bot but it failed
                </h1>
              </ShowHideText>
              <ShowHideText title='2022'>
                <h1>
                  tried to make a website with html, css, and js. thought it was a cool idea. deployed it in github pages. learned basic html and css through that project. <br />
                  after i tried making an incremental game with html css and js, also deployed to github pages, also tried out electronjs but never ported the project to it <br />
                  after tried redesigning it in react. tried heroku cuz github pages would not work well with react learned data fethcing in react <br />
                  tried making a basic rest api in js with express <br />
                  after that i tried making a fullstack app with an api and a react frontend <br />
                  learned nextjs wasnt that hard since its based off react <br />
                  nextjs was much more organized and has ssr which is cool (cool) <br />
                  later tried graphql with apollo-server <br />
                  also tried using mongodb (no mongoose) <br />
                  tried making a small project with nextjs and graphql <br />
                  after i tried making my first serious project (zwav)
                  <br />
                  it used nextjs, apollo-client, tailwind for the frontend and graphql, apollo-server, and mongodb for the backend <br />
                  forgot to mention but i also started using typescript around this time <br />
                  learned some nestjs cuz i thought my backend code was unorganized <br />
                  quit cuz it had a lot of boilerplate, was kinda slow, and the docs pretty much only focused on typegraphql <br />
                  after tried learning go since its a compiled lang which should be fast <br />
                  got kinda bored and went back to js <br />
                  around this time tried puppeteer again to make a reddit and twitter bot <br />
                  got demotivated after the twitter acc got locked out after like 5 logins <br />
                  tried making a cli in js called lotus-create <br />
                  it generates basic hello world project in js or ts <br />
                  stopped working on zwav and started emberwave which is basically zwav but better <br />
                  started using prisma as an orm <br />
                  decided to redesign the profile page again which is what is currently happening
                </h1>
              </ShowHideText>
            </div>
            <div>
              <h1 className='gradient-text text-[24px] font-bold m-auto w-[max-content] pt-[20px]'>TOOLS</h1>
              <div className='flex justify-center'>
                <div className='grid grid-flow-row'>
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
        <div className='m-auto w-[max-content] pt-[20px]'>
          <div className='w-[50px] h-[50px] md:w-[80px] md:h-[80px] float-animation'>
            <Image src={umbrella} layout='responsive' alt='' />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgammingRelated;
