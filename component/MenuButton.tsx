export const MenuButton = () => {
  return (
    <div className='flex-col translate-y-16  items-center lg:translate-y-40 w-full flex md:flex-row justify-center'>
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
  );
};
