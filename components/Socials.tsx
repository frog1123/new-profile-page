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
  { image: npm_icon, text: 'frogdude1123', url: 'https://github.com/https://www.npmjs.com/~frogdude1123' },
  { image: youtube_icon, text: 'frogdude1123', url: 'https://www.youtube.com/channel/UCNTeMcd7BDOuNrVf1yRGZlA' },
  { image: steam_icon, text: 'frogdude1123', url: 'https://steamcommunity.com/id/frogdude1123' },
  { image: spotify_icon, text: 'frogdude1123', url: 'https://open.spotify.com/user/ckenvyd4xokwet9bbir3hfxn9?si=bbda1b6ab230463b' },
  { image: reddit_icon, text: 'forgot password lol' },
  { image: twitch_icon, text: 'deleted' }
];

export const Socials: FC = () => {
  return (
    <div className='bg-[#333333] flex justify-center md:pt-[4px] pb-[10px] rounded-[10px] md:rounded-[20px]'>
      <div className='grid grid-flow-row place-items-center w-[100%]'>
        <h1 id='socials' className='gradient-text text-[24px] font-bold'>
          SOCIALS
        </h1>
        <div className='w-[100%] px-[4px] md:px-[10px] grid gap-[4px] md:gap-[8px] md:grid-cols-2'>
          {socials.map((SocialInfo, index) => (
            <Social {...SocialInfo} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};
