import Typewriter from "typewriter-effect";
import Image from "next/image";
import { useRef } from "react";
import { signIn, signOut, useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { SendMail } from "../component/SendEmail";
import Experiences from "../component/Experiences";
import SocialMedia from "../component/SocialMedia";
import { Skills } from "../component/Skills";
import { Projects } from "../component/Projects";
import { ButtonsNavigation } from "../component/ButtonsNavigation";
import { useState } from "react";
import { useEffect } from "react";

export default function Home() {
  const [session, loading] = useSession();

  const router = useRouter();

  const aboutRef = useRef<null | HTMLDivElement>(null);
  const projectRef = useRef<null | HTMLDivElement>(null);
  const connectRef = useRef<null | HTMLDivElement>(null);
  const experienceRef = useRef<null | HTMLDivElement>(null);

  const [from, setFrom] = useState<any>("");
  // console.log(router.query);
  useEffect(() => {
    if (session?.user?.email) {
      setFrom(session?.user?.email);
    }
  }, [session]);
  console.log(from);
  return (
    <>
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
        className='w-[100vw] min-h-[100vh] relative px-5 lg:px-32 '
        style={{
          background:
            "linear-gradient(180deg, rgba(19, 31, 48, 0.96) 0%, rgba(37, 37, 37, 1) 100%)",
        }}
      >
        <div
          ref={aboutRef}
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
              I&apos;m also active in campus organizations and several
              committees as a web developer. My interest in technology has
              driven me to be a guy who never stops learning.
            </h1>
          </div>
          <h1 className='text-center md:hidden font-semibold -translate-y-5'>
            Connect with me
          </h1>
          <div className='flex text-lg items-center justify-center md:justify-between'>
            <div className='flex items-center justify-center pb-5 md:pb-0'>
              <h1 className='hidden md:block md:mr-20'>Connect With me : </h1>
              <SocialMedia />
            </div>
            <div className='flex w- cursor-pointer hidden md:flex'>
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
      <div
        ref={experienceRef}
        style={{ backgroundColor: "#252525" }}
        className='w-full min-h-[100vh]'
      >
        <h1 className='text-4xl text-center text-white pt-10 pb-10'>
          Experiences
        </h1>
        <div>
          <div className='flex flex-col'>
            <div className='flex flex-col items-center'>
              <h1 className='text-center text-xl 2xl:text-2xl text-experience pb-2'>
                Organizational
              </h1>
              <span
                style={{
                  background:
                    "linear-gradient(180deg, #425F65 54.78%, rgba(100, 113, 151, 0.74) 154.78%)",
                }}
                className='w-32 2xl:w-44 h-2 shadow-md'
              />
              <div className='flex pt-5 text'>
                <span className='bg-white w-1 mx-5 ' />
                <div className='absolute left-1.5 translate-y-2 md:hidden'>
                  <Image src='/dot.svg' width={28} height={28} />
                </div>
                <div className='flex-col'>
                  <h1 className='text-white 2xl:text-xl pb-2'>
                    CS UI Executive Student Council 2021 (BEM Fasilkom UI)
                  </h1>
                  <h1 className='text-sm 2xl:text-base text-alternate'>
                    Staff of Project Development Division (Bismit), working on
                    various web development project requested from
                    inside/outside of campus
                  </h1>
                </div>
              </div>
            </div>

            <div className='pt-10 xl:pt-20'>
              <div className='flex flex-col items-center'>
                <h1 className='text-center text-xl 2xl:text-2xl text-experience pb-2'>
                  Committees
                </h1>
                <span
                  style={{
                    background:
                      "linear-gradient(180deg, #425F65 54.78%, rgba(100, 113, 151, 0.74) 154.78%)",
                  }}
                  className='w-32 2xl:w-44 h-2 shadow-md'
                />
                <Experiences />
              </div>
            </div>

            <div className='flex flex-col items-center pt-10 '>
              <h1 className='text-center text-3xl text-experience pb-2'>
                Skills
              </h1>
              <span
                style={{
                  background:
                    "linear-gradient(180deg, #425F65 54.78%, rgba(100, 113, 151, 0.74) 154.78%)",
                }}
                className='w-32 h-2 shadow-md'
              />
              <div className='w-full pt-5 flex justify-center h-80 '>
                <div
                  className='w-4/5 pt-10  bg-white shadow-blue pb-10 max-w-xs h-72'
                  style={{ maxWidth: "280px" }}
                >
                  <Skills />
                </div>
              </div>
            </div>

            <div
              style={{
                background: "linear-gradient(180deg, #252525 0%, #1F2433 100%)",
              }}
              className='min-h-[100vh] '
              ref={projectRef}
            >
              <Projects />
            </div>

            <div
              className='min-h-[50vh] text-white flex justify-center items-center relative'
              style={{
                background: "linear-gradient(180deg, #202531 0%, #030303 100%)",
              }}
            >
              <div className='w-11/12 mt-44' ref={connectRef}>
                <h1 className='text-xl pb-5 2xl:text-3xl md:mb-10'>
                  Reach Me :
                </h1>
                <div className='flex flex-col md:flex-row justify-between'>
                  <div className='flex items-center'>
                    <Image src='/mail.svg' width={44} height={44} alt='mail' />
                    <h1 className='text-xl pl-3'>izzuddinumar13@gmail.com</h1>
                  </div>
                  <div className='flex items-center flex justify-between md:justify-center pt-10 md:pt-0'>
                    <h1 className='text-lg pr-10'>Say Hi To Me!</h1>
                    <div
                      onClick={() => {
                        if (!session) {
                          signIn("google", {
                            callbackUrl: "http://localhost:3000/?sendMail=true",
                          });
                        } else {
                          // console.log(session?.user);
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
                <div className='w-full flex justify-center items-center mt-20 pb-20'>
                  <SocialMedia />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
