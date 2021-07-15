import Image from "next/image";
import { project } from "./Project";
import { projectType } from "./Type/ProjectType";

export const Projects = () => {
  return (
    <>
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
    </>
  );
};
