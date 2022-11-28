import type { FC } from 'react';

import { Social } from '@components/Social';

import discord_icon from '@public/socials/discord_icon.png';
import github_icon from '@public/socials/github_icon.svg';
import npm_icon from '@public/socials/npm_icon.svg';
import youtube_icon from '@public/socials/youtube_icon.svg';
import spotify_icon from '@public/socials/spotify_icon.svg';
import steam_icon from '@public/socials/steam_icon.svg';
import reddit_icon from '@public/socials/reddit_icon.svg';
import twitch_icon from '@public/socials/twitch_icon.svg';

const socials = [
  { image: discord_icon, text: 'frogdude1123#8079' },
  { image: discord_icon, text: 'frogdude1124#3616' },
  { image: discord_icon, text: 'frogdude1125#3709' },
  { image: github_icon, text: 'frog1123', url: 'https://github.com/frog1123' },
  { image: npm_icon, text: 'frogdude1123', url: 'https://www.npmjs.com/~frogdude1123' },
  { image: youtube_icon, text: 'frogdude1123', url: 'https://www.youtube.com/@frogdude1123/featured' },
  { image: steam_icon, text: 'frogdude1123', url: 'https://steamcommunity.com/id/frogdude1123' },
  { image: spotify_icon, text: 'frogdude1123', url: 'https://open.spotify.com/user/ckenvyd4xokwet9bbir3hfxn9?si=bbda1b6ab230463b' },
  { image: reddit_icon, text: 'forgot password lol' },
  { image: twitch_icon, text: 'deleted' }
];

export const Socials: FC = () => {
  return (
    <div className='frog-hidden tw-bg-[#333333] tw-flex tw-justify-center md:tw-pt-[4px] tw-pb-[10px] tw-rounded-[10px] md:tw-rounded-[20px]'>
      <div className='tw-grid tw-grid-flow-row tw-place-items-center tw-w-[100%]'>
        <h1 id='socials' className='gradient-text tw-text-[24px] tw-font-bold'>
          SOCIALS
        </h1>
        <div className='tw-w-[100%] tw-px-[4px] md:tw-px-[10px] tw-grid tw-gap-[4px] md:tw-gap-[8px] md:tw-grid-cols-2'>
          {socials.map((SocialInfo, index) => (
            <Social {...SocialInfo} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};
