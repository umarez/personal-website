import Image from "next/image";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { project } from "./Project";
import { motion } from "framer-motion";
import { CONTAINER, ITEM } from "@constant/animation/animation";


export const Projects = () => {
  const { ref: ref, inView: projectView } = useInView({
    threshold: 0.5,
  });

  const [vars, setVar] = useState<boolean>(false);
  useEffect(() => {
    if (projectView) {
      setVar(true);
    } else {
      setVar(false);
    }
  }, [projectView]);

  return (
    <div ref={ref}>
      <h1 className='text-4xl text-[#D9D9DB] text-center pt-10 pb-10'>
        Personal Project
      </h1>
      <motion.div
        variants={CONTAINER}
        animate={vars ? "show" : "hidden"}
        className='flex flex-col md:flex-row items-center justify-center'
      >
        {project.map((e, i) => {
          return (
            <motion.div
              variants={ITEM}
              animate={vars ? "show" : "hidden"}
              className='pb-10 mx-5'
              key={i}
            >
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
            </motion.div>
          );
        })}
      </motion.div>

    </div>
  );
};
