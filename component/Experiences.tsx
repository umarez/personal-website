import Image from "next/image";
import { experiences } from "../constant/experiences/experience";

const Experiences = () => {
  return (
    <div className='flex pt-5 text mx-1 xl:max-w-[50%]'>
      <span className='bg-white w-1.5 mx-3 ' />

      <div className='flex-col pt-0.5'>
        {experiences.map((e, i) => {
          return (
            <div key={i} className="pb-5">
              <h1 className='text-white 2xl:text-xl pb-1'>{e.title}</h1>
              <h1 className='text-sm 2xl:text-base text-alternate'>
                {e.description}
              </h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experiences;
