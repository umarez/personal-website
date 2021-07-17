import { useViewportScroll } from "framer-motion";
import { RefObject } from "react";

type refProps = {
  aboutRef: RefObject<HTMLDivElement>;
  projectRef: RefObject<HTMLDivElement>;
  connectRef: RefObject<HTMLDivElement>;
};

export const ButtonsNavigation: React.FC<refProps> = ({
  aboutRef,
  projectRef,
  connectRef,
}) => {
  const { scrollYProgress } = useViewportScroll()
  
  return (
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
  );
};
