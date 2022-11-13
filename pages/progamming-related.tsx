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
                  tried to make a <Gr>website</Gr> with html, css, and js. thought it was a cool idea. deployed it in github pages. learned basic html and css through that project. <br />
                  after i tried making an incremental game with html css and js, also deployed to github pages, also tried out electronjs but never ported the project to it <br />
                  after tried redesigning it in react. tried heroku cuz github pages would not work well with react learned data fethcing in react <br />
                  tried making a basic rest api in js with <Gr>express</Gr> <br />
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
                  around this time tried <Gr>puppeteer</Gr> again to make a reddit and twitter bot <br />
                  got demotivated after the twitter acc got locked out after like 5 logins <br />
                  tried making a cli in js called lotus-create <br />
                  it generates basic hello world project in js or ts <br />
                  stopped working on zwav and started emberwave which is basically zwav but better <br />
                  started using <Gr>prisma</Gr> as an orm <br />
                  decided to redesign the profile page again which is what is currently happening <br />
                  tried learning rust cuz its fast stuff <br />
                  made a cryptopunk style image generator <br />
                  thinking about using vercel free tier since heroku free tier is getting removed <br />
                  updated this website (profile-page) <br />
                  also delpoyed this site on <Gr>vercel</Gr>, process was really easy signed up and deployed in under 5 mins without reading docs <br />
                  updated this website again added cool transitions used scss and more <br />
                  uploaded some tutorials for my yt channel for specific usecases <br />
                  working on another <Gr>discord bot</Gr> (iori-bot) <br />
                  didnt work on heroku so made iori-bot-v2 and it worked even tho it was the same <br />
                  took down frogdude1123.herokuapp.com to host <Gr>iori-bot</Gr> <br />
                  tried obfuscating classes for this website <br />
                  took a long time but figured it out <br />
                  decided to upload video about it <br />
                  started uploading content regularly <br />
                  started working on a <Gr>chrome extension</Gr> for github (theme) inspired from the material icons extension <br />
                  did that and made video abt it <br />
                  started working on frog incremental <br />
                  was going to be a remake <br />
                  it was also first time using <Gr>gulp</Gr>. i used it to minify html css js and used gulp-babel to turn js to es5 <br />
                  you can try it on <Gr>https://frog-incremental.vercel.app/</Gr> <br />
                  nextjs updated to <Gr>v13</Gr> but im not going to update this website cuz i dont feel like it <br />
                  <br />
                  <br />
                  confusing stuff: <br />
                  - user auth and styled textarea (example: links turn blue) tried to use slatejs but iz too confusing <br />
                  - streaming 24/7 to yt messed around with ffmpeg <br />
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
