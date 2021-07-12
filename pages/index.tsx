import Typewriter from "typewriter-effect";

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
    </>
  );
}
