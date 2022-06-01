import Typewriter from "typewriter-effect";
import Image from "next/image";
import { useRef } from "react";
import { signIn, signOut, useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { SendMail } from "../component/SendEmail";
import Experiences from "../component/Experiences";
import SocialMedia from "../component/SocialMedia";
import { Skills } from "../component/Skills";
import { Projects } from "../component/projects/Projects";
import { ButtonsNavigation } from "../component/ButtonsNavigation";
import { useState } from "react";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Head from "next/head";
import {
  ABOUT_ANIMATION,
  DISSAPEAR_LEFT,
  DISSAPEAR_SCALE,
  EXPERIENCE_ANIMATION,
} from "../constant/animation/animation";
import { EXPERIENCES } from "../constant/experiences/experience";
import { ORGANIZATION } from "../constant/experiences/organization";
import { Title } from "../component/Title";

export default function Home() {
  const [session, loading] = useSession();

  const router = useRouter();

  const aboutRef = useRef<null | HTMLDivElement>(null);
  const projectRef = useRef<null | HTMLDivElement>(null);
  const connectRef = useRef<null | HTMLDivElement>(null);
  const experienceRef = useRef<null | HTMLDivElement>(null);

  const animation = useAnimation();
  const animation2 = useAnimation();
  const { ref: ref1, inView: aboutView } = useInView({
    threshold: 0.3,
  });

  const { ref: ref2, inView: experienceView } = useInView({
    threshold: 0.01,
  });

  const [from, setFrom] = useState<any>("");
  useEffect(() => {
    if (session?.user?.email) {
      setFrom(session?.user?.email);
    }
  }, [session]);

  useEffect(() => {
    if (aboutView) {
      animation.start(ABOUT_ANIMATION);
    } else {
      animation.start(DISSAPEAR_LEFT);
    }
  }, [aboutView]);

  useEffect(() => {
    if (experienceView) {
      animation2.start(EXPERIENCE_ANIMATION);
    } else {
      animation2.start(DISSAPEAR_SCALE);
    }
  }, [experienceView]);

  return (
    <>
      <Head>
        <title>Hi! My Name is Umar</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <div
        className='w-[100vw] h-[100vh] font-inconsolata flex justify-center flex-col pt-5'
        style={{
          background:
            "linear-gradient(180deg, #501E1E 0%, rgba(19, 31, 48, 0.96) 100%)",
        }}
      >
        <div>
          <div className='ml-5 lg:ml-36 md:pt-10'>
            <h1 className='text-white text-3xl md:text-5xl lg:text-7xl '>
              <Typewriter
                options={{
                  strings: ["Hello I'm Umar!"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <h1 className='mt-7 text-[#726886] md:text-2xl lg:text-4xl lg:w-4/5'>
              Universitas Indonesia student, Software Engineer, IT Enthusiast
            </h1>
          </div>
          <ButtonsNavigation
            aboutRef={aboutRef}
            projectRef={projectRef}
            connectRef={connectRef}
          />
        </div>
      </div>
      <div
        className='w-[100vw] min-h-[100vh] pb-10 lg:pb-0 relative px-5 lg:px-32 lg:min-h-[80vh]'
        style={{
          background:
            "linear-gradient(180deg, rgba(19, 31, 48, 0.96) 0%, rgba(37, 37, 37, 1) 100%)",
        }}
      >
        <div ref={aboutRef}>
          <div
            ref={ref1}
            className='w-full pt-12  text-[#B7B6B6] 2xl:container 2xl:mx-auto '
          >
            <h1 className='w-full text-center text-[#D9D9DB] text-3xl md:text-4xl mb-10'>
              About Me
            </h1>
            <div className='w-full flex justify-center '>
              <div className='relative w-[193px] h-[193px] border-md'>
                <Image className='' layout='fill' alt='me' src='/me.svg' />
              </div>
            </div>
            <div className='max-w-screen-2xl flex flex-col items-center mt-12 mb-20 md:mb-32'>
              <h1 className=' lg:leading-9 lg:text-xl'>
                Hello, I&apos;m Umar Izzuddin! Universitas Indonesia Computer
                Science&apos;s student who passionate about IT Development.
                I&apos;m a self-learner, a hard worker, and an ambitious person.
                I have deep interest in music, film, and video games. I&apos;m
                also active in campus organizations and several committees as a
                web developer. Currently active in web development as full stack
                developer with latest technology such as Next.js, Graphql, AWS,
                Docker and many more! My interest in technology has driven me to
                be a guy who never stops learning.
              </h1>
            </div>
            <h1 className='text-center md:hidden font-semibold -translate-y-5'>
              Connect with me
            </h1>
            <div className='flex text-lg items-center justify-center md:justify-between'>
              <div className='flex items-center justify-center pb-5 md:pb-0'>
                <h1 className='hidden md:block md:mr-10 lg:mr-0 xl:mr-20'>
                  Connect With me :{" "}
                </h1>
                <SocialMedia />
              </div>
              <div
                className='flex w- cursor-pointer hidden md:flex'
                onClick={() => {
                  experienceRef.current?.scrollIntoView();
                }}
              >
                <h1 className='mr-5 font-semibold'>See my experiences</h1>
                <Image src='/arrow.svg' width={16} height={16} />
              </div>
            </div>
            <div className='flex justify-center items-center  md:hidden pl-3 '>
              <div
                onClick={() => {
                  experienceRef.current?.scrollIntoView();
                }}
                className='cursor-pointer flex items-center'
              >
                <h1 className='mr-2  font-semibold'>See my experiences</h1>
                <div className='pt-1'>
                  <Image src='/arrow.svg' width={14} height={14} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        ref={ref2}
        style={{ backgroundColor: "#252525" }}
        className='w-full min-h-[100vh]'
      >
        <h1
          ref={experienceRef}
          className='text-4xl text-center text-white pt-10 pb-10'
        >
          Experiences
        </h1>
        <div>
          <div className='flex flex-col items-center'>
            <Experiences experiences={ORGANIZATION} title={"Organization"} />
            <div className='pt-10 xl:pt-20'>
              <Experiences experiences={EXPERIENCES} title={"Committees"} />
            </div>

            <div className='flex flex-col items-center pt-10 '>
              <Title title='Skills' />
              <div className='w-full pt-5 flex justify-center min-h-[20rem] '>
                <div className='w-4/5 pt-10 bg-white shadow-blue pb-10 max-w-xs md:max-w-lg lg:max-w-2xl min-h-[18rem]'>
                  <Skills />
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              background: "linear-gradient(180deg, #252525 0%, #1F2433 100%)",
            }}
            ref={projectRef}
          >
            <Projects />
          </div>

          <div
            className='min-h-[50vh] text-white '
            style={{
              background: "linear-gradient(180deg, #202531 0%, #030303 100%)",
            }}
          >
            <div className='flex w-full justify-center items-center relative'>
              <div className='w-11/12 mt-44' ref={connectRef}>
                <h1 className='text-xl pb-5 2xl:text-3xl md:mb-10'>
                  Reach Me :
                </h1>
                <div className='flex flex-col md:flex-row justify-between'>
                  <div className='flex items-center'>
                    <Image src='/mail.svg' width={44} height={44} alt='mail' />
                    <h1 className='text-xl pl-3'>izzuddinumar13@gmail.com</h1>
                  </div>
                  <div className='flex items-center justify-between md:justify-center pt-10 md:pt-0'>
                    <h1 className='text-lg pr-10'>Say Hi To Me!</h1>
                    <div
                      onClick={() => {
                        if (!session) {
                          signIn("google", {
                            callbackUrl: `${window.location.origin}/?sendMail=true`,
                          });
                        } else {
                          setFrom(session?.user?.email);
                          router.push("/?sendMail=true", undefined, {
                            shallow: true,
                          });
                        }
                      }}
                    >
                      <SendMail />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-full flex justify-center items-center mt-20 pb-20'>
              <div className='flex items-center'>
                <SocialMedia />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
