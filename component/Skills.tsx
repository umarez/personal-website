import { skillsIcon, skillsIconTech } from "../constant/skills";

export const Skills = () => {
  return (
    <>
      <div className='mb-10'>
        <h1 className='underline pl-2 pb-2 text-lg text-center mb-5'>
          Programming language
        </h1>
        <div className='flex flex-wrap gap-x-5 gap-y-5 lg:gap-x-10 justify-center'>
          {skillsIcon.map(({ src, alt }) => {
            return <img key='alt' className="hover:scale-110" src={src} alt={alt} />;
          })}
        </div>
      </div>
      <div>
        <h1 className='underline pl-2 pb-2 text-lg text-center mb-5'>
          Daily Tech Stack
        </h1>
        <div>
          <div className='flex flex-wrap gap-x-10 gap-y-2 justify-center'>
            {skillsIconTech.map(({ src, alt }) => {
              return (
                <img key='alt' className="hover:scale-110 " src={src} alt={alt}  />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
