import Image from "next/image";
import { project } from "./projects/Project";

export const PersonalProject = () => {
  return (
    <>
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
            <h1 className={i !== 1 ? "text-white" : "text-gray-500"}>
              {e.desc}
            </h1>
          </div>
        );
      })}
    </>
  );
};
