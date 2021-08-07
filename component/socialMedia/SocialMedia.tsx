import Image from "next/image";
import { motion } from "framer-motion";
import { images, sourceImage } from "./source";

const Media = ({ src, href, width, height }: sourceImage) => {
  return (
    <motion.div whileHover={{ scale: 1.2 }} className=' cursor-pointer col'>
      <a href={href} rel='noreferrer' target='_blank'>
        <Image src={src} width={width} height={height} />
      </a>
    </motion.div>
  );
};

const SocialMedia = () => {
  return (
    <>
      {images.map((e, i) => {
        return (
          <div key={i}  className={i == 2 ? "pt-1 px-1 md:px-3 lg:px-7": "px-3 md:px-5 lg:px-10"}>
            <Media
              src={e.src}
              href={e.href}
              width={e.width}
              height={e.height}
            />
          </div>
        );
      })}
    </>
  );
};

export default SocialMedia;
