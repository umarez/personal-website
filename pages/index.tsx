import Typewriter from "typewriter-effect";
import Image from "next/image";
import { project } from "../component/Project";
import { useRef } from "react";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/client";
import { redirect } from "next/dist/next-server/server/api-utils";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const [session, loading] = useSession();

  const router = useRouter();

  const aboutRef = useRef<null | HTMLDivElement>(null);
  const projectRef = useRef<null | HTMLDivElement>(null);
  const connectRef = useRef<null | HTMLDivElement>(null);
  const experienceRef = useRef<null | HTMLDivElement>(null);

  console.log(router.query);

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
          <div className='flex-col translate-y-16 items-center lg:translate-y-40 w-full flex md:flex-row justify-center'>
            <button
              onClick={() => {
                aboutRef.current?.scrollIntoView();
              }}
              className='w-32 h-8 lg:w-48 lg:h-14 bg-button text-[#F2ECEC] shadow-shad mb-5 md:mb-0 md:mr-[5.25rem] hover:bg-buttonHover'
            >
              <h1>About Me</h1>
            </button>
            <button
              onClick={() => {
                projectRef.current?.scrollIntoView();
              }}
              className='w-32 h-8 lg:w-48 lg:h-14 bg-button text-[#F2ECEC] shadow-shad hover:bg-buttonHover'
            >
              Projects
            </button>
            <button
              onClick={() => {
                connectRef.current?.scrollIntoView();
              }}
              className='w-32 h-8 lg:w-48 lg:h-14 bg-button text-[#F2ECEC] shadow-shad mt-5 md:mt-0 md:ml-[5.25rem] hover:bg-buttonHover'
            >
              Contact Me
            </button>
          </div>
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
                <div className='flex pt-5 text'>
                  <span className='bg-white w-1 mx-5 ' />
                  <div className='absolute left-1.5 translate-y-1 md:hidden'>
                    <Image src='/dot.svg' width={28} height={28} />
                  </div>
                  <div className='flex-col pt-0.5'>
                    <h1 className='text-white 2xl:text-xl pb-1'>
                      Staff of Web Development at Betis UI 2021
                    </h1>
                    <h1 className='text-sm 2xl:text-base text-alternate'>
                      Staff of Project Development Division (Bismit), working on
                      various web development project requested from
                      inside/outside of campus
                    </h1>
                    <div className='absolute left-1.5 translate-y-3.5 md:hidden'>
                      <Image src='/dot.svg' width={28} height={28} />
                    </div>
                    <h1 className='text-white 2xl:text-xl pt-3'>
                      Staff of Web Development at Pesta Rakyat Komputer (PERAK)
                      2021
                    </h1>
                    <h1 className='text-sm 2xl:text-base  text-alternate'>
                      Frontend developer. Using React.js as a main framework and
                      axios for fetching backend REST API that build with Django
                    </h1>
                    <div className='absolute left-1.5 translate-y-3.5 md:hidden'>
                      <Image src='/dot.svg' width={28} height={28} />
                    </div>
                    <h1 className='text-white 2xl:text-xl pt-3'>
                      Staff of Web Development at Open House Fasilkom 2022
                    </h1>
                    <h1 className='text-sm 2xl:text-base  text-alternate'>
                      Fullstack Developer. Using Prisma graphql for backend
                      backbones and Next.js as frontend main framework
                    </h1>
                    <div className='absolute left-1.5 translate-y-3 md:hidden'>
                      <Image src='/dot.svg' width={28} height={28} />
                    </div>
                    <h1 className='text-white 2xl:text-xl pt-3'>
                      Person In Charge Betis 2022
                    </h1>
                    <h1 className='text-sm 2xl:text-base text-alternate'>
                      Lead Betis 2022 web development team.
                    </h1>
                  </div>
                </div>
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
              <div className='w-full pt-5 flex justify-center '>
                <div className='w-4/5 pt-10  bg-white shadow-blue pb-10 max-w-xs'>
                  <h1 className='underline pl-2 pb-2 text-lg text-center'>
                    Programming language
                  </h1>
                  <ul className='list-disc'>
                    <div className='flex justify-center'>
                      <div className='mr-10'>
                        <li>Python</li>
                        <li>Java</li>
                      </div>
                      <div>
                        <li>Javascript</li>
                        <li>Typescript</li>
                      </div>
                    </div>
                  </ul>
                  <h1 className='underline pl-2 pb-2 pt-5 text-lg text-center'>
                    Tech Stack
                  </h1>
                  <ul className='list-disc '>
                    <div className='flex justify-center'>
                      <div className='mr-10'>
                        <li>Node</li>
                        <li>Postgresql</li>
                        <li>Next.js</li>
                      </div>
                      <div>
                        <li>React</li>
                        <li>Docker</li>
                        <li>Git</li>
                      </div>
                    </div>
                  </ul>
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
              <h1 className='text-4xl text-[#D9D9DB] text-center text-white pt-10 pb-10'>
                Personal Project
              </h1>
              <div className='flex flex-col md:flex-row items-center justify-center'>
                {project.map((e, i) => {
                  return (
                    <div className='pb-10 mx-5' key={i}>
                      <Image
                        src={e.src}
                        quality={100}
                        width={214}
                        height={214}
                        objectFit='cover'
                        alt={e.alt}
                      />
                      <div className={i === 0 ? "flex justify-center " : ""}>
                        <h1
                          className={
                            i !== 1
                              ? "text-white text-center"
                              : "text-gray-500 text-center"
                          }
                        >
                          {e.desc}
                        </h1>
                        {i === 0 && (
                          <a
                            className='flex items-center pl-2 cursor-pointer'
                            href='https://umarejet.github.io/todo/'
                            rel='noreferrer'
                            target='_blank'
                          >
                            <Image src='/external.svg' width={20} height={20} />
                          </a>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
              <h1 className='text-2xl text-white pt-10 pb-10 text-center'>
                Coming Soon
              </h1>
              <div className='flex flex-col items-center'>
                <Image
                  src='/e-voting.svg'
                  quality={100}
                  width={214}
                  height={214}
                  objectFit='cover'
                  alt='e-voting'
                />
                <h1 className='text-white pt-2'>E-Voting</h1>
              </div>
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
                    <button
                      onClick={() => {
                        if (!session) {
                          signIn("google", {
                            callbackUrl: "http://localhost:3000/?sendMail=true",
                          });
                        } else {
                          console.log(session);
                          router.push("/?sendMail=true", undefined, {
                            shallow: true,
                          });
                        }
                      }}
                      className='w-32 h-8 lg:w-48 lg:h-10 bg-button text-[#F2ECEC] ml-2 shadow-shad md:mb-0 hover:bg-buttonHover'
                    >
                      <h1>Say Hi</h1>
                    </button>
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

const SocialMedia = () => {
  return (
    <>
      <div className='mr-20 cursor-pointer col'>
        <a
          href='https://www.linkedin.com/in/umar-izzuddin/'
          rel='noreferrer'
          target='_blank'
        >
          <Image src='/linkedin.svg' width={37} height={37} />
        </a>
      </div>
      <div className='mr-20 cursor-pointer '>
        <a href='https://github.com/umarez' rel='noreferrer' target='_blank'>
          <Image src='/github.svg' width={37} height={37} />
        </a>
      </div>
      <div className='cursor-pointer'>
        <a
          href='https://www.instagram.com/umar_ez/'
          rel='noreferrer'
          target='_blank'
        >
          <Image src='/instagram.svg' width={48} height={48} />
        </a>
      </div>
    </>
  );
};
