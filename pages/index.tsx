import Typewriter from "typewriter-effect";
import Image from "next/image";

export default function Home() {
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
            <h1 className='text-white text-2xl md:text-5xl lg:text-7xl '>
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
            <button className='w-32 h-8 lg:w-48 lg:h-14 bg-button text-[#F2ECEC] shadow-shad mb-5 md:mb-0 md:mr-[5.25rem] hover:bg-buttonHover'>
              <h1>About Me</h1>
            </button>
            <button className='w-32 h-8 lg:w-48 lg:h-14 bg-button text-[#F2ECEC] shadow-shad hover:bg-buttonHover'>
              Projects
            </button>
            <button className='w-32 h-8 lg:w-48 lg:h-14 bg-button text-[#F2ECEC] shadow-shad mt-5 md:mt-0 md:ml-[5.25rem] hover:bg-buttonHover'>
              Contact Me
            </button>
          </div>
        </div>
      </div>
      <div
        className='w-[100vw] h-[100vh] relative px-24'
        style={{
          background:
            "linear-gradient(180deg, rgba(19, 31, 48, 0.96) 0%, rgba(37, 37, 37, 1) 100%)",
        }}
      >
        <div className='pt-12  text-[#B7B6B6] '>
          <h1 className='w-full text-center text-[#D9D9DB] text-5xl mb-10'>
            About Me
          </h1>
          <div className='w-full flex justify-center '>
            <div className='relative w-[193px] h-[193px] border-md'>
              <Image className='' layout='fill' alt='me' src='/me.svg' />
            </div>
          </div>
          <div className='w-full flex flex-col items-center mt-12 mb-24'>
            <h1 className=' lg:leading-9 lg:text-xl'>
              Hello, I&apos;m Umar Izzuddin! Universitas Indonesia Computer
              Science&apos;s student who passionate about IT Development.
              I&apos;m a self-learner, a hard worker, and an ambitious person.
              I&apos;m also active in campus organizations and several
              committees as a web developer. My interest in technology has
              driven me to be a guy who never stops learning.
            </h1>
          </div>
          <div className='flex text-lg items-center justify-between'>
            <div className='flex items-center'>
              <h1 className='mr-20'>Connect With me : </h1>
              <div className='mr-20 cursor-pointer col'>
                <Image src='/linkedin.svg' width={37} height={37} />
              </div>
              <div className='mr-20 cursor-pointer'>
                <Image src='/github.svg' width={37} height={37} />
              </div>
              <div className='cursor-pointer'>
                <Image src='/instagram.svg' width={48} height={48} />
              </div>
            </div>
            <div>
              <h1>See my experiences</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
