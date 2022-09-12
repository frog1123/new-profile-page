import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import { ProjectTab } from '@components/ProjectTab';
import { Gr } from '@components/Gr';
import { BottomThing } from '@components/BottomThing';

import js from '@public/progamming/langs/js.svg';
import ts from '@public/progamming/langs/ts.svg';
import next from '@public/progamming/frontend/next.svg';
import tailwind from '@public/progamming/styling/tailwindcss.svg';
import apollo from '@public/progamming/api/apollo.svg';
import graphql from '@public/progamming/api/graphql.svg';
import nodejs from '@public/progamming/backend/nodejs.svg';
import mongodb from '@public/progamming/backend/mongodb.png';
import heroku from '@public/progamming/deploying/heroku.svg';
import rust from '@public/progamming/planning/rust.svg';
import thing_1 from '@public/other/thing_1.png';
import thing_2 from '@public/other/thing_2.png';
import thing_3 from '@public/other/thing_3.png';
import thing_4 from '@public/other/thing_4.png';

const Projects: NextPage = () => {
  const thingArray = [thing_1, thing_2, thing_3, thing_4];

  return (
    <>
      <Head>
        <meta property='og:title' content='frogdude1123' />
        <meta property='og:description' content='projects' />
        <meta property='og:url' content='https://frogdude1123.herokuapp.com/projects' />
        <meta property='og:image' content='https://frogdude1123.herokuapp.com/frog.png' />
        <meta name='description' content='projects' />
        <meta name='keywords' content='frogdude1123, frogdude, 1123, frog, dude, frog1123' />
        <title>projects</title>
      </Head>
      <div className='w-[92%] lg:w-[80%] mx-auto mt-[10px] sm:mt-[30px] md:mt-[50px] pb-[50px]'>
        <div className='bg-[#333333] flex justify-center px-[6px] pt-[15px] pb-[10px] rounded-[10px] md:rounded-[20px] border-[#b5e48c] border-[4px_0_0_0]'>
          <div className='w-[95%] md:w-[80%] grid grid-flow-row-dense gap-[10px] md:gap-[20px]'>
            <ProjectTab title='fBot' projectId='fBot' madeWith={[js, nodejs, heroku]} repoLink='https://github.com/frog1123/fBot'>
              <h1>
                discord bot made with <Gr>discordjs</Gr>, started watching tutorials but eventually started making stuff on my own. i added a <Gr>quiz</Gr> which used discord buttons. i also added a <Gr>src command</Gr> had an argument for a url and the bot would use <Gr>puppeteer</Gr> and upload a txt file of the html content, probably wasnt the most efficient method, but was pretty cool. i hosted it on <Gr>heroku</Gr>, but i took it down to host something else later.
              </h1>
            </ProjectTab>
            <ProjectTab title='zwav' projectId='zwav' madeWith={[ts, next, tailwind, apollo, graphql, mongodb, nodejs]} repoLink='https://github.com/frog1123/zwav'>
              <h1>
                this was my first <Gr>serious webdev</Gr> project. its a <Gr>fullstack</Gr> app. before i had been experimenting with fullstack apps but this was going to be my first <Gr>real attempt</Gr>, it was styled and organized. the frontend used <Gr>nextjs</Gr> with typescript, <Gr>tailwind</Gr> for styling cuz its rly good, its a way more productive to style stuff and is less confusing cuz all the style attributes are directly on the element instead of in some random css file, its all a more consistent way to organize css. i used <Gr>apollo-client</Gr> for fetching cuz my backend was using <Gr>graphql</Gr>. my backend stack was <Gr>typescript, nodejs, apollo-server, and mongodb</Gr>. i used <Gr>apollo-server-express</Gr> i had a graphql api on /graphql but i also had rest api on /rest. i didnt use the rest api even tho rest is faster than graphql. graphql fetching is just better than rest on the client side. apollo was the only graphql frameworks i knew, no reason there. i
                used mongodb cuz it was the only database i knew. mongodb is <Gr>nosql</Gr>, so i didnt learn sql. i was using <Gr>mongo-client</Gr>, not <Gr>mongoose</Gr> so i didnt have a <Gr>orm</Gr>. later after this project i would start using <Gr>prisma</Gr> which has an orm, and also auto generates sql code i think so i might not have to learn sql. anyways the app was a like a social media platform, but worse. you can make posts and after you posted something it would refetch posts using react usecontext. there was also endless scrolling, so when u got to the bottom of the page it would fetch more posts. on time it got all 100s on <Gr>lighthouse</Gr>, on no throttle and using next build. it was also <Gr>pwa</Gr> cuz y not. if ur still reading and didnt skip ur a <Gr>chad</Gr>. the app also allowed to comment on posts, this helped me understand relations in a database, a comment document should have postId instead of the post document having an array of comments cuz thats bad
                and mongdb documents size are capped at <Gr>16mb</Gr>. the app also allowed you to register and login and had profile pages. i didnt rly know what i was doing with user auth i tried using <Gr>cookies</Gr> and <Gr>jwts</Gr>, in the end it kinda worked but not rly. the register was going to have a bot send you a verification code but the app never got deployed so i never bought a domain for the bot email. i worked pretty hard on the app i styled things had cool stuff and used <Gr>twemoji</Gr>. i wanted to be able to have twemojis in the input for when ur writing a post or comment but i couldnt figure out how to do that. i also wanted links to be blue in textareas but i couldnt figure out that either. i found a library called <Gr>slatejs</Gr> for this type of stuff but it was kinda confusing. overall i worked pretty hard on it but it never got deployed :/. i even had some <Gr>yt</Gr> videos showing it
              </h1>
              <div className='aspect-video w-[80%] max-w-[600px] m-auto mt-[10px]'>
                <iframe src='https://www.youtube.com/embed/k04GdC1gyw4' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen id='featured-video' className='gradient-border disable-select w-[100%] h-[100%]'></iframe>
              </div>
            </ProjectTab>
            <ProjectTab title='lotus-create' projectId='lotus-create' madeWith={[ts, nodejs]} repoLink='https://github.com/frog1123/lotus-create'>
              <h1>
                this was my first attempt at making a <Gr>cli</Gr> it would use inquirer to ask for some options and generate a basic hello world typescript or javascript project. it allowed you to choose ts or js, the project name, the package manager (npm, yarn, pnpm), have nodemon installed, and allowed you to generate a license. i only added the mit license so there werent many options there. it also automatically had a <Gr>.gitignore</Gr> file with *.env and node_modules cuz thats something thats kinda annoying to do every time u create a js project. i was going to add an option to choose whether to create a new folder and generate the stuff or generate in the current directory but i never did that, it just creates a new folder and generates. to use run <Gr>npx lotus-create</Gr> since its on npm, or install it globally <Gr>npm i -g lotus-create</Gr> and run it with <Gr>lotus-create</Gr>
              </h1>
            </ProjectTab>
            <ProjectTab title='rand-image-generator' projectId='rand-image-generator' madeWith={[rust]} repoLink='https://github.com/frog1123/rand-image-generator'>
              <h1>
                in this project i tried generating 30×30 <Gr>cryptopunk style</Gr> images which had different accesories and stuff. it was more limited in amount accessories since it took a while to generate each one. im not that good at <Gr>rust</Gr> so its probably not very optimized, but since rust is a compiled lang its pretty <Gr>fast</Gr> anayway. with the <Gr>--release</Gr> flag each image took under 1ms to generate. it would generate images in a folder called <Gr>/outputs</Gr> and if it didnt exist it would create one, it allowed you to choose how many images to generate which would be like 1.png, 2.png and so on. it also allowed you to specify the starting value (e.g start at 5.png instead of 1.png) and disable or enable logging, cuz it logged the attributes of each image when it was generated. it also allowed you to generate a specific image and define the attributes. anyway here are some cool images it generated
              </h1>
              <div className='w-[95%] md:w-[80%] m-auto mt-[10px] grid grid-cols-4 gap-[6px] sm:gap-[10px] md:gap-[20px] rendering-pixelated'>
                {thingArray.map((img, index) => (
                  <Image src={img} layout='responsive' alt='' key={index} className='rounded-[8px]' />
                ))}
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
